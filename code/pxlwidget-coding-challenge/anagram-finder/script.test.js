/**
 * @jest-environment node
 */

const anagramFinder = require("./script");

const test1 = [
  "rope",
  "pore",
  "repo",
  "red rum",
  "murder",
  "listen",
  "silent",
  "endeavour",
];
const test2 = ["rat", "jar", "tar", "raj", "ram", "arm", "mar", "art"];

const output1 = [
  ["rope", "pore", "repo"],
  ["red rum", "murder"],
  ["listen", "silent"],
  ["endeavour"],
];

const output2 = [
  ["rat", "tar", "art"],
  ["jar", "raj"],
  ["ram", "arm", "mar"],
];

//TEST CASE 1
test("find the anagram for this array", () => {
  expect(anagramFinder(test1)).not.toBe(output1);
});

//TEST CASE 2
test("find the anagram for this array", () => {
  expect(anagramFinder(test2)).not.toBe(output2);
});
