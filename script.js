const MS_TO_DAYS = 1000 * 60 * 60 * 24
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
    
    var dateDiff = new Date(dateNow.getTime() - dob.getTime())
    console.log(dateDiff)
    if (dateDiff < 0){ // DOB in future
        messageWriter('I don\'t believe you!', '#F00');
        return 
    }

    var image = document.getElementById("cartoon")
    if ((dob.getMonth()==dateNow.getMonth()) && (dob.getDate()==dateNow.getDate())){ // birthday
        image.src = "img/birthday.png";
    }

    else { // normal day
        image.src = "img/question.png";
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
        extraS = (ans!=1)?('s'):('')
        messageWriter('You are ' + ans +' day' + extraS + ' old!','#FFF')
    }
    else if (unitChoice=='years'){
        let ans = dateDiff.getFullYear() - 1970
        extraS = (ans!=1)?('s'):('')
        messageWriter('You are ' + ans +  ' year'+ extraS +' old!','#FFF')
    }

    else { // user chose month
        ans = 12*(dateDiff.getFullYear()-1970) + dateDiff.getMonth()
        extraS = (ans!=1)?('s'):('')
        messageWriter('You are ' + ans + ' month' + extraS +' old!','#FFF')
    }

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