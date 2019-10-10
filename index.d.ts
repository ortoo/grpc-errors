class GRPCError extends Error {
  code: number;
  name: string;
}

export class OkError extends GRPCError {}
export class CancelledError extends GRPCError {}
export class UnknownError extends GRPCError {}
export class InvalidArgumentError extends GRPCError {}
export class DeadlineExceededError extends GRPCError {}
export class NotFoundError extends GRPCError {}
export class AlreadyExistsError extends GRPCError {}
export class PermissionDeniedError extends GRPCError {}
export class ResourceExhaustedError extends GRPCError {}
export class FailedPreconditionError extends GRPCError {}
export class AbortedError extends GRPCError {}
export class OutOfRangeError extends GRPCError {}
export class UnimplementedError extends GRPCError {}
export class InternalError extends GRPCError {}
export class UnavailableError extends GRPCError {}
export class DataLossError extends GRPCError {}
export class UnauthenticatedError extends GRPCError {}