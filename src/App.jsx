import React from "react";
import "./App.css";
import Header from "./component/header";
import NavigationBar from "./component/navigation-bar";
import Content from "./component/content";
import Footer from "./component/footer";

function App() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Content />
      <Footer />
    </>
  );
}

export default App;
