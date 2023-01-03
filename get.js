var http = require("http");
var url = require("url");
var querystring = require("querystring");
function onrequest(request, response) {
  response.writeHead(200, { content: "html/text" });
  var path = url.parse(request.url).path;
  console.log(path);
  var query = url.parse(request.url).query;
  var queryobj = querystring.parse(query);
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
  var pincode = queryobj["pincode"];
  var aadhar = queryobj["aadhar"];
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
  response.write("Pincode :" + pincode + "\n");
  response.write("Aadhar number:" + aadhar + "\n");
  response.write("Command :" + command + "\n");
  response.end();
}

http.createServer(onrequest).listen(8080);
