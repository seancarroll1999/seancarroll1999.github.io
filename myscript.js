//var optionDark = 'true';
//localStorage.setItem( 'optionDark', optionDark );
//localStorage.setItem( 'EngineOP', '1' );
var darkOp = localStorage.getItem('optionDark');
var engineOption = localStorage.getItem('EngineOP');

  setInterval(clockChange, 1000);
  setInterval(dateChange, 180000);
  //setInterval(ActiveVPN, 10300);

  var time;

  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;
  document.onmousemove = timeResetState;
  document.onkeypress = timeResetState;

var count = 0;

function test(){
  count++;
  console.log(count);
}

window.onload = function () {
clockChange();
dateChange();
ActiveVPN()
searchEngine();
resetTimer();
weather();
//document.getElementById("demo").innerHTML = localStorage.getItem('optionDark');

//DARKTHEME OPTION CODE
  if(darkOp == 'true'){
    darkTheme();
    document.getElementById("darktheme1").value = '1';
  }
  else{
    lightTheme();
    document.getElementById("darktheme1").value = '0';
  }
  var formval = document.getElementById('GoogleSearch')  || null;
  if(engineOption == '0'){
    document.getElementById("searchOption").value = '0';
    formval.action = "https://www.google.co.uk/search";
  }
  if(engineOption == '1'){
    document.getElementById("searchOption").value = '1';
    formval.action = "https://duckduckgo.com/";
  }
  if(engineOption == '2'){
    document.getElementById("searchOption").value = '2';
    formval.action = "";
  }

var darkthemeslider = document.getElementById("darktheme1");
darkthemeslider.oninput = function() {
  if(this.value == 1) {
    darkTheme();
    localStorage.setItem( 'optionDark', 'true' );
  }
  if(this.value == 0){
    lightTheme();
    localStorage.setItem( 'optionDark', 'false' );
  }
}

function darkTheme(){

  document.getElementsByTagName("body")[0].style.background = "#36363f";

  document.getElementById("clock").style.color = "#919fa0";
  document.getElementById("clock").style.textShadow = "none";

  document.getElementById("date").style.color = "#919fa0";
  document.getElementById("date").style.textShadow = "none";

  document.getElementById("sBar").style.boxShadow = "none";
  document.getElementById("sBar").style.background = "#334d54";

  document.getElementById("sBTN").style.boxShadow = "none";
  document.getElementById("sBTN").style.background = "#152023";

  document.getElementById("googleSearch").style.textShadow = "none";
  document.getElementById("duckSearch").style.textShadow = "none";
  document.getElementById("tvSearch").style.textShadow = "none";
  document.getElementById("searchOption").style.boxShadow = "none";
  document.getElementById("sliderEngine").style.color = "#919fa0";
  document.getElementById('searchOption').classList.remove('lightSearch');
  document.getElementById('searchOption').classList.add('darkSearch');


  var arrayofTitle = document.getElementsByClassName('title3');
  for(var i = 0; i<arrayofTitle.length; i++){
    document.getElementsByClassName('title3')[i].style.textShadow = "none";
    document.getElementsByClassName('title3')[i].style.boxShadow = "none";
    document.getElementsByClassName('title3')[i].style.background = "#334d54";
  }


  var arrayOFLinks = document.getElementsByClassName('link');
  for(var i = 0; i<arrayOFLinks.length; i++){
    document.getElementsByClassName('link')[i].style.boxShadow = "none";
    document.getElementsByClassName('link')[i].style.border = "none";
    document.getElementsByClassName('link')[i].style.color = "#e0d6be";
  }

  document.getElementById("vpn-checkID").style.boxShadow = "none";
  document.getElementById('vpn-checkID').style.filter = "brightness(.5)";

  document.getElementsByClassName('sideMenu')[0].style.background = "#303038";
  document.getElementsByClassName('ModuleLinks')[0].style.background = "#303038";
  document.getElementsByClassName('modulecontentlink')[0].style.color = "#e0d6be";
  document.getElementsByClassName('sideMenu')[0].style.color = "#e0d6be";
  var arrayofModules = document.getElementsByClassName('module');
  for(var i = 0; i<arrayofModules.length; i++){
    document.getElementsByClassName('moduleNames')[i].style.color = "#919fa0";
    document.getElementsByClassName('moduleNames')[i].style.background = "#334d54";
  }
  var arrayOfModLinks = document.getElementsByClassName('moduleLink');
  for(var i = 0; i<arrayOfModLinks.length; i++){
    document.getElementsByClassName('moduleLink')[i].style.color = "#e0d6be";
  }
  document.getElementById('sideMenuModuleLink').style.background = "#152023";
  document.getElementById('sideMenuModuleLink').style.color = "#919fa0";
  document.getElementById('hamOpen').style.color = "#e0d6be";

  document.getElementById('weatherID').style.color = "#e0d6be";
}



function lightTheme(){

    document.getElementsByTagName("body")[0].style.background = "#e5e5e5";

  document.getElementById("clock").style.color = "#000";
  document.getElementById("clock").style.textShadow = "2px 2px 14px #888";

  document.getElementById("date").style.color = "#000";
  document.getElementById("date").style.textShadow = "2px 2px 14px #888";

  document.getElementById("sBar").style.boxShadow = "5px 10px 18px #888888";
  document.getElementById("sBar").style.background = "#b21531";

  document.getElementById("sBTN").style.boxShadow = "5px 10px 18px #888888";
  document.getElementById("sBTN").style.background = "#a00c27";

  document.getElementById("googleSearch").style.textShadow = "2px 2px 14px #888;";
  document.getElementById("duckSearch").style.textShadow = "2px 2px 14px #888;";
  document.getElementById("tvSearch").style.textShadow = "2px 2px 14px #888;";

  document.getElementById("sliderEngine").style.color = "#000";
  document.getElementById('searchOption').classList.remove('darkSearch');
  document.getElementById('searchOption').classList.add('lightSearch');


  var arrayofTitle = document.getElementsByClassName('title3');
  for(var i = 0; i<arrayofTitle.length; i++){
    document.getElementsByClassName('title3')[i].style.textShadow = "2px 2px 16px #380009";
    document.getElementsByClassName('title3')[i].style.boxShadow = "5px 10px 18px #888888";
    document.getElementsByClassName('title3')[i].style.background = "#b21531";
  }


  var arrayOFLinks = document.getElementsByClassName('link');
  for(var i = 0; i<arrayOFLinks.length; i++){
    document.getElementsByClassName('link')[i].style.boxShadow = "5px 10px 18px #888888";
    document.getElementsByClassName('link')[i].style.border = "1px solid #888";
    document.getElementsByClassName('link')[i].style.color = "#000";
  }

  document.getElementById("vpn-checkID").style.boxShadow = "5px 10px 18px #888888;";
  document.getElementById('vpn-checkID').style.filter = "none";


    document.getElementsByClassName('sideMenu')[0].style.background = "#d9d9d9";
    document.getElementsByClassName('ModuleLinks')[0].style.background = "#d9d9d9";
    document.getElementsByClassName('ModuleLinks')[0].style.color = "#000";
    document.getElementsByClassName('sideMenu')[0].style.color = "#000";

    var arrayofModules = document.getElementsByClassName('module');
    for(var i = 0; i<arrayofModules.length; i++){
      document.getElementsByClassName('moduleNames')[i].style.color = "#e5e5e5";
      document.getElementsByClassName('moduleNames')[i].style.background = "#b21531";
    }
    var arrayOfModLinks = document.getElementsByClassName('moduleLink');
    for(var i = 0; i<arrayOfModLinks.length; i++){
      document.getElementsByClassName('moduleLink')[i].style.color = "#000";
    }
    document.getElementById('sideMenuModuleLink').style.background = "#a00c27";
    document.getElementById('sideMenuModuleLink').style.color = "#e5e5e5";
    document.getElementById('hamOpen').style.color = "#000";

    document.getElementById('weatherID').style.color = "#000";

}



  var SearchEngineSlider = document.getElementById("searchOption");
  SearchEngineSlider.oninput = function() {
    var formval = document.getElementById('GoogleSearch')  || null;
    if(this.value == 0){
      formval.action = "https://www.google.co.uk/search";
      localStorage.setItem( 'EngineOP', '0' );
    }
    if(this.value == 1){
      formval.action = "https://duckduckgo.com/";
      localStorage.setItem( 'EngineOP', '1' );
    }
    if(this.value == 2){
      formval.action = "";
      localStorage.setItem( 'EngineOP', '2' );
    }
  }

}




//CLOCK CODE
function clockChange(whichOne){
  var clockID = whichOne
var time = new Date();
var hours = time.getHours().toString();
var min = time.getMinutes().toString();

if(hours.length<2){
  hours = '0' + hours;
}
if(min.length <2){
  min = '0' + min;
}
var newTimeHM = hours + ' : ' + min;

if(whichOne != ""){
  document.getElementById("clock1").innerHTML = newTimeHM;
}
document.getElementById("clock").innerHTML = newTimeHM;
}
//DATE CODE
function dateChange(whichOne){
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = date.getMonth();
  var datenum = date.getDate();
  var datenumstr = datenum.toString();
  var day = date.getDay();

  var months = ["January", "Febuary", "March", "April", "May", "June", "July",
"August", "September", "October", "Novemeber", "December"];

  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  month = months[month];
  day = days[day -1];
  var newDate = day + ' The ' + suffix(datenum) + ' of ' + month + ' ' + year;


  if(whichOne != ""){
    document.getElementById("date1").innerHTML = newDate;
  }
  document.getElementById("date").innerHTML = newDate;
}

function suffix(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function ActiveVPN(){
  var onOFF = document.getElementById("country").textContent;

  if(onOFF != 'Country: GB' && onOFF != ''){
    document.getElementById('ip').style.background = ' #41a35e';
    document.getElementById('country').style.background = ' #41a35e';
    document.getElementById('region').style.background = ' #41a35e';
    document.getElementById('vpn-checkID').style.background = ' #41a35e';
  }
  else{
    document.getElementById('ip').style.background = '#b21531';
    document.getElementById('country').style.background = '#b21531';
    document.getElementById('region').style.background = '#b21531';
    document.getElementById('vpn-checkID').style.background = '#b21531';
  }
  //console.log(onOFF);
}

function ProceedLink(link){
  var onOFF = document.getElementById("country").textContent;
  var travelLink = link;
  if(onOFF == 'Country: GB'){
    var r = confirm("VPN Turned OFF!, Are you sure you want to continue?");
    console.log(travelLink);
    if (r == true) {
      window.open(travelLink, '_blank');
    }
  }
  else{
    window.open(travelLink, '_blank');
  }
}

function searchEngine(){
  var formval = document.getElementById('GoogleSearch')  || null;
  var seEngine = document.getElementById("searchOption");
  if(seEngine.value == 0){
    formval.action = "https://www.google.co.uk/search";
  }
  if(seEngine.value == 1){
    formval.action = "https://duckduckgo.com/";
  }
  if(seEngine.value == 2){
    formval.action = "";
  }
}

function solarMovies(){
  var formval = document.getElementById('GoogleSearch')  || null;
  var seEngine = document.getElementById("searchOption");

  if(seEngine.value == 2){
    var textInput = document.getElementById('sBar').value;
    var finalText = noSpaces(textInput);
    //finalText = 'https://solarmoviez.ru/search/' + finalText + '.html';
    finalText = "https://solarmoviex.to/search?keyword="+finalText;
    window.open(finalText, '_blank');
  }
  if(seEngine.value == 3){ //not being used but can be added for youtube search
    var textInput = document.getElementById('sBar').value;
    var finalText = noSpaces(textInput);
    finalText = 'https://www.youtube.com/results?search_query=' + finalText;
    window.open(finalText, '_blank');
  }
}

function noSpaces(search){
  var finalText = "";
  var num = search.length;
  for(var i = 0; i<num; i++){
    var c = search.substring(0, 1);
    if(c == ' '){
      finalText = finalText + '+';
    }
    else{
      finalText = finalText + c;
    }
    search = search.substr(1);
  }
  return finalText;
}


function sideMenuOpen(){
  document.getElementById("hamOpen").style.display = "none";
  document.getElementsByClassName("sideMenu")[0].style.display = "block";
}
function sideMenuClose(){
  document.getElementsByClassName("sideMenu")[0].style.display = "none";
  document.getElementById("hamOpen").style.display = "block";
}


var subopencount = 0;
var linkcountmod1 = 0;
var linkcountmod2 = 0;
var linkcountmod3 = 0;
var linkcountmod4 = 0;
function openSub(){
  subopencount++

  if(subopencount % 2 == 0){
    document.getElementsByClassName("moduleContent")[0].style.display = "none";
  }
  else{
    document.getElementsByClassName("moduleContent")[0].style.display = "grid";
  }
}

function openLink(moduleNUM){
  if(moduleNUM == 1){
    linkcountmod1++
    if(linkcountmod1 % 2 == 0){
      document.getElementsByClassName("modulecontentlink")[0].style.display = "none";
    }
    else{
      document.getElementsByClassName("modulecontentlink")[0].style.display = "grid";
    }
  }

  if(moduleNUM == 2){
    linkcountmod2++
    if(linkcountmod2 % 2 == 0){
      document.getElementsByClassName("modulecontentlink")[1].style.display = "none";
    }
    else{
      document.getElementsByClassName("modulecontentlink")[1].style.display = "grid";
    }
  }

  if(moduleNUM == 3){
    linkcountmod3++
    if(linkcountmod3 % 2 == 0){
      document.getElementsByClassName("modulecontentlink")[2].style.display = "none";
    }
    else{
      document.getElementsByClassName("modulecontentlink")[2].style.display = "grid";
    }
  }

  if(moduleNUM == 4){
    linkcountmod4++
    if(linkcountmod4 % 2 == 0){
        document.getElementsByClassName("modulecontentlink")[3].style.display = "none";
    }
    else{
    document.getElementsByClassName("modulecontentlink")[3].style.display = "grid";
    }
  }
}


//TIMEOUT IDLE BLUR AND DARKEN

//adds background blur, darkens page and enables the second clock/date
function timeOutON() {
document.getElementById('timeout').style.filter = "brightness(0.0) blur(30px)";
document.getElementById('timeout').style.transition = "1.4s";
document.getElementById('clock1').style.display = "block";
document.getElementById('date1').style.display= "block";
document.getElementById('clock1').style.opacity = "10";
document.getElementById('date1').style.opacity= "10";
document.getElementById('clock1').style.transition = "1.4s";
document.getElementById('date1').style.transition = "1.4s";

clockChange("clock1");
dateChange("date1");

if(localStorage.getItem('optionDark') == "false"){
  document.getElementById('date1').style.color= "#b21531";
  document.getElementById('clock1').style.color = "#b21531";
}
}

//resets the idle stage to normal when user has any input.
function timeResetState(){
  document.getElementById('timeout').style.filter = "brightness(1) blur(0px)";
  document.getElementById('clock1').style.display = "none";
  document.getElementById('date1').style.display= "none";
  document.getElementById('clock1').style.opacity = "0";
  document.getElementById('date1').style.opacity= "0";
  resetTimer();
  if(localStorage.getItem('optionDark') == "true"){
    document.getElementById('date1').style.color= "#e5e5e5";
    document.getElementById('clock1').style.color = "#e5e5e5";
  }

}

//will reset the timer and start counting to 30,000 miliseconds (30 seconds)
function resetTimer() {
    clearTimeout(time);
    time = setTimeout(timeOutON, 30000) //calls method to change to idle
}

//WEATHER

function weather() {
      //api functions: https://darksky.net/dev/docs
      //general info: https://enlight.nyc/projects/weather#code

  var location = document.getElementById("location");
  var apiKey = '4b280aea73c6a0f8ecfc3a5be5f29fb9'; // other api key to use: f536d4c3330c0a1391370d1443cee84
  var url = 'https://api.forecast.io/forecast/';

  //gets current position
  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    console.log("weatherUpdated");
    //cordoindates of PC
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    //API request on location information
     $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
      $('#temp').html(fToc(data.currently.temperature) + '<span>° C</span>'); //temp converted from F to C
      $('#minutely').html(weatherIcon(data.hourly.icon)); //Icon String converted to ICON
      console.log(data.hourly.icon);
      $('#sum').html(data.hourly.summary); //Summary of Days Weather
    });
  }

  function error() {
    location.innerHTML = "Unable to retrieve your location"; //IF theres an error
  }

  //convert Farenheight to Celcius
  function fToc(temp){
    temp = temp - 32;
    temp = temp * 5;
    temp = temp / 9;
    return parseInt(temp, 10);
  }

  //Converts Icon String to ICON
  function weatherIcon(temp){
    var timeOfDay = new Date();
    var hours = timeOfDay.getHours().toString();

    if(hours >= 21 || hours <= 6){ //Night Time (API not good at picking if its day or night)
      if(temp == "clear-day"){
        var returnIcon = '<i class="fas fa-moon"></i>';
        return returnIcon;
      }
      if(temp == "clear-night"){
        var returnIcon = '<i class="fas fa-moon"></i>';
        return returnIcon;
      }
      if(temp == "partly-cloudy-day"){
        var returnIcon = '<i class="fas fa-cloud-moon"></i>';
        return returnIcon;
      }
      if(temp == "partly-cloudy-night"){
        var returnIcon = '<i class="fas fa-cloud-moon"></i>';
        return returnIcon;
      }
    }

    if(hours <21 && hours > 6 ){ //Day Time
      if(temp == "clear-day"){
        var returnIcon = '<i class="fas fa-sun"></i>';
        return returnIcon;
      }
      if(temp == "clear-night"){
        var returnIcon = '<i class="fas fa-sun"></i>';
        return returnIcon;
      }
      if(temp == "partly-cloudy-day"){
        var returnIcon = '<i class="fas fa-cloud-sun"></i>';
        return returnIcon;
      }
      if(temp == "partly-cloudy-night"){
        var returnIcon = '<i class="fas fa-cloud-sun"></i>';
        return returnIcon;
      }
    }

    if(temp == "rain"){
      var returnIcon = '<i class="fas fa-umbrella"></i>';
      return returnIcon;
    }
    if(temp == "snow" || temp == "sleet"){
      var returnIcon = '<i class="fas fa-snowflake"></i>';
      return returnIcon;
    }
    if(temp == "wind"){
      var returnIcon = '<i class="fas fa-wind"></i>';
      return returnIcon;
    }
    if(temp == "fog"){
      var returnIcon = '<i class="fab fa-mixcloud"></i>';
      return returnIcon;
    }
    if(temp == "cloudy"){
      var returnIcon = '<i class="fas fa-cloud"></i>';
      return returnIcon;
    }
  }
}
