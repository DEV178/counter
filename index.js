	//variables
    var soundClock = new Audio("https://freespecialeffects.co.uk/soundfx/cartoon/pop1.wav");
    var soundAlarm = new Audio("https://freespecialeffects.co.uk/soundfx/sirens/fanfare3.wav");
  
      var startBtn = document.getElementById("startBtn");
      var clearBtn = document.getElementById("clearBtn");
      var myDate = document.getElementById("myDate");
      var demo = document.getElementById("demo");
  
      var dayTxt = document.getElementById("day"); 
    var hourTxt = document.getElementById("hour"); 
    var minuteTxt = document.getElementById("minute");  
    var secondTxt = document.getElementById("second");
      
      var tomorow;
      var counter;
      
      
  function setMinTomorow() {
          var today = new Date();
          var dd = today.getDate()+1; // + tomorow!
      var mm = today.getMonth()+1; // January is 0!
      var yyyy = today.getFullYear();
        
          tomorow = yyyy+"-"+checkZero(mm)+"-"+checkZero(dd);
          myDate.setAttribute("min", tomorow);
      
          startBtn.addEventListener("click", startCounting);
      clearBtn.disabled = true;	
      }
      
      function checkZero(i) {
          if(i<10){
              i="0"+i;
          }
          return i;
      }
      
  
      function startCounting() {
          
          var findDate = myDate.value;
      if(findDate == "") {
              demo.innerHTML = "Choose date!"; 
              return false;
               } else {
              demo.innerHTML = ""; 
              startBtn.disabled = true;
            clearBtn.disabled = false;
            clearBtn.addEventListener("click", clearAll);
                   
                  var findDx = findDate.split("-");
                  var year = findDx[0];
                  var month = findDx[1];
                  var day = findDx[2];
               
          var deadlineDate = month + " " + day + ", " + year + " 00:00:00";
          var deadline = new Date(deadlineDate).getTime(); 
  
  counter = setInterval(function() { 
    
  var now = new Date().getTime(); 
  
  var t = deadline - now; 
      
  var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((t % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
  var seconds = Math.floor((t % (1000 * 60)) / 1000); 	
      
  dayTxt.innerHTML = days ; 
  hourTxt.innerHTML = hours; 
  minuteTxt.innerHTML = minutes;  
  secondTxt.innerHTML =seconds;  
    
  
      soundClock.play();
      
  if (t < 0) { 
          soundAlarm.play();
          clearInterval(counter); 
          demo.innerHTML = "TIME UP!"; 
          dayTxt.innerHTML ='0'; 
          hourTxt.innerHTML ='0'; 
          minuteTxt.innerHTML ='0';  
          secondTxt.innerHTML = '0'; } 
  }, 1000); 
      }
    }
  
  function clearAll() {
            clearInterval(counter); 
          dayTxt.innerHTML = ""; 
          hourTxt.innerHTML = ""; 
          minuteTxt.innerHTML = "";  
          secondTxt.innerHTML = "";
              clearBtn.disabled = true;
              startBtn.disabled = false;
       }