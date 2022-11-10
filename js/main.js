// date and time start//
var now=new Date();
var d,h,m,s,ms;
h=now.getHours();
switch(h)
{
	case 0:
	   h=12;
	   break;
	case 13:
	   h=1;
	   break;
	case 14:
	   h=2;
	   break;
	case 15:
	   h=3;
	   break;
	case 16:
	   h=4;
	   break;
	case 17:
	   h=5;
	   break;
	case 18:
	   h=6;
	   break;
	case 19:
	   h=7;
	   break;
	case 20:
	   h=8;
	   break;
	case 21:
	   h=9;
	   break;
	case 22:
	   h=10;
	   break;
	case 23:
	   h=11;
	   break;
	case 24:
	   h=12;
	   break;
}
m=now.getMinutes();
s=now.getSeconds();
d=now.toDateString();
document.querySelector("#d").value=d;

var a=document.querySelector("#t");
if(a.value==="")
    a.value=h+"h"+" : "+m+"m"+" : "+s+"s";
setInterval(anim,1000);

function anim()
{
  s++;
  if(s>59)
  {
      m++;
      s=0;
  }
  if(m>59)
  {
      h++;
      m=0;
  }
  if(h>12)
  {
     h=1;
  }
  var a=document.querySelector("#t");
   a.value=h+"h"+" : "+m+"m"+" : "+s+"s";
}
// date and time end//

