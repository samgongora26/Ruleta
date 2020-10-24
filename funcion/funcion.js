
        	const Nombre_Participantes =  [
                   {'fillStyle' : '#eae56f', 'text' : 'Can Pérez Luis Ángel'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Can Centeno Estefani Guadalupe '},
                    {'fillStyle' : '#89f26e', 'text' : 'Cruz Sánchez Ernesto Enrique '},
                   {'fillStyle' : '#eae56f', 'text' : 'Euán Palma Yuliana Beatriz '},
                    {'fillStyle' : '#7de6ef', 'text' : 'García Loo Teresita de Jesús'},
                     {'fillStyle' : '#89f26e', 'text' : 'Herrera Tun Giselle Carolina'},
                   {'fillStyle' : '#e7706f', 'text' : 'Mendoza Zapata Dariana Jimena'},
                ]

                console.log(Nombre_Participantes);
                const Cantidad = Nombre_Participantes.length;
                console.log(Cantidad);

            let theWheel = new Winwheel({
                'numSegments'  : Cantidad,     
                'outerRadius'  : 212,   
                'textFontSize' : 11,    
                'segments'     :  Nombre_Participantes,
                'animation' :          
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,    
                    'spins'    : Cantidad,    
                    'callbackFinished' : alertPrize
                }
            });
            let wheelPower    = 0;
            let wheelSpinning = false;
            function powerSelected(powerLevel)
            {
                if (wheelSpinning == false) {
                    document.getElementById('pw1').className = "";
                    document.getElementById('pw2').className = "";
                    document.getElementById('pw3').className = "";

                    if (powerLevel >= 1) {
                        document.getElementById('pw1').className = "pw1";
                    }

                    if (powerLevel >= 2) {
                        document.getElementById('pw2').className = "pw2";
                    }

                    if (powerLevel >= 3) {
                        document.getElementById('pw3').className = "pw3";
                    }

                    wheelPower = powerLevel;

                    document.getElementById('spin_button').src = "./imagenes/spin_on.png";
                    document.getElementById('spin_button').className = "clickable";
                    document.getElementById('spin_button').className = "btn btn-primary btn-block";
                }
            }

            function calcular()
    {
        let stopAt = (91 + Math.floor((Math.random() * 43)))
 		console.log(stopAt);
        theWheel.animation.stopAngle = 100;
        theWheel.startAnimation();
    }
 

            function startSpin()
            {
                if (wheelSpinning == false) {
                    if (wheelPower == 1) {
                        theWheel.animation.spins = 3;
                    } else if (wheelPower == 2) {
                        theWheel.animation.spins = 8;
                    } else if (wheelPower == 3) {
                        theWheel.animation.spins = 15;
                    }
                    document.getElementById('spin_button').disabled=true;
                    document.getElementById('spin_button').className = "btn btn-secondary btn-block";
                    calcular();
                    wheelSpinning = true;
                }
            }
            function resetWheel()
            {
                theWheel.stopAnimation(false); 
                theWheel.rotationAngle = 0;     
                theWheel.draw();               

                document.getElementById('pw1').className = "";  
                document.getElementById('pw2').className = "";
                document.getElementById('pw3').className = "";

                wheelSpinning = false;    
                document.getElementById('spin_button').disabled=false;    
                document.getElementById('spin_button').className = "btn btn-primary btn-block";  
            }

            function alertPrize(indicatedSegment)
            {
                console.log(indicatedSegment.text); 
                Swal.fire('El Ganador Es: <BR>' + indicatedSegment.text);
            }