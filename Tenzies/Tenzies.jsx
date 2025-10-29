import { useEffect, useState, useRef } from "react";

import Die from "./components/Die";
import "./Tenzies.css";

export default function Tenzies(props) {
  const [diceInfoList, setDiceInfoList] = useState([]);
  const choosenVal = useRef(null);

  useEffect(() => {
    if (diceInfoList.length <= 0) {
      reset();
    }
  }, []);

  useEffect(() => {
    if (isWon()) console.log("You Won!");
  }, [diceInfoList]);

  function isWon() {
    let isWon = true;
    diceInfoList.forEach((die) =>
      die.state === 0 || die.state === 2 ? (isWon = false) : null
    );
    return isWon;
  }

  function reset() {
    let _diceInfoList = [];
    choosenVal.current = null;

    generateRandomVals(10).forEach((randVal, index) => {
      _diceInfoList.push({
        id: index,
        value: randVal,
        state: 0,
      });
    });
    setDiceInfoList(_diceInfoList);
  }

  function calculateState(dieVal) {
    if (choosenVal.current !== null && choosenVal.current === dieVal) {
      return 1;
    } else if (choosenVal.current !== null && choosenVal.current !== dieVal) {
      return 2;
    } else {
      choosenVal.current = dieVal;
      return 1;
    }
  }

  function onDieClick(id) {
    console.log("Die id: " + id);

    const newValList = generateRandomVals(10);

    setDiceInfoList((prevDiceInfoList) => {
      const updatedDiceInfo = prevDiceInfoList.map((dieInfo, index) =>
        dieInfo.id === id
          ? { ...dieInfo, state: calculateState(dieInfo.value) }
          : dieInfo.state === 1 || dieInfo.state === 2
          ? dieInfo
          : { ...dieInfo, value: newValList[index] }
      );
      return updatedDiceInfo;
    });

    //console.log("Updated choosenVal: " + choosenVal.current);
    //diceInfoList[id].state = 1;
  }

  return (
    <div className="tenzies-page">
      <h1>Tenzies Game</h1>
      <div className="tenzies-dice-container">
        {diceInfoList.map((dieInfo, index) => (
          <Die key={dieInfo.id} info={dieInfo} onclick={onDieClick} />
        ))}
      </div>
      <div className="tenzies-restart-btn-container">
        <button onClick={reset} className="tenzies-restart-btn">
          Restart
        </button>
      </div>
    </div>
  );
}

function generateRandomVals(count = 10) {
  let numList = [];
  for (let i = 0; i < count; i++) {
    numList.push(Math.ceil(Math.random() * 9));
  }
  //console.log(numList);
  return numList;
}
