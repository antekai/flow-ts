type User = {
  name: string;
  email: string;
};
export const userA: User = {
  name: "Joe",
  email: "joe@gmail.com"
};
// flow error
export const userB: User = {
  name: 1111,
  email: "joe@gmail.com"
};