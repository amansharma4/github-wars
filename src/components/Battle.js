import React from "react";
const Battle = () => {
    const HandleChange = () =>{
        console.log("hi");
    }
  return (
    <div>
      <h1>Battle</h1>
      <input placeholder="git-user" type="text" onClick={HandleChange} />
    </div>
  );
};

export default Battle;
