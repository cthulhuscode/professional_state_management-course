import {
  CHECKED,
  CONFIRMED,
  DELETED,
  ERROR,
  INPUT_CHANGED,
  INPUT_FOCUSED,
  RESET,
} from "./actionTypes";

interface StateType {
  value: string;
  error: boolean;
  loading: boolean;
  deleted: boolean;
  confirmed: boolean;
}

interface ActionType {
  type: string;
  payload: any;
}

export function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }

    case CHECKED: {
      return {
        ...state,
        loading: true,
      };
    }

    case CONFIRMED: {
      return {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
      };
    }

    case DELETED: {
      return {
        ...state,
        deleted: true,
        value: "",
      };
    }

    case RESET: {
      return { ...state, confirmed: false, deleted: false, value: "" };
    }

    case INPUT_CHANGED: {
      return {
        ...state,
        value: action.payload,
      };
    }

    case INPUT_FOCUSED: {
      return {
        ...state,
        error: false,
      };
    }

    default: {
      return { ...state };
    }
  }
}
