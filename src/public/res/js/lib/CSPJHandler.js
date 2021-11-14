function CSPJHandler(storagePath){ 
let CSPJUrl = "http://localhost:8080/src/server/libs/CSPJ.php";
this.Send = function(SuccessCallback, data={}){ 
    let form_data = new FormData();
    let form_values = 
    {
        storage: storagePath,
        push: 
        JSON.stringify({
            sender: "Model Name",
            body: "Model Comment Body",
            extras: "",
            stack: [],
            ...data,
        }),
    }; 
    for(var key in form_values){form_data.append(key, form_values[key])}
    window.fetch(CSPJUrl, {method: 'POST', body: form_data, mode: "cors", })
    .then(response=>{return response.text()})
    .then(res=>{SuccessCallback(res)},
          err=>{console.log("send comment Failed ");});
}
this.Load = function(SuccessCallback, data={}){
    let form_data = new FormData();
    let form_values = 
    {
        storage: storagePath,
        pull: 
        JSON.stringify({
            stack: [],
            pullchildren: true,
            ...data,
        }),
    }; 
    for(var key in form_values){form_data.append(key, form_values[key])}
    window.fetch(CSPJUrl, {method: 'POST', body: form_data, mode: "cors", })
    .then(response=>{return response.text()})
    .then(res=>{SuccessCallback(res);},
         err=>{console.log("Load Comment Failed ");});
}

}//EO cspjHandler;

