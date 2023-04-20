import { ChangeEvent, useEffect, useState } from "react";

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

  useEffect(() => {
    if (!state.loading) return;

    console.log("effect");

    setTimeout(() => {
      if (state.value !== SECURITY_CODE) {
        setState({ ...state, error: true, loading: false });
      } else
        setState({ ...state, error: false, loading: false, confirmed: true });
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
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setState({ ...state, value: e.target.value })
          }
          onFocus={() => setState({ ...state, error: false })}
        />
        <button
          onClick={() => {
            setState({ ...state, loading: true });
          }}
        >
          Check
        </button>
      </div>
    );
  } else if (state.confirmed && !state.deleted) {
    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Are you sure of deleting it?</p>
        <button
          onClick={() => setState({ ...state, deleted: true, value: "" })}
        >
          Yes, delete it
        </button>{" "}
        <button
          onClick={() =>
            setState({ ...state, confirmed: false, deleted: false })
          }
        >
          No, cancel
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Deleted successfully!</p>

        <button
          onClick={() =>
            setState({ ...state, deleted: false, confirmed: false })
          }
        >
          Recover it
        </button>
      </div>
    );
  }
};
