import React from "react";
import Rutas from "./router/Router";

function App() {
  return (
  <Rutas/>
  );
}

// se registra el service worker
if(navigator.serviceWorker){
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => console.log('service worker registered', reg))
  .catch((err) => console.log('service worker not registered', err))
}

export default App;
