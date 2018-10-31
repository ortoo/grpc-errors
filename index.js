const inherits = require('util').inherits;

const VError = require('verror').VError;
const upperFirst = require('lodash.upperfirst');
const camelCase = require('lodash.camelcase');

const codes = {
  OK: 0,
  CANCELLED: 1,
  UNKNOWN: 2,
  INVALID_ARGUMENT: 3,
  DEADLINE_EXCEEDED: 4,
  NOT_FOUND: 5,
  ALREADY_EXISTS: 6,
  PERMISSION_DENIED: 7,
  RESOURCE_EXHAUSTED: 8,
  FAILED_PRECONDITION: 9,
  ABORTED: 10,
  OUT_OF_RANGE: 11,
  UNIMPLEMENTED: 12,
  INTERNAL: 13,
  UNAVAILABLE: 14,
  DATA_LOSS: 15,
  UNAUTHENTICATED: 16
};

constructErrors();

function constructErrors() {
  for (let name of Object.keys(codes)) {
    let className = upperFirst(camelCase(name)) + 'Error';
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
