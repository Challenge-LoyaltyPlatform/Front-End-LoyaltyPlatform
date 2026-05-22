// =============================================
// js/contato.js
// Lógica do formulário de contato
// =============================================

// Aguarda o DOM carregar completamente antes de rodar
document.addEventListener('DOMContentLoaded', function () {

    // --- Seleção dos elementos ---
    const btnEnviar = document.getElementById('btn-enviar');
    const toast     = document.getElementById('toast');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputMsg  = document.getElementById('mensagem');

    // Tempo (ms) que o toast fica visível antes de sumir
    const TOAST_DURACAO = 3500;

    // Variável para controlar o timer do toast (evita sobreposição)
    let toastTimer = null;

    // -----------------------------------------------
    // Função: exibe o toast de confirmação
    // -----------------------------------------------
    function mostrarToast() {
        // Cancela timer anterior se o usuário clicar várias vezes seguidas
        if (toastTimer) {
            clearTimeout(toastTimer);
        }

        // Adiciona a classe que ativa a transição CSS
        toast.classList.add('visivel');

        // Remove a classe após o tempo definido (toast some)
        toastTimer = setTimeout(function () {
            toast.classList.remove('visivel');
            toastTimer = null;
        }, TOAST_DURACAO);
    }

    // -----------------------------------------------
    // Função: valida se os campos obrigatórios foram preenchidos
    // Retorna true se tudo ok, false se algo estiver vazio
    // -----------------------------------------------
    function validarCampos() {
        const nome  = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const msg   = inputMsg.value.trim();

        if (!nome || !email || !msg) {
            // Destaca visualmente os campos vazios
            if (!nome)  inputNome.style.boxShadow  = '0 0 0 2px #FC3E8E';
            if (!email) inputEmail.style.boxShadow = '0 0 0 2px #FC3E8E';
            if (!msg)   inputMsg.style.boxShadow   = '0 0 0 2px #FC3E8E';
            return false;
        }

        return true;
    }

    // -----------------------------------------------
    // Função: limpa os erros visuais ao digitar
    // -----------------------------------------------
    function limparErro(campo) {
        campo.style.boxShadow = '';
    }

    // Remove erro visual quando o usuário começa a digitar
    inputNome.addEventListener('input',  function () { limparErro(inputNome); });
    inputEmail.addEventListener('input', function () { limparErro(inputEmail); });
    inputMsg.addEventListener('input',   function () { limparErro(inputMsg); });

    // -----------------------------------------------
    // Evento: clique no botão "Enviar mensagem!"
    // -----------------------------------------------
    btnEnviar.addEventListener('click', function () {

        // Só continua se os campos estiverem preenchidos
        if (!validarCampos()) return;

        // Mostra o toast de confirmação
        mostrarToast();

        // Limpa os campos após o envio
        inputNome.value  = '';
        inputEmail.value = '';
        inputMsg.value   = '';
    });

});