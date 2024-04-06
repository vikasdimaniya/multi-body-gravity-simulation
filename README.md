# multi-body-gravity-simulation   
This is a simple simulation of multi-body gravity that runs in browser, easy to try.    

## Installation
Just clone the repository and open the index.html in the browser.   
```bash
git clone https://github.com/vikasdimaniya/multi-body-gravity-simulation
cd multi-body-gravity-simulation
```
open the index.html in the browser.
edit the sketch.js file to change the simulation parameters.

## Controls
in the sketch.js file you can change the following variables to change the simulation:
const WIDTH = 1000; This is for the width of the render area.   
const HEIGHT = 750; This is for the height of the render area   
const TOTAL_BODIES = 2; This is for the total number of bodies in the simulation.   
const MIN_SPEED = -0.5; This is for the min initial speed of the body, speeds are randomly generated between MIN_SPEED and MAX_SPEED.   
const MAX_SPEED = 0.5; This is for the max initial speed of the body.  
const MIN_MASS = 1; This is for the min mass of the body. The mass is randomly generated between MIN_MASS and MAX_MASS.   
const MAX_MASS = 5; This is for the max mass of the body   
const OUR_GRAVITATIONAL_CONSTANT = -10; This is the gravitational constant of the simulation. Minus is attraction, plus is repulsion.   
const DRAW_FORCE_VECTOR = true; This is for drawing the force vector of the body.


## How it works and what to expect
Some bodies might escape the simulation area, this is normal.   
The bodies will attract each other and move around the simulation area.   
The force vector is drawn from the center of the body to the direction of the force applied to the body, body might not move toward the force vector because it still has great velocity in some other direction but with time it will move toward the force vector.   
some bodies might collide with each other, this is normal.   
when bodies collide they will merge and new radius will be the square root of old radius and mass will be sum of original bodies mass.    
The simulation will run forever until you close the browser tab.   
some bodies might not attract or collide with each other ever because they have gained escape velocity in the process.
After collusions momentum will be conserved.