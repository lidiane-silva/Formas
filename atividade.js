    var q1 = document.getElementById('quadrado')
	var r1 = document.getElementById('retangulo')
	var t1 = document.getElementById('triangulo')
	var c1 = document.getElementById('circulo')
	var x1 = document.getElementById('x')
	var resultado = document.getElementById("resultado")
	

	function limpar() {
		q1.value = ''
		r1.value = ''
		t1.value = ''
		c1.value = ''
		x1.value = ''
		resultado.innerHTML = ''
		resultado.style.backgroundColor = '#FFFFFF'
	}
    function quadrado(){
		var q = ''
	for (var l = 0; l < 5; l++) {
		for (var c = 0; c < 5; c++){
			q += '*'
		}

		q += '<br/>'
	}
	document.getElementById('resultado').innerHTML = q
}

    function quadradoo(){
     var x = 3;
     var q = ''
    for (var i = 0; i < x; i++) {
    for (var a = 0; a <5; a++) {
    if((i==0)||(i==x-1)){
	q += '*';
  } else{
    if((a==0) ||(a==5-1)){
    q += '<br>';
  }else if(a==2-1){
	q += '*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*';
  } else{   	
   q += '<br>*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*'
   }
                
}
}
  
}
    document.getElementById('resultado').innerHTML = q
};

function retangulo(){
		var r = ''
	for (var l = 0; l < 4; l++) {
		for (var c = 0; c < 10; c++){
			r += '*'
		}

		r += '<br/>'
	}
	document.getElementById('resultado').innerHTML = r
}
function retanguloo(){
var x = 3;
var r = ''
for (var i = 0; i < x; i++) {
for (var a = 0; a <10; a++) {
if((i==0)||(i==x-1)){
	r += '*';
} else{
if(a==0){
   r += '<br>';
}else if(a==9-1){
	r += '*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*';
} else if(a==9){   	
   r += '<br>*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*<br>'
   }
                
}
}
  
}
document.getElementById('resultado').innerHTML = r
};

function triangulo(){
 var j,i,l;
 var t =""
 var n = 5;
for (var i = 0; i<= n; i++)
	
 {
	for (j = 1; j <= n-i ; j++) {
	t += '&nbsp'
}
for (l = 1; l <= n+i-4 ; l++) {
	t += '*'
}
	t += '<br>'
    
}
document.getElementById('resultado').innerHTML = t
	
};

function trianguloo(){
 var j,i,l;
 var t =""
 var n = 5;
for (var i = 0; i<= n; i++)
	
 {
	for (j = 1; j <= n-i ; j++) {
	t += '&nbsp'
}
for (l = 1; l <= n+i-5 ; l++) {
	if ((l==1)||(l==1)) {
	t += '*'
	}else 
	if (i==5) {
	t += '*'
	}else
	 if (l<=5) {
	 	t += '&nbsp&nbsp'
	 }
}
	t += '*<br>'
    
}
document.getElementById('resultado').innerHTML = t
	
}
function circulo(){
	var x,y;
	var ci = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
 	     if ((x==5)&&(y==2)) {
 		ci +='****'
 	} if ((x==5)&&(y==3)) {
 		ci +='***'
 	}else if ((x==5)&&(y==4)) {
 		ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==1)||(x==4)&&(y==2)) {
 		ci +='****'
 	}else if ((x==3)&&(y==0)) {
 		ci +='**'

 	}else if ((x==3)&&(y==1)||(x==3)&&(y==2)||(x==3)&&(y==3)) {
 		ci +='****'
 	}else if ((x==2)&&(y==0)) {
 		ci +='**'
 	}else if ((x==2)&&(y==0)||(x==2)&&(y==1)||(x==2)&&(y==2)||(x==2)&&(y==3)) {
 		ci +='****'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==1)||(x==1)&&(y==2)) {
 		ci +='****'
 	}else if ((x==0)&&(y==2)||(x==0)&&(y==3)) {
 		ci +='&nbsp&nbsp&nbsp'
 	}else if ((x==0)&&(y==0)||(x==0)&&(y==1)) {
 		ci +='****'
}else if (y==5) {
 		ci +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		ci +='&nbsp&nbsp&nbsp'
 	
 }
 }
document.getElementById('resultado').innerHTML = ci
}
function circuloo(){
	var x,y;
	var ci = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
 	     if ((x==5)&&(y==1)||(x==5)&&(y==2)||(x==5)&&(y==3)||(x==5)&&(y==0)) {
 		ci +='*'
 	}else if ((x==5)&&(y==4)) {
 		ci +='&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==2)) {
 		ci +='*'
 	}else if ((x==4)&&(y==1)) {
       ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==3)&&(y==0)||(x==3)&&(y==3)) {
 		ci +='*'
 	}else if ((x==3)&&(y==1)||(x==3)&&(y==2)) {
 		ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	} if ((x==2)&&(y==0)||(x==2)&&(y==3)) {
 		ci +='*'
 	}else if ((x==2)&&(y==1)||(x==2)&&(y==2)) {
       ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	} if ((x==1)&&(y==1)) {
       ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==2)) {
 		ci +='*'
 	}else if ((x==0)&&(y==4)) {
 		ci +='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'
 	}else if ((x==0)&&(y==1)||(x==0)&&(y==2)||(x==0)&&(y==3)||(x==0)&&(y==0)) {
 		ci +='*&nbsp&nbsp'
}else if (y==5) {
 		ci +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		ci +='&nbsp&nbsp'
 	
 }
 }
document.getElementById('resultado').innerHTML = ci
}
function xis(){
 	var x,y;
	var xx = '';
 for (x = 5; x >= 0; x--) {
 	for (y = 5 ; y >= -2; y--) {
 	console.log("result"+y +"xxx+"+x);
       if ((x==5)&&(y==0)||(x==5)&&(y==4)) {
        xx +='*'
    }else if ((x==5)&&(y==1)||(x==5)&&(y==2)||(x==5)&&(y==3)) {
 		xx +='&nbsp'
 	}else if ((x==4)&&(y==1)||(x==4)&&(y==3)) {
 		xx +='*'
 	}else if ((x==4)&&(y==0)||(x==4)&&(y==2)||(x==4)&&(y==4)) {
 		xx +='&nbsp'
 	}else if ((x==3)&&(y==2)) {
 		xx +='*'
 	}else if ((x==3)&&(y==0)||(x==3)&&(y==1)||(x==3)&&(y==3)||(x==3)&&(y==4)) {
 		xx +='&nbsp'
 	}else if ((x==2)&&(y==1)||(x==2)&&(y==3)) {
        xx +='*'
 	}else if ((x==2)&&(y==0)||(x==2)&&(y==2)||(x==2)&&(y==4)) {
 		xx +='&nbsp'
 	}else if ((x==1)&&(y==0)||(x==1)&&(y==4)) {
        xx +='*'
 	}else if ((x==1)&&(y==1)||(x==1)&&(y==2)||(x==1)&&(y==3)) {
 		xx +='&nbsp'
 	}else if ((x==0)&&(y==0)||(x==0)&&(y==1)||(x==0)&&(y==2)||(x==0)&&(y==3)||(x==0)&&(y==4)) {
 		xx +=''
 	}else if (y==5) {
 		xx +='<br>&nbsp&nbsp&nbsp&nbsp'
}else
 		xx +='&nbsp&nbsp&nbsp'
 	
 }
 }
document.getElementById('resultado').innerHTML = xx
}