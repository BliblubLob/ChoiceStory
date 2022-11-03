import MyNavbar from "./navbar";
import Home from "./home";
import { Route, Routes } from 'react-router-dom'
import NewBookInput from "./newBookInput";
import Page from "./bookshelf/page/page";

function App() {
  return (
    <div className="App">
      <MyNavbar/>

      <Routes>
        <Route path='create_new_book' element={ <NewBookInput/> }/>
        <Route path='/' element={ < Home /> }/>
        <Route path='/:bookName/:id' element={ < Page/> }/>
      </Routes>


    </div>
  );
}

export default App;
