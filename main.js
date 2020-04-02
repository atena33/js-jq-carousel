//Carousel

$ (document).ready(function(){
// Al click sulla freccia next deve apparire l'immagine successiva

  var imgStatus = $ ('.images img.active');


 // Devo far sì che la classe 'active' venga attribuita all'img successiva al click su next
 $ ('.next').click(
    function (){
      imgStatus.removeClass('active');
      imgStatus.next().addClass('active');

    

   }
 )








});
