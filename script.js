// Função para abrir o modal de galeria e preencher com as fotos extras do projeto
function openGallery(title, imageUrls) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modal-title');
    const gridContainer = document.getElementById('modal-gallery-images');

    // Define o título do diretório/projeto
    modalTitle.innerText = title;

    // Limpa a grade de imagens anterior
    gridContainer.innerHTML = '';

    // Insere cada imagem correspondente no modal
    imageUrls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = title;
        gridContainer.appendChild(img);
    });

    // Exibe o modal na tela
    modal.style.display = 'flex';
}

// Função para fechar a galeria
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// Fecha o modal ao clicar fora da janela de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};