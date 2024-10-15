import { useContext } from "react";
import { InterviewContext } from "../services/InterviewContent";

const ResetInterviewsButton = () => {
  const { resetInterviews, employees } = useContext(InterviewContext);

  // Check if employees array is empty
  const isEmployeesEmpty = employees.length === 0;

  return (
    <>
      {isEmployeesEmpty && (
        <button onClick={resetInterviews}>
          Reset Interviews
        </button>
      )}
    </>
  );
};

export default ResetInterviewsButton;
