var http = require("http");
function onrequest(request, response) {
  if (request.url == "/") {
    response.writeHead(200, { content: "text/html" });
    response.write(
      "<p style='background-color:pink; border-bottom:2px solid grey; font-size:32px; margin:0;  padding:10px;border-bottom-right-radius:74px; border-bottom-left-radius:74px;'> <marquee> KONGU ENGINEERING COLLEGE </marquee> </p>"
    );
    response.write(
      "<h1  style='text-align:center; font-size:32px'>HOME PAGE <h1>"
    );
    response.write(
      "<body style='background-color: #FFEFD5;'> <h3 style='text-align:left; font-size:24px' >ABOUT KEC :<h3><p style=''>Kongu Engineering College is an autonomous engineering college located at Perundurai, Erode district in the state of Tamil Nadu in India. It is affiliated to Anna University and accredited 'A' Grade by National Assessment and Accreditation Council.</p> <p style=''>Kongu Engineering College, one of the foremost multi professional research-led Institutions is internationally a recognized leader in professional and career-oriented education. It provides an integral, inter-disciplinary education - a unique intersection between theory and practice, passion and reason. The College offers courses of study that are on the frontiers of knowledge and it connects the spiritual and practical dimensions of intellectual life, in a stimulating environment that fosters rigorous scholarship and supportive community.</p><p> This Institute is a great possession of the committed Trust called 'The Kongu Vellalar Institute of Technology Trust' in Erode District, Tamilnadu. The noble Trust has taken the institute to greater heights since its inception in 1983 and has established the college as a forum for imparting value based education for men and women.</p></body>"
    );
    response.write(
      "<p style='margin-top:130px;text-align:center; padding:10px; background-color:pink'>Copyright &copy; received by konguenginerringcollege"
    );
    response.end();
  } else if (request.url == "/admin") {
    response.writeHead(200, { content: "text/html" });
    response.write(
      "<p style='background-color:#DAF7A6; border-top:2px solid grey; border-bottom:2px solid grey; font-size:32px; margin:0;  padding:10px;border-bottom-right-radius:74px; border-bottom-left-radius:74px'> <marquee> KONGU ENGINEERING COLLEGE </marquee> </p>"
    );
    response.write(
      "<h1  style='text-align:center; font-size:32px'>ADMIN PAGE <h1>"
    );
    response.write(
      "<body style='background-color: #FFD700;'> <h3 style='text-align:left; font-size:24px' >ABOUT :<h3><p style=''>The College Library established in the year 1984, was housed in a classroom with 700 books to start with. In 1986 when the college was shifted to its permanent building, the library occupied a lecture hall in the first floor of the main building. In 1991, it was shifted to the present building named C.D. MEMORIAL LIBRARY in honour of the founder correspondent, Thiru. C. Doraisamy.</p><h3 style='text-align:left; font-size:24px' > VISION:<h3> <p style=''>To become one of the pioneer Science and Engineering Libraries in the world in the field of information resources, management, and technology applications.</p><h3 style='text-align:left; font-size:24px' >MISSION :<h3><p>To utilize available learning resources effectively and create new resources and modernize library operation to create technically vibrant and quality professionals.</p></body>"
    );
    response.write(
      "<p style='margin-top:70px;text-align:center; padding:10px; background-color:#DAF7A6'>Copyright &copy; received by konguenginerringcollege"
    );
    response.end();
  } else if (request.url == "/student") {
    response.writeHead(200, { content: "text/html" });
    response.write(
      "<p style='background-color:#DAF7A6; border-top:2px solid grey; border-bottom:2px solid grey; font-size:32px; margin:0;  padding:10px;border-bottom-right-radius:74px; border-bottom-left-radius:74px'> <marquee> KONGU ENGINEERING COLLEGE </marquee> </p>"
    );
    response.write(
      "<h1  style='text-align:center; font-size:32px'>STUDENT PAGE PAGE <h1>"
    );
    response.write(
      " <body style='background-color:  #B0E0E6;'> <h3 style='text-align:left; font-size:24px' >ABOUT :<h3><p style=''>A student is a person who goes to school and is learning something. Students can be children, teenagers, or adults who are going to school, but it may also be other people who are learning, such as in college or university. A younger student is often called a pupil.</p><h3 style='text-align:left; font-size:24px' > STUDENT MEMORY POWER:<h3> <p style=''>Although many students sometimes complain that their memory power is not sufficiently developed, the problem actually lies in the lack of concentration, focus, and dedication. In today’s digital world with a variety of social media, the amount of information that our brain processes on a daily basis is enormous, so it is no wonder that an optimal state for learning is hard to achieve.</p><p>Although the human brain is still pretty much an uncharted territory, what we do know about it is that it is possible to increase brain power which leads to better memory power and more successful learning. </p></body>"
    );
    response.write(
      "<p style='margin-top:70px;text-align:center; padding:10px; background-color:#DAF7A6'>Copyright &copy; received by konguenginerringcollege"
    );
    response.end();
  } else {
    response.writeHead(200, { content: "text/html" });
    response.write("Bad Request");
    response.end();
  }
}
var server = http.createServer(onrequest);
server.listen(8005);
