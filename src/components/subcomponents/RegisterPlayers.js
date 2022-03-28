import React, { useState } from "react";
import { c_007, c_009, c_010 } from "../../resources/classNames";
import {
  str_001,
  str_009,
  str_010,
  str_011,
  str_012,
  str_013,
  str_014,
} from "../../resources/strings";

function RegisterPlayers({ setPlayer1, setPlayer2 }) {
  const [name1, setName1] = useState(str_001);
  const [name2, setName2] = useState(str_001);
  const startGamePressed = () => {
    if (name1.toLowerCase() !== name2.toLowerCase()) {
      setPlayer1(name1.trim());
      setPlayer2(name2.trim());
    } else {
      alert(str_009);
    }
  };
  return (
    <form className={c_009} onSubmit={startGamePressed}>
      <input
        className={c_010}
        type={str_013}
        placeholder={str_010}
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        required
      />
      <input
        className={c_010}
        type={str_013}
        placeholder={str_011}
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        required
      />
      <input className={c_007} type={str_014} value={str_012} />
    </form>
  );
}

export default RegisterPlayers;
