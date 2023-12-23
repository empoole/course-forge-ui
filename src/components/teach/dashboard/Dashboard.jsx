import PrimaryLayout from "../../../layouts/dashboard/PrimaryLayout";
import DashboardMetrics from "./DashboardMetrics";

/**
The Educator Dashboard in the CourseForge app should provide instructors and course creators with a comprehensive view and tools to manage their courses effectively:

Course Overview:
Total number of courses created.
Overview of course enrollment and current active students.
Progress tracking of each course (completion rates, average scores, etc.).

Course Management:
List of created courses with options to edit, update, or delete courses.
Course creation tools and options to add new modules, lectures, quizzes, assignments, etc.

Content Creation and Upload:
Access to upload and manage course content (lecture videos, documents, quizzes, assignments, etc.).
Statistics on content utilization (views, downloads, completion rates).
Assessment and Grading:

Overview of assessments (quizzes, exams, assignments) associated with each course.
Access to review, grade, and provide feedback on submitted assignments or quizzes.

Engagement and Communication:
Discussion forum activity related to each course (posts, replies, engagement metrics).
Options to communicate with enrolled students (messaging, announcements, reminders).

Analytics and Reports:
Learner engagement analytics (time spent, interactions) for each course.
Progress reports, performance analytics, and trends over time.

Customization and Settings:
Options to customize course settings (access permissions, visibility, enrollment criteria).
Personalization settings for notifications, updates, and alerts.

Financial Information (if applicable):
Revenue generated from courses (if the platform involves paid courses).
Sales analytics, transactions, and payouts (for paid courses).
 
 */

const Dashboard = () => {
  return (
    <PrimaryLayout title="Course Overview">
      <div className="flex flex-wrap">
        <DashboardMetrics />
      </div>

      <div className="flex flex-row flex-wrap flex-grow mt-2">
        {/* My Courses */}
        <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div>

        {/* <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div>

        <div className="w-full md:w-1/2 xl:w-1/3 p-6"></div> */}
      </div>

      <div>{/* My Students (Table) */}</div>
    </PrimaryLayout>
  );
};

export default Dashboard;
