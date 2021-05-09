class Box4
{
    constructor(x, y, width, height)
    {
        var options = {restitution : 0.4, friction : 0.6, density : 0.8}


        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width;
        this.height = height;

        World.add(world, this.body)
    }

    display()
    {
        if(this.body.speed < 2.5)
        {
            rectMode(CENTER)

        var pos = this.body.position;

        fill("grey")
        rect(pos.x, pos.y, this.width, this.height)
        }

        else
        {
          World.remove(world, this.body)

          push()

          this.Visibility = this.Visibility - 5;

          tint(255, this.Visibility)
          
          pop()

        }
    
    }
}