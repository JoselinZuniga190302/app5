//JavaScript Document

$(document).ready(function(e) {
 document.addEventListener("deviceready",function(){
	 
 $('#bee').tap(function(){
	 navigator.notification.beep(1);
 });//tap beep
 
 $('#vibrar').tap(function(){
	 navigator.notification.vibrate(5000);
 });//tap vibrar
 
 },false);//devicerady
});//ready