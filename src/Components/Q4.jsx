import { useEffect, useState } from "react";
import { fakeFetchQ4 } from "../api/fakeFetchQ4";

export default function Q4({ heading, height, width }) {
  console.log(heading, height, width);
  const [{ name, image, likes, comments }, setuserProfile] = useState({});

  const getUserProfile = async () => {
    try {
      const { status, data } = await fakeFetchQ4(
        "https://example.com/api/user"
      );
      setuserProfile(data);
    } catch (e) {}
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  // console.log(userProfile)
  return (
    <>
      <h1>{heading}</h1>
      <img src={image} alt="profile" height={height} width={width}></img>
      <p>Name:{name}</p>
      <p>Likes:{likes}</p>
      <p>Comments:{comments}</p>
    </>
  );
}
