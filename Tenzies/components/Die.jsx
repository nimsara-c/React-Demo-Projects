export default function Die(props) {
  //console.log("Die rendered!");
  return (
    <button
      id={props.info.id}
      className={`tenzies-die ${props.info.state === 1 ? "correct" : null} ${
        props.info.state === 2 ? "false" : null
      }`}
      onClick={() => props.onclick(props.info.id)}
    >
      {props.info.value}
    </button>
  );
}
