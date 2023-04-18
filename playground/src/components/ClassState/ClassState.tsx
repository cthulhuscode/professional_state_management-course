import { Component } from "react";
import { Loading } from "../Loading/Loading";

interface ClassStateProps {
  name: string;
}
interface ClassStateState {
  error: boolean;
  loading: boolean;
}

export class ClassState extends Component<ClassStateProps, ClassStateState> {
  constructor(props: ClassStateProps) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  UNSAFE_componentWillMount(): void {
    console.log("1. componentWillMount");
  }

  componentDidMount(): void {
    console.log("2. componentDidMount");
  }

  componentWillUnmount(): void {
    console.log("END - componentWillUnmount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");

    if (!this.state.loading) return;

    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { name } = this.props;

    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please provide the security code. </p>

        {this.state.error && <p>Error: the code is invalid.</p>}
        {this.state.loading && <Loading />}

        <input type="text" name="code" id="code" />
        <button
          onClick={() => {
            this.setState((prevState) => ({
              error: !prevState.error,
            }));

            this.setState({ loading: true });
          }}
        >
          Check
        </button>
      </div>
    );
  }
}
