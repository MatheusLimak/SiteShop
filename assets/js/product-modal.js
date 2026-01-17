// Modal do Produto
let produtoSelecionado = null;
let tamanhoSelecionado = null;
let corSelecionada = null;
let quantidadeSelecionada = 1;

// Abrir modal
function abrirModalProduto(produto) {
    produtoSelecionado = produto;
    tamanhoSelecionado = produto.tamanhos?.[0] || null;
    corSelecionada = produto.cores?.[0] || null;
    quantidadeSelecionada = 1;
    
    const modal = document.getElementById('product-modal');
    const modalImage = document.getElementById('modal-product-image');
    const modalName = document.getElementById('modal-product-name');
    const modalPrice = document.getElementById('modal-product-price');
    const modalTag = document.getElementById('modal-product-tag');
    const sizeOptions = document.getElementById('size-options');
    const colorOptions = document.getElementById('color-options');
    const featuresList = document.getElementById('modal-product-features');
    const quantityInput = document.getElementById('quantity-input');
    
    // Preencher informações básicas
    modalImage.src = produto.imagem;
    modalImage.alt = produto.nome;
    modalName.textContent = produto.nome;
    
    // Preço
    modalPrice.innerHTML = '';
    if (produto.precoAntigo) {
        const oldPrice = document.createElement('span');
        oldPrice.className = 'price-old';
        oldPrice.textContent = formatPrice(produto.precoAntigo);
        modalPrice.appendChild(oldPrice);
    }
    const currentPrice = document.createElement('span');
    currentPrice.className = 'price-current';
    currentPrice.textContent = formatPrice(produto.preco);
    modalPrice.appendChild(currentPrice);
    
    // Tag de promoção
    if (produto.promocao) {
        modalTag.textContent = 'Promoção';
        modalTag.style.display = 'inline-block';
    } else {
        modalTag.style.display = 'none';
    }
    
    // Tamanhos
    sizeOptions.innerHTML = '';
    if (produto.tamanhos && produto.tamanhos.length > 0) {
        produto.tamanhos.forEach(tamanho => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = tamanho;
            if (tamanho === tamanhoSelecionado) {
                btn.classList.add('active');
            }
            btn.onclick = () => selecionarTamanho(tamanho);
            sizeOptions.appendChild(btn);
        });
    } else {
        sizeOptions.innerHTML = '<p class="no-options">N/A</p>';
    }
    
    // Cores
    colorOptions.innerHTML = '';
    if (produto.cores && produto.cores.length > 0) {
        produto.cores.forEach(cor => {
            const btn = document.createElement('button');
            btn.className = 'color-option-btn';
            btn.style.backgroundColor = cor.codigo;
            btn.title = cor.nome;
            if (cor.codigo === corSelecionada?.codigo) {
                btn.classList.add('active');
            }
            btn.onclick = () => selecionarCor(cor);
            colorOptions.appendChild(btn);
        });
    } else {
        colorOptions.innerHTML = '<p class="no-options">N/A</p>';
    }
    
    // Características
    featuresList.innerHTML = '';
    if (produto.caracteristicas && produto.caracteristicas.length > 0) {
        produto.caracteristicas.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            featuresList.appendChild(li);
        });
    } else {
        featuresList.innerHTML = '<li>Informações não disponíveis</li>';
    }
    
    // Quantidade
    quantityInput.value = quantidadeSelecionada;
    
    // Mostrar modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function fecharModalProduto() {
    const modal = document.getElementById('product-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    produtoSelecionado = null;
    tamanhoSelecionado = null;
    corSelecionada = null;
    quantidadeSelecionada = 1;
}

// Selecionar tamanho
function selecionarTamanho(tamanho) {
    tamanhoSelecionado = tamanho;
    document.querySelectorAll('#size-options .option-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === tamanho) {
            btn.classList.add('active');
        }
    });
}

// Selecionar cor
function selecionarCor(cor) {
    corSelecionada = cor;
    document.querySelectorAll('#color-options .color-option-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.style.backgroundColor === cor.codigo) {
            btn.classList.add('active');
        }
    });
}

// Aumentar quantidade
function aumentarQuantidade() {
    if (quantidadeSelecionada < 10) {
        quantidadeSelecionada++;
        document.getElementById('quantity-input').value = quantidadeSelecionada;
    }
}

// Diminuir quantidade
function diminuirQuantidade() {
    if (quantidadeSelecionada > 1) {
        quantidadeSelecionada--;
        document.getElementById('quantity-input').value = quantidadeSelecionada;
    }
}

// Adicionar ao carrinho do modal
function adicionarAoCarrinhoModal() {
    if (!produtoSelecionado) return;
    
    // Criar item do carrinho com opções selecionadas
    const itemCarrinho = {
        ...produtoSelecionado,
        tamanho: tamanhoSelecionado,
        cor: corSelecionada,
        quantidade: quantidadeSelecionada
    };
    
    // Adicionar ao carrinho usando a função existente
    if (typeof adicionarAoCarrinho === 'function') {
        // Se a função espera apenas o produto, vamos adaptar
        for (let i = 0; i < quantidadeSelecionada; i++) {
            adicionarAoCarrinho(itemCarrinho);
        }
    } else {
        // Fallback: adicionar diretamente ao carrinho
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        const itemExistente = carrinho.find(item => 
            item.id === itemCarrinho.id && 
            item.tamanho === itemCarrinho.tamanho && 
            item.cor?.codigo === itemCarrinho.cor?.codigo
        );
        
        if (itemExistente) {
            itemExistente.quantidade += quantidadeSelecionada;
        } else {
            carrinho.push(itemCarrinho);
        }
        
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        
        if (typeof atualizarCarrinho === 'function') {
            atualizarCarrinho();
        }
        if (typeof atualizarContadorCarrinho === 'function') {
            atualizarContadorCarrinho();
        }
    }
    
    // Feedback visual
    const btn = document.getElementById('modal-add-cart-btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span>✓ Adicionado!</span>';
    btn.classList.add('success');
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.classList.remove('success');
        fecharModalProduto();
    }, 1500);
}

// Inicializar eventos do modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('product-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const quantityDecrease = document.getElementById('quantity-decrease');
    const quantityIncrease = document.getElementById('quantity-increase');
    const addCartBtn = document.getElementById('modal-add-cart-btn');
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', fecharModalProduto);
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', fecharModalProduto);
    }
    
    if (quantityDecrease) {
        quantityDecrease.addEventListener('click', diminuirQuantidade);
    }
    
    if (quantityIncrease) {
        quantityIncrease.addEventListener('click', aumentarQuantidade);
    }
    
    if (addCartBtn) {
        addCartBtn.addEventListener('click', adicionarAoCarrinhoModal);
    }
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            fecharModalProduto();
        }
    });
});

// Tornar função global para uso em categoria.js
window.abrirModalProduto = abrirModalProduto;
