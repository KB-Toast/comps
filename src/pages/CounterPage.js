import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change-value-to-add";
const ADD_CUSTOM_VALUE = "add-custom-value";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_CUSTOM_VALUE:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      // community convention to handle "default" either by throwing an err or by returning the state
      //throw new Error("unexpected action type: " + action.type);
      return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    // parseInt because typeof event.target.value is initially a string
    // || 0 to deal with "NaN" when clicking on delete
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: ADD_CUSTOM_VALUE,
      payload: state.valueToAdd,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label> Amount to add :</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
        />
        <Button> Add it ! </Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
