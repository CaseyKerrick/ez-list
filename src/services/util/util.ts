
const Util = {
  // Credit: https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript
  getKeys: <T>(obj: any) => Object.keys(obj) as Array<keyof T>
};

export default Util;