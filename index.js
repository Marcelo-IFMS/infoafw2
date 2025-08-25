var a;
var n;
n=10;
n++;
a=2;
a++;
var texto;
texto = 'A soma de a+n é: ';
function soma(x,y){return (texto + (x+y));}
function contnum(z){for(i=0;i<z;i++){console.log(i)}}
console.log(soma(a,n));
contnum(n);