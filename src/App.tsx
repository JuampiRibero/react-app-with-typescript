import { useEffect, useRef, useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";
import { Subscriber } from "./types";

interface AppState {
  subscribers: Array<Subscriber>;
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "John",
    time: 3,
    avatar: "https://i.pravatar.cc/150?u=John",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in.",
  },
  {
    nick: "Ryan",
    time: 5,
    avatar: "https://i.pravatar.cc/150?u=Ryan",
  },
];

function App() {
  const [subscribers, setSubscribers] = useState<AppState["subscribers"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubscribers(INITIAL_STATE);
  }, []);

  // useEffect(() => {
  //   const fetchSubscribers = async (): Promise<SubscribersResponseFromApi> => {
  //     return await fetch("http://localhost:3000/subs").then((res) =>
  //       res.json()
  //     );
  //   };

  //   const mapFromApiToSubscribers = (
  //     apiResponse: SubscribersResponseFromApi
  //   ): Array<Subscriber> => {
  //     return apiResponse.map((subscribersFromApi) => {
  //       const {
  //         nick,
  //         months: time,
  //         profileUrl: avatar,
  //         description: description,
  //       } = subscribersFromApi;

  //       return {
  //         nick,
  //         time,
  //         avatar,
  //         description,
  //       };
  //     });
  //   };

  //   fetchSubscribers().then(mapFromApiToSubscribers).then(setSubscribers);
  // }, []);

  const handleNewSubscriber = (newSubscriber: Subscriber): void => {
    setSubscribers((subscribers) => [...subscribers, newSubscriber]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div ref={divRef}>
      <h1>Subscribers</h1>
      <List subscribers={subscribers} />
      <h4>New subscribers: {newSubsNumber}</h4>
      <Form onNewSubscriber={handleNewSubscriber} />
    </div>
  );
}

export default App;
