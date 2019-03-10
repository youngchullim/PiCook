const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : ""
  data.password = validText(data.password) ? data.password : ""

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = "Username is invalid";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username is required";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}