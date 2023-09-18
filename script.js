function promiseAfterTimeout(seconds) {
    return new Promise(function (resolve) {
      setTimeout(() => resolve(), seconds*1000);
    });
  }
  
  function rotateWheel(degr) {
    let wheel = document.querySelector('.wheel');
    wheel.style.transform = 'rotate(-'+degr+'deg)';
    return promiseAfterTimeout(3);
  }
  
  function randomDegrees() {
    let randomFloat = Math.random()*720;
    let descreetDegrees = Math.round(randomFloat / 72) * 72;
    return descreetDegrees;
  }
  
  function getCurrentColor(currentDegrees) {
    let numbers = ["0", "50", "100", "150", "200", "250", "300", "350", "400", "450"];
    let segmentCount = parseInt(currentDegrees/36);
    let segmentShift = segmentCount % numbers.length;
    
    return numbers[segmentShift];
  }
  
  function launchSpin() {
    currentRotation += randomDegrees();
    
    rotateWheel(currentRotation)
      .then(() => {
        let winColor = getCurrentColor(currentRotation);
        let result = document.querySelector('.result');
        let modal = document.querySelector('.modal')
        modal.classList.add('active')
        remove.addEventListener('click', function () {
            modal.classList.remove('active')
          })
        result.innerHTML = `+${winColor}`;
      });
  }
  
  let currentRotation = 0;
  let spinButton = document.querySelector('.spin');
  spinButton.addEventListener('click', launchSpin);



  let remove = document.querySelector('.remove')
  











// const button = document.querySelector('.button')
// const wheel = document.querySelector('.wheel')

// button.addEventListener('click', function () {
//     console.log('click');
//     let random = 360
//     wheel.setAttribute(`style`, `transform: rotate(${random}deg);`)
// })

