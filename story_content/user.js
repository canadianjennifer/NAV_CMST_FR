function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Sjactk8JqX":
        Script1();
        break;
      case "6bDHPbG27vP":
        Script2();
        break;
      case "6bEAmnpX3KS":
        Script3();
        break;
      case "5s9W1YxmG7X":
        Script4();
        break;
      case "5YzJCYKSOq3":
        Script5();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var userName = player.GetVar('userName');
var projectName = player.GetVar('projectName');
var Q1Full = player.GetVar('Q1Full');
var Q2Full = player.GetVar('Q2Full');
var Q3Full = player.GetVar('Q3Full');
var Q4Full = player.GetVar('Q4Full');
var Q5Full = player.GetVar('Q5Full');
var QPart1Total = player.GetVar('Part1Total');
var Q6Full = player.GetVar('Q6Full');
var Q7Full = player.GetVar('Q7Full');
var Q8Full = player.GetVar('Q8Full');
var Q9Full = player.GetVar('Q9Full');
var Q10Full = player.GetVar('Q10Full');
var Part2Total = player.GetVar('Part2Total');
var OverallChangeRequired = player.GetVar('OverallChangeRequired');

var formData = new FormData();
formData.append('userName', userName);
formData.append('projectName', projectName);
formData.append('Q1Full', Q1Full);
formData.append('Q2Full', Q2Full);
formData.append('Q3Full', Q3Full);
formData.append('Q4Full', Q4Full);
formData.append('Q5Full', Q5Full);
formData.append('Part1Total', Part1Total);
formData.append('Q6Full', Q6Full);
formData.append('Q7Full', Q7Full);
formData.append('Q8Full', Q8Full);
formData.append('Q9Full', Q9Full);
formData.append('Q10Full', Q10Full);
formData.append('Part2Total', Part2Total);
formData.append('OverallChangeRequired', OverallChangeRequired);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbx1CduDGa92UgJCUak3kwPk2ri-avlHkg5is-eNqOSuLZovXvtl4A9qI8V2StT22czxcQ/exec');
request.send(formData);
}

function Script2()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/minimal_FR.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"minimal_FR.html");
}

function Script3()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/level1_FR.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"level1_FR.html");
}

function Script4()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/level2_FR.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"level2_FR.html");
}

function Script5()
{
  var player = GetPlayer();

var uname = player.GetVar("userName");

var pname = player.GetVar("projectName");

var pos = player.GetVar("position");

var q1 = player.GetVar("Q1Full");

var q2 = player.GetVar("Q2Full");

var q3 = player.GetVar("Q3Full");

var q4 = player.GetVar("Q4Full");

var q5 = player.GetVar("Q5Full");

var q6 = player.GetVar("Q6Full");

var q7 = player.GetVar("Q7Full");

var q8 = player.GetVar("Q8Full");

var q9 = player.GetVar("Q9Full");

var q10 = player.GetVar("Q10Full");

var urlstring = ("story_content/external_files/level3_FR.html?uname=" + uname + "&pname=" + pname+ "&pos=" + pos + "&q1=" + q1  + "&q2=" + q2+ "&q3=" + q3  + "&q4=" + q4  + "&q5=" + q5  + "&q6=" + q6  + "&q7=" + q7  + "&q8=" + q8  + "&q9=" + q9  + "&q10=" + q10);

window.open(urlstring,"level3_FR.html");
}

