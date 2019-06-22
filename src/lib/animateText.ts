// export function onConsoleLoad() {
//     let input = document.getElementById('input');
//     input.addEventListener('keyup', keyUp);

//     // setIntervalX(function() {
//     //     let input = document.getElementById('input');
//     //     input.value += ">>> \r\n";
//     // }, 50, 50);
// }

// function keyUp(evt) {
//     let arrows = document.getElementById('arrows');
//     if(evt.which === 13) arrows.innerText += '\n>>>';
// }

// function setIntervalX(callback, delay, repetitions) {
//     var x = 0;
//     var intervalID = window.setInterval(function() {
//         callback();
//         if(++x === repetitions) {
//             window.clearInterval(intervalID);
//         }
//     }, delay);
// }

const setTextAnimationInterval = (callback: () => void, delay: number, repetitions: number) => {
   let x = 0;
   let interval = window.setInterval(() => {
      callback();
      if (++x === repetitions) {
         window.clearInterval(interval);
      }
   }, delay);
}

export const animateText = (elementID: string, text: string, delay: number) => {
   return new Promise((resolve) => {
      let element = document.getElementById(elementID);
      let index = 0;
      setTextAnimationInterval(() => {
         element!.innerHTML += text[index++];
         if (index === text.length) resolve();
      }, delay, text.length);
   });
}