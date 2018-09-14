var verificarFormulario =( () => {
    var nome = this.verificarNome(document.form.fname.value);
    var idade = this.verificarIdade(document.form.fIdade.value);
    var prato = this.verificarPrato(document.form.fprato.value);
    var quantidade = this.verificarIngredientes(document.form.fning.value);
    var opcoes = this.verificarOpcoes(document.form.foption);
    var obj = {
        nome: nome,
        idade: idade,
        prato: prato,
        quantidade: quantidade,
        opcoes: opcoes
    };
    var valor;
    console.log(JSON.stringify(obj));
    if(obj.nome != null && obj.idade != null && obj.prato != null && obj.quantidade != null &&
    obj.opcoes != null && obj.opcoes == obj.quantidade) {
        if(obj.prato == 'pequeno') {
            valor = 8 * (obj.quantidade) * 2;
            valor = valor.toLocaleString('pt-BR');
            alert("VALOR DO PRATO " + valor + "reais");
        }
        if(obj.prato == 'medio') {
            valor = 10 * (obj.quantidade) * 2;
            valor = valor.toLocaleString('pt-BR');
            alert("VALOR DO PRATO " + valor + "reais");
        }
        if(obj.prato == 'grande') {
            valor = 12 * (obj.quantidade) * 2;
            valor = valor.toLocaleString('pt-BR');
            alert("VALOR DO PRATO " + valor + "reais");
        } 
    }else {
        alert("Favor, preencher o formulário corretamente");
    }
});
var verificarNome = ( (nome) => {
    return nome;
});
var verificarIdade = ( (idade) => {
    return idade;
});
var verificarPrato = ( (prato) => {
    return prato;
});
var verificarIngredientes = ( (quantidade) => {
    return quantidade;
});
var verificarOpcoes = ( (opcoes) => {
    var opcaoSelecionada = false;
    var arraySelecionadas = new Array();
    for(var index = 0; index < opcoes.length; index++){
        if(opcoes[index].checked) {
            arraySelecionadas.push(opcoes[index].value);
        }
    }
    for(var index = 0; index < arraySelecionadas.length ; index ++) {
        console.log(arraySelecionadas[index]);
    }  
    var selecionados = arraySelecionadas.length; 
    return selecionados;
});