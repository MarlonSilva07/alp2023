let valor1 = Number(prompt("Digite o 1° valor"));
let quant1 = Number(prompt("Digite a quantidade do 1° valor"));;
let valor2 = Number(prompt("Digite o 2° valor"));;
let quant2 = Number(prompt("Digite a quantidede do 2° valor"));
let ipi =Number(prompt("Informe o ipi   "));
let valortotal = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);
document.write(`O valor total a ser pago é R$ ${valortotal.toFixed(2)}`);