function calculateAge(form){
    var day = form.day.value;
    var month = form.month.value;
    var year = form.year.value;

    var dob = new Date(year, month -1, day); 
    var dateNow = new Date();

    
   
    if ((dob.getFullYear() != year) || (dob.getMonth() != month - 1) || (dob.getDate() != day)){
        messageWriter('Please enter a valid date!', '#F00');
        return
    }


    var dateDiff = new Date(dateNow.getTime() - dob.getTime());

    var ageInYears = dateDiff.getFullYear() - 1970;
    var ageInMonths = dateDiff.getMonth();
    var ageInDays = dateDiff.getDate();



    if (dateDiff < 0){
        messageWriter('I don\'t believe you!', '#F00');
        return 
    }

    var multDays = (ageInDays != 1)?('s'):('')
    var multMonths =  (ageInMonths != 1)?('s'):('')
    var multYears = (ageInYears != 1)?('s'):('')

    var age = 'You are ' + ageInYears + ' year'+  multYears + ' ' + ageInMonths + ' month' + multMonths + ' and ' + ageInDays + ' day' + multDays + ' old.' ;
    
    messageWriter(age, '#FFF');

    var image = document.getElementById("cartoon")
    if ((dob.getMonth()==dateNow.getMonth()) && (dob.getDate()==dateNow.getDate())){
        image.src = "img/birthday.png";
    }

    else {
        image.src = "img/question.png";
    }
    return

}

function messageWriter(str, col){
    var image = document.getElementById("cartoon")
    var output = document.getElementById("output");
    if (output.childNodes.length > 0 ){
        output.removeChild(output.childNodes[0]);
    }
    var outputText = document.createTextNode(str);
    output.appendChild(outputText);
    output.style.color = col

    if (col == '#F00'){
        image.src = "img/confused.png";
    }
    return
}