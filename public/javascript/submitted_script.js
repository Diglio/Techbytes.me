//Message submitted transition scripts
var tid = setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );
    console.log('Submitted Page errors');

    (function(){
      var loading = 0;
      var id = setInterval(frame, 50);

      function frame(){
        if(loading == 100){
          clearInterval(id);
          window.open("welcome", "_self");
        } else {
          loading = loading +1;
        }
      }
    })();

});
