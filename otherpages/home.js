const buttons = document.querySelectorAll('.donate-button');
buttons.forEach(btn  => {
    btn.addEventListener('mouseenter', function(e){
        let x = e.clientX = e.target.offsetLeft;
        let y = e.clientX = e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.className = "button-span";
        ripples.style.left = x - 200 + 'px';
        ripples.style.top = y - 100 + 'px';
        this.appendChild(ripples);


        setTimeout(() =>{
            ripples.remove()
        }, 1000);
    })
})
  

function changeButtonText(buttonn) {
  const button = document.getElementById(buttonn);
  if (button.textContent === "-") {
    button.textContent = "+";
} else {
    button.textContent = "-";
}
}




  // JavaScript to handle Scroll to Top Arrow
  document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    const progressCircle = document.getElementById('progressCircle');
    const circumference = progressCircle.getTotalLength();

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;

    const setProgress = (percent) => {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    };

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        setProgress(scrollPercent);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', handleScroll);
    scrollToTopBtn.addEventListener('click', scrollToTop);

    // Initial call to set the progress based on the current scroll position
    handleScroll();
});




// color and round animation stop

const divs = document.querySelectorAll('.custom-div');

divs.forEach(div => {
  div.addEventListener('mouseover', () => {
    divs.forEach(otherDiv => {
      if (otherDiv !== div) {
        otherDiv.style.backgroundColor = 'black';
        otherDiv.querySelector('.bite-mark').style.opacity = 0;
        otherDiv.querySelector('.another-bite').style.opacity = 0;
      }
    });
    div.style.backgroundColor = '#13814C';
    div.querySelector('.bite-mark').style.opacity = 1;
    div.querySelector('.another-bite').style.opacity = 1;
    div.querySelector('.bite-mark').style.opacity = 1;

  });
});


// secttion 3333333333333333333333333333333333333333333333333333333333333333333333333

//scroll loader2
document.addEventListener("DOMContentLoaded", function() {
  var loader = document.getElementById("loader");
  var loaderContainer = document.getElementById("scrollLoader");
  var maxNumber = 500;
  var currentNumber = 0;
  var isLoading = false;

  function startLoader() {
    if (!isLoading) {
      isLoading = true;
      var interval = setInterval(function() {
        if (currentNumber <= maxNumber) {
          loader.textContent = currentNumber;
          currentNumber = currentNumber + 2;
        } 
        else {
          clearInterval(interval);
        }
      }, 1); // 0.5 second latency
    }
  }

  function onScroll() {
    var rect = loaderContainer.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
      startLoader();
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});

// Scroll Loader 1 (copy1)
document.addEventListener("DOMContentLoaded", function () {
  // Use specific IDs for clarity and maintainability
  var loader1 = document.getElementById("loader1");
  var loaderContainer1 = document.getElementById("scrollLoader1");
  var maxNumber1 = 50; // Customize for each loader
  var currentNumber1 = 0;
  var isLoading1 = false;

  function startLoader1() {
    if (!isLoading1) {
      isLoading1 = true;
      var interval = setInterval(function () {
        if (currentNumber1 <= maxNumber1) {
          loader1.textContent = currentNumber1;
          currentNumber1 = currentNumber1 + 1;
        } else {
          clearInterval(interval);
        }
      }, 20); // 0.5 second latency
    }
  }

  function onScroll1() {
    var rect = loaderContainer1.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight && rect.bottom >= 0) {
      startLoader1();
      window.removeEventListener("scroll", onScroll1);
    }
  }

  window.addEventListener("scroll", onScroll1);
});

// Scroll Loader 3 (New)
document.addEventListener("DOMContentLoaded", function () {
  // Use specific IDs for clarity and maintainability
  var loader2 = document.getElementById("loader2");
  var loaderContainer2 = document.getElementById("scrollLoader2");
  var maxNumber2 = 130; // Customize for each loader
  var currentNumber2 = 0;
  var isLoading2 = false;
  var isInitialLoad2 = true; // Flag for initial load of loader2

  function startLoader2() {
    if (!isLoading2) {
      isLoading2 = true;
      var interval = setInterval(function () {
        if (currentNumber2 <= maxNumber2) {
          loader2.textContent = currentNumber2;
          currentNumber2 = currentNumber2 + 1;
        } else {
          clearInterval(interval);
          isLoading2 = false; // Reset for potential future loads
        }
      }, 7.71); // 0.5 second latency
    }
  }

  function onScroll2() {
    var rect = loaderContainer2.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if ((rect.top < windowHeight && rect.bottom >= 0) || isInitialLoad2) {
      startLoader2();
      if (isInitialLoad2) {
        isInitialLoad2 = false; // Prevent duplicate load on initial scroll
      }
      window.removeEventListener("scroll", onScroll2); // Remove after load
    }
  }

  window.addEventListener("scroll", onScroll2);
  });


  AOS.init();

  console.log('home.js connected');