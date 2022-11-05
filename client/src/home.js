import BookShelf from "./bookshelf/bookShelf";
import AddBookBtn from "./addBookBtn";

function Home() {
    return (
        <>
            {/* addbookbtn must be at the stop of bookshelf so bookshelf does not push ui down when just created in this parent div */}
            <AddBookBtn/>

            <BookShelf />
            
        </>

    )

}

export default Home;