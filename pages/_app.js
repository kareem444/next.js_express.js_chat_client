import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../redux/Store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import AuthApp from "../component/auth/AuthApp";
import Lauout from "../component/Lauout";

function MyApp({ Component, pageProps }) {
  const [Auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  });

  return (
    <Provider store={store}>
      {!Auth ? (
        <AuthApp setAuth={setAuth} />
      ) : (
        <Lauout setAuth={setAuth}>
          <Component {...pageProps} setAuth={setAuth} Auth={Auth} />
        </Lauout>
      )}
    </Provider>
  );
}

export default MyApp;
