import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./style.css";
import toast from "react-hot-toast";

export const Menu = () => {
  const [usuario, setUsuario] = useState(null);
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(user);
      }
    });
  });

  const cerrarSesion = () => {
    auth.signOut();
    setUsuario(null);
    history.push("/");
    toast.error("Adios, hasta la proxima!");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {usuario ? (
              <span></span>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </li>
          <li className="nav-item">
            {usuario ? (
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            ) : (
              <span></span>
            )}
          </li>
        </ul>

        {usuario ? (
          <button
            onClick={cerrarSesion}
            className="cerrarSesion btn btn-danger"
          >
            <i class="fas fa-sign-out-alt"></i>
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};
