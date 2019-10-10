const inherits = require('util').inherits;

const VError = require('verror').VError;

const codes = {
  Ok: 0,
  Cancelled: 1,
  Unknown: 2,
  InvalidArgument: 3,
  DeadlineExceeded: 4,
  NotFound: 5,
  AlreadyExists: 6,
  PermissionDenied: 7,
  ResourceExhausted: 8,
  FailedPrecondition: 9,
  Aborted: 10,
  OutOfRange: 11,
  Unimplemented: 12,
  Internal: 13,
  Unavailable: 14,
  DataLoss: 15,
  Unauthenticated: 16
};

constructErrors();

function constructErrors() {
  for (let name of Object.keys(codes)) {
    let className = name + 'Error';
    let code = codes[name];

    exports[className] = constructError(className, code);
  }
}

function constructError(className, code) {
  function GRPCError(...args) {
    VError.apply(this, args);

    // create the error object
    this.code = code;

    // redefine the error name
    Object.defineProperty(this, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    });
  }

  inherits(GRPCError, VError);

  GRPCError.prototype.code = code;

  return GRPCError;
}
