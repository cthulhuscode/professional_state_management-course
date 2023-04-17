import { useState } from "react";

interface UseStatePros {
  name: string;
}

export const UseState = ({ name }: UseStatePros) => {
  const [error, setError] = useState(false);

  return (
    <div>
      <h2>Delete {name}</h2>
      <p>Please provide the security code. </p>

      {error && <p>Error: the code is invalid.</p>}

      <input type="text" name="code" id="code" />
      <button onClick={() => setError(!error)}>Check</button>
    </div>
  );
};
