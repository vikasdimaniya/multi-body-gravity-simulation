const WIDTH = 1000;
const HEIGHT = 750;
const TOTAL_BODIES = 40;
const MIN_SPEED = -0.5;
const MAX_SPEED = 0.5;
const MIN_MASS = 10;
const MAX_MASS = 20;
const OUR_GRAVITATIONAL_CONSTANT = -1;
const DRAW_FORCE_VECTOR = false;

let bodies = [];
function setup() {
    createCanvas(WIDTH, HEIGHT);
    for (let i = 0; i < TOTAL_BODIES; i++) {
        bodies.push(new Body(OUR_GRAVITATIONAL_CONSTANT, random(MIN_MASS, MAX_MASS), random(0, WIDTH), random(0, HEIGHT), random(MIN_SPEED, MAX_SPEED), random(MIN_SPEED, MAX_SPEED)));
    }
}

function draw() {
    background(220);

    //appling force
    for (let i = 0; i < bodies.length; i++) {
        for (let j = 0; j < bodies.length; j++) {
            if (i == j) continue;
            bodies[i].apply_force(bodies[j]);
        }
    }

    //update and draw based on force applied
    for (let i = 0; i < bodies.length; i++) {
        bodies[i].update();

        circle(bodies[i].x, bodies[i].y, bodies[i].radius * 2);
            
        //draw arrow for force vector
        if (DRAW_FORCE_VECTOR) {
            let dx = bodies[i].fx;
            let dy = bodies[i].fy;
            let len = sqrt(dx * dx + dy * dy) * 1000;
            let angle = atan2(dy, dx);
            let arrowHead = (center, vec) => {
                push();
                translate(center.x, center.y);
                rotate(angle);
                line(0, 0, len, 0);
                let arrowSize = 7;
                translate(len, 0);
                triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
                pop();
            }
            arrowHead({ x: bodies[i].x, y: bodies[i].y }, { dx, dy });
        }
    }

    //collision detection and handling
    for (let i = 0; i < bodies.length - 1; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
            let d = sqrt((bodies[i].x - bodies[j].x) * (bodies[i].x - bodies[j].x) + (bodies[i].y - bodies[j].y) * (bodies[i].y - bodies[j].y));
            if (d < bodies[i].radius + bodies[j].radius) {
                bodies[i].collision(bodies[j]);
                bodies.splice(j, 1);
            }
        }
    }
}