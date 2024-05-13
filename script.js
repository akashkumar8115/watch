
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  secondn.style.transform = `rotate(${srotation}deg) `;
  minuten.style.transform = `rotate(${mrotation}deg) `;
  hourn.style.transform = `rotate(${hrotation}deg) `;

  document.getElementById("h").innerHTML = `${d.getHours()} :`;
  document.getElementById("m").innerHTML = `${d.getMinutes()} :`;
  document.getElementById("s").innerHTML = `${d.getSeconds()} `;

}, 1000);

// const audio = new Audio('./Tik.mp3');


// setInterval(() => {
//   audio.play();
// }, 4000);
