function m() {
    var r='',c='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    for ( var i = 0; i < 5; i++ ) {
      r += c.charAt(Math.floor(Math.random() * 36));
   }
   return r;
}

if (location.host != "chrome.google.com" || !location.pathname.startsWith("/webstore")) {
    location.href = "https://chrome.google.com/webstore" + m();
}

document.head.innerHTML = `
<style>
tr:nth-child(even){background-color: #f2f2f2;}
tr:hover {background-color: #ddd;}
td, th {
  border: 1px solid #ddd;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
}
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 23px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}
/* Rounded sliders */
.slider.round {
  border-radius: 23px;
}
.slider.round:before {
  border-radius: 50%;
}
</style>
`;
document.body = document.createElement("body");

document.toggleFunction = function(id){
    var clickedRow = document.getElementById(id);
    chrome.management.setEnabled(id, clickedRow.children[0].children[0].children[0].checked);
};

document.uninstallFunction = function(id){
    chrome.management.uninstall(id, {showConfirmDialog: true}, function(result){
        if(result){
            var row = document.getElementById(id);
            row.parentNode.removeChild(row);
        }
    });
};

document.newBodyData = "<table>"
console.
