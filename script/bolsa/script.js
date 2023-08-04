// Faz a solicitação à API e obtém somente o valor da propriedade "symbol"
const tags = ['VALE3', 'PETR4', 'MLGU3']

tags.forEach(chama)

function chama(ativo) {
    console.log(ativo)
fetch(`https://brapi.dev/api/quote/${ativo}`)
  .then(response => response.json()) // Converte a resposta em JSON
  .then(data => {
    const symbol = data.results[0].symbol; // Obtém o valor da propriedade "symbol"
    const longName = data.results[0].longName;
    const preco = data.results[0].regularMarketPrice;

    const dadosApi = document.getElementById('dados-api');
    dadosApi.innerHTML = symbol + "<br>" + longName + "<br>" + preco;
})
  .catch(error => {
    console.error('Erro na solicitação da API:', error);
  });
}