
var countDownDate = new Date("Sep 1, 2018 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
  
  //Zeros
var hours = (hours.toLocaleString(undefined,{minimumIntegerDigits: 2}));  
  
var minutes = (minutes.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
var seconds = (seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}));
  
 
  
  // Display the result in the element with id="demo"
  document.getElementById("daysTicker").innerHTML = days;
  document.getElementById("hoursTicker").innerHTML = hours;
  document.getElementById("minsTicker").innerHTML = minutes;
  document.getElementById("secsTicker").innerHTML = seconds;
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE CAMPAIGN BEGINS";
  }
}, 1000);

var preloader = document.getElementById("preloader");

window.addEventListener('load', function(){
  preloader.style.display = 'none';
})

$(document).ready(function($) {
var holder = $(".input-holder input")
 holder.focus(function(){
   $(this).parent().addClass("active");

  }).blur(function(){
       $(this).parent().removeClass("active");
  })
});    
 
$(document).ready(function(){
   $('form .input-holder input').each(function() { if($(this).val().length > 0) $('form .input-holder label[for="' + $(this).attr('id') + '"]').hide();
$(this).change(function() {
   if($(this).val().length > 0)
       $('form .input-holder label[for="' + $(this).attr('id') + '"]').addClass('disabled');
   else 
       $('form .input-holder label[for="' + $(this).attr('id') + '"]').removeClass('disabled');
});
 });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}