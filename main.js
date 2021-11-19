var speechrecognition=window.webkitSpeechRecognition;
var Recognition=new speechrecognition();

    function start(){
 document.getElementById("textbox").innerHTML="";
 Recognition.start();
}

Recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
if(content=="take my selfie"){
 console.log("taking selfie ---");
 speak();   
}

}


function speak(){
 var synth=window.speechSynthesis;
 speak_data="Taking your selfie in 5 seconds";
 var utterThis=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis); 
 Webcam.attach(camera);
setTimeout(function (){
  take_snapshot();
  save();  
},5000);  
}

function take_snapshot(){
 Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'"/>'    
 });   
}

camera=document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

 function save(){
 link=document.getElementById("link");
 img=document.getElementById("snapshot").src;
 link.href=img;
 link.click();    
 }