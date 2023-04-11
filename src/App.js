import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Greeting from "./Greeting"
import Notifications from "./Notifications"
import List from "./List"
import React from "react"
import Quote from "./Quote"

const quote = {
  text:
    "I am great believer in luck, and I find the harder I work, the more I have of it.",
  author: "Thomas Jefferson",
};


function App() {
  return (
    <>
      <Header />
      <Greeting language = "es"/>
      <WelcomeBack name="Joe" />
      <WelcomeBack name="Anna" />
      <WelcomeBack/>
      <Notifications notifications={"asdfasdf"}/>
      <List />
      <Quote quote={quote}/>
      <Footer />
    </>
    )
}

export default App;