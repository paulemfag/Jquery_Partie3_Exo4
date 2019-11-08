$(function(){
  $("button").click(function(){
    var myID = $(this).attr('id');
    switch(myID) {
      case "btn1":
      $('#rectangle').height("+=10px");
      if (($("#rectangle").height()) >= 100) {$('#rectangle').height(10);}
      break;
      case "btn2":
      $('#rectangle').css("backgroundColor","green");
      break;
      case "btn3":
      $('#rectangle').css({'background-color':''});
      break;
      case "btn4":
      $('#rectangle').hide();
      break;
      case "btn5":
      $('#rectangle').show();
      break;
    }
  })
})
