import { Component } from "react";

interface ClassStateProps {
  name: string;
}
interface ClassStateState {
  error: boolean;
}

export class ClassState extends Component<ClassStateProps, ClassStateState> {
  constructor(props: ClassStateProps) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please provide the security code. </p>

        {this.state.error && <p>Error: the code is invalid.</p>}

        <input type="text" name="code" id="code" />
        <button
          onClick={() =>
            this.setState((prevState) => ({
              error: !prevState.error,
            }))
          }
        >
          Check
        </button>
      </div>
    );
  }
}
