// Teacher can set the word limit, but there is a hard cap so we don't get too crazy
import { useState } from "react";

const ShortAnswer = () => {
  const [charLimit, setCharLimit] = useState(255);

  return (
    <>
      <div>Set a character limit for the answer.</div>
      <input
        type="number"
        name="char-limit"
        id="char-limit"
        value={charLimit}
        onChange={(e) => setCharLimit(e.target.value)}
        placeholder="Character limit"
      />
    </>
  );
};

export default ShortAnswer;
