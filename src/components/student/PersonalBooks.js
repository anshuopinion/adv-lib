import React from "react";
import bookimg from "../../images/book1.webp";
import styled from "styled-components";
const SectionTitle = styled.div`
  span {
    background-color: ${(props) => props.theme.color.main};
    padding: 0.5rem 2rem;
    border-radius: 1rem;
  }
`;
const SectionContent = styled.div`
  margin-top: 3rem;
`;
const CardHeading = styled.div`
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  border-radius: 1rem;
  margin-bottom: 1rem;
  width: 700px;

  span {
    text-align: center;
  }
  .sno {
    flex: 2;
    text-align: center;
    margin-left: 0.5rem;
  }
  .book {
    flex: 5;
  }
  .author {
    text-align: center;
    flex: 5;
  }
  .issued {
    flex: 3;
    text-align: center;
  }
  .exp {
    flex: 5;
    text-align: center;
  }
`;

const Card = styled.div`
  width: 700px;
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0.25rem 0;
  border-radius: 1rem;
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-around;

  span {
    margin-top: 1rem;
  }

  .sno {
    flex: 2;
    text-align: center;
    margin-left: 0.5rem;
  }

  .bookwrapper {
    flex: 5;

    margin-top: 0;
    display: flex;
    flex-direction: row;

    img {
      width: 50px;
      border-radius: 0.4rem;
    }
    span {
      margin-left: 1rem;
    }
  }
  .author {
    flex: 5;
    text-align: center;
  }
  .issued {
    flex: 3;
    text-align: center;
  }
  .exp {
    flex: 5;
    text-align: center;
  }
`;

const Container = styled.section`
  grid-area: my-book;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.light};
  width: 900px;
  height: 400px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  scrollbar-width: 1rem; /* Firefox */
  &::-webkit-scrollbar {
    width: 5px;
  }
  /* &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #fff;
    border-radius: 5px;
  } */

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.main};
    border-radius: 5px;
  }
`;

const PersonalBooks = () => {
  const bookCollection = [
    {
      name: "Book Name",
      author: "Book Author Name",
      issued: "24/05/2020",
      exp: "31/05/2020",
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      issued: "24/05/2020",
      exp: "31/05/2020",
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      issued: "24/05/2020",
      exp: "31/05/2020",
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      issued: "24/05/2020",
      exp: "31/05/2020",
    },
  ];

  return (
    <>
      <Container>
        <SectionTitle>
          <span>Issued Books</span>
        </SectionTitle>
        <SectionContent>
          <CardHeading>
            <span className="sno">S.no.</span>
            <span className="book">Book</span>
            <span className="author">Author</span>
            <span className="issued">Iussed Date</span>
            <span className="exp">Exp. Date</span>
          </CardHeading>
          {bookCollection.map((book, i) => (
            <Card key={i}>
              <span className="sno">{i + 1}.</span>
              <span className="bookwrapper">
                <img src={bookimg} alt="book" />
                <span> {book.name}</span>
              </span>
              <span className="author">{book.author}</span>
              <span className="issued">{book.issued}</span>
              <span className="exp">{book.exp}</span>
            </Card>
          ))}
        </SectionContent>
      </Container>
    </>
  );
};

export default PersonalBooks;
