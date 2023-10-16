import React from "react";
import {  useSelector } from "react-redux";

function Home() {
  const state = useSelector((s) => s.auth);
  console.log(state);

  return (
    <div>
      <p>Welcome</p>
    </div>
  );
}

export default Home;
