// async handler using async_await and try_catch block
const asyncHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    console.log("Error in Async Handler: ", error);
    const statusCode = error.statusCode || 500;
    const message = error.message || "Internal Server Error";
    return res.status(statusCode).json({ success: false, message: message });
  }
};

export { asyncHandler };

// async handler using promise
/*
const asyncHandler1 = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next))
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log("Async Handler Error", error);
      if (res.headersSent) {
        return next(error);
      }
      res.status(500).json({ success: false, message: "Internal server error" });
    });
}
*/
