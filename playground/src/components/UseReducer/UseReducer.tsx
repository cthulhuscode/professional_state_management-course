import {
  ChangeEvent,
  FocusEvent,
  useEffect,
  useReducer,
  
} from "react";
import {
  onCheck,
  onConfirm,
  onDelete,
  onError,
  onInputChange,
  onInputFocus,
  onReset,
} from "../../reducers/actions";
import { reducer } from "../../reducers/reducer";

const SECURITY_CODE = "paradigma";

interface UseReducerPros {
  name: string;
}

export const UseReducer = ({ name }: UseReducerPros) => {
  // Pass the reducer and the initialState
  const [state, dispatch] = useReducer(reducer, {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(onInputChange(e.target.value));

  const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
    dispatch(onInputFocus());

  useEffect(() => {
    if (!state.loading) return;

    console.log("effect");

    setTimeout(() => {
      if (state.value !== SECURITY_CODE) {
        dispatch(onError());
      } else dispatch(onConfirm());
    }, 2000);
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please provide the security code. </p>

        {state.error && !state.loading && <p>Error: the code is invalid.</p>}

        {state.loading && <p>Loading....</p>}

        <input
          type="text"
          name="code"
          id="code"
          value={state.value}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        <button onClick={() => dispatch(onCheck(state.value))}>Check</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Are you sure of deleting it?</p>
        <button onClick={() => dispatch(onDelete())}>
          Yes, delete it
        </button>{" "}
        <button onClick={() => dispatch(onReset())}>No, cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Deleted successfully!</p>

        <button onClick={() => dispatch(onReset())}>Recover it</button>
      </div>
    );
  }
};
