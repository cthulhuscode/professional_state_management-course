import {
  CHECKED,
  CONFIRMED,
  DELETED,
  ERROR,
  INPUT_CHANGED,
  INPUT_FOCUSED,
  RESET,
} from "./actionTypes";

export const onConfirm = () => ({
  type: CONFIRMED,
  payload: null,
});

export const onError = () => ({
  type: ERROR,
  payload: null,
});

export const onCheck = (code: string) => ({
  type: CHECKED,
  payload: code,
});

export const onDelete = () => ({
  type: DELETED,
  payload: null,
});

export const onReset = () => ({
  type: RESET,
  payload: null,
});

export const onInputChange = (code: string) => ({
  type: INPUT_CHANGED,
  payload: code,
});

export const onInputFocus = () => ({
  type: INPUT_FOCUSED,
  payload: null,
});
