/*Cambia el contenido de la etiqueta h1 con document.querySelector
y asigna el siguiente texto: "Hora del Desafío".*/
let headers=document.querySelector("h1");
headers.innerHTML="HORA DEL DESAFIO";

/*Crea una función que muestre en la consola el mensaje 
"El botón fue clicado" siempre que se presione el botón "Console".*/
function consola(){
    alert("Clicaste en consola");
    console.log("Clicaste en consola");
}

/*Crea una función que se ejecute cuando 
se haga clic en el botón "prompt", preguntando 
el nombre de una ciudad de Brasil. 
Luego, muestra una alerta con el mensaje 
concatenando la respuesta con el texto: 
"Estuve en {ciudad} y me acordé de ti"*/
function prome(){
    let pais=prompt("Nombre de una ciudad de Brasil: ");
    alert("La ciudad digitada es: " +pais);
    console.log(`La ciudad digitada es ${pais}`);
}

/*Crea una función que muestre una alerta con el mensaje: 
"Yo amo JS" siempre que se presione el botón "Alerta".*/
function alerta(){
    alert("Yo amo JS");
    console.log("Yo amo JS");
}

/*Al hacer clic en el botón "suma", pide 
2 números y muestra el resultado de la suma en una alerta*/
function suma(){
    let num1=parseInt(prompt("Digite el primer número: "));
    let num2=parseInt(prompt("Digite el segundo número: "));
    res=num1+num2;
    alert(`El resultado es ${res}`);
    console.log(`El resultado es ${res}`);
}
