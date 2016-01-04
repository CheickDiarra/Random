'use strict';

const STREAM = require('streamjs'),
CHANCE = require('chance'),

people = (options) => {
  const MAX_ROWS = 9999;
  return new Promise(function(resolve, reject) {
    var rows = Math.min(Number.isInteger(Number(options.count)) && options.count || 1 , MAX_ROWS);
    let someone = person_generator(options);
    let people = STREAM.generate(someone)
                       .limit(rows)
                       .toArray();
    resolve({ results : people});
  });

},

GENDERS = { m : 'male' , f : 'female' , male : 'male' , female : 'female'},

person_generator = (options) => {

  let luck = new CHANCE(Math.random),
  __options = options || {},
  __maxage = Number.isInteger(Number(__options.maxage)) && parseInt(__options.maxage) || 120,
  __minage = Number.isInteger(Number(__options.minage)) && parseInt(__options.minage) || 1,
  __gender = __options.gender && GENDERS[__options.gender.toLowerCase()];
  return () => {
    let _ = {};
    _.gender =  __gender || luck.gender(),
    _.age = luck.integer({ min : __minage , max : __maxage});
    let _year = new Date().getFullYear() - _.age;
    _.dob = luck.birthday({year : _year});
    _.ssn = luck.ssn({ dashes: false });
    _.first = luck.first({ gender : _.gender });
    _.last = luck.last();
    _.name = { first : _.first , last : _.last };
    _.email = _.first + '.' + _.last + luck.integer({ min : 100 , max : 999}); + '@mail.com';
    return _;
  }
};

module.exports = { generate : people };
