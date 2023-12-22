const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt("Digite a nota mínima: "))

let linhas = '' 

/*|_> Para não sobrescrever o valor anterior, essa variável deve ser global. Por isso vem antes do addEventListener*/

form.addEventListener('submit', function(e) {
    e.preventDefault() /* Evita que a página seja atualizada */

    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')
    
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value)) 
    
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`  /* Explicaçao ao final do código.*/ 
        linha += '</tr>'
    
        linhas += linha

    }


    inputNomeAtividade.value = ''
    inputNotaAtividade.value = ''
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMedia() {

    const mediaFinal = calculaMedia()

    document.getElementById("media-final-valor").innerHTML = mediaFinal
    document.getElementById("media-final-resultado").innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

    
}

function calculaMedia() {
    let somaDasNotas = 0

    for(i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    
    return media = somaDasNotas/notas.length

    
}


/*
linha += `<td>${inputNomeAtividade.value > 7 ? 'Aprovado' : 'Reprovado'}</td>`  
 chamado de operador ternário:
inputNomeAtividade.value > 7 ==> retorna um valor booleano
? 'Aprovado'                 ==> retorna mensagem aprovado se a condição for verdadeira
: 'Reprovado'                ==> retorna mensagem reprovado se a condição for falsa.

Ou seja, é semelhante ao if else:
*/
