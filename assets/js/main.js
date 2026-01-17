// Dados fictícios de produtos (simulando backend)
const produtos = [
    {
        id: 1,
        nome: "Jaqueta Urban Premium",
        preco: 699.90,
        precoAntigo: 899.90,
        imagem: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&h=800&fit=crop",
        categoria: "masculino",
        promocao: true,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Cinza', codigo: '#808080' },
            { nome: 'Navy', codigo: '#001f3f' }
        ],
        caracteristicas: [
            'Tecido premium importado',
            'Forro interno acolchoado',
            'Zíper de alta qualidade',
            'Bolsos laterais funcionais',
            'Corte moderno e confortável'
        ]
    },
    {
        id: 2,
        nome: "Camiseta Signature",
        preco: 249.90,
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
        categoria: "masculino",
        promocao: false,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Branco', codigo: '#FFFFFF' },
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Cinza', codigo: '#808080' }
        ],
        caracteristicas: [
            'Algodão 100% premium',
            'Estampa exclusiva',
            'Corte regular fit',
            'Lavagem à máquina',
            'Durabilidade garantida'
        ]
    },
    {
        id: 3,
        nome: "Calça Urban Fit",
        preco: 449.90,
        precoAntigo: 599.90,
        imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
        categoria: "masculino",
        promocao: true,
        tamanhos: ['38', '40', '42', '44', '46'],
        cores: [
            { nome: 'Azul Escuro', codigo: '#000080' },
            { nome: 'Preto', codigo: '#000000' }
        ],
        caracteristicas: [
            'Tecido stretch premium',
            'Corte slim fit',
            'Elastano para conforto',
            'Bolsos traseiros',
            'Lavagem fácil'
        ]
    },
    {
        id: 4,
        nome: "Blazer Premium",
        preco: 899.90,
        imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
        categoria: "masculino",
        promocao: false,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Navy', codigo: '#001f3f' },
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Cinza', codigo: '#808080' }
        ],
        caracteristicas: [
            'Tecido nobre importado',
            'Forro interno de seda',
            'Corte clássico moderno',
            'Botões premium',
            'Ideal para ocasiões formais'
        ]
    },
    {
        id: 5,
        nome: "Vestido Urban Elegance",
        preco: 549.90,
        precoAntigo: 699.90,
        imagem: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
        categoria: "feminino",
        promocao: true,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Vermelho', codigo: '#FF0000' },
            { nome: 'Azul Royal', codigo: '#4169E1' }
        ],
        caracteristicas: [
            'Tecido fluido premium',
            'Corte evasê elegante',
            'Manga longa',
            'Lavagem delicada',
            'Versátil para diferentes ocasiões'
        ]
    },
    {
        id: 6,
        nome: "Blusa Premium",
        preco: 299.90,
        imagem: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
        categoria: "feminino",
        promocao: false,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Branco', codigo: '#FFFFFF' },
            { nome: 'Rosa', codigo: '#FFC0CB' },
            { nome: 'Bege', codigo: '#F5F5DC' }
        ],
        caracteristicas: [
            'Algodão premium',
            'Corte oversized',
            'Gola alta',
            'Lavagem à máquina',
            'Confortável e estilosa'
        ]
    },
    {
        id: 7,
        nome: "Shorts Urban",
        preco: 199.90,
        precoAntigo: 299.90,
        imagem: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
        categoria: "feminino",
        promocao: true,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Branco', codigo: '#FFFFFF' },
            { nome: 'Jeans', codigo: '#191970' }
        ],
        caracteristicas: [
            'Tecido denim premium',
            'Corte high waist',
            'Elastano para conforto',
            'Bolsos funcionais',
            'Lavagem fácil'
        ]
    },
    {
        id: 8,
        nome: "Parka Premium",
        preco: 1199.90,
        imagem: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&h=800&fit=crop",
        categoria: "masculino",
        promocao: false,
        tamanhos: ['P', 'M', 'G', 'GG'],
        cores: [
            { nome: 'Verde Militar', codigo: '#556B2F' },
            { nome: 'Preto', codigo: '#000000' },
            { nome: 'Cáqui', codigo: '#C3B091' }
        ],
        caracteristicas: [
            'Tecido impermeável',
            'Forro térmico removível',
            'Capuz ajustável',
            'Bolsos múltiplos',
            'Ideal para clima frio'
        ]
    }
];

// Carrinho
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
window.carrinho = carrinho; // Tornar acessível globalmente

// Funções utilitárias
function formatPrice(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

// Renderizar produtos
function renderProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const produtosFiltrados = filter === 'all' 
        ? produtos 
        : filter === 'promocao'
        ? produtos.filter(p => p.promocao)
        : produtos.filter(p => p.categoria === filter);
    
    produtosFiltrados.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.className = 'product-image';
        img.loading = 'lazy';
        img.onerror = function() {
            // Fallback para placeholder se a imagem falhar
            this.src = `https://via.placeholder.com/600x800/1a1a1a/d4af37?text=${encodeURIComponent(produto.nome)}`;
        };
        
        card.innerHTML = `
            <div class="product-info">
                ${produto.promocao ? '<span class="product-tag tag-promocao">Promoção</span>' : ''}
                <h3 class="product-name">${produto.nome}</h3>
                <div class="product-price">
                    ${produto.precoAntigo ? `<span class="price-old">${formatPrice(produto.precoAntigo)}</span>` : ''}
                    <span class="price-current">${formatPrice(produto.preco)}</span>
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); adicionarAoCarrinho(${produto.id})">
                    Adicionar ao Carrinho
                </button>
            </div>
        `;
        card.insertBefore(img, card.firstChild);
        
        // Adicionar clique no card para abrir modal
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart-btn')) return;
            if (typeof abrirModalProduto === 'function') {
                abrirModalProduto(produto);
            }
        });
        
        grid.appendChild(card);
    });
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoOuId) {
    let produto;
    
    // Se receber um objeto completo (do modal), usar diretamente
    if (typeof produtoOuId === 'object' && produtoOuId !== null) {
        produto = produtoOuId;
    } else {
        // Se receber apenas o ID, buscar o produto
        produto = produtos.find(p => p.id === produtoOuId);
    }
    
    if (!produto) return;
    
    // Criar chave única considerando tamanho e cor
    const chaveUnica = `${produto.id}_${produto.tamanho || 'default'}_${produto.cor?.codigo || 'default'}`;
    
    const itemExistente = carrinho.find(item => {
        const itemChave = `${item.id}_${item.tamanho || 'default'}_${item.cor?.codigo || 'default'}`;
        return itemChave === chaveUnica;
    });
    
    if (itemExistente) {
        itemExistente.quantidade += produto.quantidade || 1;
    } else {
        carrinho.push({
            ...produto,
            quantidade: produto.quantidade || 1
        });
    }
    
    salvarCarrinho();
    atualizarCarrinho();
    atualizarContadorCarrinho();
}

// Remover do carrinho
function removerDoCarrinho(idOuChave) {
    // Se for uma chave (id_tamanho_cor), filtra por chave
    // Se for apenas id, filtra por id (compatibilidade)
    if (typeof idOuChave === 'string' && idOuChave.includes('_')) {
        const [id, tamanho, cor] = idOuChave.split('_');
        carrinho = carrinho.filter(item => {
            const itemKey = `${item.id}_${item.tamanho || 'default'}_${item.cor?.codigo || 'default'}`;
            return itemKey !== idOuChave;
        });
    } else {
        // Remover primeiro item com esse ID (comportamento antigo)
        const index = carrinho.findIndex(item => item.id == idOuChave);
        if (index > -1) {
            carrinho.splice(index, 1);
        }
    }
    
    salvarCarrinho();
    atualizarCarrinho();
    atualizarContadorCarrinho();
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.carrinho = carrinho; // Atualizar referência global
}

// Atualizar visual do carrinho
function atualizarCarrinho() {
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return; // Se não existir o elemento, retorna
    
    cartItems.innerHTML = '';
    
    if (carrinho.length === 0) {
        cartItems.innerHTML = '<div style="text-align: center; padding: 3rem 1.5rem; color: var(--color-gray);"><p style="margin-bottom: 0.5rem; font-size: 1.1rem;">Seu carrinho está vazio</p><p style="font-size: 0.9rem;">Adicione produtos para começar suas compras</p></div>';
        const cartTotalEl = document.getElementById('cart-total');
        if (cartTotalEl) cartTotalEl.textContent = formatPrice(0);
        return;
    }
    
    let total = 0;
    
    carrinho.forEach((item, index) => {
        const quantidade = item.quantidade || 1;
        const itemTotal = item.preco * quantidade;
        total += itemTotal;
        
        // Criar chave única para o item (incluindo tamanho e cor se existir)
        const itemKey = `${item.id}_${item.tamanho || 'default'}_${item.cor?.codigo || 'default'}`;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.setAttribute('data-item-key', itemKey);
        
        const tamanhoCorInfo = [];
        if (item.tamanho) tamanhoCorInfo.push(`Tam: ${item.tamanho}`);
        if (item.cor) tamanhoCorInfo.push(`Cor: ${item.cor.nome}`);
        const extraInfo = tamanhoCorInfo.length > 0 ? `<div style="font-size: 0.8rem; color: var(--color-gray); margin-top: 0.25rem;">${tamanhoCorInfo.join(' • ')}</div>` : '';
        
        cartItem.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="cart-item-image" onerror="this.src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=600&fit=crop'">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nome}</div>
                ${extraInfo}
                <div class="cart-item-price">${formatPrice(item.preco)} ${quantidade > 1 ? `x ${quantidade}` : ''}</div>
                <div class="cart-item-subtotal">${formatPrice(itemTotal)}</div>
                <button class="remove-item" onclick="removerDoCarrinho('${itemKey}')" aria-label="Remover item">Remover</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    const cartTotalEl = document.getElementById('cart-total');
    if (cartTotalEl) cartTotalEl.textContent = formatPrice(total);
}

// Atualizar contador do carrinho
function atualizarContadorCarrinho() {
    const count = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    const cartCount = document.getElementById('cart-count');
    
    if (count > 0) {
        cartCount.textContent = count;
        cartCount.classList.add('active');
    } else {
        cartCount.classList.remove('active');
    }
}

// Efeitos visuais do emblema - Simplificado
function initEmblemaEffects() {
    // Efeitos automáticos já estão no CSS
    // Esta função pode ser expandida se necessário
}

// Filtros
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });
}

// Carrinho sidebar
function initCartSidebar() {
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCart = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');

    if (!cartBtn || !cartSidebar || !closeCart || !cartOverlay) {
        console.warn('Elementos do carrinho não encontrados');
        return;
    }

    function openCart() {
        // Atualizar carrinho antes de abrir
        atualizarCarrinho();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevenir scroll do body
    }

    function closeCartFunc() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    }

    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        openCart();
    });
    
    closeCart.addEventListener('click', closeCartFunc);
    cartOverlay.addEventListener('click', closeCartFunc);
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            closeCartFunc();
        }
    });
}

// Smooth scroll para links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll reveal animations - Suave e limpo
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observar elementos com fade-in-up
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar carrinho sempre
    atualizarCarrinho();
    atualizarContadorCarrinho();
    initCartSidebar();
    
    // Só renderiza produtos se estiver em página de categoria
    const isCategoryPage = window.location.pathname.includes('categorias/');
    if (!isCategoryPage) {
        // Página inicial - não renderiza produtos
        initEmblemaEffects();
        initSmoothScroll();
        initScrollReveal();
        initHeaderScroll();
    } else {
        // Página de categoria - categoria.js cuida disso
        initSmoothScroll();
    }
});
