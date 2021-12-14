window.onload = function(){
  var today = new Date();
  var config = {
    shadowColour: 'black', // CSS background-colour value for the shaded part of the disc
    lightColour:  '#F7EAC6', // CSS background-colour value for the illuminated part of the disc
    diameter:      200,    // diameter of the moon/planets disc in pixels
    earthshine :   0.1,    // between 0 and 1, the amount of light falling on the shaded part of the disc 0=none, 1=full illumination
    blur:          1
  };

  var Moon = {
    phases: [['new-moon', .0], ['waxing-crescent-moon', .25],['quarter-moon', .5],['waxing-gibbous-moon', .75], ['full-moon', 1],
    ['waning-gibbous-moon', .75], ['last-quarter-moon', .50],['waning-crescent-moon', .25]],
    phase: function (year, month, day) {
      let c = e = jd = b = 0;
      let isWaxing = true;
      if (month < 3) {
        year--;
        month += 12;
      }

      ++month;
      c = 365.25 * year;
      e = 30.6 * month;
      jd = c + e + day - 694039.09; // jd is total days elapsed
      jd /= 29.5305882; // divide by the moon cycle
      b = parseInt(jd); // int(jd) -> b, take integer part of jd
      jd -= b; // subtract integer part to leave fractional part of original jd
      b = Math.round(jd * 8); // scale fraction from 0-8 and round

      if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0
      if(b > 4) isWaxing=false;
      return {phase: b, name: Moon.phases[b], isWaxing};
    }
  };
  var current_moon = Moon.phase(today.getFullYear(), today.getMonth() + 1, today.getDate());
  console.log(current_moon);
  drawPlanetPhase(document.getElementById("moon_container"), current_moon.name[1], current_moon.isWaxing, config);
}
