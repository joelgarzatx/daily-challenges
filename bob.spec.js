/*
# Bob

Bob is a lackadaisical teenager. In conversation, his responses are very limited.

Bob answers 'Sure.' if you ask him a question.

He answers 'Whoa, chill out!' if you yell at him.

He says 'Fine. Be that way!' if you address him without actually saying
anything.

He answers 'Whatever.' to anything else.

### Instructions
1. Review Bob's rules and return the appropriate response.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your bob.js file on Slack.

*/
const isSilence = function isSilence(message) {
  const match = message.trim() === '';
  return match;
};

const isQuestion = function isQuestion(message) {
  return message.trim().endsWith('?');
};

const isShout = function isShout(message) {
  const re1 = /[a-z]/;
  const re2 = /[A-Z]/;
  const matchNoLower = re1.exec(message);
  const matchHasUpper = re2.exec(message);
  if ((matchNoLower === null) && (matchHasUpper !== null)) {
    return true;
  }
  return false;
};


function hey(string) {
  let message;
  if (isSilence(string)) {
    message = 'Fine. Be that way!';
  } else if (isShout(string)) {
    message = 'Whoa, chill out!';
  } else if (isQuestion(string)) {
    message = 'Sure.';
  } else {
    message = 'Whatever.';
  }
  return message;
}

// -- do not edit below ---

describe('Bob', () => {
  it('stating something', () => {
    const result = hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('shouting', () => {
    const result = hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('asking a question', () => {
    const result = hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('talking forcefully', () => {
    const result = hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('using acronyms in regular speech', () => {
    const result = hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('forceful questions', () => {
    const result = hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting numbers', () => {
    const result = hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('only numbers', () => {
    const result = hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

  it('question with only numbers', () => {
    const result = hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('shouting with special characters', () => {
    const result = hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', () => {
    const result = hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', () => {
    const result = hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', () => {
    const result = hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', () => {
    const result = hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', () => {
    const result = hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });
});
