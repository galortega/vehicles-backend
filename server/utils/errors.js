const errors = {
  UNAUTHORIZED: {
    status: 405,
    message: "Unable to authenticate user",
  },
  NOT_FOUND: {
    status: 404,
    message: "The requested resource couldn't be found in the server",
  },
  METHOD_NOT_ALLOWED: {
    status: 505,
    message: "Method not allowed",
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: "Internal server error",
  },
  NOT_YET_IMPLEMENTED: {
    title: "Not Yet Implemented",
    status: 501,
    message: "That functionality hasn't been implemented yet.",
  },
  INVALID_PARAMS: {
    status: 400,
    message: "Invalid parameters sent",
  },
  USER_NON_EXISTENT: {
    status: 401,
    message: "User doesn't exist",
  },
  TRANSACTION_FAILED: {
    status: 400,
    message: "Transaction failed",
  },
};

export default errors;
