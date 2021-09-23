function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EZ236K8EAt":
        Script1();
        break;
      case "5p1wrT4v0RH":
        Script2();
        break;
      case "6NdU8EQq6rY":
        Script3();
        break;
      case "6RWAM33jSNW":
        Script4();
        break;
      case "6SSCvZpP8bD":
        Script5();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var userName = player.GetVar('userName');
var projectName = player.GetVar('projectName');
var Q1 = player.GetVar('Q1');
var Q2 = player.GetVar('Q2');
var Q3 = player.GetVar('Q3');
var Q4 = player.GetVar('Q4');
var Q5 = player.GetVar('Q5');
var Part1Total = player.GetVar('Part1Total');
var Q6 = player.GetVar('Q6');
var Q7 = player.GetVar('Q7');
var Q8 = player.GetVar('Q8');
var Q9 = player.GetVar('Q9');
var Q10 = player.GetVar('Q10');
var Part2Total = player.GetVar('Part2Total');
var OverallChangeRequired = player.GetVar('OverallChangeRequired');

var formData = new FormData();
formData.append('userName', userName);
formData.append('projectName', projectName);
formData.append('Q1', Q1);
formData.append('Q2', Q2);
formData.append('Q3', Q3);
formData.append('Q4', Q4);
formData.append('Q5', Q5);
formData.append('Part1Total', Part1Total);
formData.append('Q6', Q6);
formData.append('Q7', Q7);
formData.append('Q8', Q8);
formData.append('Q9', Q9);
formData.append('Q10', Q10);
formData.append('Part2Total', Part2Total);
formData.append('OverallChangeRequired', OverallChangeRequired);


var request = new XMLHttpRequest();
request.open('POST', 'https://script.google.com/macros/s/AKfycbxW59x9jqF7ZxRuOAMahiXBPTOwI1NnBFENemM8hZssQ41p-pRxmu8GfZhWEBYAU2ZS2w/exec');
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

