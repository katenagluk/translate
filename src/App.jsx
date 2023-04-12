import { useState } from "react";
import styled from "styled-components";
import OrderPage from "./components/pages/OrderPage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <OrderPage/>
    </div>
  );
}

export default App;
