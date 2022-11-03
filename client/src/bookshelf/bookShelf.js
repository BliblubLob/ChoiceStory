import Container from 'react-bootstrap/Container';
import Book from './book/book';
import { useEffect, useState } from 'react';
import axios from 'axios'


function Librarian(book) {

  return (
    <Book
      key = {book._id}
      name={book.name}
      entry = {book.entry}
    />
  )
}


function BookShelf() {
  const [book_info, set_book_info] = useState([])


  useEffect(() => {
    axios.get('/api').then(
      function (res) {
        console.log(res.data)
        set_book_info(res.data)
      }
    )

  },[])

  return (
    <Container fluid>

      {book_info.map(Librarian)}

    </Container>
  );
}

export default BookShelf;