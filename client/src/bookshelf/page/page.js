import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios'

import NextPage from './next_page';



function Page() {

    const { bookName,id } = useParams()
    const [page_content, set_page_content] = useState("loading...")
    const [choices,set_choices] = useState('')

    function Render_choice(choice){
        return(
            <Link to={'/'+ bookName + '/' + choice.link}>
            <NextPage choice={choice.choice}/>
            </Link>
        )
    }

    useEffect(function () {
        //fetch the books content
        axios.get(`/api/${bookName}/${id}`).then(
            function (res) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                set_page_content(res.data.content)
                set_choices(res.data.choices)
            }
        )
    }
        , [bookName,id]
    )

    //start rendering choices only after server has replied
    if ( choices ){
        return (
            <Container >
                <Row className='mt-3'>
                    <h1 className='text-center'>
                        {bookName}
                    </h1>
                </Row>
                <Row className='m-3'>
                    {page_content}
                </Row>
                <Container className='m-3'>
                    {choices.map(Render_choice)}
                </Container>
    
            </Container>
        )
    }
    else{
        return null
    }

}

export default Page;