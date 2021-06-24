let salarioBruto = 5000;
let salarioBase;
let salarioLiquido;
let aliquotaInss;
let aliquotaIr;
if (salarioBruto < 1556.94) {
    aliquotaInss = salarioBruto * 0.08
    salarioBase = salarioBruto - aliquotaInss
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    aliquotaInss = salarioBruto * 0.09
    salarioBase = salarioBruto - aliquotaInss
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaInss = salarioBruto * 0.11
    salarioBase = salarioBruto - aliquotaInss
} else {
    aliquotaInss = 570.88
    salarioBase = salarioBruto - aliquotaInss
};
if (salarioBase < 1903.98) {
    aliquotaIr = 0
    salarioLiquido = salarioBase - aliquotaIr
} else if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    aliquotaIr = salarioBase * 0.075 - 142.80
    salarioLiquido = salarioBase - aliquotaIr
} else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
    aliquotaIr = salarioBase * 0.15 - 354.80
    salarioLiquido = salarioBase - aliquotaIr
} else if (salarioBase > 3751.05 && salarioBase <= 4664.68) {
    aliquotaIr = salarioBase * 0.225 - 636.13
    salarioLiquido = salarioBase - aliquotaIr
}   else {
    aliquotaIr = salarioBase * 0.275 - 869.36
    salarioLiquido = salarioBase - aliquotaIr
}
console.log("Salaŕio Bruto:", salarioBruto, "; Alíquota INSS:", aliquotaInss.toFixed(2), "; Alíquota IR:", aliquotaIr.toFixed(2), "; Salário Líquido:", salarioLiquido);
