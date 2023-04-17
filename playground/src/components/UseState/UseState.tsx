import { useEffect, useState } from "react";

interface UseStatePros {
  name: string;
}

export const UseState = ({ name }: UseStatePros) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) return;

    console.log("effect");

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please provide the security code. </p>

      {error && <p>Error: the code is invalid.</p>}

      {loading && <p>Loading....</p>}

      <input type="text" name="code" id="code" />
      <button
        onClick={() => {
          setError(!error);
          setLoading(true);
        }}
      >
        Check
      </button>
    </div>
  );
};
