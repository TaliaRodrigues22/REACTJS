import React from "react";
import styled, { injectGlobal } from "styled-components";
import reset from "../Styles/reset";
import Main from "./Main";
import Header from "./Header";

injectGlobal`${reset}`;

const Wrapper = styled.section`
    height: 400px;
    width: 100%;
    background: #2bc0e4; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to left,
        #eaecc6,
        #2bc0e4
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to left,
        #eaecc6,
        #2bc0e4
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    `;

const App = () => (
    <Wrapper>
        <Header />
        <Main />
    </Wrapper>
);

export default App;
