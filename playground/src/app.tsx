import React from "react";
import { Button } from "antd";

const App = () => {
  return (
    <div>
      <h1 className="text-red-500">Hello123 World</h1>
      <h1 className="bg-cyan-50">Hello123 World</h1>
      <Button
        onClick={() => {
          alert("123123");
        }}
      >
        12312312
      </Button>
    </div>
  );
};

export { App };
