import { useEffect, useState } from "react";
import { fakeFetchQ5 } from "../api/fakeFetchQ5";

export default function Q5() {
  const [userDetails, setUserDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [errorDetail, setErrorDetail] = useState();

  const getUserDetails = async () => {
    try {
      const { status, data } = await fakeFetchQ5(
        "http://example.com/api/users"
      );
      setUserDetail(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      // setUserDetail(e);
      setErrorDetail(e);
      setError(true);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <h1>Users Feed</h1>
      {isLoading && <h3>Loading....</h3>}
      {isError && (
        <h2>
          {errorDetail.status} :{errorDetail.message}
        </h2>
      )}
      {console.log(errorDetail)}
      {userDetails.map(({ name, image, likes, comments }) => (
        <div>
          <img
            src={image}
            alt={"User Profile"}
            height={"100px"}
            width={"200px"}
          ></img>
          <h3>{name}</h3>
          <p>Likes:{likes}</p>
          <p>Comments:{comments}</p>
        </div>
      ))}

      {isError && <h2>{userDetails.message}</h2>}
    </div>
  );
}
