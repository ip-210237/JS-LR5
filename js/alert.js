"use strict";

let firstName = "Едуард";
let lastName = "Зяблін";
let group = "IP-21-2";
let fullName = `${firstName} ${lastName}`;

let yearOfBirth = 2004;
let currentYear = new Date().getFullYear();

window.alert(`Привіт, мене звуть ${fullName}! Я студент групи ${group}.`);
window.alert(`Мені ${currentYear - yearOfBirth} років.`);