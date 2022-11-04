import { useState } from "react";
import * as api from "../api";

const Votes = ({ review_id, votes }) => {
  const [userVotes, setUserVotes] = useState(0);
  const handleUpVotes = () => {
    if (userVotes === 0) {
      setUserVotes(1);
      api.patchVotes(review_id, 1);
    } else if (userVotes === -1) {
      setUserVotes(0);
      api.patchVotes(review_id, 1);
    }
  };

  const handleDownVotes = () => {
    if (userVotes === 0) {
      setUserVotes(-1);
      api.patchVotes(review_id, -1);
    } else if (userVotes === 1) {
      setUserVotes(0);
      api.patchVotes(review_id, -1);
    }
  };

  return (
    <section>
      <p style={{ fontStyle: "italic" }}>Votes: {votes + userVotes}</p>
      <button className="thumbsUp" onClick={handleUpVotes} disabled={userVotes === 1 ? true : false}>      
      👍</button>
      <button className="thumbsDown" onClick={handleDownVotes} disabled={userVotes === -1 ? true : false}>👎</button>
    </section>
  );
};

export default Votes;
