let mars = { 
        x: 100, 
        y: 100, 

    };
let sun = { 
        x: 0, 
        y: 500,
    };


let particles = [ 
      mars, sun
    
];

particles.forEach(printParticle)

function printParticle(p, index) {
    const id = 'particle' + index
    document.body.innerHTML += `<img id="${id}" src="particle.jpeg">`;
    p.element = document.querySelector(`#${id}`)
    console.log(p)
    p.element.style.position = 'absolute';
    p.element.style.width = 100 + 'px'
    p.element.style.left = p.x + 'px';
    p.element.style.top = p.y + 'px';
}