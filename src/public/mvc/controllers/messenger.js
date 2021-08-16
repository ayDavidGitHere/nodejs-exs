try{
DOMHelp.OnLoad = function(){
DOMHelp._("#sendmessag").onclick = function(){
    alert("sending ajax message");
    NETHelp.AJAX(
        "GET", 
        {sender: "ayoade", message: "This is the first message"},
        "http://localhost:3000/api/socketcom",
        function(resp){
            alert(resp);
        }
    );//EO AJAX
    alert("done")
}
    
}
}catch(e){alert("Error: "+e)}