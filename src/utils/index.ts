function createUniqueIdGenerator(): () => number {
  let currentId = 0;
  return function(): number {
    currentId += 1;
    return currentId;
  };
}

export { createUniqueIdGenerator };
