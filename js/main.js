window.onload = function(){
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  phase = getMoonPhase(year, month, day) + 1;
  console.log(phase);
}
