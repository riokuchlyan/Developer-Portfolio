var color_scheme = "dark";
function switch_color_scheme(){
    if (color_scheme == "dark"){
        document.body.style.backgroundColor ="rgb(199, 199, 199)";
        document.body.style.color = "black";
        const elements = document.querySelectorAll(".main_text_links");
        elements.forEach(element => {
          element.style.color = "black";
        });
        const link = document.querySelectorAll(".link");
        link.forEach(link => {
          link.style.color = "black";
        });
        document.getElementById("moon").style.display = "block";
        document.getElementById("sun").style.display = "none";
        document.getElementById("header").style.color = "black";
        document.getElementById("down_arrow").style.filter = "brightness(0%)";
        document.getElementById("moon").style.filter = "brightness(0%)";
        color_scheme = "light";
    }
    else{
        document.body.style.backgroundColor = "#1a1a1a";
        document.body.style.color = "aliceblue";
        const elements = document.querySelectorAll(".main_text_links");
        elements.forEach(element => {
          element.style.color = "aliceblue";
        });
        const link = document.querySelectorAll(".link");
        link.forEach(link => {
          link.style.color = "aliceblue";
        });
        document.getElementById("sun").style.display = "block";
        document.getElementById("moon").style.display = "none";
        document.getElementById("header").style.color = "aliceblue";
        document.getElementById("down_arrow").style.filter = "brightness(100%)";
        document.getElementById("moon").style.filter = "brightness(100%)";
        color_scheme = "dark";
    }
}

function close_window(){
  var projects = document.getElementsByClassName("project_item");
  for (var i = 0; i < projects.length; i++){
    projects[i].style.display="none";
  }
  document.getElementById("visited_places").style.display="none";
  document.getElementById("beyond_work_list").style.display="block";
  document.getElementById("projects_list").style.display="block";
}

function stockTracker(){
  document.getElementById("projects_list").style.display="none";
  var stockTracker = document.getElementById("stockTracker")
  stockTracker.style.display="block";
}

function passwordManager(){
  document.getElementById("projects_list").style.display="none";
  var passwordManager = document.getElementById("passwordManager");
  passwordManager.style.display="block";
}

function nasServer(){
  document.getElementById("projects_list").style.display="none";
  var nasServer = document.getElementById("nasServer");
  nasServer.style.display="block";
}

function clipboardManager(){
  document.getElementById("projects_list").style.display="none";
  var clipboardManager = document.getElementById("clipboardManager");
  clipboardManager.style.display="block";
}

function buildingThisWebsite(){
  document.getElementById("projects_list").style.display="none";
  var buildingThisWebsite = document.getElementById("buildingThisWebsite");
  buildingThisWebsite.style.display="block";
}

function battleship(){
  document.getElementById("projects_list").style.display="none";
  var battleship = document.getElementById("battleship");
  battleship.style.display="block";
}

function webDesign(){
  document.getElementById("projects_list").style.display="none";
  var webDesign = document.getElementById("webDesign");
  webDesign.style.display="block";
}

function graphicalCalculator(){
  document.getElementById("projects_list").style.display="none";
  var graphicalCalculator = document.getElementById("graphicalCalculator");
  graphicalCalculator.style.display="block";
}

function stockTracker(){
  document.getElementById("projects_list").style.display="none";
  var stockTracker = document.getElementById("stockTracker")
  stockTracker.style.display="block";
}

function visited_places(){
  document.getElementById("beyond_work_list").style.display="none";
  document.getElementById("visited_places").style.display="block";
}