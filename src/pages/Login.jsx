import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext";
import { Section } from "../components/Section";
import s from "./styles/Login.module.scss";

export const Login = () => {
  const [loginMessage, setLoginMessage] = useState("");
  const [error, setError] = useState(null);

  const { setUserData } = useContext(UserContext);

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", data.username);
    urlencoded.append("password", data.password);

    const options = {
      method: "POST",
      body: urlencoded,
    };

    fetch("https://api.mediehuset.net/token", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setUserData(data);
          setLoginMessage("Du er nu logget ind");
          navigate("/dashboard");
        } else {
          setLoginMessage("Dit login er forkert");
        }
      })
      .catch((error) => {
        console.error("Der opstod en fejl", error);
        setError("Der opstod en fejl. Prøv igen");
      });
  };

  return (
    <Section>
      <h2>Login</h2>
      <p>Indtast dit brugernavn og adgangskode for at logge ind</p>

      <div id="formDiv">
        <form className={s.FormContainer} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            autoComplete="email"
            placeholder="Brugernavn"
            {...register("username", {
              required: "E-mailen er nødvendig.",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ugyldigt e-mailformat",
              },
            })}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <input
            type="password"
            autoComplete="current-password"
            placeholder="Adgangskode"
            {...register("password", {
              required: "Koden er nødvendig.",
              minLength: {
                value: 5,
                message: "Adgangskoden skal være mindst 5 tegn lang",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}

          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>

      {loginMessage && <p>{loginMessage}</p>}
      {error && <p className="error">{error}</p>}
    </Section>
  );
};
