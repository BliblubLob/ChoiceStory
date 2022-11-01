import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useEffect,useState} from 'react';


function NextPage(props) {
    const [choice, set_choice] = useState('')
    useEffect(function(){
        console.log('next page run')
        console.log('linki',props.choice)
        console.log('choice',props.link)
        set_choice(props.choice)

    },[props])


    return (

            <Button variant="secondary" className='p-0 m-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        
                        {/* <Card.Subtitle className="mb-2 text-muted">{choice}</Card.Subtitle> */}
                        <Card.Text className=" text-dark">
                            {choice}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Button>

        
    )

}

export default NextPage;
