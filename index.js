function
main() {
  frameCount = 0;
  e1 = document.getElementById('leet');

  requestAnimationFrame(drawAndReqNext);

  return;
}

function
drawAndReqNext() {
  var bdhd;
  var bdhd1;
  var contd;
  var contd1;
  var leval;
  var gcol;
  var pmargin;
  var ratio;

  /* NOTE: console.log() takes a lot of CPU time, DO NOT use in production
   application. Setting a style takes little CPU time, although still
   noticable; so setting styles should be kept at a minimum. */

  /* Calculate alpha for animation */
  leval = Math.abs(Math.sin((2 * Math.PI) * (frameCount * 0.001)));

  bdhd = document.getElementById('bdh1');
  bdhd1 = document.getElementById('bdh2');
  contd = document.getElementById('cont0');
  contd1 = document.getElementById('cont1');

  /* This math adds up very fast :o */
  ratio = window.innerWidth / window.innerHeight;

  /* Simple phone detector */
  if (ratio > 1.5) {
    gcol = '20em 20em 20em';
    pmargin = '20em';
  }
  else {
    gcol = '20em';
    pmargin = '3em';
  }

  /* Setting margins & columns (doing it this way is probably bad) */
  bdhd.style.marginLeft = pmargin;
  bdhd.style.marginRight = pmargin;
  bdhd1.style.marginLeft = pmargin;
  bdhd1.style.marginRight = pmargin;
  contd.style.marginLeft = pmargin;
  contd.style.marginRight = pmargin;
  contd.style.gridTemplateColumns = gcol;
  contd1.style.marginLeft = pmargin;
  contd1.style.marginRight = pmargin;
  contd1.style.gridTemplateColumns = gcol;

  /* Please note that the element resizing does not take into account any 4:3
   monitors. These are quite uncommon now, so I won't be adding the code for
   it.
  */

  /* Takes little CPU time (but adds up) */
  e1.style.background = 'radial-gradient(circle at 20% 50%, rgba(99, 2, 241, ' + leval + '), #0a0327)';
  e1.style.padding = '0.3em';

  /* Also takes little CPU time (but adds up) */
  if (frameCount >= 500) frameCount = 0;
  else frameCount++;

  /* Request for next frame */
  requestAnimationFrame(drawAndReqNext);
  return;
}

window.addEventListener('load', main);
