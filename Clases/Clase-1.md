# JSX
Es la extensión de archivos que se usa en react donde podemos hacer html dentro de js facilitando el uso sacando lo mejor de html css y js.

Es necesario usar comentarios en Javascript pero para eso vamos a necesitar usar las llaves de la siguiente manera:
{/* Un comentario JSX */}

* Y en Multilinea:

{/* 
    Un comentario JSX
    en muchas
    líneas
*/}
# Virtual DOM
Es una copia del DOM real y lo que hace es compararlo, asi cuando existe algun cambio no se tiene que renderizar toda la pantalla si no solo lo que se cambio mejorando el desempeño de nuestra app, como lo comente antes esto es por que se compara el Virtual DOM con el DOM Real encontrando los cambios

# Ciclo de vida
Este concepto es ampliamente conocido en la programación, en este curso vamos a conocer cual es el ciclo de vida de los elementos que vamos a crear en react desde que nace, se combina hasta que muere

# Estado
Esto es fundamental, ya que podemos ver los estados y ver como es el flujo de la información entre componentes a travez de un imputs, botones, interacciones entre otros elementos
 # Primer Componente
import React from 'react';

export default class PrimerComponente extends React.Component {

    render() {
        const name = 'Juan Perez'; 
        const name= <h1> Hola {name} </h1>;
        return element;
    }
}