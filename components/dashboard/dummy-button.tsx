"use client";

export const DummyButton = () => {
  console.log("render>>>");
  const a = "123";
  const handler = () => {
    console.log("clicked>>>");
  };
  const abc_unused = "xxcdspd";
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span>{a}</span>
      <button onClick={handler}>DummyButton</button>
    </div>
  );
};
