import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons/faUser";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons/faEnvelopeOpen";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { faUniversity } from "@fortawesome/free-solid-svg-icons/faUniversity";
import { faBookReader } from "@fortawesome/free-solid-svg-icons/faBookReader";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons/faCalendarAlt";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";

import styled from "styled-components";
const Icon = styled.i`
  text-align: center;
  font-size: 1.3rem;
  width: 40px;
  align-self: flex-end;
`;
const Container = styled.section`
  margin-left: 1rem;
  margin-top: 1rem;
  grid-area: student-profile;
  width: 300px;
  height: 500px;
  background-color: ${(props) => props.theme.color.light};
  padding-top: 2rem;
`;

const User = styled.div`
  display: flex;
  margin: auto 1rem;
  justify-content: space-between;
  margin-right: 2rem;
`;
const ProfilePic = styled.i`
  font-size: 5rem;
`;
const Name = styled.p`
  font-size: 1.5rem;
  margin-left: 1rem;

  align-self: flex-end;
  margin-bottom: 1rem;
`;

const Card = styled.div`
  /* padding: 0.5rem 0.5rem; */
  display: flex;
  background-color: #60ddd5;
  margin: auto 1rem;
  align-content: center;
  height: 40px;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
const CardDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: center;
`;

const Key = styled.span`
  text-align: left;

  align-self: flex-end;
`;
const Value = styled.span`
  text-align: right;

  align-self: flex-end;
`;
const StudentProfile = () => {
  const icon = [
    faUser,
    faEnvelopeOpen,
    faMobile,
    faUniversity,
    faBookReader,
    faCalendarAlt,
    faCalendarDay,
  ];
  const studentDetails = {
    name: "Rohan Kumar",
    userDetails: {
      Username: "rohanbaba",
      Email: "rohan83@gmail.com",
      Mobile: "7865584623",
      University_ID: "1820210005845",
      Library_Card_No: "785",
      Semester: 7,
      Year: 2017,
    },
  };

  return (
    <>
      <Container>
        <User>
          <ProfilePic>
            <FontAwesomeIcon icon={faUser} />
          </ProfilePic>
          <Name>{studentDetails.name}</Name>
        </User>

        {Object.entries(studentDetails.userDetails).map(([key, value], i) => {
          if (key === "Username") {
            return (
              <Card key={key}>
                <Icon>
                  <FontAwesomeIcon icon={icon[i]} />
                </Icon>
                <CardDetails>
                  <Key>{key}</Key>
                  <Value>@{value}</Value>
                </CardDetails>
              </Card>
            );
          }
          if (key === "Semester") {
            return (
              <Card key={key}>
                <Icon>
                  <FontAwesomeIcon icon={icon[i]} />
                </Icon>
                <CardDetails>
                  <Key>{key}</Key>
                  <Value>{value}th</Value>
                </CardDetails>
              </Card>
            );
          }

          return (
            <Card key={key}>
              <Icon>
                <FontAwesomeIcon icon={icon[i]} />
              </Icon>
              <CardDetails>
                <Key>{key.split("_").join(" ")}</Key>
                <Value>{value}</Value>
              </CardDetails>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default StudentProfile;
