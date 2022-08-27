import AddNewList from "./component/AddNewList.js"
import React, {useState, useEffect} from "react";
import ShowBtn from "./component/ShowBtn.js";
import SavedList from "./component/SavedList.js";

function App() {

  return (
    <div>
      <AddNewList />
      <ShowBtn /> 
      <SavedList />
    </div>
  );
}

export default App;
