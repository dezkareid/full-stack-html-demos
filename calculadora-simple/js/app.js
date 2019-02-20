function calcular (operadorA, operadorB, operacion) {
  let result = 0
  if (operacion === 'suma') {
    result = operadorA + operadorB
  } else if (operacion === 'resta') {
    result = operadorA - operadorB
  }
  return result
}

window.addEventListener('load', function () {
  const operadorA = document.getElementById('operadorA')
  const operadorB = document.getElementById('operadorB')
  const operacion = document.getElementById('operacion')

  const button = document.getElementById('calcular')
  button.addEventListener('click', function () {
    const operadorAValue = +operadorA.value
    const operadorBValue = +operadorB.value
    const result = calcular(operadorAValue, operadorBValue, operacion.value)
    alert(`El resultado es ${result}`)
  })
})
