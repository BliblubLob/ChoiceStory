import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function NewBookInput() {
    return (
        // 
        <Container className="mt-3">
            <Form className="" >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Book title</Form.Label>
                    <Form.Control type="email" placeholder="give the book a name" />
                    <Form.Text className="text-muted">
                        Hurry the fuck up 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </Container>

    );
}

export default NewBookInput;