const buttons = document.querySelectorAll('.transition-button');

function handleButtonHover(event) {
    const button = event.currentTarget;
    const buttonLink = button.querySelector('a');

    if (event.type === 'mouseover') {
        button.style.backgroundColor = '#d76e7c';
        button.style.transform = 'scale(1.2)';
        button.style.color = '#ffffff';
    } else if (event.type === 'mouseout') {
        button.style.backgroundColor = '#fff';
    button.style.transform = 'scale(1)';
    button.style.color = '#495867';
    }
}

buttons.forEach((button) => {
    button.addEventListener('mouseover', handleButtonHover);
    button.addEventListener('mouseout', handleButtonHover);
});

function myFunction(x) {
    x.classList.toggle("change");
  }