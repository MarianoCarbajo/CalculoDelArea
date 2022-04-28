let btnEnv = document.getElementById("btnEnviar");
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  let base: number = dato1.value;
  let altura: number = dato2.value;
  let area: number = base * altura;
  console.log("El area es " + area);
});
