# grpc-errors

A quick and easy way of generating errors for use with grpc

## Installation
```
npm install --save grpc-errors
```

## Usage
```javascript
const grpcErrors = require('grpc-errors');

// Code...
var err = new grpcErrors.AlreadyExistsError('The file already exists!');
```
### Errors
- `CancelledError`
- `UnknownError`
- `InvalidArgumentError`
- `DeadlineExceededError`
- `NotFoundError`
- `AlreadyExistsError`
- `PermissionDeniedError`
- `UnauthenticatedError`
- `ResourceExhaustedError`
- `FailedPreconditionError`
- `AbortedError`
- `OutOfRangeError`
- `UnimplementedError`
- `InternalError`
- `UnavailableError`
- `DataLossError`
- `UnauthenticatedError`
