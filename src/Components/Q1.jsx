import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetchQ1";

export default function Q1() {
  const [userStatus, setUserStatus] = useState([]);
  const getUserData = async () => {
    try {
      const {
        status,
        data: { users }
      } = await fakeFetch("https://example.com/api/users/status");
      setUserStatus(users);
      // console.log(status,users);
    } catch (e) {
      console.log(e, "err");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // console.log("userStatus",userStatus,typeof userStatus)
  return (
    <>
      <h1>Online User</h1>
      <ul>
        {userStatus.map(({ name, status }) => (
          <li
            style={{
              listStyle: "none",
              color: status === "Online" ? "green" : "red"
            }}
          >
            <h2>
              {name}-{status}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
}

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.
