makeHam();

var hamburger = document.getElementById("hamburger");
//hamburger.style.position = "absolute";
//hamburger.style.width = "50%";
//hamburger.style.height = "50%";
//hamburger.style.backgroundColor = "purple";

var colors = document.getElementById("hamburger").style.backgroundColor;
var lcolor = document.getElementById("line").style.backgroundColor;
colors = "green";
function makeHam() {
  var h = document.createElement("div");
  h.className = "hammy";
  h.id = "hamburger";
  h.style.position = "absolute";
  h.style.width = "50%";
  h.style.height = "50%";

  var s = document.createElement("span");
  s.id = "line";
  s.style.position = "absolute";
  s.style.width = "100%";
  s.style.height = "20%";

  h.appendChild(s);
  document.body.appendChild(h);
}
