class Paper{
    constructor(x, y, radius){
        var options = {
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body  = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage('paper.png');
        World.add(world, this.body);
    }

    display(){
        /* imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius); */
        
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //angleMode(RADIANS)
        //rotate(this.body.angle)
        imageMode(RADIUS)
        image(this.image, this.body.position.x, this.body.position.y-13, this.radius*2, this.radius*2); 
        //pop();
    }
}