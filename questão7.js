let custo = Number(prompt("Informe o preço de custo do produto "));
let perc = Number(prompt("Informe o percentual de acréscimo "));
let venda = custo + ( custo * ( perc / 100));
document.write(`O valor de venda desse produto é de R$ ${venda.toFixed(2)}`);       