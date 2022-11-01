import BookShelf from "./bookshelf/bookShelf";
import UI from "./ui";

function Home() {
    return (
        <>
            {/* ui must be at the stop of bookshelf so bookshelf does not push ui down when just created in this parent div */}
            <UI />
            <BookShelf />
            
        </>

    )

}

export default Home;