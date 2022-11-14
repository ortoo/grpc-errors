const inherits = require("util").inherits;

const VError = require("verror").VError;

module.exports.OkError = constructError("OkError", 0);
module.exports.CancelledError = constructError("CancelledError", 1);
module.exports.UnknownError = constructError("UnknownError", 2);
module.exports.InvalidArgumentError = constructError("InvalidArgumentError", 3);
module.exports.DeadlineExceededError = constructError(
  "DeadlineExceededError",
  4
);
module.exports.NotFoundError = constructError("NotFoundError", 5);
module.exports.AlreadyExistsError = constructError("AlreadyExistsError", 6);
module.exports.PermissionDeniedError = constructError(
  "PermissionDeniedError",
  7
);
module.exports.ResourceExhaustedError = constructError(
  "ResourceExhaustedError",
  8
);
module.exports.FailedPreconditionError = constructError(
  "FailedPreconditionError",
  9
);
module.exports.AbortedError = constructError("AbortedError", 10);
module.exports.OutOfRangeError = constructError("OutOfRangeError", 11);
module.exports.UnimplementedError = constructError("UnimplementedError", 12);
module.exports.InternalError = constructError("InternalError", 13);
module.exports.UnavailableError = constructError("UnavailableError", 14);
module.exports.DataLossError = constructError("DataLossError", 15);
module.exports.UnauthenticatedError = constructError(
  "UnauthenticatedError",
  16
);

function constructError(className, code) {
  function GRPCError(...args) {
    VError.apply(this, args);

    // create the error object
    this.code = code;

    // redefine the error name
    Object.defineProperty(this, "name", {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true,
    });
  }

  inherits(GRPCError, VError);

  GRPCError.prototype.code = code;

  return GRPCError;
}
