function hero () {
    a_hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 d d 5 5 5 5 . . . . 
. . 5 5 5 d d d d d 5 5 . . . . 
. . 5 1 9 d d d 1 9 d 5 . . . . 
. . d d d d d d d d d d . . . . 
. . . d d d d f d d d d . . . . 
. . . . d d d d d d d . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . d d d d d d . . . . . . 
. . . d d d d d d d d . . . . . 
. . . d 8 8 8 8 8 8 d . . . . . 
. . . . 8 8 . . 8 8 . . . . . . 
. . . . d d . . d d . . . . . . 
`, SpriteKind.Player)
    a_hero.setPosition(77, 60)
    controller.moveSprite(a_hero, 100, 100)
}
function score () {
    info.changeScoreBy(game.runtime())
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    score()
    overlap()
})
function overlap () {
    game.over(false)
}
function projectile () {
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . f f f f f f f . . . c c f f f . . . . . . . . . . 
. . . . . . . . . . f 9 9 9 9 9 9 9 f f c 9 9 9 9 f . . . . . . . . . . 
. . . . . . . . . . f 9 9 1 1 1 9 9 9 9 9 f f 9 f . . . . . . . . . . . 
. . . . . . . . . . f 9 1 1 1 1 1 f f 9 9 9 9 f f . . . . . . . . . . . 
. . . . . . . . . . f 1 c c c c 1 f f 9 9 9 9 9 9 f f . . . . . . . . . 
. . . . . . . . . . f f c 1 c 1 c 1 9 9 c 9 c 9 9 9 9 f . . . . . . . . 
. . . . . . . . . . . f c c 3 3 3 1 9 9 9 c 9 c 9 9 9 9 f . . f f f f f 
. . . . . . . . . . . . c 3 3 3 c 1 9 9 9 c 9 c 9 9 9 9 9 f 9 9 9 9 9 f 
. . . . . . . . . . . . c 3 3 3 c 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
. . . . . . . . . . . . c 3 3 3 c 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. . . . . . . . . . . c c 3 3 1 c 1 1 9 9 9 9 9 9 9 9 9 9 f 9 9 9 f . . 
. . . . . . . . . . . c c 1 3 c 1 1 c 9 9 9 9 9 9 9 9 9 9 9 f 9 9 f . . 
. . . . . . . . . . . c 1 1 1 1 1 1 c 9 9 9 f 9 9 9 9 9 9 9 f 9 9 9 f . 
. . . . . . . . . . . . c c 1 1 1 1 f 9 9 9 9 f 9 9 9 9 9 . . f 9 9 f . 
. . . . . . . . . . . . . . c c c f f f 9 9 9 9 f 9 9 . . . . . f 9 9 f 
. . . . . . . . . . . . . . . . . . . . f f f f f . . . . . . . . f f f 
`, 0, 0)
    projectile2.follow(a_hero)
}
let projectile2: Sprite = null
let a_hero: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
    projectile()
})
