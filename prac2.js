function validateCheckboxes() {
    var sport = document.getElementById("sport");
    var movie = document.getElementById("movie");
    var series = document.getElementById("series");
    var boxCount = 0;
    boxCount += (sport.checked) ? 1:0;
    boxCount += (movie.checked) ? 1:0;
    boxCount += (series.checked) ? 1:0;

    if (boxCount >= 2)
    {
        if (sport.checked == false)
        {
            sport.disabled = true;
        }
        else if (movie.checked == false)
        {
            movie.disabled = true;
        }
        else if (series.checked == false)
        {
            series.disabled = true;
        }
    }
    else if (boxCount == 1)
    {
        sport.disabled = false;
       movie.disabled = false;
        series.disabled = false;

    }
}

function submitForm() {
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var output = " ";

    if (surname.value != '' && name.value !='') {
        output = " ";
    }
    else if (surname.value == '' && name =='' ) {
        output = "Please enter your name and surname";
    }
    else if (name.value == '') {
        output = "Please enter your name";
    }
    else if (surname.value == '') {
        output = "Please enter your surname";
    }

    var duration = document.getElementById("duration");
    console.log(duration.value);
    if (Number.isInteger(duration.value) || duration.value != '')
    {

    }

    else {
        output += "<br> Please enter a number";
    }

    if (duration.value > 24 || duration.value < 1 ) {
        output += "<br> Please choose a number between 1 and 24";
    }

    var sport = document.getElementById("sport");
    var movie = document.getElementById("movie");
    var series = document.getElementById("series");
    var boxCount = 0;
    boxCount += (sport.checked) ? 1:0;
    boxCount += (movie.checked) ? 1:0;
    boxCount += (series.checked) ? 1:0;
    console.log("BOX " + boxCount)
    if (boxCount == 0)
    {
        output += "<br> Please choose at least one option from the check boxes";
    }

    document.getElementById("error").innerHTML = output;

    var mainOut = " ";
    if (output == " ") {
        mainOut = "<center><BR/><HR/>";
        mainOut += "<H4>Summary:</H4>";
        mainOut += "<b>Name: </b>" + name.value + "<br/><b>Surname:</b>" + surname.value;
        var pack = "<b>";
        if (series.checked)
        {
            pack += "Series, ";
        }
        if (sport.checked)
        {
            pack += "Sports, ";
        }
        if (movie.checked)
        {
            pack += "Movies";
        }
        mainOut += "<br/><b>Packages: </b>" + pack;
        mainOut += "<br/><b>Contract Duration: </b>" + duration.value;

        var upfront = document.getElementById("upfront");
        var cost = duration.value*99;
        var discount = 0;
        console.log("Up: " + upfront.checked);
        if (upfront.checked) {

            mainOut += "<br/><b>Upfront payment: </b> Yes";
            console.log(cost);

            if (duration.value >=6 && duration.value <=12) {
                discount =  cost*0.10;
            }
            else if (duration.value > 12){
                discount =  cost*0.2;
            }
            mainOut += "<br/><b>Discount: </b>" + discount;
            cost = cost - discount;
        }
        else
        {
            mainOut += "<br/><b>Upfront payment: </b> No";
        }
        mainOut += "<br/><b>Cost: </b>" + cost + "</center>";

        document.getElementById("FormDiv").innerHTML = mainOut;
    }

}
