function valid()
{
	var fn, ln, id, p, f1=0, f2=0, f3=0, f4=0, f5=0, first_name, last_name, age,numb, idid, passw, cpassw;
	first_name=document.register.fname.value;
	last_name=document.register.lname.value;
	age=document.register.age.value;
	numb=document.register.phone.value;
	idid=document.register.userid.value;
	passw=document.register.password.value;
	cpassw=document.register.cpassword.value;

	fn=first_name.trim();
	ln=last_name.trim();
	ag=age.trim();
	mnum=numb.trim();
	id=idid.trim();	
	p=passw.trim();
	cp=cpassw.trim();

	if(fn=="")
	alert("First name cannot be empty");
	else if(fn.length<2 || fn.length>65)
	alert("Name length should be between 2-65");

	else
	f1=1;

	if(ln=="")
	alert("Last name cannot be empty");
	else if(fn.length<2 || fn.length>65)
	alert("Name length should be between 2-65");
	
	else
	f2=1;

	if(ag=="")
	alert("age cannot be empty");
	 else if(/^[0-9]*$/.test(ag)==false)
	alert("Age should be number");
	else
	f3=1;

	if(mnum=="")
	alert("Mobile number cannot be empty");
	 else if(/^[0-9]*$/.test(mnum)==false)
	alert("mobile number should be number");
	else
	f4=1;
	
	if(id=="")
	alert("Username cannot be empty");
		
	else
	f5=1;


	if(p=="")
	alert("Password cannot be empty");

	else
	f6=1;

	
	if(cp=="" && (p==cp))
	alert(" Password doesen't match");

	else
	f7=1;


	if(f1&&f2&&f3&&f4&&f5&&f6&&f7)
	window.location.href = "login_user.html";
}

function valid_user()
{
	alert("IN VALID USER");
	var fn, ln, id, p, f1=0, f2=0, f3=0, f4=0, f5=0, first_name, last_name, age,numb, idid, passw, cpassw;
	first_name=document.register.fname.value;
	last_name=document.register.lname.value;
	age=document.register.age.value;
	numb=document.register.phone.value;
	idid=document.register.userid.value;
	passw=document.register.password.value;
	cpassw=document.register.cpassword.value;

	fn=first_name.trim();
	ln=last_name.trim();
	ag=age.trim();
	mnum=numb.trim();
	id=idid.trim();	
	p=passw.trim();
	cp=cpassw.trim();

		
	if(id=="")
	alert("Username cannot be empty");
		
	else
	f1=1;


	if(p=="")
	alert("Password cannot be empty");

	else
	f2=1;


	if(f1&&f2)
	window.location.href = "edit-menu-item-status.html";
}

function valid_manager()
{
	alert("IN VALID MANAGER");
}
