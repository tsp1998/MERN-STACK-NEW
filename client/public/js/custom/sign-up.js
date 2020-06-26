// $(document).ready(function () {
//   $("#btnSignUp").click(function (event) {
//     event.preventDefault();
//     if ($("#firstName").val() === '' || $("#lastName").val() === '' || $("#email").val() === '' || $("#phone").val() === '' || $("#bio").val() === '' || $("#password").val() === '' || $("#password2").val() === '' || $("input[name = 'wayToContact']:checked").val() === '') {
//       alert("All Fields are necessary");
//       return false;
//     }

//     let user = {
//       firstName: $("#firstName").val(),
//       lastName: $("#lastName").val(),
//       email: $("#email").val(),
//       phone: $("#phone").val(),
//       bio: $("#bio").val(),
//       password: $("#password").val(),
//       password2: $("#password2").val(),
//       wayToContact: $("input[name = 'wayToContact']:checked").val()
//     }
//     // console.log(user);
//     if (user.password !== user.password2) {
//       alert("Password Didn't Matched!")
//     } else {
//       $("#btnSignUp").val("Please Wait");
//       $.ajax({
//         type: "POST",
//         url: "/add-user",
//         data: user,
//         success: function (response) {
//           // console.log(response);
//           // console.log(response.user);
//           if (Number(response.user.ok) === 1) {
//             // $("#btnSignUp").val("Done");
//             // setTimeout(() => {
//             //   $("#btnSignUp").val("Sign Up");
//             // }, 5000);
//             alert("Registration Successful!")
//             $("#firstName").val('');
//             $("#lastName").val('');
//             $("#email").val('');
//             $("#phone").val('');
//             $("#bio").val('');
//             $("#password").val('');
//             $("#password2").val('');
//           }else{
//             alert("Registration Failed!")
//             // $("#btnSignUp").val("Failed");
//             // setTimeout(() => {
//             //   $("#btnSignUp").val("Sign Up");
//             // }, 5000);
//           }
//         }
//       });
//     }
//   });
// });