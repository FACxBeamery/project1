function calculateAge(form){
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

    if (ageInDays < 0){
        var outputText = document.createTextNode('I don\'t believe you!');
        outputText.appendChild(output);
        return 'Invalid date'
    }

    var multDays = (ageInDays != 1)?('s'):('')
    var multMonths =  (ageInMonths != 1)?('s'):('')
    var multYears = (ageInYears != 1)?('s'):('')

    var age = 'You are ' + ageInYears + ' year'+  multYears + ' ' + ageInMonths + ' month' + multMonths + ' and ' + ageInDays + ' day' + multDays + ' old.' ;
    
    var output = document.getElementById("output");
    if (output.childNodes.length > 0 ){
        output.removeChild(output.childNodes[0]);
    }
    
    var outputText = document.createTextNode(age);
    output.appendChild(outputText);
    return 'Age updated'
    

}