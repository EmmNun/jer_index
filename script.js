// Função para abrir o modal de detalhes do projeto
function openModal(title, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = description;
    modal.style.display = 'flex';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Fechar o modal ao clicar fora da caixa principal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};