import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function NewBookInput() {

    function handle_submit(event){
        event.preventDefault()
        console.log(event.target.elements)
        const title = event.target.elements[0].value
        const summary = event.target.elements[1].value
        const first_page = event.target.elements[2].value
        const new_book = {
            title: title,
            summary: summary,
            first_page: first_page
        }
        axios.post('/api',new_book).then( //make sure that server returns something even for post request
            function(res){
                console.log(res)
                window.location.replace('http://localhost:3000/')
            }
        )

    }
    return (
        // 
        <Container className="mt-3">
            <Form className="" onSubmit={handle_submit} >
                <Form.Group className="mb-3" >
                    <Form.Label>Book title</Form.Label>
                    <Form.Control  placeholder="give the book a name" />
                    <Form.Text className="text-muted">
                        How difficult is it
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Summary</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="This book is about" />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>First Page</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="You woke up in a foreign room ..." />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>

    );
}

export default NewBookInput;