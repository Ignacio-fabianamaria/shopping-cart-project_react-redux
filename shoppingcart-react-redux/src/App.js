import React from "react";
import { Switch, Route } from "react-router-dom"
import Login from "./components/login/Login";
import ProductsField from "./components/productsField/ProductsField";


class App extends React.Component  {
  
render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/productsField" component={ ProductsField } />
        </Switch>
      </div>
    );

  }
};

export default App;
