  
//code of dropdown
$(document).ready(function(){
  $("ul#parent > li").hover(function(){
    $(this).find("ul.child").stop().slideToggle(200);
 });
});

//

function clockset(){

  var clk = new Date();
  var Died = "PM";
  var h = clk.getHours();
  var m = clk.getMinutes();
  var s = clk.getSeconds();
  
  if(h == 0 ){
   h = 12;
  }else if(h < 12){
    h = 12 - h;
    Died = "AM";
  }

  if(h < 10 ){
  h = "0" + h;
  }
  if(m < 10 ){
  m = "0" + m;
  }
  if(s < 10 ){
  s = "0" + s;
  }

 var myclk = document.getElementById("clockdisplay");
 myclk.textContent = h+":"+m+":"+s+" "+Died;
 setTimeout("clockset()",1000); 
 }
 clockset();
  
 function date(){
  
  var dtd =  new Date();
  var mt = dtd.getMonth();
  var yr = dtd.getFullYear();
  var dd = dtd.getDate();

  var mydtd = document.getElementById("datedisplay");
  mydtd.textContent = dd + " - " + mt + " - " + yr;
  }
  date();


//image slider
$(document).ready(function(){
  $("#thug").accordion({
    event : "mouseover",
    active : 0
  });
});

$(document).ready(function(){
   var current_li;

  $("#wrapper > li img").click(function(){
   var src = $(this).attr("src");
                                                                                                            
     current_li = $(this).parent();

      $("#main").attr("src",src);
      $("#fram").fadeIn();
      $("#book").fadeIn();
      });

      $("#book").click(function(){
      $(this).fadeOut();
      $("#fram").fadeOut();
      });

       $("#next").click(function(){

       if(current_li.is(":last-child")){
       var next = $("#wrapper li").first();
       }else{
           var next = current_li.next();
       }
      
       var next_li = next.children("img").attr("src");
       $("#main").attr("src" , next_li);
       current_li = next;
       });

       $("#back").click(function(){
      
       if(current_li.is(":first-child")){
        var prev = $("#wrapper li").last();
       }else{
         var prev = current_li.prev();
       }

       var prev_scr = prev.children("img").attr("src");
       $("#main").attr("src" , prev_scr);
       current_li = prev;
       });

});

//toolkit and fade

$(document).ready(function(){
   $("#block1 ul li a").tooltip({
   show : 'slideDown',
   hide : 'explode'
  });
});

// list
$(document).ready(function(){
   $("li").mouseenter(function(){
    $(this).fadeTo(500,0.6).fadeTo(500,1);
  });
});

//html link
 $(function(){
               $("#mo").load("plugin.html");
            });





