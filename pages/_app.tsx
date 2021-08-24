import Head from "next/head";
import { useStore } from "../store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import NextNProgress from "nextjs-progressbar";
import "style/style.css";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const persistor = persistStore(store, {}, function () {
    persistor.persist();
  });

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
      </Head>
      <NextNProgress height={4} color="#eb362d" />
      <Component {...pageProps} />
    </Provider>
  );
}
