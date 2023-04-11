import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Greeting from "./Greeting"
import Notifications from "./Notifications"
import List from "./List"
import React from "react"




function App() {
  return (
    <>
      <Header />
      <Greeting language = "es"/>
      <WelcomeBack name="Joe" adjective="sleepy"/>
      <WelcomeBack name="Anna" adjective="clever"/>
      <WelcomeBack/>
      <Notifications notifications={"asdfasdf"}/>
      <List />
      <Footer />
    </>
    )
}

export default App;