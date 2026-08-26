// =========================================
// GRADE DE LOSANGOS DO HERO
// =========================================
function buildDiamondGrid() {
    const grid = document.getElementById('diamond-grid');
    if (!grid) return;

    const cols = 14;
    const rows = 8;

    const red = { r: 255, g: 20, b: 60 };   
    const blue = { r: 0, g: 120, b: 255 };   

    const fragment = document.createDocumentFragment();

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const diamond = document.createElement('div');
            diamond.className = 'diamond';

            const ratio = col / (cols - 1);

            let r = Math.round(red.r + (blue.r - red.r) * ratio);
            let g = Math.round(red.g + (blue.g - red.g) * ratio);
            let b = Math.round(red.b + (blue.b - red.b) * ratio);

            const lightnessBoost = Math.sin(ratio * Math.PI) * 40; 
            r = Math.min(255, Math.round(r + lightnessBoost));
            g = Math.min(255, Math.round(g + lightnessBoost));
            b = Math.min(255, Math.round(b + lightnessBoost));

            diamond.style.setProperty('--tile-color', `rgb(${r}, ${g}, ${b})`);
            fragment.appendChild(diamond);
        }
    }

    grid.appendChild(fragment);
}

// =========================================
// DADOS DOS PROJETOS (Adicione novos projetos aqui)
// =========================================
// =========================================
// DADOS DOS PROJETOS (Adicione novos projetos aqui)
// =========================================
const projects = [
    {
        title: 'Embalagem Eco',
        desc: 'Design de embalagem física com acabamento especial em papel reciclado e hot stamping.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Embalagem+1',
            'https://via.placeholder.com/700x500/222/fff?text=Embalagem+2',
            'https://via.placeholder.com/700x500/333/fff?text=Embalagem+3'
        ]
    },
    {
        title: 'Poster Serigrafia',
        desc: 'Impressão física limitada em serigrafia 3 cores sobre papel alta gramatura.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Poster+1',
            'https://via.placeholder.com/700x500/222/fff?text=Poster+2',
            'https://via.placeholder.com/700x500/333/fff?text=Poster+3'
        ]
    },
    {
        title: 'Branding Físico',
        desc: 'Desenvolvimento de identidade visual completa, cartões de visita e papelaria.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Branding+1',
            'https://via.placeholder.com/700x500/222/fff?text=Branding+2'
        ]
    },
    // SEU NOVO PROJETO COM IMAGENS IMAGINÁRIAS:
    {
        title: 'Identidade Visual Neon',
        desc: 'Projeto conceitual focado em tipografia futurista e paleta de cores vibrantes.',
        images: [
            'https://via.placeholder.com/700x500/220022/fff?text=Neon+Principal',
            'https://via.placeholder.com/700x500/002222/fff?text=Neon+Detalhe+1',
            'https://via.placeholder.com/700x500/222200/fff?text=Neon+Detalhe+2',
            'https://via.placeholder.com/700x500/000022/fff?text=Neon+Aplicacao'
        ]
    }
];

let currentProject = 0;
let currentImage = 0;

// Renderiza o carrossel na página
function renderCarousel() {
    const carousel = document.getElementById('project-carousel');
    if (!carousel) return;
    carousel.innerHTML = '';

    projects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.onclick = () => openModal(index);

        item.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;

        carousel.appendChild(item);
    });
}

// Rola o carrossel com as setas
function scrollCarousel(direction) {
    const carousel = document.getElementById('project-carousel');
    const scrollAmount = 330;
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Abre o modal
function openModal(projectIndex) {
    currentProject = projectIndex;
    currentImage = 0;

    const modal = document.getElementById('modal');
    document.getElementById('modal-title').textContent = projects[projectIndex].title;
    document.getElementById('modal-desc').textContent = projects[projectIndex].desc;

    createThumbs();
    updateModalView();

    modal.style.display = 'flex';
}

// Atualiza a foto principal e miniaturas
function updateModalView() {
    const project = projects[currentProject];
    
    const img = document.getElementById('modal-image');
    img.src = project.images[currentImage];
    img.alt = `${project.title} - foto ${currentImage + 1}`;

    const thumbs = document.querySelectorAll('#modal-thumbs img');
    thumbs.forEach((thumb, index) => {
        if (index === currentImage) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Cria miniaturas do modal
function createThumbs() {
    const project = projects[currentProject];
    const thumbsContainer = document.getElementById('modal-thumbs');
    thumbsContainer.innerHTML = '';

    project.images.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = `Miniatura ${index + 1}`;

        thumb.addEventListener('click', () => {
            currentImage = index;
            updateModalView();
        });

        thumbsContainer.appendChild(thumb);
    });
}

// Próxima foto
function nextImage() {
    const project = projects[currentProject];
    currentImage = (currentImage + 1) % project.images.length;
    updateModalView();
}

// Foto anterior
function prevImage() {
    const project = projects[currentProject];
    currentImage = (currentImage - 1 + project.images.length) % project.images.length;
    updateModalView();
}

// Fecha o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Eventos de clique fora e teclado
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    const modal = document.getElementById('modal');
    if (modal.style.display !== 'flex') return;

    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'Escape') closeModal();
});

// Inicialização geral ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    buildDiamondGrid();
    renderCarousel();
});