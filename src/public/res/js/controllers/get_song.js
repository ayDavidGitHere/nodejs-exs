import axios from 'axios';
import fs from 'fs';
import * as api from 'd-fi-core';
var arl_cookie = "33ac6fa0b48d164d4fea03615cb19d87183c0fd4f47cc34da64fe9ca4ebd6d8e6fcdb4718fe1573ecc89cb6c29e723b6470bad4571d400f6f7595ff45d7a94264644c5472a229f0b267b1c7d373eb063fffbd2357ba7fe2c0b6c6a7c73178300";









function AJAX(type, params, address, callback, callbackYet=function(){}, headers={} ){
        var url = address + '?'; var notFirst = false;
        for (var key in params) {
            if (params.hasOwnProperty(key)) {url += (notFirst ? '&' : '') + key + "=" + params[key];}
            notFirst = true;
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4){
            if(xmlhttp.status == 200){callback(xmlhttp.responseText);}
        }
        else{callbackYet(xmlhttp.response);}
        };
        xmlhttp.open(type, url, true);
        for(var key in headers){xmlhttp.setRequestHeader(key, headers[key]);}
        xmlhttp.send();
}   
function AJAX2(){
    var url = 
    "https://www.deezer.com/ajax/gw-light.php?api_key=ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY&api_token=&api_version=1.0&buildId=ios12_universal&input=3&lang=en&method=deezer.ping&output=3&screenHeight=480&screenWidth=320&version=8.32.0";
    var url = "https://www.deezer.com/ajax/gw.light.php";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
        if(xhr.status==200){console.log("SUCCESS", "Ajax2",xhr.responseText)}
        }
    };
    xhr.send();
}
function AppendToGet(address, params){
    var url = address + '?'; var notFirst = false;
    for (var key in params){if (params.hasOwnProperty(key)){url += (notFirst ? '&' : '') + key + "=" + params[key];} notFirst = true;}
    return url;
}   
    
    
    

const instance_params = 
    {
        version: '8.32.0',
        api_key: 'ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY',
        output: 3,
        input: 3,
        buildId: 'ios12_universal',
        screenHeight: '480',
        screenWidth: '320',
        lang: 'en',
    }
let instance_headers = 
    {
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json; charset=UTF-8',
        'User-Agent': 'Deezer/8.32.0.2 (iOS; 14.4; Mobile; en; iPhone10_5)',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; F3311) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.93 Mobile Safari/537.36',
    }
instance_headers = {};
    
    
    //AJAX
    AJAX("get", instance_params, "https://www.deezer.com/ajax/gw-light.php"
    , function(res){
        console.log("ajax res: ", res);
    }, function(err){
        console.log("ajax err: ", err);
    },
    instance_headers);
    //AJAX2
    AJAX2();
    //Fetch
    function Fetcher(fetchUrl){
    /*
    window.fetch(
     fetchUrl,
     {method: 'GET',
      //body: form_data,
      //mode: 'cors', credentials: 'include',
      //headers: {cookie: 'arl=' + arl_cookie, ...instance_headers }, 
     })*/
     window.fetch(fetchUrl)
    .then(response=>{return response.text()})
    .then(
    res=>{
        console.log("fetch res: ", res)
        },
    err=>{ 
        console.log("fetch err: ", err);
        }
    );//EO then
    }
    Fetcher(AppendToGet("https://www.deezer.com/ajax/gw-light.php", instance_params))
    
    
    
    
var inputField = document.getElementById("input-field");
inputField.style = "width: 80%; margin: 0 auto; background: #000237; height: 70px; border-radius: 7px; outline:none; color: white; border-style:none;"
var submitBut = document.getElementById("submit-but");
submitBut.innerText = "Click to Submit"
submitBut.style = "background: #46a237; height: 30px; border-radius: 10px; color: red; outline: none; border-style: none;"
submitBut.onclick = function(){
    Fetcher(inputField.value)
}
document.body.appendChild(inputField);
document.body.appendChild(submitBut);







document.getElementById("dn-but").onclick = 
async function(){
console.log("clicked| ")



await api.initDeezerApi(arl_cookie);
console.log("initDeezerApi ");
try{
  const user = await api.getUser();
  console.log('Logged in as ' + user.BLOG_NAME);
} catch (err) {
  console.error('Login Error ', err.message);
}



let url = "money man";
let searchData = null;
const { TRACK } = await api.searchMusic(url, ['TRACK']);
searchData = {
    info: { type: 'track', id: url },
    linktype: 'track',
    linkinfo: {},
    tracks: TRACK.data.map((t) => {
        if (t.VERSION && !t.SNG_TITLE.includes(t.VERSION)) {
            t.SNG_TITLE += ' ' + t.VERSION;
        }
        return t;
    }),
    };
const data = searchData ? searchData : await (0, d_fi_core_1.parseInfo)(url);
console.log(data);



/*
const track = await api.getTrackInfo(song_id);
const trackData = await api.getTrackDownloadUrl(track, 1);
const {data} = await axios.get(trackdata.trackUrl, {responseType: 'arraybuffer'});
const outFile = trackData.isEncrypted ? api.decryptDownload(data, track.SNG_ID) : data;
const trackWithMetadata = await api.addTrackTags(outFile, track, 500);
fs.writeFileSync(track.SNG_TITLE + '.mp3', trackWithMetadata);
*/

};