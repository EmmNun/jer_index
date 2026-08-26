// =========================================
// GRADE DE LOSANGOS DO HERO
// Gera uma grade de losangos cuja cor muda
// gradualmente do vermelho (esquerda) para o
// azul (direita), misturando as duas cores no meio.
// =========================================
function buildDiamondGrid() {
    const grid = document.getElementById('diamond-grid');
    if (!grid) return;

    const cols = 12;
    const rows = 7;

    // Cores base (mesmas do :root)
    const red = { r: 211, g: 32, b: 39 };   // --red-accent
    const blue = { r: 0, g: 51, b: 160 };   // --blue-accent

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const diamond = document.createElement('div');
            diamond.className = 'diamond';

            // 0 = totalmente esquerda, 1 = totalmente direita
            const ratio = col / (cols - 1);

            const r = Math.round(red.r + (blue.r - red.r) * ratio);
            const g = Math.round(red.g + (blue.g - red.g) * ratio);
            const b = Math.round(red.b + (blue.b - red.b) * ratio);

            diamond.style.setProperty('--tile-color', `rgb(${r}, ${g}, ${b})`);
            grid.appendChild(diamond);
        }
    }
}

document.addEventListener('DOMContentLoaded', buildDiamondGrid);

// =========================================
// DADOS DOS PROJETOS
// Cada projeto tem um título, descrição e uma
// lista de fotos. Troque as URLs pelas suas
// imagens reais (ou caminhos locais, ex: "img/foto1.jpg").
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
            'https://via.placeholder.com/700x500/333/fff?text=Poster+3',
            'https://via.placeholder.com/700x500/444/fff?text=Poster+4'
        ]
    },
    {
        title: 'Branding Físico',
        desc: 'Desenvolvimento de identidade visual completa, cartões de visita e papelaria.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Branding+1',
            'https://via.placeholder.com/700x500/222/fff?text=Branding+2'
        ]
    }
];

// Controla qual projeto e qual foto estão sendo exibidos no momento
let currentProject = 0;
let currentImage = 0;

// Abre o modal já mostrando a primeira foto do projeto clicado
function openModal(projectIndex) {
    currentProject = projectIndex;
    currentImage = 0;

    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = projects[projectIndex].title;
    document.getElementById('modal-desc').innerText = projects[projectIndex].desc;

    renderImage();
    renderThumbs();

    modal.style.display = 'flex';
}

// Atualiza a foto principal exibida
function renderImage() {
    const project = projects[currentProject];
    const img = document.getElementById('modal-image');
    img.src = project.images[currentImage];
    img.alt = project.title + ' - foto ' + (currentImage + 1);
}

// Gera as miniaturas (thumbnails) de todas as fotos do projeto
function renderThumbs() {
    const project = projects[currentProject];
    const thumbsContainer = document.getElementById('modal-thumbs');
    thumbsContainer.innerHTML = '';

    project.images.forEach((src, index) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.alt = 'Miniatura ' + (index + 1);
        if (index === currentImage) thumb.classList.add('active');

        thumb.onclick = function () {
            currentImage = index;
            renderImage();
            renderThumbs();
        };

        thumbsContainer.appendChild(thumb);
    });
}

// Vai para a próxima foto do projeto (volta ao início ao chegar no fim)
function nextImage() {
    const project = projects[currentProject];
    currentImage = (currentImage + 1) % project.images.length;
    renderImage();
    renderThumbs();
}

// Vai para a foto anterior do projeto (vai para o fim ao passar do início)
function prevImage() {
    const project = projects[currentProject];
    currentImage = (currentImage - 1 + project.images.length) % project.images.length;
    renderImage();
    renderThumbs();
}

// Fecha o modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fechar o modal ao clicar fora da caixa principal
window.onclick = function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Navegar com as setas do teclado (esquerda/direita) e fechar com Esc
document.addEventListener('keydown', function (event) {
    const modal = document.getElementById('modal');
    if (modal.style.display !== 'flex') return;

    if (event.key === 'ArrowRight') nextImage();
    if (event.key === 'ArrowLeft') prevImage();
    if (event.key === 'Escape') closeModal();
});