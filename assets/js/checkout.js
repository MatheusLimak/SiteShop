// Sistema de Checkout Completo

let checkoutState = {
    currentStep: 1,
    selectedAddress: null,
    selectedShipping: null,
    selectedPayment: null,
    addresses: [],
    shippingOptions: []
};

// Endereços padrão de exemplo
const defaultAddresses = [
    {
        id: 1,
        name: 'Matheus Santos',
        phone: '(11) 99999-9999',
        cep: '01310-100',
        street: 'Av. Paulista',
        number: '1000',
        complement: 'Apto 101',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP',
        type: 'Casa'
    },
    {
        id: 2,
        name: 'Matheus Santos',
        phone: '(11) 99999-9999',
        cep: '04547-130',
        street: 'Rua do Rócio',
        number: '200',
        complement: '',
        neighborhood: 'Vila Olímpia',
        city: 'São Paulo',
        state: 'SP',
        type: 'Trabalho'
    }
];

// Opções de frete simuladas
const shippingOptionsData = [
    {
        id: 'pac',
        name: 'PAC',
        description: 'Entrega em 7 a 15 dias úteis',
        price: 15.90,
        days: '7-15'
    },
    {
        id: 'sedex',
        name: 'SEDEX',
        description: 'Entrega em 3 a 5 dias úteis',
        price: 25.90,
        days: '3-5'
    },
    {
        id: 'express',
        name: 'Expresso',
        description: 'Entrega em 1 a 2 dias úteis',
        price: 39.90,
        days: '1-2'
    }
];

// Inicializar checkout
function initCheckout() {
    // Carregar endereços do localStorage ou usar padrões
    const savedAddresses = localStorage.getItem('checkoutAddresses');
    checkoutState.addresses = savedAddresses ? JSON.parse(savedAddresses) : defaultAddresses;
    
    // Adicionar event listeners para todos os botões de checkout
    // Usar event delegation para funcionar com elementos renderizados dinamicamente
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('checkout-btn') || e.target.closest('.checkout-btn')) {
            e.preventDefault();
            e.stopPropagation();
            openCheckout(e);
        }
    });
    
    // Também adicionar diretamente se já existir
    const checkoutBtns = document.querySelectorAll('.checkout-btn');
    checkoutBtns.forEach(btn => {
        btn.addEventListener('click', openCheckout);
    });
    
    const checkoutClose = document.getElementById('checkout-close');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    if (checkoutClose) checkoutClose.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', closeCheckout);
    
    // Navegação entre etapas
    document.addEventListener('click', (e) => {
        const target = e.target;
        if (target.id === 'checkout-next' || target.closest('#checkout-next')) {
            e.preventDefault();
            e.stopPropagation();
            const step = checkoutState.currentStep;
            if (step === 4) {
                finalizeOrder();
            } else {
                nextStep();
            }
        } else if (target.id === 'checkout-prev' || target.closest('#checkout-prev')) {
            e.preventDefault();
            e.stopPropagation();
            prevStep();
        }
    });
    
    // Adicionar endereço
    const addAddressBtn = document.getElementById('add-address-btn');
    const cancelAddressBtn = document.getElementById('cancel-address-btn');
    const newAddressForm = document.getElementById('new-address-form');
    
    if (addAddressBtn) {
        addAddressBtn.addEventListener('click', () => {
            document.getElementById('address-form').classList.add('active');
            addAddressBtn.style.display = 'none';
        });
    }
    
    if (cancelAddressBtn) {
        cancelAddressBtn.addEventListener('click', () => {
            document.getElementById('address-form').classList.remove('active');
            document.getElementById('add-address-btn').style.display = 'flex';
            document.getElementById('new-address-form').reset();
        });
    }
    
    if (newAddressForm) {
        newAddressForm.addEventListener('submit', saveNewAddress);
    }
    
    // Formatação de CEP
    const cepInput = document.getElementById('address-cep');
    if (cepInput) {
        cepInput.addEventListener('input', formatCEP);
        cepInput.addEventListener('blur', fetchCEPData);
    }
    
    // Seleção de métodos de pagamento
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(m => m.classList.remove('selected'));
            method.classList.add('selected');
            checkoutState.selectedPayment = method.dataset.method;
            updateCheckoutButton();
        });
    });
}

// Abrir modal de checkout
function openCheckout(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    // Verificar se carrinho existe (definido em main.js)
    const carrinhoAtual = window.carrinho || (typeof carrinho !== 'undefined' ? carrinho : []);
    
    if (!carrinhoAtual || carrinhoAtual.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const checkoutModal = document.getElementById('checkout-modal');
    if (!checkoutModal) {
        console.error('Modal de checkout não encontrado');
        alert('Erro: Modal de checkout não encontrado. Verifique se o HTML está completo.');
        return;
    }
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Resetar estado
    checkoutState.currentStep = 1;
    checkoutState.selectedAddress = null;
    checkoutState.selectedShipping = null;
    checkoutState.selectedPayment = null;
    
    renderCheckoutStep(1);
    loadAddresses();
}

// Fechar modal de checkout
function closeCheckout(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    const checkoutModal = document.getElementById('checkout-modal');
    if (checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Renderizar etapa atual
function renderCheckoutStep(step) {
    // Atualizar steps visuais
    document.querySelectorAll('.checkout-step').forEach((stepEl, index) => {
        stepEl.classList.remove('active', 'completed');
        if (index + 1 < step) {
            stepEl.classList.add('completed');
        } else if (index + 1 === step) {
            stepEl.classList.add('active');
        }
    });
    
    // Mostrar seção correspondente
    document.querySelectorAll('.checkout-section').forEach((section, index) => {
        section.classList.remove('active');
        if (index + 1 === step) {
            section.classList.add('active');
        }
    });
    
    // Validar se pode continuar
    let canContinue = false;
    switch(step) {
        case 1:
            canContinue = !!checkoutState.selectedAddress;
            break;
        case 2:
            canContinue = !!checkoutState.selectedShipping;
            break;
        case 3:
            canContinue = !!checkoutState.selectedPayment;
            break;
        case 4:
            canContinue = true;
            break;
    }
    
    // Atualizar botões de navegação
    const prevBtn = document.getElementById('checkout-prev');
    const nextBtn = document.getElementById('checkout-next');
    
    if (prevBtn) {
        prevBtn.style.display = step > 1 ? 'block' : 'none';
    }
    
    if (nextBtn) {
        if (step === 4) {
            nextBtn.textContent = 'Finalizar Pedido';
        } else {
            nextBtn.textContent = 'Continuar';
        }
        nextBtn.disabled = !canContinue;
        if (!canContinue) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.cursor = 'not-allowed';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.cursor = 'pointer';
        }
    }
    
    // Renderizar conteúdo específico
    switch(step) {
        case 1:
            loadAddresses();
            break;
        case 2:
            loadShippingOptions();
            break;
        case 3:
            loadPaymentMethods();
            break;
        case 4:
            loadOrderSummary();
            break;
    }
    
    updateCheckoutButton();
}

// Próxima etapa
function nextStep() {
    if (!validateCurrentStep()) {
        return false;
    }
    
    if (checkoutState.currentStep < 4) {
        checkoutState.currentStep++;
        renderCheckoutStep(checkoutState.currentStep);
        return true;
    }
    return false;
}

// Etapa anterior
function prevStep() {
    if (checkoutState.currentStep > 1) {
        checkoutState.currentStep--;
        renderCheckoutStep(checkoutState.currentStep);
    }
}

// Validar etapa atual
function validateCurrentStep() {
    switch(checkoutState.currentStep) {
        case 1:
            if (!checkoutState.selectedAddress) {
                alert('Por favor, selecione um endereço de entrega');
                return false;
            }
            return true;
        case 2:
            if (!checkoutState.selectedShipping) {
                alert('Por favor, selecione um método de envio');
                return false;
            }
            return true;
        case 3:
            if (!checkoutState.selectedPayment) {
                alert('Por favor, selecione uma forma de pagamento');
                return false;
            }
            return true;
        default:
            return true;
    }
}

// Carregar endereços
function loadAddresses() {
    const addressList = document.getElementById('address-list');
    if (!addressList) return;
    
    addressList.innerHTML = '';
    
    checkoutState.addresses.forEach(address => {
        const addressCard = document.createElement('div');
        addressCard.className = 'address-card';
        if (checkoutState.selectedAddress?.id === address.id) {
            addressCard.classList.add('selected');
        }
        
        addressCard.innerHTML = `
            <div class="address-card-header">
                <span class="address-card-name">${address.name}</span>
                <span class="address-card-type">${address.type}</span>
            </div>
            <div class="address-card-info">
                ${address.street}, ${address.number}${address.complement ? ' - ' + address.complement : ''}<br>
                ${address.neighborhood} - ${address.city}, ${address.state}<br>
                CEP: ${address.cep} | ${address.phone}
            </div>
        `;
        
        addressCard.addEventListener('click', () => {
            document.querySelectorAll('.address-card').forEach(card => {
                card.classList.remove('selected');
            });
            addressCard.classList.add('selected');
            checkoutState.selectedAddress = address;
            updateCheckoutButton();
        });
        
        addressList.appendChild(addressCard);
    });
}

// Carregar opções de frete
function loadShippingOptions() {
    const shippingOptions = document.getElementById('shipping-options');
    if (!shippingOptions) return;
    
    // Verificar se carrinho existe
    const carrinhoAtual = window.carrinho || (typeof carrinho !== 'undefined' ? carrinho : []);
    
    // Calcular frete baseado no total do pedido
    const total = carrinhoAtual.reduce((sum, item) => sum + (item.preco * (item.quantidade || 1)), 0);
    const freteGratis = total >= 299;
    
    shippingOptions.innerHTML = '';
    
    shippingOptionsData.forEach(option => {
        const shippingOption = document.createElement('div');
        shippingOption.className = 'shipping-option';
        if (checkoutState.selectedShipping?.id === option.id) {
            shippingOption.classList.add('selected');
        }
        
        const price = freteGratis ? 0 : option.price;
        const priceText = freteGratis ? 'Grátis' : formatPrice(price);
        
        shippingOption.innerHTML = `
            <div class="shipping-option-info">
                <div class="shipping-option-radio"></div>
                <div class="shipping-option-details">
                    <h4>${option.name}</h4>
                    <p>${option.description}</p>
                </div>
            </div>
            <div class="shipping-option-price">${priceText}</div>
        `;
        
        shippingOption.addEventListener('click', () => {
            document.querySelectorAll('.shipping-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            shippingOption.classList.add('selected');
            checkoutState.selectedShipping = { ...option, price };
            updateCheckoutButton();
        });
        
        shippingOptions.appendChild(shippingOption);
    });
}

// Carregar métodos de pagamento
function loadPaymentMethods() {
    // Métodos já estão no HTML, apenas resetar seleção
    document.querySelectorAll('.payment-method').forEach(method => {
        method.classList.remove('selected');
        if (method.dataset.method === checkoutState.selectedPayment) {
            method.classList.add('selected');
        }
    });
}

// Função para formatar preço
function formatPrice(value) {
    if (typeof value !== 'number') return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Carregar resumo do pedido
function loadOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    if (!orderSummary) return;
    
    // Verificar se carrinho existe
    const carrinhoAtual = window.carrinho || (typeof carrinho !== 'undefined' ? carrinho : []);
    
    if (!carrinhoAtual || carrinhoAtual.length === 0) {
        orderSummary.innerHTML = '<p style="text-align: center; color: var(--color-gray); padding: var(--spacing-lg);">Carrinho vazio</p>';
        return;
    }
    
    // Renderizar itens do carrinho
    let itemsHTML = '<div style="margin-bottom: var(--spacing-lg);"><h4 style="font-size: 1rem; margin-bottom: var(--spacing-md); color: var(--color-black);">Itens do Pedido:</h4>';
    carrinhoAtual.forEach((item, index) => {
        const quantidade = item.quantidade || 1;
        const itemTotal = item.preco * quantidade;
        const tamanhoCorInfo = [];
        if (item.tamanho) tamanhoCorInfo.push(`Tam: ${item.tamanho}`);
        if (item.cor) tamanhoCorInfo.push(`Cor: ${item.cor.nome}`);
        const extraInfo = tamanhoCorInfo.length > 0 ? ` <span style="font-size: 0.85rem; color: var(--color-gray);">(${tamanhoCorInfo.join(', ')})</span>` : '';
        
        itemsHTML += `
            <div style="display: flex; justify-content: space-between; align-items: start; padding: var(--spacing-sm) 0; border-bottom: 1px solid rgba(0,0,0,0.05);">
                <div style="flex: 1;">
                    <p style="margin: 0; font-weight: 500; color: var(--color-black);">${item.nome}${extraInfo}</p>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem; color: var(--color-gray);">${formatPrice(item.preco)} x ${quantidade}</p>
                </div>
                <div style="font-weight: 600; color: var(--color-black);">${formatPrice(itemTotal)}</div>
            </div>
        `;
    });
    itemsHTML += '</div>';
    
    const subtotal = carrinhoAtual.reduce((sum, item) => sum + (item.preco * (item.quantidade || 1)), 0);
    const shipping = checkoutState.selectedShipping?.price || 0;
    const total = subtotal + shipping;
    
    // Aplicar desconto baseado no método de pagamento
    let discount = 0;
    if (checkoutState.selectedPayment === 'pix') {
        discount = subtotal * 0.10;
    } else if (checkoutState.selectedPayment === 'debit') {
        discount = subtotal * 0.05;
    }
    
    const finalTotal = total - discount;
    
    orderSummary.innerHTML = itemsHTML + `
        <div style="margin-top: var(--spacing-lg); padding-top: var(--spacing-md); border-top: 2px solid rgba(0,0,0,0.1);">
            <div class="summary-row">
                <span>Subtotal</span>
                <span>${formatPrice(subtotal)}</span>
            </div>
            ${discount > 0 ? `
            <div class="summary-row" style="color: #ff3b30;">
                <span>Desconto (${checkoutState.selectedPayment === 'pix' ? 'PIX' : 'Débito'})</span>
                <span>-${formatPrice(discount)}</span>
            </div>
            ` : ''}
            <div class="summary-row">
                <span>Frete (${checkoutState.selectedShipping?.name || 'Não selecionado'})</span>
                <span>${shipping === 0 ? 'Grátis' : formatPrice(shipping)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>${formatPrice(finalTotal)}</span>
            </div>
        </div>
        <div style="margin-top: var(--spacing-lg); padding-top: var(--spacing-md); border-top: 1px solid rgba(0,0,0,0.1);">
            <p style="font-size: 0.9rem; color: var(--color-gray-dark); margin-bottom: var(--spacing-sm);"><strong>Endereço de entrega:</strong></p>
            <p style="font-size: 0.85rem; color: var(--color-gray-dark); margin-bottom: var(--spacing-md);">
                ${checkoutState.selectedAddress?.name || 'Não selecionado'}<br>
                ${checkoutState.selectedAddress?.street || ''}, ${checkoutState.selectedAddress?.number || ''}<br>
                ${checkoutState.selectedAddress?.neighborhood || ''} - ${checkoutState.selectedAddress?.city || ''}, ${checkoutState.selectedAddress?.state || ''}
            </p>
            <p style="font-size: 0.9rem; color: var(--color-gray-dark); margin-bottom: var(--spacing-sm);"><strong>Forma de pagamento:</strong> ${getPaymentMethodName(checkoutState.selectedPayment) || 'Não selecionado'}</p>
        </div>
    `;
}

// Obter nome do método de pagamento
function getPaymentMethodName(method) {
    const names = {
        'credit': 'Cartão de Crédito',
        'debit': 'Cartão de Débito',
        'pix': 'PIX',
        'boleto': 'Boleto'
    };
    return names[method] || '';
}

// Atualizar botão de checkout
function updateCheckoutButton(step = null) {
    const nextBtn = document.getElementById('checkout-next');
    if (!nextBtn) return;
    
    const currentStep = step || checkoutState.currentStep;
    let canContinue = false;
    
    switch(currentStep) {
        case 1:
            canContinue = !!checkoutState.selectedAddress;
            break;
        case 2:
            canContinue = !!checkoutState.selectedShipping;
            break;
        case 3:
            canContinue = !!checkoutState.selectedPayment;
            break;
        case 4:
            canContinue = true;
            break;
    }
    
    nextBtn.disabled = !canContinue;
    if (!canContinue) {
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// Salvar novo endereço
function saveNewAddress(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newAddress = {
        id: Date.now(),
        name: formData.get('name'),
        phone: formData.get('phone'),
        cep: formData.get('cep'),
        street: formData.get('street'),
        number: formData.get('number'),
        complement: formData.get('complement'),
        neighborhood: formData.get('neighborhood'),
        city: formData.get('city'),
        state: formData.get('state'),
        type: 'Casa'
    };
    
    checkoutState.addresses.push(newAddress);
    localStorage.setItem('checkoutAddresses', JSON.stringify(checkoutState.addresses));
    
    document.getElementById('address-form').classList.remove('active');
    document.getElementById('add-address-btn').style.display = 'flex';
    e.target.reset();
    
    checkoutState.selectedAddress = newAddress;
    loadAddresses();
    updateCheckoutButton();
}

// Formatar CEP
function formatCEP(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }
    e.target.value = value;
}

// Buscar dados do CEP (simulado)
function fetchCEPData(e) {
    const cep = e.target.value.replace(/\D/g, '');
    if (cep.length === 8) {
        // Simulação - em produção, fazer requisição para API de CEP
        setTimeout(() => {
            document.getElementById('address-street').value = 'Rua Exemplo';
            document.getElementById('address-neighborhood').value = 'Centro';
            document.getElementById('address-city').value = 'São Paulo';
            document.getElementById('address-state').value = 'SP';
        }, 500);
    }
}

// Finalizar pedido
function finalizeOrder() {
    if (!validateCurrentStep()) {
        return;
    }
    
    // Verificar se carrinho existe
    const carrinhoAtual = window.carrinho || (typeof carrinho !== 'undefined' ? carrinho : []);
    
    // Simular processamento
    const subtotal = carrinhoAtual.reduce((sum, item) => sum + (item.preco * (item.quantidade || 1)), 0);
    const shipping = checkoutState.selectedShipping?.price || 0;
    const finalTotal = subtotal + shipping;
    
    // Aplicar desconto
    let discount = 0;
    if (checkoutState.selectedPayment === 'pix') {
        discount = subtotal * 0.10;
    } else if (checkoutState.selectedPayment === 'debit') {
        discount = subtotal * 0.05;
    }
    const finalPrice = finalTotal - discount;
    
    alert(`Pedido realizado com sucesso!\n\nSubtotal: ${formatPrice(subtotal)}\nFrete: ${formatPrice(shipping)}\nDesconto: ${formatPrice(discount)}\nTotal: ${formatPrice(finalPrice)}\n\nEm produção, aqui seria feita a integração com o gateway de pagamento.`);
    
    // Limpar carrinho
    if (window.carrinho !== undefined) {
        window.carrinho = [];
        localStorage.setItem('carrinho', JSON.stringify([]));
        if (typeof atualizarCarrinho === 'function') atualizarCarrinho();
        if (typeof atualizarContadorCarrinho === 'function') atualizarContadorCarrinho();
    }
    
    closeCheckout();
    
    closeCheckout();
    
    // Resetar estado
    checkoutState = {
        currentStep: 1,
        selectedAddress: null,
        selectedShipping: null,
        selectedPayment: null,
        addresses: checkoutState.addresses,
        shippingOptions: []
    };
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initCheckout();
});
