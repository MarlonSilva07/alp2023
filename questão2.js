let valor1 = Number(prompt("Informe o 1° valor   "));
let quant1 = Number(prompt("Informe a quantidade do valor 1°  "));;
let valor2 = Number(prompt("Informe o 2° valor   "));;
let quant2 = Number(prompt("Informe a quantidede do 2°:   "));
let ipi =Number(prompt("Informe o ipi   "));
let total = (valor1 * quant1 + valor2 * quant2) * (ipi / 100 + 1);
document.write(`O valor total a ser pago é R$ ${total.toFixed(2)}`);