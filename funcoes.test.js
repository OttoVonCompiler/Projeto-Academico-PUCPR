const { 
    validarEmail, 
    calcularTamanhoArquivoMB, 
    verificarExtensaoPDF, 
    formatarNomeUsuario, 
    campoEstaVazio 
} = require('./funcoes');

test('Deve validar se o e-mail contém o caractere @', () => {
    expect(validarEmail('vinicius@pucpr.br')).toBe(true);
    expect(validarEmail('vinicius.com')).toBe(false);
});

test('Deve converter 2048 KB para exatamente 2 MB', () => {
    expect(calcularTamanhoArquivoMB(2048)).toBe(2);
});

test('Deve aceitar arquivos com extensão .pdf (case insensitive)', () => {
    expect(verificarExtensaoPDF('relatorio.pdf')).toBe(true);
    expect(verificarExtensaoPDF('FOTO.PDF')).toBe(true);
});

test('Deve formatar o nome removendo espaços e deixando em maiúsculas', () => {
    expect(formatarNomeUsuario('  vinicius santos  ')).toBe('VINICIUS SANTOS');
});

test('Deve retornar verdadeiro se o campo de texto estiver vazio ou apenas com espaços', () => {
    expect(campoEstaVazio('   ')).toBe(true);
    expect(campoEstaVazio('Conteúdo')).toBe(false);
});