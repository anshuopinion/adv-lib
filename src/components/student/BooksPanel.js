import React from "react";
import bookimg from "../../images/book1.webp";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { Formik, Form, Field } from "formik";
const CardHeading = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${(props) => props.theme.color.main};
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  border-radius: 1rem;
  margin-bottom: 1rem;
  span {
    text-align: center;
    margin-top: 0.5rem;
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
  .no-books {
    flex: 3;
  }
`;
const SearchBooks = styled.div`
  flex: 5;
  .input {
    border-radius: 1rem;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem 0.25rem;
    padding-left: 1rem;
  }
  .submit-btn {
    position: relative;
    right: 2rem;
    background: #fff;
    border: none;
    outline: none;
  }
`;
const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  .no-books {
    flex: 3;
    text-align: center;
  }
  .issue {
    flex: 5;
    text-align: center;
  }
`;

const Container = styled.section`
  border-radius: 1rem;
  margin-top: 1rem;
  grid-area: book-panel;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.color.light};
  width: 900px;
  height: 450px;
  overflow-y: scroll;
  scrollbar-width: 1rem;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.main};
    border-radius: 5px;
  }
`;
const IssueBtn = styled.button`
  outline: none;
  background-color: ${(props) =>
    props.issued ? props.theme.color.second : props.theme.color.dark};
  padding: 0.4rem 3rem;
  border: none;
  color: ${(props) => props.theme.color.light};
  border-radius: 1rem;
`;
const BooksPanel = () => {
  const bookCollection = [
    {
      name: "Book Name",
      author: "Book Author Name",
      noBooks: 54,
      issue: false,
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      noBooks: 54,
      issue: false,
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      noBooks: 54,
      issue: false,
    },
    {
      name: "Book Name",
      author: "Book Author Name",
      noBooks: 54,
      issue: true,
    },
  ];

  return (
    <>
      <Container>
        <CardHeading>
          <span className="sno">S.no.</span>
          <span className="book">Book</span>
          <span className="author">Author</span>
          <span className="no-books">No. Books</span>
          <SearchBooks>
            <Formik
              initialValues={{ bookSearch: "" }}
              onSubmit={(value) => {
                console.log(value);
              }}
            >
              <Form>
                <Field
                  className="input"
                  type="text"
                  name="bookSearch"
                  id="bookSearch"
                  placeholder="Search Book..."
                />
                <button className="submit-btn" type="sumit">
                  <i>
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </button>
              </Form>
            </Formik>
          </SearchBooks>
        </CardHeading>
        {bookCollection.map((book, i) => (
          <Card key={i}>
            <span className="sno">{i + 1}.</span>
            <span className="bookwrapper">
              <img src={bookimg} alt="book" />
              <span> {book.name}</span>
            </span>
            <span className="author">{book.author}</span>
            <span className="no-books">{book.noBooks}</span>
            <span className="issue">
              <IssueBtn className="issue-btn" issued={book.issue}>
                {book.issue ? "Issed" : "Issue"}
              </IssueBtn>
            </span>
          </Card>
        ))}
      </Container>
    </>
  );
};

export default BooksPanel;
