import { ChangeEvent, FocusEvent, useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

interface UseStatePros {
  name: string;
}

export const UseState = ({ name }: UseStatePros) => {
  // Compound state
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  // Independent states
  // const [value, setValue] = useState("");
  // const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);

  const onConfirm = () =>
    setState({ ...state, error: false, loading: false, confirmed: true });
  const onError = () => setState({ ...state, error: true, loading: false });
  const onCheck = () => setState({ ...state, loading: true });
  const onDelete = () => setState({ ...state, deleted: true, value: "" });
  const onReset = () =>
    setState({ ...state, confirmed: false, deleted: false, value: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setState({ ...state, value: e.target.value });

  const handleFocus = (e: FocusEvent<HTMLInputElement>) =>
    setState({ ...state, error: false });

  useEffect(() => {
    if (!state.loading) return;

    console.log("effect");

    setTimeout(() => {
      if (state.value !== SECURITY_CODE) {
        onError();
      } else onConfirm();
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
        <button onClick={onCheck}>Check</button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Are you sure of deleting it?</p>
        <button onClick={onDelete}>Yes, delete it</button>{" "}
        <button onClick={onReset}>No, cancel</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Deleted successfully!</p>

        <button onClick={onReset}>Recover it</button>
      </div>
    );
  }
};
