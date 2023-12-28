const button = document.querySelector('.button')
let mostrarResultado = document.querySelector('.mostrarResultado')


button.addEventListener('click', () => {
    const nomeInput = document.querySelector('#nomeInput').value
    const mensalidadeInput = document.querySelector('#mensalidadeInput').value
    const tempoSelect = document.querySelector('#tempoSelect').value

    const taxaDeJuros = 0.00517;

    // Calcula os juros compostos
    const montanteTotal = mensalidadeInput * ((1 + taxaDeJuros) ** tempoSelect - 1) / taxaDeJuros;

    if (mensalidadeInput === "") {
        mostrarResultado.style.display = "none"
        alert('Digite um Valor!')

    } else {
        mostrarResultado.style.display = "flex"

    }
    // mostrar o resultado em texto 
    mostrarResultado.innerHTML = `Olá ${nomeInput}, juntando R$${mensalidadeInput} todo mês, você terá R$${montanteTotal.toFixed(2)} Reais em ${tempoSelect} Meses `


    const novoBotao = document.createElement('button')
    novoBotao.textContent = 'Simular Novamente'
    mostrarResultado.appendChild(novoBotao)

    novoBotao.addEventListener('click', () => {
        mostrarResultado.style.display = "none"
        location.reload()
    })

});