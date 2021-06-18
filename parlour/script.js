$('#img1,#img2,#img3,#img4,#img5,#img6').click(function(e) { 
		var z_img = document.getElementById("img"); 
		$("#img_modal").fadeIn();
		$("#myBtn").fadeOut();
		z_img.src = e.target.src;
});
function openModal(e,id)
{
	var btn1 = document.getElementById("fb-button");
	var btn2 = document.getElementById("pl-button");
	var span1 = document.getElementsByClassName("close-1")[0];
	var span2 = document.getElementsByClassName("close-2")[0];
	var span3 = document.getElementsByClassName("timing-options")[0];
	if(id == btn1.id) {
		$("#fb_modal").fadeIn();
	}
	if(id == btn2.id) {
		$("#pl_modal").fadeIn();
	}
	span1.onclick = function() {
		$("#fb_modal").fadeOut();
	}
	span2.onclick = function() {
		$("#pl_modal").fadeOut();
	}
	span3.onclick = function() {
		$("#pl_modal").fadeOut();
	}
}
window.onclick = function(event) {
	var modal_1 = document.getElementById("fb_modal");
	var modal_2 = document.getElementById("pl_modal");
	var imodal= document.getElementById("img_modal");
	if (event.target == modal_1) {
		$("#fb_modal").fadeOut();
	}
	if (event.target == modal_2) {
		$("#pl_modal").fadeOut();
	}
	if (event.target == imodal) {
		$("#img_modal").fadeOut();
		$("#myBtn").fadeIn();
	}
}
function validateForm1()                                    
{ 
    var name = document.forms["myForm1"]["formName"];               
    var phone = document.forms["myForm1"]["mobile-no"];   
	var date = document.forms["myForm1"] ["formDate"] ;
	var time = document.forms["myForm1"]  ["formTime"] ;
	var email = document.forms["myForm1"] ["email"]; 
    if (name.value == "")                                  
    {
        window.alert("Please enter your name."); 
		name.style.border="2px solid red";
        name.focus(); 
        return false; 
    } 
	else{
		name.style.border="2px solid black";
	}
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
	if(phone.value.length != 10) {
		window.alert("Phone number must be 10 digits.");
		phone.focus();
		return false;
	} 
	if(email.value == "") 
	{
		window.alert("Please enter your email id");
		email.focus();
		return false;
	}
	 if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < email.value.indexOf("@", 0) )                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
	if(date.value == "")
	{
		window.alert("Please enter the date");
		date.focus();
		return false;
	}
	if(time.value == "")
	{
		window.alert("Please enter the time");
		time.focus();
		return false;
	}	
	else {	
	window.alert("Dear "+name.value+", your appointment has been booked for "+date.value+"at "+time.value );
    return true; 
	}
}
function validateForm2()                                    
{ 
    var name = document.forms["myForm2"]["formName"];               
    var phone = document.forms["myForm2"]["mobile-no"];   
	var message = document.forms["myForm2"] ["message"] ;
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
	if(phone.value.length != 10) {
		window.alert("Phone number must be 10 digits.");
		phone.focus();
		return false;
	} 
	if(message.value == "")
	{
		window.alert("please enter the feedback!");
		message.focus();
		return false;
	}
	window.alert("Dear "+name.value+", Thank You for your valuable feedback!" );
    return true; 
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 550|| document.documentElement.scrollTop > 550 ) {
    $("#myBtn").fadeIn();
  } else {
    $("#myBtn").fadeOut();
  }
}





