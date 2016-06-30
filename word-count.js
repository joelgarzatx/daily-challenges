/*
# Word Count

Write a program that given a phrase can count the occurrences of each word in that phrase.

For example for the input `"olly olly in come free"`

```plain
olly: 2
in: 1
come: 1
free: 1
```

### Instructions
1. Review the description, and create a count method that returns an object.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your word-count.js file on Slack.

*/

function count(string) {

	// var wordsInString = string.split(/\b/);
	var wordsInString = string.trim().toLowerCase().split(/[ \n\t]+/);
	var words = {};

	for (word in wordsInString) {
		//if (wordsInString[word] == ' ') continue;
		if (words.hasOwnProperty(wordsInString[word])) {
			words[wordsInString[word]]++;
		} else
			words[wordsInString[word]] = 1;
	}
	return words;
}

/// -- do not edit below ---

describe('count()', function() {

  it('counts one word', function() {
    var expectedCounts = { word: 1 };
    expect(count('word')).toEqual(expectedCounts);
  });

  it('counts one of each', function() {
    var expectedCounts = { one: 1, of: 1, each: 1 };
    expect(count('one of each')).toEqual(expectedCounts);
  });

  it('counts multiple occurrences', function() {
    var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
    expect(count('one fish two fish red fish blue fish')).toEqual(expectedCounts);
  });

  it('includes punctuation', function() {
    var expectedCounts = { car: 1, ':': 2, carpet: 1, as: 1, java: 1, 'javascript!!&@$%^&': 1 };
    expect(count('car : carpet as java : javascript!!&@$%^&')).toEqual(expectedCounts);
  });

  it('includes numbers', function() {
    var expectedCounts = { testing: 2, 1: 1, 2: 1 };
    expect(count('testing 1 2 testing')).toEqual(expectedCounts);
  });

  it('normalizes to lowercase', function() {
    var expectedCounts = { go: 3 };
    expect(count('go Go GO')).toEqual(expectedCounts);
  });

  it('counts properly international characters', function() {
    var expectedCounts = { '¡hola!': 1, '¿qué': 1, 'tal?': 1, 'привет!': 1 };
    expect(count('¡Hola! ¿Qué tal? Привет!')).toEqual(expectedCounts);
  });

  it('counts multiline', function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\nworld')).toEqual(expectedCounts);
  });

  it('counts tabs', function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello\tworld')).toEqual(expectedCounts);
  });

  it('counts multiple spaces as one', function() {
    var expectedCounts = { hello: 1, world: 1 };
    expect(count('hello  world')).toEqual(expectedCounts);
  });

  it('does not count leading or trailing whitespace', function() {
    var expectedCounts = { introductory: 1, course: 1 };
    expect(count('\t\tIntroductory Course      ')).toEqual(expectedCounts);
  });

  it('handles properties that exist on Object’s prototype', function() {
    var expectedCounts = { reserved: 1, words: 1, like: 1, constructor: 1, and: 1, tostring: 1, 'ok?': 1 };
    expect(count('reserved words like constructor and toString ok?')).toEqual(expectedCounts);
  });
});
