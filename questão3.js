let nome=prompt("Informe seu nome")
let sal_minimo = Number(prompt("Informe o valor do salário mínimo"));
let sal_usuario = Number(prompt("Informe o valor do seu salário"));
let quant_salario = sal_usuario / sal_minimo;
document.write(`Você ${nome} ganha ${quant_salario.toFixed(1)} salários mínimos.`);