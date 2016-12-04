const inherits = require('util').inherits;

const grpc = require('grpc');
const upperFirst = require('lodash.upperfirst');
const camelCase = require('lodash.camelcase');

constructErrors();

function constructErrors() {
  for (let name of Object.keys(grpc.status)) {
    let className = upperFirst(camelCase(name)) + 'Error';
    let code = grpc.status[name];

    exports[className] = constructError(className, code);
  }
}

function constructError(className, code) {
  function GRPCError(message) {
    // create the error object
    this.message = message;

    // redefine the error name
    Object.defineProperty(this, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    });

    Error.captureStackTrace(this, this.constructor);
  }

  inherits(GRPCError, Error);

  GRPCError.prototype.code = code;

  return GRPCError;
}
