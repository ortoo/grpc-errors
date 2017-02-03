const inherits = require('util').inherits;

const grpc = require('grpc');
const VError = require('verror').VError;
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
