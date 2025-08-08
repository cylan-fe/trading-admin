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

export const useLoop2 = (loopCount, fn) => {
  const loopFn = useCallback(() => {
    while (loopCount) {
      fn();
      loopCount--;
    }
  }, []);
  return {};
};
