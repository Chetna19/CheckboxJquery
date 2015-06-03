function validateLoginForm() {
 /*if ($("#loginForm").validate()) {
  ajaxLoginFormSubmit();
 }*/
 
 $("#loginForm").validate({
     submitHandler: function(form) {
      ajaxLoginFormSubmit(form);
     }
 });
 $("#loginEmail").rules("add", {
  required: true,
        email: true,
        messages: {
         required: "Please enter username",
      email: "Provide a valid email address"
        }
    });
    $("#loginPassword").rules("add", {
     required: true,
        minlength: 6,
        messages: {
          required: "Please enter password",
          minlength: "Your password must be at least 6 characters long"
        }
    });
}