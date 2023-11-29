
// Function that receives time in 24-hour format and convert it into 12-hour format.

// I failed this intreview

function convertTime(time) {
    let timeArray = time.split(':');
    let timeIndicator = timeArray[2].split('');
    let hour;
    let minutes = timeArray[1];
    let seconds = [timeIndicator[0],timeIndicator[1]].join('');
    if (timeIndicator[2] === 'A') {
        if (timeArray[0] === '12') {
            hour = '00';
        } else {
            hour = timeArray[0];
        }
    } else {
        if (timeArray[0] === '12') {
            hour = timeArray[0];
        } else {
            hour = parseInt(timeArray[0])+12;
        }
    }

    let newTime = hour+":"+minutes+":"+seconds;
    return newTime;
}

let time = convertTime("05:15:12PM");
console.log(time);