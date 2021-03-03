import ERROR from "../const/Error";

const ErrorUtils = {
  hasAdmin: (permission) => permission === "admin",
  whichError: (code) =>
    code === ERROR.code.threeHundredThree
      ? ERROR.localStorageDisabled
      : ERROR.localStorageParsing,
};

export default ErrorUtils;
