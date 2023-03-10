import { useState } from 'react';
import Fridge from "./Components/Fridge";
import InputForm from "./Components/InputForm";
function App() {
  const [ foodName, setFoodName ] = useState("");
  const changeName = ({target}) => {
    setFoodName(target.value);
  }

  const [ quantity, setQuantity ] = useState();
  const changeQuantity = ({target}) => {
    setQuantity(target.value);
  }

  const [type, setType] = useState("");
  const changeType = ({target}) => {
    setType(target.value);
  }

  const [ boughtDate, setBoughtDate ] = useState();
  const changeBoughtDate = ({target}) => {
    setBoughtDate(target.value);
  }

  const [ expiredDate, setExpiredDate ] = useState();
  const changeExpiredDate = ({target}) => {
    setExpiredDate(target.value);
  }

  return (
    <div className="App">
      <InputForm foodName={foodName} changeName={changeName}
                 quantity={quantity} changeQuantity={changeQuantity}
                 type={type} changeType={changeType}
                 boughtDate={boughtDate} changeBoughtDate={changeBoughtDate}
                 expiredDate={expiredDate} changeExpiredDate={changeExpiredDate}/>
      <Fridge />
    </div>
  );
}

export default App;
