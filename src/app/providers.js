"use client";

import Navbar from "@/components/shared/Navbar";
import { persistStore } from "redux-persist";
import store from "@/redux/reduxStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let persistor = persistStore(store);

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}
