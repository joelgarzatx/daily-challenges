/*
# Allergies

Write a program that, given a person's allergy score, can tell them whether
or not they're allergic to a given item, and their full list of allergies.

An allergy test produces a single numeric score which contains the
information about all the allergies the person has (that they were
tested for).

The list of items (and their value) that were tested are:

* eggs (1)
* peanuts (2)
* shellfish (4)
* strawberries (8)
* tomatoes (16)
* chocolate (32)
* pollen (64)
* cats (128)

So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

Now, given just that score of 34, your program should be able to say:

- Whether Tom is allergic to any one of those allergens listed above.
- All the allergens Tom is allergic to.


### Instructions
1. Review the description, and create a Allergies class that has a list method and allergicTo.
2. Once you have a passing test suite, add your code to your daily-challenges repo
3. Link us to your allergies.js file on Slack.

*/

const Allergies = function Allergies(score) {
  this.score = score;
  this.allergens = { cats: 128, pollen: 64, chocolate: 32, tomatoes: 16,
    strawberries: 8, shellfish: 4, peanuts: 2, eggs: 1,
  };
  this.maxScore = function maxScore() {
    let sum = 0;
    for (const allergy of this.allergens) {
      sum += this.allergy;
    }
    return sum + 1;
  };
};

Allergies.prototype.list = function list() {
  let localScore = this.score % this.maxScore();

  const allergyList = [];
  for (const allergy of this.allergens) {
    if (localScore >= this.allergy) {
      allergyList.unshift(allergy);
      localScore -= this.allergy;
    }
  }
  return (allergyList);
};

Allergies.prototype.allergicTo = function allergicTo(food) {
  return (this.list().indexOf(food) >= 0);
};


// / -- do not edit below ---


describe('Allergies', () => {
  it('no allergies at all', () => {
    const allergies = new Allergies(0);
    expect(allergies.list()).toEqual([]);
  });

  it('allergies to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.list()).toEqual(['eggs']);
  });

  it('allergies to peanuts', () => {
    const allergies = new Allergies(2);
    expect(allergies.list()).toEqual(['peanuts']);
  });

  it('allergies to strawberries', () => {
    const allergies = new Allergies(8);
    expect(allergies.list()).toEqual(['strawberries']);
  });

  it('allergies to eggs and peanuts', () => {
    const allergies = new Allergies(3);
    expect(allergies.list()).toEqual(['eggs', 'peanuts']);
  });

  it('allergies to more than eggs but not peanuts', () => {
    const allergies = new Allergies(5);
    expect(allergies.list()).toEqual(['eggs', 'shellfish']);
  });

  it('allergic to lots of stuff', () => {
    const allergies = new Allergies(248);
    expect(allergies.list()).toEqual(['strawberries', 'tomatoes',
    'chocolate', 'pollen', 'cats']);
  });

  it('allergic to everything', () => {
    const allergies = new Allergies(255);
    expect(allergies.list()).toEqual(['eggs', 'peanuts', 'shellfish',
    'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']);
  });

  it('no allergic means not allergic', () => {
    const allergies = new Allergies(0);
    expect(allergies.allergicTo('peanuts')).toEqual(false);
    expect(allergies.allergicTo('cats')).toEqual(false);
    expect(allergies.allergicTo('strawberries')).toEqual(false);
  });

  it('allergic to eggs', () => {
    const allergies = new Allergies(1);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('allergic to eggs and other things', () => {
    const allergies = new Allergies(5);
    expect(allergies.allergicTo('eggs')).toEqual(true);
  });

  it('ignore non allergen score parts', () => {
    const allergies = new Allergies(509);
    expect(allergies.list()).toEqual(['eggs', 'shellfish', 'strawberries',
    'tomatoes', 'chocolate', 'pollen', 'cats']);
  });
});
