var errs = require('./');

var err = new errs.FailedPreconditionError('something went wrong');

console.log(err);
