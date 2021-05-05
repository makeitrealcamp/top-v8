const arr = [1, 2, 3, 4, 5, 6];

arr
  .filter((el) => el % 2 === 0)
  .map((el) => el * 2)
  .filter((el) => el % 3 === 0)
  .reduce((acc, el) => acc + el, 0);
