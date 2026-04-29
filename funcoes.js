// Funções utilitárias para o sistema de upload/gestão
function validarEmail(email) {
    return email.includes('@');
}

function calcularTamanhoArquivoMB(kb) {
    return kb / 1024;
}

function verificarExtensaoPDF(nomeArquivo) {
    return nomeArquivo.toLowerCase().endsWith('.pdf');
}

function formatarNomeUsuario(nome) {
    return nome.trim().toUpperCase();
}

function campoEstaVazio(texto) {
    return !texto || texto.trim().length === 0;
}

module.exports = { 
    validarEmail, 
    calcularTamanhoArquivoMB, 
    verificarExtensaoPDF, 
    formatarNomeUsuario, 
    campoEstaVazio 
};