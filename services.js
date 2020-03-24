const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const web_form = document.getElementById("web-form");
const web_name = document.getElementById("web-name");
const web_email = document.getElementById("web-email");
const web_subject = document.getElementById("web-subject");
const web_message = document.getElementById("web-message");

// Show error message
function showError(input, message) {
  const inputParent = input.parentElement;
  inputParent.className = "form-control1 error";
  const small = inputParent.querySelector("small");
  small.innerText = message;
}

// Show success message
function showSuccess(input) {
  const inputParent = input.parentElement;
  inputParent.className = "form-control1 success";
}

// Checking email validation
function checkEmailValidation(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Checking the subject length
function checkSubjectLength(input, max) {
  if (input.value.length > max) {
    showError(input, `Maximum of ${max} characters is valid`);
  }
}

// Checking whether any field is empty or not
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Get Field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// After someone clicks on submit
// form.addEventListener("submit", function(e) {
//   e.preventDefault();

//   checkRequired([name, email, subject, message]);
//   checkEmailValidation(email);
//   checkSubjectLength(subject, 30);

//   var bdy =
//     "Name: " +
//     name.value +
//     ", Email: " +
//     email.value +
//     ", Subject: " +
//     subject.value +
//     ", Message: " +
//     message.value;
//   console.log(bdy);

//   if (subject.value !== "") {
//     Email.send({
//       SecureToken: "53e530f5-e8b0-4be4-93cb-c05b1f807826",
//       To: "amit1291997@gmail.com",
//       From: "amit1291997@gmail.com",
//       Subject: subject.value,
//       Body: bdy
//     }).then(message => alert(message));
//   }
// });

web_form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([web_name, web_email, web_subject, web_message]);
  checkEmailValidation(web_email);
  checkSubjectLength(web_subject, 30);

  var bdy =
    "Name: " +
    web_name.value +
    ", Email: " +
    web_email.value +
    ", Subject: " +
    web_subject.value +
    ", Message: " +
    web_message.value;
  console.log(bdy);

  if (web_subject.value !== "") {
    Email.send({
      SecureToken: "53e530f5-e8b0-4be4-93cb-c05b1f807826",
      To: "amit1291997@gmail.com",
      From: "amit1291997@gmail.com",
      Subject: web_subject.value,
      Body: bdy
    }).then(message => alert(message));
  }
});

//  Going from bottom to top of the page button

// window.onload = function() {
//   var windowHeight = document.body.clientHeight;
//   var docHeight;
//   docHeight = getDocHeight();
//   var scrollTop = document.body.scrollTop;
//   var trackLength = docHeight - windowHeight;
//   console.log(trackLength);
//   if (trackLength == 0) {
//     document.getElementById("bottomtotop").style.display = "block";
//   } else {
//     document.getElementById("bottomtotop").style.display = "none";
//   }
// };
// function getDocHeight() {
//   var D = document;
//   return Math.max(
//     D.body.scrollHeight,
//     D.documentElement.scrollHeight,
//     D.body.offsetHeight,
//     D.documentElement.offsetHeight,
//     D.body.clientHeight,
//     D.documentElement.clientHeight
//   );
// }

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  currScrollPos = window.pageYOffset;
  if (this.prevScrollPos > currScrollPos) {
    document.getElementById("mainNav").style.top = "0";
  } else {
    document.getElementById("mainNav").style.top = "0";
  }
  this.prevScrollPos = currScrollPos;
};

// Mobile-Site Hamburger
var flag = true;
function toggleSideBar() {
  if (flag) {
    document.getElementById("sidebar").style = "left:0;";
    flag = false;
  } else {
    document.getElementById("sidebar").style = "left:-200px;";
    flag = true;
  }
}

// var shiftWindow = function() {
//   scrollBy(0, -10);
// };
// if (location.hash) shiftWindow();
// window.addEventListener("hashchange", shiftWindow);
