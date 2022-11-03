import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

function PageForm() {

  const { bookName, id } = useParams()
  const [w_count, set_w_count] = useState(0)

  function handle_change(event) {
    set_w_count(event.target.value.length)
  }

  const [w_count1, set_w_count1] = useState(0)

  function handle_change1(event) {
    set_w_count1(event.target.value.length)
  }

  function handle_submit(event) {
    event.preventDefault();
    const choice = event.target.elements[0].value
    const result = event.target.elements[1].value

    // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ title: 'Post New Page' })
    // };
    // fetch('/api/'+ bookName +'/' + id, requestOptions)
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    axios.post('/api/' + bookName + '/' + id, {
        choice: choice,
        result: result
    }).then(
      function (res) {
        console.log(res.data)
      }
    )
    // window.location.reload(false)
  }


  return (

    <Container>
      <Form onSubmit={handle_submit}>
        <Form.Group className="mb-3 " id="Input1">
          <Form.Label >Create Choice </Form.Label>
          <Form.Control onChange={handle_change} as="textarea" rows={3} placeholder="You decided to ..." />
          <span> Word Limit: {w_count} /100 </span>
        </Form.Group>
        <Form.Group className="mb-3" id="Input2">
          <Form.Label>Resulting Situation</Form.Label>
          <Form.Control onChange={handle_change1} as="textarea" rows={6} />
        </Form.Group>
        <span> Word Limit: {w_count1} /500 </span>

        <Button variant="primary" type='submit'>
          Submit
        </Button>

      </Form >
    </Container>

  );
}

export default PageForm;