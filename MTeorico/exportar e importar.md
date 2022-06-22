<h1>Export e import</h1>
<h3>
Una de las nuevas versiones de JS (ES6) trae la posibilidad de exportar e importar código de un archivo a otro. Esto significa que desde un archivo X podemos exportar (o poner pública, o a disponibilidad) un valor Y, y cuando un archivo Z importa ese archivo X, puede obtener y trabajar con el valor Y.

Hay dos formas de exportar, nombrada y por defecto, y cada una tiene su sintaxis. En un archivo se pueden tener varias exportaciones de forma nombrada, pero una sola por defecto.

Siempre que tenemos un componente de React necesitamos tener un export por default, pero esto no implica que en todo archivo .js necesitemos tener un export por default</h3>

<h1> Export por default</h1> <h2>
Para exportar por default un valor, simplemente tenemos que poner las palabras reservadas export default y el valor que queramos exportar. Se pueden exportar todo tipo de valores (números, strings, booleanos, arrays, objetos, funciones)

<strong>export default 3</strong> 
<br>
También podemos exportar una variable que (que en el export se reemplaza por el valor que contiene):
<i> const miVariable = 3
export default miVariable</i>

O directamente todo en una misma línea:

<i>export default miVariable = 3 </i>

Cuando hacemos esto último no hay que declarar la palabra const o let de la variable. En el caso de un componente, podemos crear el componente y luego exportarlo:

<i>const MiComponente = () => (<></>)
export default MiComponente</i>
o hacer todo junto:

<i>export default MiComponente = () => (<></>)</i>

Para importar el valor exportado en otro archivo, necesitamos poner: <br>
<i>import miVariable from 'ruta/al/archivo'</i>

Y ya podemos usar miVariable dentro de dicho archivo, que contendrá el valor exportado por defecto. Como el export por default no tiene un nombre (puede ser solo un valor) y es único por archivo, podemos al importarlo asignarlo en una variable con otro nombre, pero a la hora de trabajar con componentes en React esto no es una práctica recomendable.

La ruta al archivo puede ser una ruta absoluta (dependiendo de cómo tengamos configurado nuestro entorno), o una ruta relativa, donde  <i>./</i> indica la posición en la carpeta actual, y <i>..</i> se utiliza para subir un nivel hacia arriba. Cuando importamos archivos .js, no hace falta incluir la extensión del mismo
<h3>
<h2>Export con nombre</h2>
<h3>Para exportar un valor con nombre, tenemos que declararlo en una misma línea, junto a la declaración de la variable donde va a estar contenido, por ejemplo:
<br>
<i>export const miVariable = 3
export const miOtraVariable = 5</i> O podemos utilizar destructuring (ver más adelante) para exportarlos en otra línea: <br> <i>const miVariable = 3
const miOtraVariable = 5
export {miVariable, miOtraVariable}</i>

A la hora de importar, tenemos dos opciones:

1-Importar todo en una variable, y acceder a las distintas variables como propiedades del objeto:
<i>import * as misVariables from 'ruta/al/archivo'
console.log(misVariables.miOtraVariable) </i>

2-Utilizar destructuring, para declarar las cosas que necesitamos importar y utilizarlas directamente
<br>
<i>import {miVariable, miOtraVariable} from 'ruta/al/archivo'
console.log(miVariable)</i>
<br>
Para esto necesitamos utilizar exactamente el mismo nombre con el que exportamos el valor, pero podemos ponerle un alias:
<br>
<i>import {miVariable as miVariableConAlias} from 'ruta/al/archivo'
console.log(miVariableConAlias)</i> <br>
A su vez, podemos importar los valores por default y con nombre en una misma línea:
<i>import ValorPorDefault, {miVariable, miOtraVariable} from 'ruta/al/archivo'</i>
<br>
En cuanto al orden de las importaciones, es preferible importar todo en la parte superior del archivo. Primero se importan las librerías externas o de terceros, luego los componentes externos o de terceros, luego los componentes propios, y luego otros archivos que necesitemos (estilos, etc).

</h3>