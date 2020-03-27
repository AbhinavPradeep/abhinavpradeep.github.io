const uri = 'https://thetamineapi.azurewebsites.net/candidate/';
function GetData() {
    var inputVal = document.getElementById("myInput").value;
    var request = new XMLHttpRequest()
        //Later, will allow for client input
    request.open('GET', uri+inputVal, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (data.gender == 0){
            var gender = "Male";
        }
        if (data.gender == 1){
            var gender = "Female";
        }
        if (data.gender == 2){
            var gender = "Rather Not Say";
        }
        if (data.languages[0].canSpeak == true){
            var CanSpeak = "Capable";
        }
        var tables = "";
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            tables +=
                "<tr>" +
                "<td>" + "<th>" + "<p> _id = </p>" + data._id + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<th>" +"<p> Username = "+data.emailIDs[0].userName+"</p>"+ "</th>" + "<th> Email = " + data.emailIDs[0].email + ".com </th>" + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td>" + "<th> Houuse Number = " + data.address.houseNum + "</th>" + "<th> Street = " + data.address.street + "</th>" + "<th> State = " + data.address.state + "</th>" + "<th> Country = " + data.address.country + "</th>" + "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Country Code = " + data.phoneNumbers[0].countryCode + "</th>" + "<th> Phone Number = " + data.phoneNumbers[0].number + "</th>" + "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Skill = " + data.proffesionalSkills[0].name + "</th>" + "<th> Rating = " + data.proffesionalSkills[0].skillRating + "</th>" +  "<th> Description = " + data.proffesionalSkills[0].description + "</th>"+ "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Social Profile = " + data.socialProfiles[0].type + "</th>" + "<th> URL = " + data.socialProfiles[0].url + "</th>" +  "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Gender = " + gender + "</th>"+ "</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Proofs = " + data.documents[1].documentID + "</th>"+"<th> Document Name = " + data.documents[1].name + "</th>"+"</td>" +
                "</tr>"+
                "<tr>" +
                "<td>" + "<th> Language = " + data.languages[0].name + "</th>"+"<th>  Can Speak = " + CanSpeak + "</th>"+"</td>" +
                "</tr>";

        } else {
            console.log('error')
        }
        document.getElementById("Candidate").innerHTML = '<table style="margin-left:auto;margin-right:auto;">' + tables + '</table>';
    }

    request.send()
}