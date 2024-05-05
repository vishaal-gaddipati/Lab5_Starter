// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('checks if (012) 345-6789 is a phone number', () => {
  expect(isPhoneNumber('(012) 345-6789')).toBeTruthy();
});
test('checks if 012-345-6789 is a phone number', () => {
  expect(isPhoneNumber('012-345-6789')).toBeTruthy();
});
test('checks if 0 is not a phone number', () => {
  expect(isPhoneNumber('0')).toBeFalsy();
});
test('checks if hello is not a phone number', () => {
  expect(isPhoneNumber('hello')).toBeFalsy();
});

test('checks if test@ucsd.edu is an email', () => {
  expect(isEmail('test@ucsd.edu')).toBeTruthy();
});
test('checks if test@gmail.com is an email', () => {
  expect(isEmail('test@gmail.com')).toBeTruthy();
});
test('checks if test@ucsd.eduroam is not an email', () => {
  expect(isEmail('test@ucsd.eduroam')).toBeFalsy();
});
test('checks if 0 is not an email', () => {
  expect(isEmail('0')).toBeFalsy();
});

test('checks if agile is a strong password', () => {
  expect(isStrongPassword('agile')).toBeTruthy();
});
test('checks if agile_110 is a strong password', () => {
  expect(isStrongPassword('agile')).toBeTruthy();
});
test('checks if thermodynamics110 is not a strong password', () => {
  expect(isStrongPassword('thermodynamics110')).toBeFalsy();
});
test('checks if 110 is not a strong password', () => {
  expect(isStrongPassword('110')).toBeFalsy();
});

test('checks if 05/03/2024 is a date', () => {
  expect(isDate('05/03/2024')).toBeTruthy();
});
test('checks if 5/3/2024 is a date', () => {
  expect(isDate('5/3/2024')).toBeTruthy();
});
test('checks if 05/03/24 is not a date', () => {
  expect(isDate('05/03/24')).toBeFalsy();
});
test('checks if 5/3/24 is not a date', () => {
  expect(isDate('5/3/24')).toBeFalsy();
});

test('checks if #ff0000 is a hex code', () => {
  expect(isHexColor('#ff0000')).toBeTruthy();
});
test('checks if ff0000 is a hex code', () => {
  expect(isHexColor('ff0')).toBeTruthy();
});
test('checks if 0 is not a hex code', () => {
  expect(isHexColor('0')).toBeFalsy();
});
test('checks if # is not a hex code', () => {
  expect(isHexColor('#')).toBeFalsy();
});

