function im()
{
	document.getElementById('img').style.display='none';
}
var hs=0;
var ai=0;
var c=15;
function g(){
	document.getElementById('hm').style.boxShadow="none";
	document.getElementById('hm2').style.boxShadow="none";
	document.getElementById('tx').style.display="none";
	c-=1;
	if(c>=0){
	let x=Math.floor(Math.random()*3);
	let y=Math.floor(Math.random()*3);
	if(x==0)
	document.getElementById('hm').style.backgroundImage="url('s1.png')";
	else if(x==1)
	document.getElementById('hm').style.backgroundImage="url('rk1.png')";
	else
	document.getElementById('hm').style.backgroundImage="url('r1.png')";


	if(y==0)
	document.getElementById('hm2').style.backgroundImage="url('s2.png')";
	else if(y==1)
	document.getElementById('hm2').style.backgroundImage="url('rk2.png')";
	else
	document.getElementById('hm2').style.backgroundImage="url('r2.png')";

	 if(x==0 && y==1) ai=ai+1;
	 else if(x==0 && y==2) hs=hs+1;
	 else if(x==1 && y==0) hs=hs+1;
	 else if(x==1 && y==2) ai=ai+1;
	 else if(x==2 && y==0) ai=ai+1;
	 else if(x==2 && y==1) hs=hs+1;
	 else {
	 		document.getElementById('tx').style.display="block";

	 	document.getElementById('tx').innerHTML="TIE";
	 }
	 if(x==0 && y==1) ai=ai+1;
	 else if(x==0 && y==2) document.getElementById('hm').style.boxShadow="0 0 150px 	#90EE90";
	 else if(x==1 && y==0) document.getElementById('hm').style.boxShadow="0 0 150px 	#90EE90";
	 else if(x==1 && y==2) document.getElementById('hm2').style.boxShadow="0 0 150px 	#90EE90";
	 else if(x==2 && y==0) document.getElementById('hm2').style.boxShadow="0 0 150px 	#90EE90";
	 else if(x==2 && y==1) document.getElementById('hm').style.boxShadow="0 0 150px 	#90EE90";	
	 document.getElementById('hs').innerHTML=hs;
	document.getElementById('as').innerHTML=ai;

}
else{
		document.getElementById('tx').style.display="block";

		if(hs==ai)	document.getElementById('tx').innerHTML="TIE";
		else if(hs>ai)	document.getElementById('tx').innerHTML="Jay won";
		else document.getElementById('tx').innerHTML="AI won";
	 	document.getElementById('hm').style.backgroundImage="";
	 	document.getElementById('hm2').style.backgroundImage="";

}
}

