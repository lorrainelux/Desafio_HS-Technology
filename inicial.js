// Obter o formulário de personalização da interface
const customizeForm = document.getElementById('customize-form');

// Adicionar o evento de envio do formulário para a função de personalização
customizeForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página

  // Obter a cor selecionada pelo usuário
  const backgroundColor = document.getElementById('background-color').value;

  // Aplicar a cor de fundo personalizada
  document.body.style.backgroundColor = backgroundColor;
});