const button = document.querySelector('button');

function handleClick(event: MouseEvent) {
  console.log(event.pageX);
}

button?.addEventListener('click', handleClick);

function handleScroll(event: Event) {
  console.log(event); 
}

window.addEventListener('scroll', handleScroll);

// Event com instanceof

function ativarMenu(event: Event) {
    console.log(event.type);
    if (event instanceof MouseEvent) {
      console.log(event.pageX);
    }
    if (event instanceof TouchEvent) {
      console.log(event.touches[0].pageX);
    }
}

document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
document.documentElement.addEventListener('pointerdown', ativarMenu);

// this

function ativarMenuButton(this: HTMLButtonElement, event: MouseEvent) {
    console.log(this.innerText);
}
  
const buttonMenu = document.querySelector('button');
buttonMenu?.addEventListener('click', ativarMenu);

// Element e current target

function ativarMenuBtn(event: Event) {
    const elemento = event.currentTarget;
    if (elemento instanceof HTMLElement) {
      elemento.style.background = 'red';
    }
}

const btnMenu = document.querySelector('button');
btnMenu?.addEventListener('click', ativarMenu);

window.addEventListener('keydown', ativarMenu);
