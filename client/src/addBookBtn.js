import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AddBookBtn() {
    return (
        <div style={{ zIndex:1,position: "relative", top: "75%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>

                <div style={{ position: 'relative' }}>
                    <Link to='create_new_book'>
                        <Button className={'rounded-circle'} style={{ aspectRatio: "1/1" }}>
                            <i className="fa-solid fa-plus fa-3x" style={{ position: 'relative'}} ></i>
                        </Button>
                    </Link>

                </div>

            </div>
        </div>




    )
}

export default AddBookBtn;