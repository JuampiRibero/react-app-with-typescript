import useNewSubForm from "../hooks/useNewSubForm";
import { Subscriber } from "../types";

interface FormProps {
  onNewSubscriber: (newSubscriber: Subscriber) => void;
}

const Form = ({ onNewSubscriber }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNewSubscriber(inputValues);
    dispatch({ type: "clear" });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.time}
          type="number"
          name="time"
          placeholder="time"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClear} type="button">
          Clear
        </button>
        <button type="submit">Add new sub</button>
      </form>
    </div>
  );
};

export default Form;
