sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 100)
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 100)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function(){
    bullet = sprites.createProjectileFromSide(img`
        . . . b b . . .
        . . b 5 5 b . .
        . b 5 d 1 5 b .
        . b 5 3 1 5 b .
        . c 5 3 1 d c .
        . c 5 1 d d c .
        . . f d d f . .
        . . . f f . . .
    `, 0, -100)
    bullet.setPosition(person.x, person.y)
    bullet.setKind(SpriteKind.Projectile)
}) 

scene.setBackgroundColor(7) 
effects.confetti.startScreenEffect() 

let person = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player) 
let bullet: Sprite = null
let rocks: Sprite= null

controller.moveSprite(person) 
person.setFlag(SpriteFlag.StayInScreen, true) 
info.setLife(3)
info.setScore(0)

game.onUpdateInterval(500, function() {
    rocks = sprites.createProjectileFromSide(img`
        . . . . . . . . . c c 8 . . . .
        . . . . . . 8 c c c f 8 c c . .
        . . . c c 8 8 f c a f f f c c .
        . . c c c f f f c a a f f c c c
        8 c c c f f f f c c a a c 8 c c
        c c c b f f f 8 a c c a a a c c
        c a a b b 8 a b c c c c c c c c
        a f c a a b b a c c c c c f f c
        a 8 f c a a c c a c a c f f f c
        c a 8 a a c c c c a a f f f 8 a
        . a c a a c f f a a b 8 f f c a
        . . c c b a f f f a b b c c 6 c
        . . . c b b a f f 6 6 a b 6 c .
        . . . c c b b b 6 6 a c c c c .
        . . . . c c a b b c c c . . . .
        . . . . . c c c c c c . . . . .
    `, 0, 70)
    rocks.setPosition(Math.randomRange(0,160), 0)
    rocks.setKind(SpriteKind.Enemy)
})
