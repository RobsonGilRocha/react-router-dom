import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components'

const Row =styled.div`
display:flex;
align-items:center;
justify-content:center;
`
const space =styled.div`

`

export const Container = styled.div`
  
`;

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Row>
              <Link to="/">Home</Link>
              <space>///////////////</space>
              <Link to="/about">About</Link>
              <space>///////////////</space>
              <Link to="/users">Users</Link>
              <space>///////////////</space>
              <Link to="/conct">Conct</Link>
          </Row>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
         <Route path="/conct">
            <Conct />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Pagina Inicial</h2>;
}

function About() {
  return <h2>Sobre</h2>;
}

function Users() {
  return <h2>Usuarios</h2>;
}

function Conct() {
  return <h2>Contatos</h2>
}