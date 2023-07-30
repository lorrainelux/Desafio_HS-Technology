let tentativasDeLogin = 0;
const limiteDeTentativas = 3; // Defina o limite máximo de tentativas de login

function autenticarUsuario(event) {
  event.preventDefault(); // Impede o envio do formulário para evitar o recarregamento da página

  // Obter os valores do email (ou CPF/CNPJ) e da senha digitados pelo usuário
  const emailOuCpfCnpj = document.getElementById('email').value;
  const senha = document.getElementById('pass').value;

  // Verificar se o email (ou CPF/CNPJ) e a senha correspondem aos valores esperados
  if (emailOuCpfCnpj === 'usuario@example.com' && senha === 'senha123') {
    // Login bem-sucedido, solicitar o código de autenticação de dois fatores
    const codigoDoisFatores = prompt('Digite o código de autenticação de dois fatores enviado para o seu email:');
    if (codigoDoisFatores === '123456') { // Substitua '123456' pelo código real enviado ao usuário
      // Autenticação de dois fatores bem-sucedida, redirecionar para a página de sucesso
      window.location.href = 'inicial.html';
    } else {
      // Código de autenticação de dois fatores inválido
      alert('Código de autenticação de dois fatores inválido. Tente novamente.');
    }
  } else {
    // Login falhou, mostrar uma mensagem de erro
    alert('Email (ou CPF/CNPJ) ou senha inválidos. Tente novamente.');
    
    tentativasDeLogin++;
    
    // Verificar se o limite de tentativas foi atingido
    if (tentativasDeLogin >= limiteDeTentativas) {
      alert('Você excedeu o limite de tentativas de login. Tente novamente após 1 minuto.');
      // Bloquear o acesso por 1 minuto
      document.getElementById('entrar').disabled = true;
      setTimeout(() => {
        document.getElementById('entrar').disabled = false;
        tentativasDeLogin = 0;
      }, 60000); // 1 minuto em milissegundos
    }
  }
}

// Adicionar o evento de envio do formulário para a função de autenticação
const form = document.getElementById('login-form');
form.addEventListener('submit', autenticarUsuario);
