import { useState } from "react";
import PropTypes from "prop-types";

const ShortAnswer = ({ onDataChange }) => {
  const [charLimit, setCharLimit] = useState(255);

  const handleChange = (e) => {
    setCharLimit(e.target.value);
    onDataChange({
      answerType: "short-answer",
      answerData: {
        charLimit: charLimit,
      },
    });
  };

  return (
    <>
      <div>Set a character limit for the answer.</div>
      <input
        type="number"
        name="char-limit"
        id="char-limit"
        value={charLimit}
        onChange={handleChange}
        placeholder="Character limit"
      />
    </>
  );
};

ShortAnswer.propTypes = {
  onDataChange: PropTypes.func.isRequired,
};

export default ShortAnswer;
