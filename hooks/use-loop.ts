export const useLoop = (fn: () => void) => {
  const loopFn = (loopTime: number) => {
    while (loopTime) {
      fn();
      loopTime--;
    }
  };
  console.log("useLoop");
  return { loopFn };
};
