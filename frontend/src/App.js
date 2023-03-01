import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/Edit/EditPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MakePost from "./components/Posts/MakePost";
import Post from "./components/Posts/Post";
function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  const pending = useSelector((state) => state.user.pending);
  const error = useSelector((state) => state.user.error);
  return (
    <div className="App">
      {isEdit ? (
        <EditPage setEdit={setEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          {" "}
          <Header setEdit={setEdit} />
          <Post />
          <Footer isOpenPost={isOpenPost} setOpenPost={setOpen} />
        </>
      ) : (
        <>
          <Header setEdit={setEdit} />
          <MakePost setOpenPost={setOpen} />
        </>
      )}

      {pending && <p className="loading">Loading data......</p>}
      {!isEdit && error && (
        <p className="error">Error when fetching data from server!!</p>
      )}
    </div>
  );
}

export default App;
