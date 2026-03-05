import { useRef } from "react";

export default function Search({ setVal }) {
  const elInp = useRef(null);

  const handleKeyUp = (evt) => {
    if (evt.key === "Enter") {
      setVal(elInp.current.value);
    }
  };

  return (
    <div>
      <input onKeyUp={handleKeyUp} ref={elInp} type="text" />
    </div>
  );
}
