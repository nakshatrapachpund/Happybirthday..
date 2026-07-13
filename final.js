// ==============================
// PHOTO SLIDESHOW
// ==============================

const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg",
    "photo6.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

setInterval(() => {

    current++;

    if(current >= photos.length){
        current = 0;
    }

    slide.style.opacity = 0;

    setTimeout(()=>{

        slide.src = photos[current];

        slide.style.opacity = 1;

    },500);

},3000);


// ==============================
// SIMPLE FIREWORKS
// ==============================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.radius=Math.random()*3+2;

        this.dx=(Math.random()-0.5)*8;

        this.dy=(Math.random()-0.5)*8;

        this.life=100;

        this.color=color;

    }

    update(){

        this.x+=this.dx;

        this.y+=this.dy;

        this.dy+=0.03;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}

let particles=[];

function createFirework(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height/2;

    const colors=[
        "#ff4d6d",
        "#ffb703",
        "#ffffff",
        "#7b2cbf",
        "#4cc9f0"
    ];

    for(let i=0;i<80;i++){

        particles.push(
            new Particle(
                x,
                y,
                colors[Math.floor(Math.random()*colors.length)]
            )
        );

    }

}

setInterval(createFirework,1800);

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((particle,index)=>{

        particle.update();

        particle.draw();

        if(particle.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();