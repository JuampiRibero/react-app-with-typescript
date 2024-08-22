import { Subscriber } from "../types";

interface Props {
  subscribers: Array<Subscriber>;
}

const List = ({ subscribers }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subscribers.map((subscriber) => {
      return (
        <li key={subscriber.nick}>
          <img src={subscriber.avatar} alt={`Avatar for ${subscriber.nick}`} />
          <h4>
            {subscriber.nick} (<small>{subscriber.time}</small>)
          </h4>
          <p>{subscriber.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
