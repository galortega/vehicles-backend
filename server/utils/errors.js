const errors = {
  UNAUTHORIZED: {
    httpStatus: 405,
    message: "Unable to authenticate user",
  },
  NOT_FOUND: {
    httpStatus: 404,
    message: "The requested resource couldn't be found in the server",
  },
  METHOD_NOT_ALLOWED: {
    httpStatus: 505,
    message: "Method not allowed",
  },
  INTERNAL_SERVER_ERROR: {
    httpStatus: 500,
    message: "Internal server error",
  },
  NOT_YET_IMPLEMENTED: {
    title: "Not Yet Implemented",
    httpStatus: 501,
    message: "That functionality hasn't been implemented yet.",
  },
  INVALID_PARAMS: {
    httpStatus: 400,
    message: "Invalid parameters sent",
  },
  USER_NON_EXISTENT: {
    httpStatus: 401,
    message: "User doesn't exist",
  },
  TRANSACTION_FAILED: {
    httpStatus: 400,
    message: "Transaction failed",
  },
};

export default errors;
