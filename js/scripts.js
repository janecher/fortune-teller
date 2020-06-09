$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    let result = 0;
    $("input:checkbox[name=unlucky-event]:checked").each(function(){
      if($(this).val() === "black-cat"){
        result -= 3;
      }
      else if($(this).val() === "stub-toe"){
        result -= 1;
      }
      else if($(this).val() === "ladder"){
        result -= 2;
      }
      else if($(this).val() === "crow"){
        result -= 4;
      }
      console.log(result);
    });
    $("input:checkbox[name=lucky-event]:checked").each(function(){
      if($(this).val() === "rainbow"){
        result += 2;
      }
      else if($(this).val() === "butterfly"){
        result += 3;
      }
      else if($(this).val() === "penny"){
        result += 1;
      }
      else if($(this).val() === "clover"){
        result += 5;
      }
    });

    if(result > 0){
      $("#answer").text("You will have a good week!");
    }
    else if(result === 0){
      $("#answer").text("Your week will be neither good nor bad!");  
    }
    else if(result < 0){
      $("#answer").text("You will have a bad week!");  
    }
  })
});