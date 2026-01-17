// Dados de produtos por categoria
const produtosPorCategoria = {
    bones: [
        {
            id: 1,
            nome: "Boné Tommy Hilfiger Classic",
            preco: 299.90,
            precoAntigo: 399.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "tommy",
            promocao: true,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Navy", codigo: "#1a1a2e" },
                { nome: "Branco", codigo: "#ffffff" }
            ],
            caracteristicas: [
                "Material: 100% Algodão",
                "Ajuste regulável",
                "Bordas costuradas",
                "Logo bordado",
                "Origem: Importado"
            ]
        },
        {
            id: 2,
            nome: "Boné Lacoste Sport",
            preco: 349.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "lacoste",
            promocao: false,
            tamanhos: ["P", "M", "G"],
            cores: [
                { nome: "Verde", codigo: "#2d5016" },
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Preto", codigo: "#000000" }
            ],
            caracteristicas: [
                "Material: Algodão Premium",
                "Ajuste snapback",
                "Logo bordado em relevo",
                "Viseira curva",
                "Origem: Importado"
            ]
        },
        {
            id: 3,
            nome: "Boné Oakley Performance",
            preco: 279.90,
            precoAntigo: 359.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "oakley",
            promocao: true,
            tamanhos: ["P", "M", "G"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Cinza", codigo: "#808080" }
            ],
            caracteristicas: [
                "Material: Poliéster Premium",
                "Ajuste ajustável",
                "Logo bordado",
                "Viseira reta",
                "Origem: Importado"
            ]
        },
        {
            id: 4,
            nome: "Boné Tommy Hilfiger Premium",
            preco: 379.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "tommy",
            promocao: false,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Navy", codigo: "#001f3f" },
                { nome: "Branco", codigo: "#ffffff" }
            ],
            caracteristicas: [
                "Material: Algodão Premium",
                "Ajuste snapback",
                "Logo bordado em relevo",
                "Viseira curva",
                "Origem: Importado"
            ]
        },
        {
            id: 5,
            nome: "Boné Lacoste Heritage",
            preco: 329.90,
            precoAntigo: 429.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "lacoste",
            promocao: true,
            tamanhos: ["P", "M", "G"],
            cores: [
                { nome: "Verde", codigo: "#2d5016" },
                { nome: "Branco", codigo: "#ffffff" }
            ],
            caracteristicas: [
                "Material: Algodão Premium",
                "Ajuste regulável",
                "Logo bordado",
                "Viseira curva",
                "Origem: Importado"
            ]
        },
        {
            id: 6,
            nome: "Boné Oakley Urban",
            preco: 259.90,
            imagem: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=800&fit=crop",
            marca: "oakley",
            promocao: false,
            tamanhos: ["P", "M", "G"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Cinza", codigo: "#808080" }
            ],
            caracteristicas: [
                "Material: Poliéster Premium",
                "Ajuste ajustável",
                "Logo bordado",
                "Viseira reta",
                "Origem: Importado"
            ]
        }
    ],
    tenis: [
        {
            id: 7,
            nome: "Tênis Nike Air Max",
            preco: 899.90,
            precoAntigo: 1199.90,
            imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
            marca: "nike",
            promocao: true,
            tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
            cores: [
                { nome: "Preto/Branco", codigo: "#000000" },
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Cinza", codigo: "#808080" }
            ],
            caracteristicas: [
                "Tecnologia Air Max",
                "Sola de borracha",
                "Entressola em espuma",
                "Cabedal em mesh",
                "Origem: Importado"
            ]
        },
        {
            id: 8,
            nome: "Tênis Adidas Originals",
            preco: 799.90,
            imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop",
            marca: "adidas",
            promocao: false,
            tamanhos: ["38", "39", "40", "41", "42", "43", "44"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Preto", codigo: "#000000" },
                { nome: "Azul", codigo: "#2563eb" }
            ],
            caracteristicas: [
                "Design clássico",
                "Sola de borracha",
                "Cabedal em couro sintético",
                "Conforto premium",
                "Origem: Importado"
            ]
        }
    ],
    calcas: [
        {
            id: 9,
            nome: "Calça Hugo Boss Slim Fit",
            preco: 1299.90,
            precoAntigo: 1699.90,
            imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
            marca: "hugo",
            promocao: true,
            tamanhos: ["40", "42", "44", "46", "48", "50"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Navy", codigo: "#1a1a2e" },
                { nome: "Cinza", codigo: "#808080" }
            ],
            caracteristicas: [
                "Material: 98% Algodão, 2% Elastano",
                "Corte Slim Fit",
                "Zíper e botões metálicos",
                "Bolsos frontais e traseiros",
                "Origem: Importado"
            ]
        },
        {
            id: 10,
            nome: "Calça Armani Jeans",
            preco: 1499.90,
            imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
            marca: "armani",
            promocao: false,
            tamanhos: ["40", "42", "44", "46", "48"],
            cores: [
                { nome: "Azul Escuro", codigo: "#1e3a8a" },
                { nome: "Preto", codigo: "#000000" }
            ],
            caracteristicas: [
                "Material: 100% Algodão",
                "Corte Regular Fit",
                "Zíper e botões metálicos",
                "Bolsos frontais e traseiros",
                "Origem: Importado"
            ]
        },
        {
            id: 21,
            nome: "Calça Tommy Hilfiger Classic",
            preco: 1199.90,
            precoAntigo: 1499.90,
            imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
            marca: "tommy",
            promocao: true,
            tamanhos: ["40", "42", "44", "46", "48", "50"],
            cores: [
                { nome: "Navy", codigo: "#1a1a2e" },
                { nome: "Bege", codigo: "#d4a574" },
                { nome: "Preto", codigo: "#000000" }
            ],
            caracteristicas: [
                "Material: 98% Algodão, 2% Elastano",
                "Corte Classic Fit",
                "Zíper e botões metálicos",
                "Bolsos frontais e traseiros",
                "Origem: Importado"
            ]
        },
        {
            id: 22,
            nome: "Calça Hugo Boss Premium",
            preco: 1399.90,
            imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=800&fit=crop",
            marca: "hugo",
            promocao: false,
            tamanhos: ["40", "42", "44", "46", "48"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Cinza Escuro", codigo: "#4b5563" }
            ],
            caracteristicas: [
                "Material: 98% Algodão, 2% Elastano",
                "Corte Slim Fit Premium",
                "Zíper e botões metálicos",
                "Bolsos frontais e traseiros",
                "Origem: Importado"
            ]
        }
    ],
    camisasPolos: [
        {
            id: 11,
            nome: "Polo Lacoste Classic",
            preco: 599.90,
            precoAntigo: 799.90,
            imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
            marca: "lacoste",
            promocao: true,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Verde", codigo: "#2d5016" },
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Navy", codigo: "#1a1a2e" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Piqué",
                "Gola polo clássica",
                "Botões frontais",
                "Logo bordado",
                "Origem: Importado"
            ]
        },
        {
            id: 12,
            nome: "Polo Tommy Hilfiger",
            preco: 549.90,
            imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
            marca: "tommy",
            promocao: false,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Navy", codigo: "#1a1a2e" },
                { nome: "Vermelho", codigo: "#dc2626" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Piqué",
                "Gola polo clássica",
                "Botões frontais",
                "Logo bordado",
                "Origem: Importado"
            ]
        },
        {
            id: 23,
            nome: "Polo Hugo Boss Elegance",
            preco: 699.90,
            precoAntigo: 899.90,
            imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
            marca: "hugo",
            promocao: true,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Navy", codigo: "#1a1a2e" },
                { nome: "Branco", codigo: "#ffffff" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Piqué Premium",
                "Gola polo elegante",
                "Botões frontais",
                "Logo bordado em relevo",
                "Origem: Importado"
            ]
        },
        {
            id: 24,
            nome: "Polo Lacoste Sport",
            preco: 649.90,
            imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
            marca: "lacoste",
            promocao: false,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Verde", codigo: "#2d5016" },
                { nome: "Branco", codigo: "#ffffff" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Piqué",
                "Gola polo esportiva",
                "Botões frontais",
                "Logo bordado",
                "Origem: Importado"
            ]
        }
    ],
    camisas: [
        {
            id: 13,
            nome: "Camisa Armani Business",
            preco: 1299.90,
            precoAntigo: 1599.90,
            imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
            marca: "armani",
            promocao: true,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Azul Claro", codigo: "#93c5fd" },
                { nome: "Rosa", codigo: "#f9a8d4" }
            ],
            caracteristicas: [
                "Material: 100% Algodão",
                "Gola clássica",
                "Mangas longas",
                "Botões frontais",
                "Origem: Importado"
            ]
        },
        {
            id: 14,
            nome: "Camisa Hugo Boss Premium",
            preco: 1199.90,
            imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
            marca: "hugo",
            promocao: false,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Azul Claro", codigo: "#93c5fd" },
                { nome: "Rosa", codigo: "#f9a8d4" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Premium",
                "Gola clássica",
                "Mangas longas",
                "Botões frontais",
                "Origem: Importado"
            ]
        },
        {
            id: 25,
            nome: "Camisa Lacoste Classic",
            preco: 1099.90,
            precoAntigo: 1399.90,
            imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
            marca: "lacoste",
            promocao: true,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Azul Claro", codigo: "#93c5fd" },
                { nome: "Verde", codigo: "#2d5016" }
            ],
            caracteristicas: [
                "Material: 100% Algodão",
                "Gola clássica",
                "Mangas longas",
                "Botões frontais",
                "Origem: Importado"
            ]
        },
        {
            id: 26,
            nome: "Camisa Armani Elegance",
            preco: 1399.90,
            imagem: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
            marca: "armani",
            promocao: false,
            tamanhos: ["P", "M", "G", "GG"],
            cores: [
                { nome: "Branco", codigo: "#ffffff" },
                { nome: "Azul Claro", codigo: "#93c5fd" },
                { nome: "Rosa", codigo: "#f9a8d4" }
            ],
            caracteristicas: [
                "Material: 100% Algodão Premium",
                "Gola clássica elegante",
                "Mangas longas",
                "Botões frontais",
                "Origem: Importado"
            ]
        }
    ],
    oculos: [
        {
            id: 15,
            nome: "Óculos Oakley Sport",
            preco: 899.90,
            precoAntigo: 1199.90,
            imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
            marca: "oakley",
            promocao: true,
            tamanhos: ["Único"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Cinza", codigo: "#808080" },
                { nome: "Azul", codigo: "#2563eb" }
            ],
            caracteristicas: [
                "Lentes polarizadas",
                "Proteção UV 100%",
                "Armação em acetato",
                "Estojo e pano de limpeza inclusos",
                "Origem: Importado"
            ]
        },
        {
            id: 16,
            nome: "Óculos Armani Elegance",
            preco: 1299.90,
            imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
            marca: "armani",
            promocao: false,
            tamanhos: ["Único"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Dourado", codigo: "#d4af37" },
                { nome: "Prata", codigo: "#c0c0c0" }
            ],
            caracteristicas: [
                "Lentes de alta qualidade",
                "Proteção UV 100%",
                "Armação em acetato premium",
                "Estojo e pano de limpeza inclusos",
                "Origem: Importado"
            ]
        },
        {
            id: 27,
            nome: "Óculos Ray-Ban Aviator",
            preco: 799.90,
            precoAntigo: 999.90,
            imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
            marca: "rayban",
            promocao: true,
            tamanhos: ["Único"],
            cores: [
                { nome: "Dourado", codigo: "#d4af37" },
                { nome: "Prata", codigo: "#c0c0c0" },
                { nome: "Preto", codigo: "#000000" }
            ],
            caracteristicas: [
                "Lentes Ray-Ban originais",
                "Proteção UV 100%",
                "Armação metálica",
                "Estojo e pano de limpeza inclusos",
                "Origem: Importado"
            ]
        },
        {
            id: 28,
            nome: "Óculos Oakley Performance",
            preco: 949.90,
            imagem: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=800&fit=crop",
            marca: "oakley",
            promocao: false,
            tamanhos: ["Único"],
            cores: [
                { nome: "Preto", codigo: "#000000" },
                { nome: "Cinza", codigo: "#808080" }
            ],
            caracteristicas: [
                "Lentes polarizadas",
                "Proteção UV 100%",
                "Armação em acetato",
                "Estojo e pano de limpeza inclusos",
                "Origem: Importado"
            ]
        }
    ]
};

// Detectar categoria atual pela URL
function getCurrentCategory() {
    const path = window.location.pathname;
    if (path.includes('bones')) return 'bones';
    if (path.includes('tenis')) return 'tenis';
    if (path.includes('calcas')) return 'calcas';
    if (path.includes('camisas-polos')) return 'camisasPolos';
    if (path.includes('camisas')) return 'camisas';
    if (path.includes('oculos-acessorios')) return 'oculos';
    return 'bones';
}

// Garantir que produto tenha dados completos
function garantirDadosCompletos(produto) {
    return {
        ...produto,
        tamanhos: produto.tamanhos || ['P', 'M', 'G'],
        cores: produto.cores || [{ nome: 'Padrão', codigo: '#000000' }],
        caracteristicas: produto.caracteristicas || ['Produto importado de alta qualidade']
    };
}

// Renderizar produtos da categoria
function renderCategoryProducts(filter = 'all') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const categoria = getCurrentCategory();
    const produtos = produtosPorCategoria[categoria] || [];
    
    const produtosFiltrados = filter === 'all' 
        ? produtos 
        : produtos.filter(p => p.marca === filter);
    
    produtosFiltrados.forEach(produto => {
        // Garantir dados completos
        produto = garantirDadosCompletos(produto);
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Adicionar classe especial para produtos em promoção
        if (produto.promocao) {
            card.classList.add('promocao');
            
            // Calcular desconto percentual
            if (produto.precoAntigo) {
                const desconto = Math.round(((produto.precoAntigo - produto.preco) / produto.precoAntigo) * 100);
                card.setAttribute('data-desconto', desconto);
            }
        }
        
        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;
        img.className = 'product-image';
        img.loading = 'lazy';
        
        // Badge de promoção na imagem
        if (produto.promocao && produto.precoAntigo) {
            const desconto = Math.round(((produto.precoAntigo - produto.preco) / produto.precoAntigo) * 100);
            const promoBadge = document.createElement('div');
            promoBadge.className = 'promo-badge';
            promoBadge.innerHTML = `<span class="promo-text">-${desconto}%</span>`;
            card.appendChild(promoBadge);
        }
        
        const info = document.createElement('div');
        info.className = 'product-info';
        
        // Badge de promoção no topo
        if (produto.promocao) {
            const tag = document.createElement('div');
            tag.className = 'product-tag-wrapper';
            tag.innerHTML = `
                <span class="product-tag tag-promocao">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span>PROMOÇÃO</span>
                </span>
            `;
            info.appendChild(tag);
        }
        
        const name = document.createElement('h3');
        name.className = 'product-name';
        name.textContent = produto.nome;
        
        const price = document.createElement('div');
        price.className = 'product-price';
        
        const currentPrice = document.createElement('span');
        currentPrice.className = 'price-current';
        currentPrice.textContent = formatPrice(produto.preco);
        
        price.appendChild(currentPrice);
        
        if (produto.precoAntigo) {
            const oldPrice = document.createElement('span');
            oldPrice.className = 'price-old';
            oldPrice.textContent = formatPrice(produto.precoAntigo);
            price.appendChild(oldPrice);
        }
        
        const btn = document.createElement('button');
        btn.className = 'add-to-cart-btn';
        btn.innerHTML = '<span>Ver Detalhes</span>';
        btn.onclick = (e) => {
            e.stopPropagation();
            if (typeof abrirModalProduto === 'function') {
                abrirModalProduto(produto);
            } else if (typeof window.abrirModalProduto === 'function') {
                window.abrirModalProduto(produto);
            }
        };
        
        info.appendChild(name);
        info.appendChild(price);
        info.appendChild(btn);
        
        card.appendChild(img);
        card.appendChild(info);
        
        // Adicionar clique no card para abrir modal
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
            if (e.target.closest('.add-to-cart-btn')) return;
            if (typeof abrirModalProduto === 'function') {
                abrirModalProduto(produto);
            } else if (typeof window.abrirModalProduto === 'function') {
                window.abrirModalProduto(produto);
            }
        };
        
        grid.appendChild(card);
    });
}

// Inicializar página de categoria
document.addEventListener('DOMContentLoaded', () => {
    renderCategoryProducts();
    
    // Filtros
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCategoryProducts(btn.dataset.filter);
        });
    });
    
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
});
