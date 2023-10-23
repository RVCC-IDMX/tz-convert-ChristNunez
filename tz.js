/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
const moment = require('moment-timezone');

const yargs = require('yargs');

moment.tz.setDefault('America/New_York');

// let targetTimezone;
if (process.argv.length != 3) {
  console.log('Usage: node <script-file> <tz>');
  process.exit(1);
}
// eslint-disable-next-line prefer-destructuring
const targetTimezone = argv.timezone;
const useFormattedString = argv.format;

if (useFormattedString) {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format('dddd, MMMM Do YYYY, h:mm:ss a')}`);
} else {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
}
