$( document ).ready(function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = 3;

  context.beginPath();
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = '#22b473';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#22b473';
  context.stroke();
})