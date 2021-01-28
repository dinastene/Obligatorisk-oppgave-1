function isDateValid(date) {
    if (!textLength(date)) {
        return false;
    }
    if (!punctuationPosition(date)) {
        return false;
    }
    //splitting where the char "." is.
    var split = date.split('.');
    var dateObject = { day: split[0], month: split[1], year: split[2] };
    if (!yearValid(dateObject.year)) {
        return false;
    } 
    if (!monthValid(dateObject.month)) {
        return false;
    }
    if (!dayValid(dateObject)) {
        return false;
    }
    //if everything is correct, return true.
    return true;
}

function textLength(text) {
    return text.length == 10;
}

function punctuationPosition(text) {
    var pos2 = text.charAt(2) == '.';
    var pos5 = text.charAt(5) == '.';
    return pos2 && pos5; 
}

function yearValid(year) {
    return year.length === 4 && year >= '0000' && year <= '9999';
}

function monthValid(month) {
    return month.length === 2 && month >= '01' && month <= '12';
}
/**
 * dayValid checks that the date is 
 * valid, based on month and year.
 * @param {object} date 
 * dateObject that contains day, month and year.
 */
function dayValid(date) {
    //02 corresponds to February.
    if (date.month == '02') {
        //February can have 29 days when it's a leap year. 
        if (isLeapYear(date.year)) {
            return date.day.length === 2 && date.day >= '01' && date.day <= '29';
        }
        //February can only have 28 days when it's not a leap year.
        return date.day.length === 2 && date.day >= '01' && date.day <= '28';
    }
    //04, 06, 09, 11 corresponds to the months of April, June, September, November.
    else if (date.month == '04' || date.month == '06' || date.month == '09' || date.month == '11') {
        //these months can only have 30 days.
        return date.day.length === 2 && date.day >= '01' && date.day <= '30';
    }
    //Covers all the other months, which can have up to 31 days.
    else {
        return date.day.length === 2 && date.day >= '01' && date.day <= '31';
    }
}

function isLeapYear(year) { 
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}