import { Component } from "react";
import { Loading } from "../Loading/Loading";

const SECURITY_CODE = "paradigma";

interface ClassStateProps {
  name: string;
}
interface ClassStateState {
  error: boolean;
  loading: boolean;
  value: string;
}

export class ClassState extends Component<ClassStateProps, ClassStateState> {
  constructor(props: ClassStateProps) {
    super(props);

    this.state = {
      error: false,
      loading: false,
      value: "",
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
      if (SECURITY_CODE !== this.state.value) this.setState({ error: true });
      else this.setState({ error: false });

      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { name } = this.props;
    const { error, loading, value } = this.state;

    return (
      <div>
        <h2>Delete {name}</h2>
        <p>Please provide the security code. </p>

        {error && !loading && <p>Error: the code is invalid.</p>}
        {loading && <Loading />}

        <input
          type="text"
          name="code"
          id="code"
          placeholder="Security code"
          value={value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        <button
          onClick={() => {
            this.setState({ loading: true });
          }}
        >
          Check
        </button>
      </div>
    );
  }
}
