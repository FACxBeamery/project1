function calculateAge(form){
    //Convert from milliseconds to days
    var oneDay = 1000 * 3600 * 24;

    var day = form.day.value;
    var month = form.month.value;
    var year = form.year.value;

    var dob = new Date(year, month -1, day); 
    var dateNow = new Date();
    var ageInDays = Math.floor((dateNow.getTime() - dob.getTime())/oneDay);

    document.getElementById("output").innerHTML = ageInDays;
    return '0'
    

}