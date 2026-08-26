// =========================================
// DADOS DOS PROJETOS (Adicione quantos quiser aqui!)
// =========================================
const projects = [
    {
        title: 'Embalagem Eco',
        desc: 'Design de embalagem física com acabamento especial em papel reciclado e hot stamping.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Embalagem+1',
            'https://via.placeholder.com/700x500/222/fff?text=Embalagem+2'
        ]
    },
    {
        title: 'Poster Serigrafia',
        desc: 'Impressão física limitada em serigrafia 3 cores sobre papel alta gramatura.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Poster+1',
            'https://via.placeholder.com/700x500/222/fff?text=Poster+2'
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
    // Para adicionar novos trabalhos, basta copiar um bloco acima e colar aqui embaixo:
    {
        title: 'Novo Projeto Exemplo',
        desc: 'Descrição do seu novo projeto incrível.',
        images: [
            'https://via.placeholder.com/700x500/111/fff?text=Novo+1',
            'https://via.placeholder.com/700x500/222/fff?text=Novo+2'
        ]
    }
];

// Gera os cards do carrossel automaticamente com base na lista 'projects'
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

// Função para mover o carrossel para os lados ao clicar nas setas
function scrollCarousel(direction) {
    const carousel = document.getElementById('project-carousel');
    const scrollAmount = 330; // Tamanho do card + espaçamento
    carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

// Executa a criação do carrossel quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    buildDiamondGrid();
    renderCarousel();
});