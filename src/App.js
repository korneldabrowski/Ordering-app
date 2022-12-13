import React from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div className=' bg-zinc-900'>
      <Header />
      <Meals />
    </div>
  );
}

export default App;
