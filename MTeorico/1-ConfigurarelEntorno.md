# Configurando el entorno
Desde la terminal (ya sea la de VS Code, Git bash, o consola de Linux/Mac), ubicadas en la carpeta donde vamos a querer que se cree la carpeta de nuestro proyecto, escribimos

```
npx create-react-app my-app
```

donde my-app es el nombre de nuestro proyecto/aplicación.

Cuando se termine de bajar e instalar todas las librerías y dependencias, tenemos que movernos a la carpeta de nuestro proyecto y crear dos archivos, ```jsconfig.json y .env```:
```
cd my-app/
touch jsconfig.json
touch .env
```

En el archivo jsconfig.json tenemos que poner
```
{
    "compilerOptions": {
      "baseUrl": "src"
    },
    "include": ["src"]
}
```
Esto va a permitir que podamos usar rutas absolutas y no relativas a la hora de importar archivos. En el archivo .env, si estamos en Windows tenemos que colocar:

SASS_PATH=./node_modules;./src
y si estamos en Linux/Mac,
```
SASS_PATH=node_modules:src
```
Luego en consola, en la carpeta de nuestro proyecto, tenemos que ejecutar:
```
npm install node-sass
```
Por último, en la carpeta src, tenemos que dejar solamente los siguientes archivos: ```App.js, index.js, index.css.``` El código de cada uno de ellos debe quedar así:
```
// App.js
import React from 'react'
import './index.css'
const App = () => (
    <></>
);
export default App
```
```
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App />, document.getElementById('root'))
```
Todos estos pasos los hacemos si estamos creando un proyecto desde cero. Si nos clonamos un repositorio de uno ya hecho, lo primero que tenemos que hacer es, dentro de la carpeta del proyecto:
```
npm install
```

Para que se instalen todas las dependencias (cuando se sube un proyecto a git las dependencias y librerías no se suben). Si en algún momento hacemos git pull puede que tengamos que hacer lo mismo si es que se instaló alguna dependencia o librería que nos falte.


Para iniciar la aplicación, en la carpeta de la misma, hacemos en consola:
```
npm start
```