// Função para abrir o modal com as fotos do projeto clicado// Função para abrir o modal com as fotos do projeto clicado
function openGallery(title, imageUrls) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modal-title');
    const gridContainer = document.getElementById('modal-gallery-images');

    // Define o título do modal com o nome do projeto
    modalTitle.innerText = title;

    // Limpa as imagens anteriores do modal
    gridContainer.innerHTML = '';

    // Adiciona dinamicamente cada imagem correspondente ao projeto
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = title;
        gridContainer.appendChild(img);
    });

    // Mostra o modal na tela
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// Fecha o modal caso o usuário clique na área escura ao redor dele
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};