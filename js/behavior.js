var overlay = document.getElementById('overlay-video');
var btn = document.getElementById('btn-play')

btn.onclick = function() {
    let video = document.getElementById('video');

    if (video.paused) {
        video.play();
        overlay.style.backgroundColor = "transparent";
        this.childNodes[1].textContent = '';
        this.childNodes[0].classList.remove('fa-video');
        this.childNodes[0].classList.remove('fa-play');
        this.childNodes[0].classList.add('fa-pause');
    } else {
        video.pause();
        overlay.style.backgroundColor = "rgba(106, 48, 147, 0.9)";
        this.childNodes[0].classList.remove('fa-pause');
        this.childNodes[0].classList.add('fa-play');
    }
};

document.getElementById('getYear').innerHTML = new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()