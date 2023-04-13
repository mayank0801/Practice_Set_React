import { useEffect, useState } from "react";
import { fakeFetchQ7 } from "../api/fakeFetchQ7";

export default function Q7() {
  const [isLoading, setLoading] = useState(true);
  const [commentsDetail, setcomments] = useState([]);

  const getComments = async () => {
    try {
      const {
        status,
        data: { comments }
      } = await fakeFetchQ7("https://example.com/api/comments");
      setcomments(comments);
      setLoading(false);
    } catch (e) {}
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div>
      <h1>Comments</h1>
      {isLoading && <h4>Loading Comments...</h4>}

      {commentsDetail.map(({ name, text }, indext) => (
        <div key={indext}>
          <h3>{name}</h3>
          <p>{text}</p>
          <button
            onClick={() =>
              setcomments(
                commentsDetail.filter((obj, index) => index !== indext)
              )
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
