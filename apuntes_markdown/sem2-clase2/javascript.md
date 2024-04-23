# JavaScript

## Objetos y sus propiedades en JavaScript

~~~JavaScript
const human = {
    name: "Emmanuel",
    lastname: "Farrera",
    age:32
}
console.log(human);
~~~

Los valores deben ser primitivos, aunque también existen los objetos anidados.

### Podemos agregar nuevas propiedades a los objetos

~~~JavaScript
human.id = Symbol('FAME010220');
console.log(human);
~~~

### Se puede acceder a las propiedades con el operador "Punto" o "corchete"

~~~JavaScript
const designer = {
    name: "Emmanuel",
    lastname: "Rodas",
    "The best designer": true
}
console.log(designer["name"]);
~~~

### Las propiedades se pueden cambiar con el tiempo

~~~JavaScript
human.blonde = false;
human.age = human.age-10;
~~~

### Podemos eliminar las propiedades con el operador "delete"

~~~JavaScript
delete human.lastname;
delete human.age;
~~~

## Funciones puras y mutación en JavaScript

### Function Statement

~~~JavaScript
function walk(){
    console.log("I'm walking")
}

walk()
~~~

No necesaria mente retorna algo

### Function Expression

~~~JavaScript
const walk1 = function(){
    console.log("I'm walking with style")
}
~~~

Las funciones en JavaScript son ciudadanos de primera clase.

### Funciones puras

1. No tiene efectos secundario: No modifica ningún estado fuera de su alcance, como variables globales o referencias.

2. Es determinista: Esto significa que dada la misma entrada, siempre saldrá la primera salida.

Ejemplo:

~~~JavaScript
function sum(x, y){
    return x + y;
}

sum(2,1)
~~~

x y y son los ***Parámetros*** de la función, mientras que en la ejecución 2 y 1 pasan a ser los ***Argumentos***.

### Copiar por valor y copia por referencia

~~~JavaScript
let name = "Emmanuel"
let nickname = nombre
name = "Sinai"

console.log(name)
console.log(nickname)
~~~

Los objetos siempre se copian por referencia.

## Los operadores lógicos en JavaScript

- OR: a || b || c retorna el primer valor verdadero.
- AND: a && b && c retorna el primer valor falso.
- NOT: !a retorna el valor contrario al booleano.

## Condicionales y ciclos en JavaScript

### if statement

~~~JavaScript
if(age >= 18){
    console.log("adulto")
}
else {
    console.log("Niño")
}
~~~

### Operador ternario

~~~JavaScript
let msg = age >= 18 ? "adult" : "Young";
~~~

### ¿Cómo haríamos una lista de frutas?

~~~JavaScript
const fruits = {
    0: "Banana",
    1: "orange",
    2: "apple"
}

console.log(fruits[0])
~~~

