// TODO: Allow importing a comma separated list of answers for convenience

import { useState } from "react";

const MultipleChoice = () => {
  const [choices, setChoices] = useState([]);
  const [newChoice, setNewChoice] = useState("");
  const [isMultiSelect, setisMultiSelect] = useState(false);

  const handleAddChoice = () => {
    if (newChoice) {
      setChoices([...choices], newChoice);
    }
  };

  const handleRemoveChoice = (index) => {
    setChoices(choices.filter((_choice, i) => i !== index));
  };

  const handleEditChoice = (index, e) => {
    setChoices(
      choices.map((choice, i) => (i === index ? e.target.value : choice))
    );
  };

  return (
    <>
      <div>
        <div>Allow Multiple Selections</div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isMultiSelect}
            onChange={() => setisMultiSelect(!isMultiSelect)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-sky-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isMultiSelect ? "Allowed" : "Disallowed"}
          </span>
        </label>
      </div>

      <div>
        <div>Answer Choices</div>
        {choices.map((choice, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                name={`choice_${index}`}
                id={`choice_${index}`}
                value={choice}
                onChange={(e) => handleEditChoice(e, index)}
              />
              <button onClick={() => handleRemoveChoice(index)}>
                Remove Choice
              </button>
            </div>
          );
        })}
        <div className="w-full">
          <input
            type="text"
            name="new-choice"
            id="new-choice"
            value={newChoice}
            onChange={(e) => setNewChoice(e.target.value)}
            placeholder="Answer choice text..."
            className="shadow appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            className="py-2 px-3 border bg-gray-200"
            onClick={handleAddChoice}
          >
            Add Choice
          </button>
        </div>
      </div>
    </>
  );
};

export default MultipleChoice;
