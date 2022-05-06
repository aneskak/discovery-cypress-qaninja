var avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers', 'Bruce Brenner']

function listarVingadores() {

    var ul = document.getElementById('avengers')
    ul.innerHTML = ''  //para não repetir a lista

    avengers.forEach(function(a){
        var li = document.createElement('li') //cria o elemento
        var text = document.createTextNode(a) //criando texto
        li.appendChild(text)
        ul.appendChild(li)
        
    })
}