var text = "Zentralstaubsauger und Klimatechnik und Laptop"
var speed = 50
var x = 0
function bb()
{
 var a = text.substring(0,x)
 var b = text.substring(x,x+1).toUpperCase()
 var c = text.substring(x+1,text.length)
 window.status = a + b + c
 if (x == text.length)
 {
  x = 0
 }
 else
 {
  x++
 }
 setTimeout("bb()",speed)
}
bb();



function fenster(name,url,b,h)
{
 is = new BrowserCheck()
 if (is.NS)
 {
  p = "width="+(b-10)+",height="+(h-30)
 }
 else
 {
  p = "width="+b+",height="+h
 }
 var neu = window.open(url,name,p);
 neu.focus();
 neu.moveTo(50,50);
 neu.focus();
}

function BrowserCheck()
{
 var b = navigator.appName;
 if (b == "Netscape")
 {
  this.b = "NS";
 }
 else if (b == "Microsoft Internet Explorer")
 {
  this.b = "IE";
 }
 else
 {
  this.b = b;
  this.v = parseInt(navigator.appVersion);
  this.NS = (this.b == "NS" && this.v>=4);
  this.NS4 = (this.b == "NS" && this.v == 4);
  this.NS5 = (this.b == "NS" && this.v >= 5);
  this.IE = (this.b == "IE" && this.v>=4);
  this.IE4 = (navigator.userAgent.indexOf('MSIE 4')>0);
  this.IE5=((navigator.userAgent.indexOf('MSIE 5')>0)||(navigator.userAgent.indexOf('MSIE 6')>0));
 }
 if (this.IE5 || this.NS5)
 {
  this.VER5 = true;
 }
 if (this.IE4 || this.NS4)
 {
  this.VER4 = true;
  this.OLD = (! this.VER5 && ! this.VER4) ? true : false;
  this.min = (this.NS||this.IE);
 }
 return;
}
