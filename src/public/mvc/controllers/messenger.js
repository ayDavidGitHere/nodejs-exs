try{
DOMHelp.OnLoad = function(){
    DOMHelp._("#sendmessage-but").onclick = function(){
        alert("sending message");
    }
}
}catch(e){alert("Error: "+e)}