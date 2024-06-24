import { useEffect, useState } from "react";

export default () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log("mount22");

    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <div
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}4422
    </div>
  );
};
