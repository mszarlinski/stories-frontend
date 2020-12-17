import React from "react";
import "./App.css";
import FilterableProductTable from "./components/products_poc/FilterableProductTable";
import { Home } from "./components/Home";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>
                <hr />

                <Switch>
                    <Route path="/products">
                        <FilterableProductTable/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>

                <hr />
                <span>Footer</span>
            </div>
        </BrowserRouter>
    );
}

export default App;
