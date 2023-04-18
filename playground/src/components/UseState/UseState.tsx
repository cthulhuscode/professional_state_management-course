import { ChangeEvent, useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

interface UseStatePros {
  name: string;
}

export const UseState = ({ name }: UseStatePros) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;

    console.log("effect");

    setTimeout(() => {
      if (value !== SECURITY_CODE) setError(true);

      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please provide the security code. </p>

      {error && !loading && <p>Error: the code is invalid.</p>}

      {loading && <p>Loading....</p>}

      <input
        type="text"
        name="code"
        id="code"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onFocus={() => setError(false)}
      />
      <button
        onClick={() => {
          setLoading(true);
        }}
      >
        Check
      </button>
    </div>
  );
};
