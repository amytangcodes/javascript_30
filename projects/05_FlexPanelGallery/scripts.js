const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');

  // #TOASK: WHY NOT DO IT THIS WAY VS THE FUNCTION BELOW?
  // this.classList.toggle('open-active');
}

function toggleActive(e) {
  console.log(e.propertyName);

  // Not the best to do it this way as there will be multiple transition events
  // this.classList.toggle('open-active');

  // so we will only grab the property we care about:
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));