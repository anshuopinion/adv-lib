import React from "react";
import StudentProfile from "../components/student/StudentProfile";
import styled from "styled-components";
import BooksPanel from "../components/student/BooksPanel";
import PersonalBooks from "../components/student/PersonalBooks";

const StyledStudent = styled.div`
  background: black;
  display: grid;
  grid-template-areas:
    "student-profile book-panel book-panel"
    "student-profile my-book my-book";
  grid-gap: 1rem;
`;

const Student = () => {
  return (
    <StyledStudent>
      <StudentProfile />
      <BooksPanel />
      <PersonalBooks />
    </StyledStudent>
  );
};

export default Student;
