import "./WelcomeBack.css";

function WelcomeBack({ name = "valued customer", adjective="deeply" }) {
  return <p>Welcome back, {adjective} {name}!</p>;
}

export default WelcomeBack;