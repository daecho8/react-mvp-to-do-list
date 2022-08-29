import Header from "./component/Header.js";
import AddNewList from "./component/AddNewList.js"
import SavedList from "./component/SavedList.js";
import Footer from "./component/Footer.js";
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <AddNewList />
      <SavedList />
      <Footer />
    </div>
  );
}

export default App;
