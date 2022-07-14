import "./styles.css";
import React from "react";

// que es un function component?
// que hace el return?
export default function App() {
  //let numero = 213213
  return (
    <div className="App">
      <h1>Twitter</h1>
      {/* 
        elemento para escribir tweet
      */}
      <div
        style={{
          border: "1px solid black",
          padding: "10px"
        }}
      >
        <span>Escribir tweet</span>
        <input />
      </div>
      <Feed />
    </div>
  );
}

function Feed() {
  const listaDeTweets = [
    {
      id: 1,
      texto: "Hola mundo"
    },
    {
      id: 2,
      texto: "Hello world"
    }
  ];
  return (
    <ul
      style={{
        border: "1px solid blue",
        padding: "10px"
      }}
    >
      {listaDeTweets.map(function (tweet, indice) {
        return (
          <li
            key={tweet.id}
            style={{
              border: "1px solid red",
              padding: "10px",
              marginBottom: "5px"
            }}
          >
            {tweet.texto}
          </li>
        );
      })}
    </ul>
  );
}

function Boton() {
  return <button>Hace click!</button>;
}

function Lista() {
  const elementos = [
    {
      id: 1,
      texto: "Lechuga"
    },
    {
      id: 2,
      texto: "Tomate"
    },
    {
      id: 3,
      texto: "Queso"
    }
  ];

  return (
    <>
      <h3>Lista del supermercado:</h3>
      <ul>
        {elementos.map(function (elemento, indice) {
          return (
            <li key={elemento.id}>
              {elemento.texto}! {indice}
            </li>
          );
        })}
      </ul>
    </>
  );
}

// React.createElement(component, props, ...children)

export function AppSinJSX() {
  return React.createElement(
    "div",
    { className: "App" },
    React.createElement("h1", null, "Hola mundo sin JSX!"),
    React.createElement("h2", null, "Estamos usando React"),
    React.createElement("img", {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      alt: "React logo",
      height: "100px"
    })
  );
}
