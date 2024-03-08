import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "./Actions";

function App() {
  const x = useSelector((state) => state.updateValue);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Store</h1>
      <button onClick={() => dispatch(increase())}>+</button>
      <input type="text" readOnly value={x}></input>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
}

export default App;
