import Die from "./components/Die";
import "./Tenzies.css";

export default function Tenzies(props) {
  return (
    <div className="tenzies-page">
      <h1>Tenzies Game</h1>
      <div className="tenzies-dice-container">
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={7} />
        <Die value={8} />
        <Die value={9} />
        <Die value={1} />
        <Die value={1} />
      </div>
    </div>
  );
}
