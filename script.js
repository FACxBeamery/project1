function calculateAge(form){
    //Convert from milliseconds to days
    var oneDay = 1000 * 3600 * 24;

    var day = form.day.value;
    var month = form.month.value;
    var year = form.year.value;


    var dob = new Date(year, month -1, day); 
    var dateNow = new Date();

    if ((dob.getFullYear() != year) || (dob.getMonth() != month - 1) || (dob.getDate() != day)){
        document.getElementById("output").innerHTML = 'Please enter a valid date!';
        document.getElementById("output").style.color = '#F00';
        return 'Invalid date'
    }

    var dateDiff = new Date(dateNow.getTime() - dob.getTime());

    var ageInYears = dateDiff.getFullYear() - 1970;
    var ageInMonths = dateDiff.getMonth();
    var ageInDays = dateDiff.getDate() - 1;
    console.log(dateDiff);
    console.log(ageInYears);
    console.log(ageInMonths);
    console.log(ageInDays);

    if (ageInDays < 0){
        document.getElementById("output").innerHTML = 'I don\'t believe you!';
        return 'Invalid date'
    }

    var multDays = (ageInDays != 1)?('s'):('')
    console.log(multDays)
    var multMonths =  (ageInMonths != 1)?('s'):('')
    var multYears = (ageInYears != 1)?('s'):('')

    var age = 'You are ' + ageInYears + ' year'+  multYears + ' ' + ageInMonths + ' month' + multMonths + ' and ' + ageInDays + ' day' + multDays + ' old.' ;
    
    document.getElementById("output").innerHTML = age;
    console.log(age);
    return 'Age updated'
    

}