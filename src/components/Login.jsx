import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";

export const Login = () => {
  const [email, setEmail] = useState(" ");
  const [passwd, setPasswd] = useState(" ");
  const history = useHistory();

  const registrarUsuario = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, passwd)
      .then((res) => {
        history.push("/");
        toast.success("Usuario registrado, bienvenido!");
      })
      .catch((e) => {
        if (e.code === "auth/weak-password") {
          toast.error("La contraseña debe tener seis caracteres o más");
        } else if (e.code === "auth/email-already-in-use") {
          toast.error("Usuario ya registrado");
        } else {
          console.log("Error: " + e.code);
        }
      });
  };

  const userLogin = () => {
    auth
      .signInWithEmailAndPassword(email, passwd)
      .then((res) => {
        history.push("/");
        toast.success("Bienvenido!");
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/wrong-password") {
          toast.error("Contraseña Incorrecta");
        }
        if (err.code === "auth/user-not-found") {
          toast.error("Usuario no registrado");
        }
      });
  };

  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col form-login">
        <div className="form-content">
          <form onSubmit={registrarUsuario} className="row">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              type="email"
              placeholder="Ingrese su correo electronico"
            />
            <input
              onChange={(e) => setPasswd(e.target.value)}
              className="form-control mt-4"
              type="password"
              placeholder="Ingrese su contraseña"
            />
            <input
              className="btn btn-dark btn-block mt-4"
              type="submit"
              value="Registrar Usuario"
            />
          </form>
          <button
            onClick={userLogin}
            className="btn btn-success col-12 btn-block mt-4"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      <div className="col"></div>
    </div>
  );
};
