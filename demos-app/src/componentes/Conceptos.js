import {BrowserRouter as Router, Route, Switch}from "react-router-dom";
import Home from "../componentes/pages/home.js";
import Contacto from "../componentes/pages/Contacto";
import Acerca from "../componentes/pages/Acerca";
import MenuConceptos from "./MenuConceptos";

const Conceptos = () =>{
    return(
        <div>
            <h2> Conceptos Basicos</h2>
            <MenuConceptos />

            <Router> 
             <Switch>



                <Route exact path ="/" componentes={Home} /> 
            
                <Route exact path="/acerca" componentes={Conocenos} /> 
                    
                
                <Route exact path="/contacto"componentes={Contacto} /> 
                    
                
                
                </Switch>
                
            </Router>
        </div>
    )

}

export default Conceptos;