var calculadora = (function(){

//Variables

	var numero1
	var numero2
	var operacion
	var display=document.getElementById("display")
	var cero=document.getElementById("0")
	var uno=document.getElementById("1")
	var dos=document.getElementById("2")
	var tres=document.getElementById("3")
	var cuatro=document.getElementById("4")
	var cinco=document.getElementById("5")
	var seis=document.getElementById("6")
	var siete=document.getElementById("7")
	var ocho=document.getElementById("8")
	var nueve=document.getElementById("9")
	var on=document.getElementById("on")
	var dividido=document.getElementById("dividido")
	var por=document.getElementById("por")
	var menos=document.getElementById("menos")
	var mas=document.getElementById("mas")
	var igual=document.getElementById("igual")
	var punto=document.getElementById("punto")
	var signo=document.getElementById("sign")
	var raiz=document.getElementById("raiz")

	//Efecto de tecla y mostrar número al hacer click

	cero.addEventListener("mousedown",function(){
		cero.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent==0){
				display.textContent="0"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "0"
			}else if(display.textContent=="0."){
				display.textContent=display.textContent + "0"
			}else{}
		}else{
			display.textContent=display.textContent
		}
	})

	cero.addEventListener("mouseup",function(){
		cero.setAttribute("style","transform:scale(1,1)")
	})


	uno.addEventListener("mousedown",function(){
		uno.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "1"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "1"
			}else if(display.textContent==0){
				display.textContent="1"
			}else{
				display.textContent=display.textContent + "1"
			}
		}else{
			display.textContent="-" + display.textContent
			}
	})

	uno.addEventListener("mouseup",function(){
		uno.setAttribute("style","transform:scale(1,1)")
	})


	dos.addEventListener("mousedown",function(){
		dos.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "2"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "2"
			}else if(display.textContent==0){
				display.textContent="2"
			}else{
				display.textContent=display.textContent + "2"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	dos.addEventListener("mouseup",function(){
		dos.setAttribute("style","transform:scale(1,1)")
	})


	tres.addEventListener("mousedown",function(){
		tres.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "3"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "3"
			}else if(display.textContent==0){
				display.textContent="3"
			}else{
				display.textContent=display.textContent + "3"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	tres.addEventListener("mouseup",function(){
		tres.setAttribute("style","transform:scale(1,1)")
	})


	cuatro.addEventListener("mousedown",function(){
		cuatro.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "4"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "4"
			}else if(display.textContent==0){
				display.textContent="4"
			}else{
				display.textContent=display.textContent + "4"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	cuatro.addEventListener("mouseup",function(){
		cuatro.setAttribute("style","transform:scale(1,1)")
	})


	cinco.addEventListener("mousedown",function(){
		cinco.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "5"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "5"
			}else if(display.textContent==0){
				display.textContent="5"
			}else{
				display.textContent=display.textContent + "5"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	cinco.addEventListener("mouseup",function(){
		cinco.setAttribute("style","transform:scale(1,1)")
	})


	seis.addEventListener("mousedown",function(){
		seis.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "6"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "6"
			}else if(display.textContent==0){
				display.textContent="6"
			}else{
				display.textContent=display.textContent + "6"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	seis.addEventListener("mouseup",function(){
		seis.setAttribute("style","transform:scale(1,1)")
	})


	siete.addEventListener("mousedown",function(){
		siete.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "7"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "7"
			}else if(display.textContent==0){
				display.textContent="7"
			}else{
				display.textContent=display.textContent + "7"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	siete.addEventListener("mouseup",function(){
		siete.setAttribute("style","transform:scale(1,1)")
	})


	ocho.addEventListener("mousedown",function(){
		ocho.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "8"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "8"
			}else if(display.textContent==0){
				display.textContent="8"
			}else{
				display.textContent=display.textContent + "8"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	ocho.addEventListener("mouseup",function(){
		ocho.setAttribute("style","transform:scale(1,1)")
	})


	nueve.addEventListener("mousedown",function(){
		nueve.setAttribute("style","transform:scale(0.95,0.95)")

		var largoCadena = display.textContent.length
		if(largoCadena<8){ //limitar el largo a 8 caracteres
			if(display.textContent=="0."){
				display.textContent=display.textContent + "9"
			}else if(display.textContent>0){
				display.textContent=display.textContent + "9"
			}else if(display.textContent==0){
				display.textContent="9"
			}else{
				display.textContent=display.textContent + "9"
			}
		}else{
			display.textContent=display.textContent
			}
	})

	nueve.addEventListener("mouseup",function(){
		nueve.setAttribute("style","transform:scale(1,1)")
	})


	on.addEventListener("mousedown",function(){
		on.setAttribute("style","transform:scale(0.95,0.95)")
		display.textContent="0"
	})

	on.addEventListener("mouseup",function(){
		on.setAttribute("style","transform:scale(1,1)")
	})


	dividido.addEventListener("mousedown",function(){
		dividido.setAttribute("style","transform:scale(0.95,0.95)")
		numero1 = display.textContent;
		operacion = "/";
		limpiar();
	})

	dividido.addEventListener("mouseup",function(){
		dividido.setAttribute("style","transform:scale(1,1)")
	})


	por.addEventListener("mousedown",function(){
		por.setAttribute("style","transform:scale(0.95,0.95)")
		numero1 = display.textContent;
		operacion = "*";
		limpiar();
	})

	por.addEventListener("mouseup",function(){
		por.setAttribute("style","transform:scale(1,1)")
	})


	menos.addEventListener("mousedown",function(){
		menos.setAttribute("style","transform:scale(0.95,0.95)")
		numero1 = display.textContent;
		operacion = "-";
		limpiar();
	})

	menos.addEventListener("mouseup",function(){
		menos.setAttribute("style","transform:scale(1,1)")
	})


	mas.addEventListener("mousedown",function(){
		mas.setAttribute("style","transform:scale(0.95,0.95)")
		numero1 = display.textContent;
		operacion = "+";
		limpiar();
	})

	mas.addEventListener("mouseup",function(){
		mas.setAttribute("style","transform:scale(1,1)")
	})


	igual.addEventListener("mousedown",function(){
		igual.setAttribute("style","transform:scale(0.95,0.95)")
		numero2 = display.textContent;
		resolver();
	})

	igual.addEventListener("mouseup",function(){
		igual.setAttribute("style","transform:scale(1,1)")
	})


	punto.addEventListener("mousedown",function(){
		punto.setAttribute("style","transform:scale(0.95,0.95)")

		var n = display.textContent.search("[.]"); //Buscar si existe coma
		var largoCadena = display.textContent.length
		if(largoCadena<8){
			if(n<0){
				if(display.textContent==0){
					display.textContent=display.textContent + "."
				}else if(display.textContent>0){
					display.textContent=display.textContent + "."
				}else if (display.textContent<0){
					display.textContent=display.textContent + "."
				}else{
					display.textContent=display.textContent + "."
				}
			}else{
				display.textContent=display.textContent
			}
		}else{
			display.textContent=display.textContent
		}
	})

	punto.addEventListener("mouseup",function(){
		punto.setAttribute("style","transform:scale(1,1)")
	})


	signo.addEventListener("mousedown",function(){
		signo.setAttribute("style","transform:scale(0.95,0.95)")
		var n = display.textContent.search("[-]"); //Buscar si existe coma
		var inicio = 1;
		var fin = 9;
		var extraeNumero = display.textContent.substring(inicio, fin);
		if(n<0){
			display.textContent="-" + display.textContent
		}else{
			display.textContent=extraeNumero
		}
	})

	signo.addEventListener("mouseup",function(){
		signo.setAttribute("style","transform:scale(1,1)")
	})

	raiz.addEventListener("mousedown",function(){
		raiz.setAttribute("style","transform:scale(0.95,0.95)")
	})

	raiz.addEventListener("mouseup",function(){
		raiz.setAttribute("style","transform:scale(1,1)")
	})



	//Mostrar número en pantalla y alargar y solo escribir un cero
	//Escribir números con el teclado

	function mostrar_tecla(event){
	    var tecla = event.which || event.keyCode;
	    var numeroEscrito = String.fromCharCode(tecla); //número que escribes en el teclado

			var n = display.textContent.search("[.]"); //Buscar si existe coma
			var largoCadena = display.textContent.length
			if(largoCadena<8){
				if(tecla>47 && tecla<58){
					if(display.textContent=="0."){
							display.textContent=display.textContent + numeroEscrito
					}else if(display.textContent>0){
							display.textContent=display.textContent + numeroEscrito
					}else if(display.textContent==0){
							display.textContent=numeroEscrito
					}else{
							display.textContent=display.textContent + numeroEscrito
					}
				}else if(tecla==46){ //agregar coma a la pantalla y comprobar si existe
					if(n<0){
						if(display.textContent==0){
							display.textContent=display.textContent + "."
						}else if(display.textContent>0){
							display.textContent=display.textContent + "."
						}else if (display.textContent<0){
							display.textContent=display.textContent + "."
						}else{
							display.textContent=display.textContent + "."
						}
					}else{
						display.textContent=display.textContent
					}
				}else if(tecla==44){ //agregar la coma a la pantalla
					if(n<0){
						if(display.textContent==0){
							display.textContent=display.textContent + "."
						}else if(display.textContent>0){
							display.textContent=display.textContent + "."
						}else if (display.textContent<0){
							display.textContent=display.textContent + "."
						}else{
							display.textContent=display.textContent + "."
						}
					}else{
						display.textContent=display.textContent
					}
				}else{
					display.textContent=display.textContent
				}
			}else{
				display.textContent=display.textContent
			}
	}

	document.onkeypress=mostrar_tecla


//--------Operaciones Matematicas escribir en teclado--------


	//-----------------------Vaciar pantalla-------------------

		function limpiar(){
		display.textContent = "";
		}

	//----------------------Resolver ecuaciones----------------

		function resolver(){
		var res = 0;
		switch(operacion){
			case "+":
				res = parseFloat(numero1) + parseFloat(numero2);
				break;
			case "-":
				res = parseFloat(numero1) - parseFloat(numero2);
				break;
			case "*":
				res = parseFloat(numero1) * parseFloat(numero2);
				break;
			case "/":
				res = parseFloat(numero1) / parseFloat(numero2);
				break;
		}
		display.textContent = res;

		if(display.textContent.length>8){
			var inicio = 0;
			var fin = 8;
			var extraeNumero = display.textContent.substring(inicio, fin);
			display.textContent = extraeNumero;
		}
	}


//------------------------final------------------------------------
})();



//Código de tecla presionada
/*function mostrar_tecla(event){
    var tecla = event.which || event.keyCode;
    alert(tecla)
}
document.onkeypress=mostrar_tecla*/

//Obtener Id de teclas al hacer click
/* function mostrar_tecla(event){
    var tecla = window.event
    var target = tecla.srcElement.id
    alert(target)
}
document.onclick=mostrar_tecla */
