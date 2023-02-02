// Creating an array using objects on the second day of our data structure class and array methods
let names = [
  "favour",
  "victor",
  "marvelous",
  "nkem",
  "akara",
  "chiamka",
  "desmond",
];
// isEmpty
// isFull
// push
// pop
// indexOf
ourArray = {
  length: 0,
  // last is -1 so if it increments it goes to 0 making it accurate
  last: -1,
  data: [],
  isEmpty: function () {
    return this.length === 0;
  },
  isFull: function () {
    return this.last + 1 === this.length;
  },
  push: function (i) {
    if (this.isFull) return;

    this.data[this.last + 1] = item;
    this.last++;
    this.length++;
  },
  pop: function () {
    if (this.isEmpty) return;
    const value = this.data[this.last];
    this.data[this.last] = null;
    this.last--;
    this.length--;
    return value;
  },
//   to get the index of a certain item
  indexOf: function (item) {
    if (this.isEmpty) {
      return -1;
    }
    let index = -1;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        index = i;
        break;
      }
    }
    return index;
  },
};
let nums = objects.create(ourArray);
nums.push(4);
nums.push(2);
nums.push("jerry");
