import Header from "./component/Header.js";
import AddNewList from "./component/AddNewList.js"
// import React, {useState, useEffect} from "react";
// import ShowBtn from "./component/ShowBtn.js";
import SavedList from "./component/SavedList.js";
import Footer from "./component/Footer.js";
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <AddNewList />
      {/* <ShowBtn />  */}
      <SavedList />
      <Footer />
    </div>
  );
}

export default App;
