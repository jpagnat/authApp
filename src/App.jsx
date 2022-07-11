import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login.jsx";
import { Admin } from "./components/Admin.jsx";
import { Menu } from "./components/Menu.jsx";
import { Inicio } from "./components/Inicio.jsx";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
        <Toaster position="top-center" />
      </Router>
    </div>
  );
};
