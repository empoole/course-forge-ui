import PrimaryLayout from "../dashboard/PrimaryLayout";

/**
Course timeline
Edit Timeline

                |- Add Quiz
Add Assessment -|- Add Exam
                |- Add Worksheet

           |- Add Reading
Add Media -|- Add Image
           |- Add Video


Courses can be entirely online or used to supplement a live course.
Each assessment or media has an assign date and a due date.
Assesments and media can alternatively have no dates and instead have prerequisites (complete X Reading then complete Y Assessment)
Assessments and media all have permalinks and all prerequisites and dates can optionally be removed so teachers can just link them as needed

*/

const CreateCourse = () => {
  return (
    <PrimaryLayout>
      <div className="bg-red">CREATE COURSE</div>
      <div>Timeline</div>
      <div>Add assessment</div>
      <div>Add media</div>
    </PrimaryLayout>
  );
};

export default CreateCourse;
