"use strict";

//FORM REGISTRATION & REDIRECT
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");
const genderSelect = document.getElementById("gender");

const errorMessageName = nameInput.nextElementSibling;
const errorMessageEmail = emailInput.nextElementSibling;
const errorMessagePassword = passwordInput.nextElementSibling;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  window.location.href = "success.html";
});
