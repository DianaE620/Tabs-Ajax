$(document).ready(function () {
  // Escribe tu código aquí
  $("#tab1").show();

  // $('#tab1').click(function(){

  // });

  // $('.tabs > li > a').on('click', function(){
  //   console.log(this.href);
  //   // alert("tab1");
  // });

  $('.tabs > li').on('click', function(){
    // console.log(this);
    $('.tabs > li').removeClass('active');

    $(this).addClass('active');

    // console.log($(".active > a").css("color", "blue"));
      var tab = $(".active > a").attr('href');

      // console.log(tab);
      if(tab == "#tab1"){
        // console.log("tab1")
        $('#tab2').hide();
        $('#tab3').hide();
        $('#tab1').show();
        
      }else if(tab == "#tab2"){
        // console.log("tab2")
        $('#tab1').hide();
        $('#tab3').hide();
        $('#tab2').show();
      }else if(tab == "#tab3"){
        // console.log("tab3")
        $('#tab1').hide();
        $('#tab2').hide();
        $('#tab3').show();
      }

  });


});
 
 // $(".tabs > li > a").filter("")

 // $(this).attr('href');