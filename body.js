class Body {
    constructor(G, mass, x, y, vx, vy) {
        this.G = G;
        this.mass = mass;
        this.radius = mass;
        this.x = x;
        this.y = y;
        this.velocity_x = vx;
        this.velocity_y = vy;
    }
    move() {
        this.x += this.velocity_x;
        this.y += this.velocity_y;
    }
    getData() {
        return {
            x: this.x,
            y: this.y,
            mass: this.mass
        }
    }
    apply_force(body) {
        let dx = this.x - body.x;
        let dy = this.y - body.y;
        // sqrt of dx dy
        let dist = sqrt(dx * dx + dy * dy);
        // force = G * m1 * m2 / d^2
        let force = this.G * this.mass * body.mass / (dist * dist);
        //find x and y component of force
        let fx = force * cos(atan2(dy, dx));
        let fy = force * sin(atan2(dy, dx));
        this.fx = fx;
        this.fy = fy;
        //f=ma, f=mv-mu, mv=f+mu, v=(f+mu)/m
        this.velocity_x = (fx + this.mass * this.velocity_x) / this.mass;
        this.velocity_y = (fy + this.mass * this.velocity_y) / this.mass;

        //console.log(this.fx, this.fy);
    }
    collision(body) {
        //the velocity assuming this the passed body is absorbed by current object
        this.mass+=body.mass;
                
        //pie*r^2 = pie*r1^2+pie*r2^2=>r^2 = r1^2+r2^2
        this.radius = sqrt(this.radius*this.radius+body.radius*body.radius);

        this.velocity_x = (this.mass*this.velocity_x+body.mass*body.velocity_x)/this.mass;
        this.velocity_y = (this.mass*this.velocity_y+body.mass*body.velocity_y)/this.mass;
    }
    update() {
        this.x =  this.x + this.velocity_x;
        this.y = this.y + this.velocity_y;
        return {
            x: this.x,
            y: this.y,
            mass: this.mass
        }
    }
}