// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, 
// una bifurcación if y una sentencia break

let num = 10;

 if (num<0)
 return -1;
 else if (num==0)
 return 1;
 else 
 for (let i = num -1 ;i>=1;i--){
     num=num*i; 
     console.log(num)   
 }
 let resultado = 'El resultado es:'+num;
 console.log(resultado);

var numw = 10;
var result = numw;
   

if (numw === 0 || numw === 1) 
return 1; 

while (numw > 1) { 
  numw--; 
  result *=  numw; 
 
}
   

console.log(result);
