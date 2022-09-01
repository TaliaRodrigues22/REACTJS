import { Link } from "react-router-dom";


const MenuConceptos = () =>{

    return <nav>
        <ol> 
            <li>
                <span> Enlace HTML (no recomendado):</span>
               <a href="/"> Home</a>
               <a href="/Aceca">Acerca</a>
                <a href="/">Contacto</a>
            </li>
            <li>
              <span> Componentes link</span>
              <Link to="" url>Home</Link>
              <Link to="/acerca">Acerca</Link>
              <Link to="/contacto">Contacto</Link>
            </li>
        </ol>
    </nav>;
}

export default MenuConceptos;