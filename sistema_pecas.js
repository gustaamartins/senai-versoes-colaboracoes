//se a peça possuir um peço superior a 100 gramas, pode cadastrar.
//dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade.
//caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro. 

// ATIVIDADE 1
let peso = 32

if (peso>100) {
    console.log('pode cadastrar')
} else {
    console.log('peso inferior a 100 gramas')   
}

console.log ('----------------------------------------------------')

let listaPecas = 9

if (listaPecas>10) {
    console.log('limite da caixa foi ultrapassado')
} else {
    console.log('pode cadastrar, capacidade ok')
}

console.log('-------------------------------------------------------')

var nomePeca2 = 'Adriano'

if (nomePeca2.length >3) {
    console.log('pode cadastrar')

} else {
    console.log ('nome curto, possível erro')
    
}

console.log('------------------------------------------------------')