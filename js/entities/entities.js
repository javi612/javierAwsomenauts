game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
            }]);
            this.broken = false;
            this.health = 10;
            this.alwaysUpdate = true;
            
            this.type = "PlayerEntity";

        //this is the velocity of my character

        this.body.setVelocity(4, 20);

        this.renderable.addAnimation("idle", [78]);
        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);

        this.renderable.setCurrentAnimation("idle");

    },
    update: function(delta) {
        if (me.input.isKeyPressed("right")) {
            //adds to the position of my x by the velocity defined above in
            //setVelocity() and multiplying it by me.timer.tick.
            //me.timer.tick makes the movement look smooth
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(true);

        } else {
            this.body.vel.x = 0;
        }

        if (this.body.vel.x !== 0) {
            if (!this.renderable.isCurrentAnimation("walk")) {
                this.renderable.setCurrentAnimation("walk");
            }
        } else {
            this.renderable.setCurrentAnimation("idle");
        }


            this.body.onCollision = this.onCollision.bind(this);

        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);
        return true;
    },
    
    onCollision: function(){
        
    }
});

game.EnemyBaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                spritewidth: "100",
                spriteheight: "100",
                getShape: function(){
                    return (new me.Rect(0, 0, 100, 100)). toPolygon();
                }
            }]);
        
        this.type = "EnemyBaseEntity";
        
    },
    update: function(delta) {
            if(this.health<=0){
                this.broken = true;
            }
            this.body.update(delta);
            
            this._(me.Entity, "update", [delta]);
            return true;
    },
    
    onCollision: function() {
        
    }
    
});

