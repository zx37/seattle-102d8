var today = new Date();
var hourNow = today.getHours();
var greeting;
var hitchcock = 'Good Evening';
var afternoonmsg = 'Good Afternoon!!'

if (hourNow > 18) {
    greeting = hitchcock;
} else if (hourNow > 12) {
    greeting = afternoonmsg;
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');