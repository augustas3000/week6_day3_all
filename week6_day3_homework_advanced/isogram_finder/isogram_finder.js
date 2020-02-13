const IsogramFinder = function (word) {
  this.word= word;
}

IsogramFinder.prototype.isIsogram = function() {
    let word = this.word;
    // /\w*/g
    // /[A-Za-z]/g
    let reg_exp = /[A-Za-z]/g;
    let letters = word.toLowerCase();
    let letters_processed = [];

    letters = word.match(reg_exp);

    letters_processed = letters.filter((c, i, a) => {
      if (a.indexOf(c) == i) {
        return c;
      }
    })

    if (letters_processed != null)  {
      if (letters.length === letters_processed.length) {
        return true
      } else {
        return false;
      }

    } else {
      return false;
    }
};

// 
// const isogramFinder = new IsogramFinder('subdermatoglyphic');
// console.log(isogramFinder.isIsogram());

// An isogram is a word, phrase or sentence that does not contain any repeated letters. “Orange” is an isogram but “Banana” is not.
//
// Given a word, phrase or sentence you should be able to determine whether or not it is an isogram. That is, you should be able to determine whether every letter is unique.




module.exports = IsogramFinder;
