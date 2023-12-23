// This is where you set the question text
// Can include images
// Must include an answer type

import { useState } from "react";
import MultipleChoice from "../answers/MultipleChoice";
import ShortAnswer from "../answers/ShortAnswer";
import FillIn from "../answers/FillIn";
import PrimaryLayout from "../../../../layouts/dashboard/PrimaryLayout";

const CreateQuestion = () => {
  const [questionText, setQuestionText] = useState();
  const [answerType, setAnswerType] = useState();

  return (
    <PrimaryLayout title="Create a Question">
      <textarea
        name="question"
        id="question"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Question text..."
      ></textarea>

      <div>Select answer type</div>
      <select
        name="answer-type"
        id="answer-type"
        onChange={(e) => setAnswerType(e.target.value)}
      >
        <option value="multiple-choice">Multiple Choice</option>
        <option value="fill-in">Fill In</option>
        <option value="short-answer">Short Answer</option>
        <option value="file-upload">File Upload</option>
      </select>

      <div className="flex justify-center flex-col m-auto">
        {/* TODO: Refactor this */}
        {answerType === "multiple-choice" ? <MultipleChoice /> : null}
        {answerType === "fill-in" ? <FillIn /> : null}
        {answerType === "short-answer" ? <ShortAnswer /> : null}
      </div>
    </PrimaryLayout>
  );
};

export default CreateQuestion;
