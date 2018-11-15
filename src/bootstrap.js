import moment from 'moment';

 // Epoch timestamp - number of seconds that have elapsed since January 1, 1970
//  moment.now();

//  // Creating a new date object for right now
//  moment();

 // Creating date object with a specific date/format
 const birthday = moment('1984-08-03', 'YYYY-MM-DD');

//  // Querying a named day of the week for a date
//  console.log(birthday.format('dddd'));

//  // Date counter
  // console.log(birthday.fromNow());

//  // Custom foramtted date
  console.log(birthday.format("MMM Do YYYY"));

//  // Date calculations
//  const twoWeeksFromNow = moment().add(14, 'days');
//  const anotherTwoWeeksFromNow = moment().add(2, 'weeks');
//  const sixMonthsAgo = moment().subtract(6, 'm'); 

// https://devhints.io/moment cheatsheet website