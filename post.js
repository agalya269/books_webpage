var http = require("http");
var url = require("url");
var querystring = require("querystring");
function onrequest(request, response) {
  request.on("data", function (chunk) {
    data1 = "";
    data1 += chunk;
  });
  request.on("end", function () {
    // var query = url.parse(data1);
    var queryobj = querystring.parse(data1);
    var name = queryobj["Name"];
    var rollnumber = queryobj["Rollnumber"];
    var clas = queryobj["Class"];
    var Department = queryobj["Department"];
    var dob = queryobj["DOB"];
    var gender = queryobj["fav_language"];
    var whatsnaumber = queryobj["Number"];
    var email = queryobj["Email"];
    var District = queryobj["District"];
    var favsubject = queryobj["Subject"];
    var favcolor = queryobj["color"];
    var mark = queryobj["Markfile"];
    var urll = queryobj["urll"];
    var localtime = queryobj["Localtime"];
    var friendname = queryobj["Friendname"];
    var friendmobile = queryobj["frimobile"];
    var command = queryobj["command"];
    response.write("Name:" + name + "\n");
    response.write("Rollnumber :" + rollnumber + "\n");
    response.write("Class :" + clas + "\n");
    response.write("Deparment :" + Department + "\n");
    response.write("DOB :" + dob + "\n");
    response.write("Gender: " + gender + "\n");
    response.write("Whatsapp number :" + whatsnaumber + "\n");
    response.write("Email :" + email + "\n");
    response.write("District :" + District + "\n");
    response.write("Favourite subject :" + favsubject + "\n");
    response.write("Favourite Color :" + favcolor + "\n");
    response.write("Mark sheet :" + mark + "\n");
    response.write("Git url :" + urll + "\n");
    response.write("Localtime :" + localtime + "\n");
    response.write("Friendname :" + friendname + "\n");
    response.write("Friend mobile number :" + friendmobile + "\n");
    response.write("Command :" + command + "\n");
    response.end();
  });
}
http.createServer(onrequest).listen(8000);
