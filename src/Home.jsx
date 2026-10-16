import React from "react";
import Main from "./Main";
import Cakelist from "./Cakelist";

export default function Home({ cakes }) {
  return (
    <div>
      <Main />
      <Cakelist cakes={cakes} />
    </div>
  );
}
