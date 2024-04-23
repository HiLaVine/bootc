# HTML semántico

## ¿Qué es el HTML semántico?

Es la practica de utilizar etiquetas HTML que dan significado y estructura a los contenidos de una página web.

Si pueden acceder 2 o mas h1 en una pagina.

## Artículos y secciones ¿Cuál usar y porque?

- Un < articulo > es un "contenido" que tiene relación con otros "contenidos" a su alrededor.

    Tienen sentido por si mismo.

~~~HTML
<articule>

</articule>
~~~

- Un < section > es un conjunto de artículos que hablan sobre un tema en común (deportes, tecnología, etc.).

Pero también un articulo puede tener muchas secciones. No tienen una jerarquía especifica, si no que funcionan dependiendo la situación.

~~~HTML 
<section>
    <h1>Artículos de frutas:</h1>
</section>
~~~

**nota: Siempre pensar en esto como un libro y que tenga una estructura clara y precisa de lo que se busca trasmitir.**

En el ejemplo de YouTube el home, seria un section, ya que tiene varios artículos que son los videos, y sections como el de opciones.

Y dentro de un video que es un articulo ya que es lo mas importante. Pero tiene sections como lo son los comentarios y los videos recomendados que tienen cada uno artículos ya que los videos y los comentarios son artículos cada uno.

## nav, header, footer y aside en HTML

- nav Se usa para crear un menu de navegación.
- header es el encabezado y puede tener uno por sección y un principal
- footer: se tiene el del articulo y el de la pagina.
- aside: no entrega ningún significado semántico valioso más que comunicar que el contenido no esta relacionado con el resto.
    Se suele usar para:
        - Establecer una sección de anuncios.
        - Establecer una sección lateral de contenidos.

## ¿Para qué usar divs en HTML?

Los divs se usan exclusivamente para la maquetación de contenido, pero no entregan ningún significado semántico, son "marcadores invisibles".

## time y address en HTML

- time: añadir información sobre fecha y tiempo.
- address: sirve para añadir información al footer.

## Los tags figure, figcaption, picture e img

- : Si la imagen tiene relación con el articulo, tienen que ponerse en figure y tener un figcaption.