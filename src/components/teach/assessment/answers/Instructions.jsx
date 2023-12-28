// This is for just text or images that don't have an answer associated with them
// Should be used sparingly as they won't be paired with answers
// Make sure this is explained well in the interface
import { useState } from "react";

const Instructions = () => {
  const [instructions, setInstructions] = useState();

  return (
    <>
      <div>
        <p>
          This is for just text or images that don&rsquo;t have an answer
          associated with them. Should be used sparingly as they won&rsquo;t be
          paired with answers
        </p>
      </div>
      <textarea
        name="instructions"
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        cols="30"
        rows="10"
      ></textarea>
    </>
  );
};

export default Instructions;
