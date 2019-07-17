var themeOP = localStorage.getItem('darkTheme');
var textInputs = [];
var searchEngine = localStorage.getItem('searchEngine'); //change to localstorage

window.onload = function() {
  makeLocalStorage();
  clockChange();
  dateChange();
  getIP();

  //localStorage.setItem('todos', '');
  getTodos();
  displayTodo();


  if(themeOP == 'true'){
     $('#changeTheme').bootstrapToggle('on');
  }else{
    $('#changeTheme').bootstrapToggle('off');
  }

  textInputs.push(document.getElementById('todo-text'));
  textInputs.push(document.getElementById('sBAR'));

  applySearch();
  changeLogo();

}



function makeLocalStorage(){
  if(localStorage.getItem('searchEngine') == null){
    localStorage.setItem('searchEngine', 1);
  }
  if(localStorage.getItem('todos') == null){
    localStorage.setItem('todos', '');
  }
  if(localStorage.getItem('darkTheme') == null){
    localStorage.setItem('darkTheme', true);
  }
}

/* IP */

var ip;
var lat;
var long;
var country;

function getIP(){
  $.getJSON('https://ipapi.co/json', function(data) {
    ip = data.ip;
    lat = data.latitude;
    long = data.longitude;
    country = data.country;
    changeMap();
  });
  //https://ipapi.co/api/
}

//changes the map position
function changeMap(){
  var map = document.getElementById('map');
  if(country == 'GB' || country == 'undefined'){
    map.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyBOi_4L-NgEAYOcf309Z93TQrZAG4NXQTY&center=54.296007,-4.069787&zoom=6&maptype=roadmap");
  }else{
    map.setAttribute("src", "https://www.google.com/maps/embed/v1/view?key=AIzaSyBOi_4L-NgEAYOcf309Z93TQrZAG4NXQTY&center=" + lat + "," + long + "&zoom=6&maptype=roadmap");
  }
  console.log("reached");
}

/* CLOCK AND DATE *?

//runs the functions on every amount of milliseconds
setInterval(clockChange, 1000);
setInterval(dateChange, 180000);

/* Time and Date Change */
function clockChange(){
  var time = new Date();
  var hours = time.getHours().toString();
  var min = time.getMinutes().toString();

  if(hours.length<2){
    hours = '0' + hours;
  }
  if(min.length <2){
    min = '0' + min;
  }
  var newTimeHM = hours + ':' + min;
  document.getElementById("clock").innerHTML = newTimeHM;
}

function dateChange(){
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

  if(day == 0){
    day = days[6];
  }else{
      day = days[day -1];
  }

  var newDate = day + ' The ' + suffix(datenum) + ' of ' + month + ' ' + year;

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

/* SEARCH BAR */

function changeSearch(){
  if(searchEngine == 5){
    searchEngine = 1;
  }else{
    searchEngine++;
  }

  localStorage.setItem('searchEngine', searchEngine);
  applySearch();
  changeLogo();
}

function applySearch(){
  var engine = document.getElementById('searchContainer');
  var btn = document.getElementById('sBTN');
  if(searchEngine == 1){
      engine.action = "https://www.google.co.uk/search";
      btn.setAttribute('type', 'submit');
  }else if(searchEngine == 2){
    engine.action = "https://duckduckgo.com/";
    btn.setAttribute('type', 'submit');
  }else{
    btn.setAttribute('type', 'button');
  }
}


function otherSearch(){
  if(searchEngine == 3){
    console.log('reached');
    var txt = 'https://solarmoviex.to/search?keyword=' + noSpaces(document.getElementById('sBAR').value);
    location.replace(txt);
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

function changeLogo(){
  var logo = ['google-', 'duck-', 'm-', 'r-', 'pirate-'];
  var ext = ['.svg', '.svg', '.png', '.png', '.svg'];

  if(localStorage.getItem('darkTheme') === 'true'){
    var path = 'img/' + logo[searchEngine-1] + 'Light' + ext[searchEngine-1];
    document.getElementById('search-Logo').setAttribute('src', path);
  }else{
    var path = 'img/' + logo[searchEngine-1] + 'Dark' + ext[searchEngine-1];
    document.getElementById('search-Logo').setAttribute('src', path);
  }
}


/*TOGGLE BETWEEN LIGHT AND DARK THEME
toggle info provided by: https://gitbrent.github.io/bootstrap4-toggle/
*/
$(function() {
   $('#changeTheme').change(function() {
     if(document.getElementById('changeTheme').checked){
       document.getElementById('pageStyle').setAttribute('href', 'css/dark.css');
       localStorage.setItem('darkTheme', true);
       changeLogo();
     }else{
       document.getElementById('pageStyle').setAttribute('href', 'css/light.css');
       localStorage.setItem('darkTheme', false);
       changeLogo();
     }
   })
 })

 /* TOGGLE MAP CLICKABLE */
 $(function() {
    $('#mapClick').change(function() {
      if(document.getElementById('mapClick').checked){
        document.getElementById('map').style.pointerEvents = "all"
      }else{
        document.getElementById('map').style.pointerEvents = "none"
      }
    })
  })


/* BOX OPENING FUNCTION */
function openSetting(){
  document.getElementById('box').style.display = "block";
  document.getElementById('settings').style.display = "block";
  document.getElementById('uni').style.display = "none";
  document.getElementById('todo').style.display = "none";
}
function openUni(){
  document.getElementById('box').style.display = "block";
  document.getElementById('settings').style.display = "none";
  document.getElementById('uni').style.display = "block";
  document.getElementById('todo').style.display = "none";
}

function openTodo(){
  document.getElementById('box').style.display = "block";
  document.getElementById('settings').style.display = "none";
  document.getElementById('uni').style.display = "none";
  document.getElementById('todo').style.display = "block";
}

function closeBox(){
  document.getElementById('box').style.display = "none";
  document.getElementById('settings').style.display = "none";
  document.getElementById('uni').style.display = "none";
  document.getElementById('todo').style.display = "none";
}

/*  KeyPress Shortcuts

*/
window.addEventListener("keydown", checkKeyPress, false); //ENABLE FOR BOX TO APPEAR

function checkKeyPress(key){
  if(key.keyCode == "27"){ //ESC
    closeBox();
  }
  if(textInputs.includes(document.activeElement) !== true){
    if(key.keyCode == "83"){ // S
      openSetting();
    }
    if(key.keyCode == "85"){ //U
      openUni();
    }
    if(key.keyCode == "84"){ //T
      openTodo();
    }
  }
}


/* TODO SCRIPTS */

//initializes the array of todos
var todoArray = [];

//pulls todos from the localStroage and stores them in an array
function getTodos(){
  var pulledData = localStorage.getItem('todos');
  if(pulledData != ''){
    todoArray = JSON.parse(localStorage.getItem('todos'));
  }
}

//gets text from text-box, generates ID number from the last todo.id + 1
//pushes the todo to the array and updates the localstorage and display
function addTodo(){
  var text = document.getElementById('todo-text').value;
  if(text != '' && todoArray.length <= 10){
    var idNum = 0;

    if(todoArray.length == 0){
      idNum = 1;
    }else{
      idNum = todoArray[(todoArray.length - 1)].id + 1;
    }

    todoArray.push({
      id: idNum,
      content: text,
      completed: false
    });

    updateTodo();
    document.getElementById('todo-text').value = "";
    document.getElementById('todo-text').focus();
    displayTodo();
  }
}

//saves the todo array into the localstorage using JSON
function updateTodo(){
  localStorage.setItem('todos', JSON.stringify(todoArray));
  todoArray = JSON.parse(localStorage.getItem('todos'));
}

//displays all todos that are not completed first then the todos that have been completed
function displayTodo(){
  var toCompleteCode = "";
  var completedCode = "";

  for(var i = 0; i < todoArray.length; i++){
    console.log(todoArray[i].completed);
    if(todoArray[i].completed != true){
       var code = "<div class=\"todo\"><p>"+ todoArray[i].content + "</p><button onclick=\"completeTodo("+ todoArray[i].id +")\"><i class=\"far fa-check-circle\"></i></button></div>";
       toCompleteCode += code;
    }else{
      var code = "<div class=\"todoCompleted\"><p>"+ todoArray[i].content + "</p><button onclick=\"deleteTodo("+ todoArray[i].id +")\"><i class=\"far fa-times-circle\"></i></button></div>";
      completedCode += code;
    }
  }

  document.getElementById('todos').innerHTML = toCompleteCode + completedCode;
}

//finds the todo with the corresponding id to num and changes completed to true
function completeTodo(num){
  for(var i = 0; i < todoArray.length; i++){
    if(todoArray[i].id === num){
      todoArray[i].completed = true;
      updateTodo();
      displayTodo();
    }
  }
}

//removes the todo witht the corresponding id to num and removes it from the todo todoArray
function deleteTodo(num){
  var tempTodo = [];
  for(var i = 0; i < todoArray.length; i++){
    if(todoArray[i].id !== num){
      tempTodo.push(todoArray[i]);
    }
  }

  todoArray = tempTodo;
  updateTodo();
  displayTodo();
}
