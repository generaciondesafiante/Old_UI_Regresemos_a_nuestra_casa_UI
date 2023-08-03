import { Header } from '../Header/Header';
import './MsgForgetPassword.css';
export const MsgForgetPassword = () => {
  return (
    <>
      <Header />
      <section className="msg-forget_container">
        <h2 className="msg-forget_title">
          Revisa tu correo y sigue las instrucciones
        </h2>
        <div className="msg-forget_message">
          <p className="message_paragraph">
            Te hemos enviado un correo a <b>generaciondesafiante@gmail.com</b>{' '}
            con las instrucciones para cambiar tu contraseña
          </p>
        </div>
      </section>
    </>
  );
};
