import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AddBookBtn() {

    return (
            <div style={{ zIndex: 1, position: "fixed", top: "80%", left: "5%" }}>
                <div style={{ zIndex: 1, display: "flex", justifyContent: "flex-end" }}>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <Link to='create_new_book'>
                            <Button className={'rounded-circle'} style={{ aspectRatio: "1/1" ,borderColor:'grey'}}>
                                <i className="fa-solid fa-plus fa-3x" style={{ position: 'relative' }} ></i>
                            </Button>
                        </Link>

                    </div>

                </div>
            </div>


    )
}

export default AddBookBtn;