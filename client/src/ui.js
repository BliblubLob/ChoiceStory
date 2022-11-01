import AddBookBtn from "./addBookBtn";
import Container from 'react-bootstrap/Container';



function UI(){
    return(
    <Container fluid className="position-fixed" style={{width:"100%",height:"100%"}}>

        <AddBookBtn/>

    </Container>
    )
    
}

export default UI;