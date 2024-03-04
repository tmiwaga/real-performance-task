namespace SpriteKind {
    export const car = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.car, SpriteKind.car, function (sprite, otherSprite) {
    sprites.destroy(carr)
})
function spawncar (num: number) {
    for (let index = 0; index < num + 2; index++) {
        for (let index = 0; index < num + 2; index++) {
            carr = sprites.create(different_cars._pickRandom(), SpriteKind.car)
            tiles.placeOnRandomTile(carr, sprites.vehicle.roadHorizontal)
            carr.setVelocity(randint(-5, -55), 0)
            carr.setFlag(SpriteFlag.DestroyOnWall, true)
            if (carr.overlapsWith(mySprite)) {
                tiles.placeOnRandomTile(carr, sprites.vehicle.roadHorizontal)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.car, function (sprite, otherSprite) {
    sprites.destroy(mySprite)
    info.changeLifeBy(-1)
    effects.confetti.endScreenEffect()
})
function levels (num: number) {
    if (level == 0) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
}
function coins (num: number) {
    for (let index = 0; index < num + 2; index++) {
        for (let index = 0; index < num + 2; index++) {
            coin = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . b d b c . . . . . 
                . . . . b b c 5 5 5 c b b . . . 
                . . . . b 5 5 5 1 5 5 5 b . . . 
                . . . c c 5 5 5 1 5 5 5 c c . . 
                . . b b 5 5 5 1 1 1 5 5 5 b b . 
                . . d d 5 1 1 1 1 1 1 1 5 d d . 
                . . b b 5 5 5 1 1 1 5 5 5 b b . 
                . . . c c 5 5 5 1 5 5 5 c c . . 
                . . . . b 5 5 5 1 5 5 5 b . . . 
                . . . . b b c 5 5 5 c b b . . . 
                . . . . . . c b d b c . . . . . 
                . . . . . . . b d b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(coin, sprites.castle.tilePath4)
            tiles.placeOnRandomTile(coin, sprites.castle.tilePath5)
            tiles.placeOnRandomTile(coin, sprites.castle.tilePath6)
            tiles.placeOnRandomTile(coin, sprites.dungeon.darkGroundCenter)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let myVariable = 0
let coin: Sprite = null
let carr: Sprite = null
let mySprite: Sprite = null
let level = 0
let different_cars: Image[] = []
different_cars = [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f f f f f e e f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . 8 8 8 8 8 . . . . 
    . . . . . 8 8 6 6 6 6 6 8 . . . 
    . . . . 8 8 6 6 6 6 6 6 6 8 . . 
    . . . . 8 9 7 6 6 6 7 7 7 b 8 . 
    . . 8 8 9 9 7 6 6 6 7 7 7 9 b 8 
    . 8 6 6 9 9 7 7 6 6 6 7 7 9 9 8 
    8 6 6 6 9 9 6 7 7 7 7 7 6 9 9 8 
    8 6 6 6 9 9 8 8 8 8 8 8 8 9 9 8 
    8 6 6 6 9 b 8 b b b 8 b 8 b 9 8 
    8 6 8 8 8 8 b b b b 8 b b 8 b 8 
    8 8 3 3 8 8 6 6 6 6 8 6 6 8 8 8 
    8 3 3 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 f f f 8 8 8 8 f f f 8 8 
    . 8 8 f c b b f 8 8 f c b b f . 
    . . . . f f f . . . . f f f . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 c 3 3 3 3 3 3 d 3 . 
    . . . . 3 c c 3 3 3 3 3 3 d c 3 
    . . d 3 d c c 3 d d d d d d c c 
    . d 3 3 d c b a a a a a a a 3 c 
    . 3 3 3 d b a a b b b a b b a 3 
    . 3 3 3 3 3 a b b b b a b b b a 
    . 3 3 3 3 a 3 3 3 3 3 a 3 3 3 a 
    . 3 d d 3 a f a a a f a a a a a 
    . d d 3 a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . e e e e e e e e e 
    . . . . . e e 2 2 2 2 2 e e e e 
    . . . . e e 2 2 2 2 2 2 2 e e e 
    . . . . e 9 4 2 2 2 2 2 4 e e e 
    . . e e 9 9 4 2 2 2 2 2 4 e e e 
    . e 2 2 9 9 4 4 2 2 2 2 4 e e e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 e e e 
    e 2 2 2 9 9 e e e e e e e e e e 
    e 2 2 2 9 b e b b b e e e e e e 
    e 2 e e e e b b b b e e e e e e 
    e e 3 3 e e 2 2 2 2 e e e e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f b b c f e e f b b c f . 
    . . . . c f f . . . . c f f . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . a a a a a a a a a a . 
    . . . . . a c a a a a a a d a . 
    . . . . a c c a a a a a a d c a 
    . . d a d c c a d d d d d d c c 
    . d a a d c b a a a a a a a a c 
    . a a a d b a a b b b a b b a a 
    . a a a a a a b b b b a b b b a 
    . a a a a a a a a a a a a a a a 
    . a d d a a f a a a f a a a a a 
    . d d a a a a f a a f a a a a a 
    . a a a a a a a f f f a a a a a 
    . a a a a f f f a a a a f f f f 
    . . . a f f f f f a a f f f f f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `
]
info.setLife(1)
level = randint(0, 1)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 65, 68)
scene.cameraFollowSprite(mySprite)
scroller.scrollBackgroundWithSpeed(0, -50)
levels(1)
// BRO IS NOT COOKING WITH THIS - kayden
game.onUpdateInterval(5000, function () {
    spawncar(1)
})
// yea trevon your cooked ngl. - kayden
game.onUpdateInterval(100, function () {
    for (let index = 0; index < 10; index++) {
        myVariable += 1
        console.log(myVariable)
    }
})
game.onUpdateInterval(100, function () {
    let list: string[] = []
    list.push("\"New Car\"" + "")
})
game.onUpdateInterval(10000, function () {
    coins(1)
})
