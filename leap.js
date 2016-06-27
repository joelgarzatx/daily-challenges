// # Leap
//
// Write a program that will take a year and report if it is a leap year.
//
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
//
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
//
// For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
// year, but 2000 is.
//
// If your language provides a method in the standard library that does
// this look-up, pretend it doesn't exist and implement it yourself.
//
//
// ## How to Submit
// 1. Create a daily-challenges github.com repo
// 2. Create a leap.js file in the repo.
// 3. Add a comment to this snippet (on Slack) with a link to your file.

var isLeap = function(yearVal) {
    if ((yearVal % 400) === 0)
      return true;
    if ((yearVal % 100) === 0)
      return false;
    if ((yearVal % 4) === 0)
      return true;
    return false;

};

console.log(isLeap(1996));
console.log(isLeap(1998));
console.log(isLeap(2000));
console.log(isLeap(1900));
console.log(isLeap(2012));
console.log(isLeap(1997));
