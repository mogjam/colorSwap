$('.colorSwap').hover(
  function() {
    var txtCol = $(this).css("color");
    var bgCol = $(this).css('background-color');
    $(this).css('background-color', txtCol);
    $(this).css('color', bgCol);
  },
  function() {
    var txtCol = $(this).css("color");
    var bgCol = $(this).css('background-color');
    $(this).css('background-color', txtCol);
    $(this).css('color', bgCol);
  }
);
