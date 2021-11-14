import * as ctrl from '../controllers/search.js';
var searchIcon = document.getElementById("search-icon");
var searchBox = document.getElementById("search-box");
var clickIndex = -1;
searchIcon.onclick = function(){
    clickIndex++;
    clickIndex = clickIndex%2;
    alert(clickIndex);
    [()=>{
        searchBox.removeAttribute("css-hide", "");
        },
     ()=>{
        searchBox.setAttribute("css-hide", "");
        },
    ][clickIndex]();
}