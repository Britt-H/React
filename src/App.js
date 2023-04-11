import "./App.css";
import Header from "./Header";
import WelcomeBack from "./WelcomeBack";
import Footer from "./Footer";
import Greeting from "./Greeting"
import Notifications from "./Notifications"

function App() {
  return (
    <>
      <Header />
      <Greeting language = "es"/>
      <WelcomeBack name="Joe" adjective="sleepy"/>
      <WelcomeBack name="Anna" adjective="clever"/>
      <WelcomeBack/>
      <Notifications notifications={"asdfasdf"}/>
      <Footer />
    </>
    )
}

export default App;