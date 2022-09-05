$(document).ready(function () {
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z,A-Z ]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $("#login").validate({
      rules: {
        user: {

          email: true,
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        phone: {
          required: true,
          number: true,
          minlength: 10,
          maxlength: 10,
        },
        pass: {
          required: true,
          minlength: 5,
          maxlength: 15,
        },
        confirmPassword: {
          equalTo: "#password",
          minlength5: true,
          required: true,
          minlength: 5,
          maxlength: 15,
        },
      },
      messages: {
        user: {
          minlength: "Please Enter Your Full Name",
        },
        email: {
          email: "Please enter a valid Email id",
        },
        pass: {
          minlength: "Please enter a password more than 5 characters",
          maxlength: "Please enter a password less than 15 characters",
        },
        phone: "Enter valid phone number ",
        confirmPassword: "Enter same password again",
      },
    });
   
  });