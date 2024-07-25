const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (section) {
      if (section.isIntersecting) {
        section.target.className = 'active';
      }
    });
  }, {threshold: .8});
  
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

let isActive = false;

function toggle() {
  if (isActive) {
    document.querySelector('.menu-ham').className = 'menu-ham';
    document.querySelector('.shadow').className = 'shadow';
    document.querySelector('.mobile-nav').className = 'mobile-nav';
    isActive = false;
  } else {
    document.querySelector('.menu-ham').className = 'menu-ham active';
    document.querySelector('.shadow').className = 'shadow active';
    document.querySelector('.mobile-nav').className = 'mobile-nav active';
    isActive = true;
  }
}
