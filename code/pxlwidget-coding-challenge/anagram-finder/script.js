"use strict";

//--- GET ELEMENTS --- //

const searchForm = document.getElementById("form-search");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-input");
const resultList = document.querySelector(".list-results");

//--- TWO STRINGS --- //
/*
function anagramFinder(stringA, stringB) {
  let strings = [];

  stringA = stringA.toLowerCase();
  stringB = stringB.toLowerCase();

  //compare each string
  if (cleanString(stringA) === cleanString(stringB)) {
    strings.push(stringA);
    strings.push(stringB);
  }

  console.log(strings);
  return strings;
} 

//anagramFinder("Rope", "Pore");

//Clean and sanitize each words

// function cleanString(text) {
//   return text
//     .toLowerCase()
//     .replace(/[^a-z\d]/g, "")
//     .split("")
//     .sort()
//     .join("");
// }

*/

//--- ARRAY OF STRINGS ---- //

//LOGIC

// Anagramfinder Function
function anagramFinder(arr) {
  //if array is not empty return arr
  if (arr.length === 0) {
    return arr;
  }

  //pass array into a map function that's
  //going to compare each word and it's quantity of length
  return createStrMap(arr);

  //return groupAnagrams(arr);
}

// String map : option 1

function createStrMap(arr) {
  //Instantiate a new map
  const map = new Map();
  for (let str of arr) {
    //sort all string in the array mapping them out using the spread operator
    let sortedArr = [...str].sort().join("");

    //check whether an element with a specific key exist in the map or not.
    if (map.has(sortedArr)) {
      //if no,get string from the sorted array and add
      map.get(sortedArr).push(str);
    } else {
      //if yes, stores the value by the key
      map.set(sortedArr, [str]);
    }
  }
  //speard out all the values of the stored keys
  let charMap = [...map.values()];
  //return the arraries
  return charMap;
}

function groupAnagrams(strs) {
  let result = {};
  for (let word of strs) {
    let stortedStr = word.split("").sort().join("");
    if (result[stortedStr]) {
      result[stortedStr].push(word);
    } else {
      result[stortedStr] = [word];
    }
  }
  return Object.values(result);
}

//To sanitize strings from input
function cleanString(str) {
  //convert input to lowercase and split strings by the comma ','
  //then store it as a single array collection
  let arr = str.toLowerCase().split(",");

  //remove any extras from each word in the array
  arr = arr.map(function (word) {
    return word.replace(/[^a-z\d]/g, "").trim();
  });

  //filter array by removing any empty string
  let filteredArr = arr.filter(function (str) {
    return str;
  });

  return filteredArr;
}

//--- PRACTICAL EXAMPLE --- //

//lOGIC

function searchAnagram(str) {
  let arr = cleanString(str);

  let results = anagramFinder(arr);

  return results;
}

//DOM

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValues = searchInput.value;
  let textValues = inputValues.toString();

  let results = searchAnagram(textValues);

  searchInput.value = "";

  let result = "";

  results.forEach(function (value, index) {
    result += `<div class='result'><span class="result__index" id='result-index'>${
      index + 1
    }</span>
                 <p class="result__items" id="result-items">${value}</p></div>`;
  });

  resultList.innerHTML = result;
});

module.exports = anagramFinder;
