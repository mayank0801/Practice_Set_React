import { useEffect, useState } from "react";
import { fakeFetchQ6 } from "../api/fakeFetchQ6";
import { uuid } from "uuid";

export default function Q6() {
  const [isLoading, setLoading] = useState(true);
  const [chatDetails, setChatDetail] = useState([]);

  const getChatDetail = async () => {
    try {
      const { status, data } = await fakeFetchQ6(
        "https://example.com/api/userchat"
      );
      setChatDetail(data);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    getChatDetail();
  }, []);

  return (
    <div>
      <h1>Chats</h1>
      {isLoading && <h3>Loading Chats....</h3>}
      <ul>
        {chatDetails.map(({ name, messages }, index) => (
          <li key={index}>
            <h1>{name}'s Chats</h1>
            <ul>
              {messages.map(({ from, message }, index) => (
                <li key={index}>
                  {from}:{message}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
