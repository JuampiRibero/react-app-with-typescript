/* eslint-disable no-case-declarations */
import { useReducer } from "react";
import { Subscriber } from "../types";

interface FormState {
  inputValues: Subscriber;
}

const INITIAL_STATE = {
  nick: "",
  time: 0,
  avatar: "",
  description: "",
};

type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | {
      type: "clear";
    };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return {
        ...state,
        [inputName]: inputValue,
      };
    case "clear":
      return INITIAL_STATE;

    default:
      return state;
  }
};

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};

export default useNewSubForm;
