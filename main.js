//Carousel

$ (document).ready(function(){
// Al click sulla freccia next deve apparire l'immagine successiva

  // Devo far sì che la classe 'active' venga attribuita all'img successiva al click su next
  //Devo far corrispondere il colore del pallino all'img
  $ ('.next').click(
    function (){
      var imgStatus = $ ('.images img.active');
      var ballStatus = $ ('.nav i.active');
      imgStatus.removeClass('active');
      ballStatus.removeClass('active');

      if (imgStatus.hasClass('last')) {
        $ ('.first').addClass('active'); //le img e i pallini hanno le stesse classi

      } else {
        imgStatus.next().addClass('active');
        ballStatus.next().addClass('active');
      }
    }
  );

  // Devo replicare lo stesso comportamento sulla freccia prev.
  $ ('.prev').click(
    function (){
      var imgStatus = $ ('.images img.active');
      var ballStatus = $ ('.nav i.active');
      imgStatus.removeClass('active');
      ballStatus.removeClass('active');

      if (imgStatus.hasClass('first')) {
        $ ('.last').addClass('active');
      } else {
        imgStatus.prev().addClass('active');
        ballStatus.prev().addClass('active');
      }
    }
  );

  // creo anche la possibilità di poter navigare cliccando anche sui pallini
  // (quindi se clicco sul pallino 3, l’img vista è la 3 e
  // il pallino 3 rimane rosso)

  $ ('.fa-circle').click(
    function() {

      var imgStatus = $ ('.images img.active');
      var ballStatus = $ ('.nav i.active');
      imgStatus.removeClass('active');
      ballStatus.removeClass('active');

      // Faccio corrispondere l'img al pallino

      var imgBall = $ ('.nav i').index(this);
      $ ('.images img').eq(imgBall).addClass('active');
      $ (this).addClass('active');

    }

 )







});
