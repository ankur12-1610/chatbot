$('body').ready(function() {
    res('Hi!')
  });
  
  function sender() {
    var msg = $('.txt1').val();
    $('.main').append('<div class="txt-div" ><div class="txt msg">'+msg+'</div><div class="time">'+new Date().toLocaleTimeString()+'</div></div>');
    $('.txt1').val('');
    $('.chat').scrollTop = $('.chat').scrollHeight;
  }
  
  function res(msg) {
    $('.main').append('<div class="txt-div2" ><div class="txt2 msg">'+msg+'</div><div class="time2">'+new Date().toLocaleTimeString()+'</div></div>');
  }
  
  //var chat = {"Hi":"Hi","Hi2":"Hi2","Hi3":"Hi3"}
  
  