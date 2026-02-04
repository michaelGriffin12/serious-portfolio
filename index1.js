function
main() {
  frameCount = 0;
  e1 = document.getElementById('leet');

  requestAnimationFrame(drawAndReqNext);

  return;
}

function
drawAndReqNext() {
  /* NOTE: console.log() takes a lot of CPU time, DO NOT use in production
   application. Setting a style takes little CPU time, although still
   noticable; so setting styles should be kept at a minimum. */

  /* Some branchless programming (like on a GPU) */
  var l1 = frameCount;
  var l2 = (frameCount - 64) ^ 63;
  var cc = ((frameCount < 64) * l1) + ((frameCount >= 64) * l2);

  /* Calculations like these, also do not take a lot of CPU time */
  var alphaVal = cc * 0.016666666;

  /* Takes little CPU time */
  e1.style.background = 'radial-gradient(circle at 20% 50%, rgba(99, 2, 241, ' + alphaVal + '), #0a0327)';
  e1.style.padding = '0.3em';

  frameCount = frameCount * (frameCount < 128);

  if (frameCount >= 127) frameCount = 0;
  else frameCount++;

  requestAnimationFrame(drawAndReqNext);
  return;
}

window.addEventListener('load', main);
