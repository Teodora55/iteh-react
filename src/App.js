import ConferenceInfo from "./components/ConferenceInfo";
import "./App.css";
import Header from "./components/navigation/Header";
import SignUp from "./components/SignUp";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("info");

  const goToPageHandler = (name) => {
    setPage(name);
  };

  return (
    <>
      <Header goToPage={goToPageHandler} />
      {page === "info" && <ConferenceInfo />}
      {page === "signIn" && <SignUp />}
    </>
  );
}

export default App;
