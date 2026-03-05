import { useState } from "react";
import Countries from "../Components/Countries/Countries";
import Header from "../Components/Header/Header";
import Search from "../Components/Search/Search";

export default function Home() {
  const [val, setVal] = useState("");

  return (
    <>
      <Header />
      <Search setVal={setVal} />
      <Countries val={val} />
    </>
  );
}
