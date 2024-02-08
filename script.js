function fahrenheit() {
  let temperatura = document.getElementById("celsius");
  let temp = Number(temperatura.value);
  let resultado = 1.8 * temp + 32;
  let kelvin = temp + 273;
  let final = `${resultado} °F e Kelvin ${kelvin}`;

  document.getElementById("resultado").innerText = final;
}
