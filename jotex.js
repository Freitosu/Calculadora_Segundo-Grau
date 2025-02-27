function calcular_raizes() {
    // Obtém os elementos do formulário
    const form = document.forms['frmExemplo'];
    const a = parseFloat(form.txtA.value);
    const b = parseFloat(form.txtB.value);
    const c = parseFloat(form.txtC.value);
    
    // Validação de entrada
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Por favor, preencha todos os campos com números válidos');
        return;
    }
    
    const labelResultado = document.getElementById("Resposta");
    
    // Verifica se é equação do segundo grau
    if (a === 0) {
        labelResultado.innerHTML = "Não é uma equação do segundo grau pois A = 0";
        return;
    }
    
    // Calcula o delta
    const delta = (b * b) - (4 * a * c);
    
    // Verifica o valor de delta
    if (delta < 0) {
        labelResultado.innerHTML = "Não existem raízes reais (Delta < 0)";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        labelResultado.innerHTML = `Existe apenas uma raiz real: x = ${x.toFixed(2)}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        labelResultado.innerHTML = `x₁ = ${x1.toFixed(2)} e x₂ = ${x2.toFixed(2)}`;
    }
}

// Função para limpar os campos
function limparCampos() {
    const form = document.forms['frmExemplo'];
    form.txtA.value = '';
    form.txtB.value = '';
    form.txtC.value = '';
    document.getElementById("Resposta").innerHTML = '';
}
