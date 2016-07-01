/*
# Scrabble Score

Write a program that, given a word, computes the scrabble score for that word.

## Letter Values

You'll need these:

```plain
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

## Examples
"cabbage" should be scored as worth 14 points:

- 3 points for C
- 1 point for A, twice
- 3 points for B, twice
- 2 points for G
- 1 point for E

And to total:

- `3 + 2*1 + 2*3 + 2 + 1`
- = `3 + 2 + 6 + 3`
- = `5 + 9`
- = 14

## Extensions
- You can play a `:double` or a `:triple` letter.
- You can play a `:double` or a `:triple` word.

### Instructions
1. Review the description, and create a score method that returns the score based on the rules above.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your scrabble.js file on Slack.

*/

function score(string) {
	var letterTiles = {
		'A' : 1, 'E' : 1, 'I' : 1,
		'O' : 1, 'U' : 1, 'L' : 1,
		'N' : 1, 'R' : 1, 'S' : 1,
		'T' : 1, 'D' : 2, 'G' : 2,
      'B' : 3, 'C' : 3, 'M' : 3,
		'P' : 3, 'F' : 4, 'H' : 4,
		'V' : 4, 'W' : 4, 'Y' : 4,
      'K' : 5, 'J' : 8, 'X' : 8,
      'Q' : 10, 'Z' : 10
	}

	var wordScore = 0;
	if(string === null) return 0;
	wordTiles = string.toUpperCase();
	for(letter in wordTiles) {
		wordScore += letterTiles[wordTiles[letter]];
	}
	return wordScore;
}

/// -- do not edit below ---


describe('Scrabble', function() {
  it('scores an empty word as zero',function() {
    expect(score('')).toEqual(0);
  });

  it('scores a null as zero',function() {
    expect(score(null)).toEqual(0);
  });

  it('scores a very short word',function() {
    expect(score('a')).toEqual(1);
  });

  it('scores the word by the number of letters',function() {
    expect(score('street')).toEqual(6);
  });

  it('scores more complicated words with more',function() {
    expect(score('quirky')).toEqual(22);
  });

  it('scores case insensitive words',function() {
    expect(score('OXYPHENBUTAZONE')).toEqual(41);
  });
});
