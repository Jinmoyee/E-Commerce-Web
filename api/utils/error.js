export const errorHandeler = (myStatusCode, myMessage) => {
    const error = new Error;
    error.statusCode = myStatusCode;
    error.message = myMessage;
    return error;
}