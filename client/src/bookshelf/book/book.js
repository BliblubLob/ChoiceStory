import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Book(props) {
    return (
        <Col sm={4} style={{ display: "block" }} className={'d-sm-inline-block p-2'}>

            <Card  >
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                {/* add ability  to draw in future */}
                <Card.Body>
                    <Card.Title> {props.name} </Card.Title>
                    <Card.Text>
                        {props.summary}
                    </Card.Text>
                    <Link to={props.name+'/'+props.entry}>
                        <Button variant="primary">Start reading</Button>
                    </Link>
                </Card.Body>
            </Card>

        </Col>

    );
}

export default Book;