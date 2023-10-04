var click_down=document.querySelector(".top span");
var card=document.querySelector(".card");
var up=document.querySelector(".top span i");
click_down.addEventListener('click',function(){
    card.classList.toggle('heighten');
    if(up.classList.contains("fa-angle-down")){  
     up.classList.remove('fa-angle-down');
     up.classList.add('fa-angle-up');
    } 
    else{
            up.classList.add('fa-angle-down');
     up.classList.remove('fa-angle-up'); 
    }
    
}); 
 

var progress_bar = document.querySelectorAll(".progress-bar li");
function checked(id){ 
       var checked = document.getElementById("check"+id);
       checked.classList.toggle("list_checked");
          var striked = document.getElementById("strike"+id);
       striked.classList.toggle("strike_none");
        var list_childs = document.getElementById(id);
       list_childs.classList.toggle("list_active");
       progress(); 
}  
function progress(){
      var checked_progress=document.querySelectorAll(".list li.list_active");
      var length = checked_progress.length;
       progress_bar.forEach(function(index){
           index.classList.remove("active");
       });
   
      for(i=0;i<length;i++){
          progress_bar[i].classList.add("active");
      } 
      
      var checked_tick = document.querySelector("#checked_toggle");
      if(length >4){
          
          checked_tick.classList.remove("d-none");
      }else{
          checked_tick.classList.add("d-none");
      }
       
}