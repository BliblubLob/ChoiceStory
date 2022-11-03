import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PageForm from './page_form';
import { useState } from 'react'

function AddChoice() {

    const [show_form, set_show_form ] = useState(false)

    function when_clicked() {
        console.log('adding story')
        set_show_form(true)
    }

    if (show_form) {
        return (
            <PageForm />
        )
    }
    else {
        return (

                <Button onClick={when_clicked} variant='dark' className='p-1 m-3' style={{ borderStyle: "dashed", backgroundColor: "transparent" }}>
                    <Card style={{ width: '18rem', backgroundColor: "transparent", border: "none" }}>
                        <Card.Body>

                            {/* <Card.Subtitle className="mb-2 text-muted">{choice}</Card.Subtitle> */}
                            <Card.Text className="text-dark">
                                Create A New Choice !
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Button>


        )
    }

}

export default AddChoice;