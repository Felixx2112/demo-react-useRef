import React, { useEffect, useRef, useState } from "react";

function App() {
  // const countRef = useRef(0);
  // const obj = {
  //   current: 0,
  // };

  // const [count, setCount] = useState(0);

  /* 
  // useRef tao ra 1 obj co current la 0
  {
    current: 0
  }
  countRef /// obj
  */
  // useRef se tra ve 1 obj trc do
  // useRef se khong lam cho component bi re-render lai
  // const handleClick = () => {
  // setCount(count + 1);
  //   countRef.current = countRef.current + 1;
  //   obj.current = obj.current + 1;
  // };

  // console.log({
  //   count,
  //   countRef,
  //   obj,
  // });

  // useEffect(() => {
  //   setInterval(() => {
  //     countRef.current = countRef.current + 1;
  //     console.log({ countRef: countRef.current });
  //   }, 1000);
  // }, []);

  // su dung useRef de truy van 1 element tren cay dom
  const ref = useRef(null);
  console.log(ref);

  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={ref} />
      <button>Click</button>
    </>
  );
}

export default App;
