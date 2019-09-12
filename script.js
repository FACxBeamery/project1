const MS_TO_DAYS = 1000 * 60 * 60 * 24
function calculateAge(form){
    var day = form.day.value;
    var month = form.month.value;
    var year = form.year.value;

    var dob = new Date(year, month -1, day); 
    var dateNow = new Date();

    if ((dob.getFullYear() != year) || (dob.getMonth() != month - 1) || (dob.getDate() != day)){
        messageWriter('Please enter a valid date!', true);
        return
    }
    
    var dateDiff = new Date(dateNow.getTime() - dob.getTime())
    console.log(dateDiff)
    if (dateDiff < 0){ // DOB in future
        messageWriter('I don\'t believe you!', true);
        return 
    }

    var images = document.getElementsByClassName("cartoon")
    if ((dob.getMonth()==dateNow.getMonth()) && (dob.getDate()==dateNow.getDate())){ // birthday
        for (var i = 0; i < images.length; i++){
            images[i].src = "img/birthday.svg";
            images[i].alt = "An image of a birthday cake"
        }

    }

    else { // normal day
        for (var i = 0; i < images.length; i++){
            images[i].src = "img/question.svg";
            images[i].alt = "An image of a question mark"
        }
    }

    // find which box is checked:
   var unitBoxes = document.getElementsByName('unit')
   for (let i=0; i<unitBoxes.length;i++){
       if (unitBoxes[i].checked){
           var unitChoice = unitBoxes[i].value;
           break;
       }
   }

    if (unitChoice=='days'){
        let ans =  Math.floor(dateDiff.getTime()/MS_TO_DAYS)
        successResponse(ans,unitChoice)
    }
    else if (unitChoice=='years'){
        let ans = dateDiff.getFullYear() - 1970
        successResponse(ans, unitChoice)
    }

    else { // user chose month
        ans = 12*(dateDiff.getFullYear()-1970) + dateDiff.getMonth()
        successResponse(ans, unitChoice)
    }
    howLong(dob,dateNow)

    return
}
function successResponse(answer,unit) { // writes message to site if good input
    extraS = (answer!=1)?('s'):('')
    // remove extra s from unit (to be added later)
    messageWriter('You are ' + answer + ' ' + unit.slice(0,-1) + extraS + ' old!',false)
}

function messageWriter(str, error){
    var images = document.getElementsByClassName("cartoon")
    var output = document.getElementById("output");
    if (output.childNodes.length > 0 ){
        output.removeChild(output.childNodes[0]);
    }
    var outputText = document.createTextNode(str);
    output.appendChild(outputText);
    output.style.color = '#FFF'

    if (error){
        output.style.color = '#F00'
        for (var i = 0; i < images.length; i++){
            images[i].src = "img/confused.svg";
            images[i].alt = "An image of a confused face"
        }

        var lengthText = document.getElementById("lengthText")

        if (lengthText.childNodes.length > 0 ){
            lengthText.removeChild(lengthText.childNodes[0]);
        
        }
    }
    return
}

function howLong (dob,dateNow){
    var addYear = 0
    if ((dob.getMonth() < dateNow.getMonth()) || ((dob.getDate() < dateNow.getDate()) && (dob.getMonth() == dateNow.getMonth()))){
        addYear = 1
    }

    var nextBday = new Date(dateNow.getFullYear() + addYear, dob.getMonth(), dob.getDate())

    var daysUntilBday = Math.floor(new Date(nextBday.getTime() - dateNow.getTime()) / (1000 * 3600 * 24)) + 1 ;
    
    var lengthText = document.getElementById("lengthText")

    if (lengthText.childNodes.length > 0 ){
        lengthText.removeChild(lengthText.childNodes[0]);
    }

    var lengthSentence = ''
    
    if (daysUntilBday == 0){
        lengthSentence = 'It\'s your birthday! Woohoo'
    }
    else if (daysUntilBday < 31){
        extraS = (daysUntilBday!=1)?('s'):('')
        lengthSentence = 'It is your birthday in ' + daysUntilBday + ' day' + extraS + '! Not long!'
    }
    else if (daysUntilBday < 325){
        lengthSentence = 'It is your birthday in ' + daysUntilBday + ' days!' 
    }
    else {
        lengthSentence = 'It is your birthday in ' + daysUntilBday + ' days! So far away :('
    }
    console.log(lengthSentence);
    var childText = document.createTextNode(lengthSentence);
    lengthText.appendChild(childText);
    return
}
