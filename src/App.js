
import AddBookForm from "./components/AddBookForm";
import EditBookForm from "./components/EditBookForm";
import BookList from "./components/BookList";
import Header from "./components/Header";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route index element={<BookList />} />
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path="/update/:id" element={<EditBookForm />} />
        </Routes>
    </div>
  );
}

export default App;