myCatObj = {
  high: [
    { color: "red", score: 2 },
    { color: "blue", score: 3 },
  ],
  medium: [
    { color: "red", score: 5 },
    { color: "blue", score: 4 },
  ],
  low: [
    { color: "red", score: 7 },
    { color: "blue", score: 6 },
  ],
};

Object.entries(myCatObj).map((value, index) => {
  console.log(value[0]);
});
