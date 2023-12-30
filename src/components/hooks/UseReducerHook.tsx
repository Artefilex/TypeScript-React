import { useReducer } from "react";

const initialCount = { count: 0 };
type CounterState = {
  count: number;
};
// type CounterAction = {
//   type: "inc" | "dec" | "reset"
//   payload?: number;
// };
type UpdateAction ={
  type: "inc" | "dec" 
  payload: number;
}
type ResetAction = {
  type: "reset"
}
type CounterAction = UpdateAction | ResetAction

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
      case "inc":
        return { count: state.count + action.payload  };
      case "dec":
        return { count: state.count - action.payload };
        case "reset":
           return initialCount ;
      default:
        return state;
    }
  }
function UseReducerHook() {
 const [state, dispatch ] = useReducer( reducer , initialCount)
  return <div>
    Count {state.count}    
    <button onClick={()=> dispatch({type:"inc", payload : 1} ) }> inc</button>
    <button onClick={()=> dispatch({type:"dec", payload : 1} ) }> dec</button>
    <button onClick={()=> dispatch({type:"reset" } ) }> reset</button>
  </div>
}
export default UseReducerHook



