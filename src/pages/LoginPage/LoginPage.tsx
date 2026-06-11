import "./LoginPage.scss";
import logoImage from "../../assets/Group13.png";
import { AuthButton } from "../../components/AuthButton/AuthButton";

export const LoginPage = () => {
  return (
    <main className="login-page">
      <section className="login-image" />

      <section className="login-auth">
        <div className="auth-content">
          <img className="logo-image" src={logoImage} alt="Innowise logo" />

          <AuthButton />
        </div>

        <p className="version">Version: 1.0.0</p>

        <footer className="footer">
          <p>Technical support</p>
        </footer>
      </section>
    </main>
  );
};
