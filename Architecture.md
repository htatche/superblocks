Brick
  constructor(Block b)
    this.block = b
    this.phaserSprite
    this.position = new Position()

Block
  constructor (phaserGame, Table t)
    this.phaserGroup = phaserGame.add.group();
    this.bricks = new ArrayMain()
    this.table = t
    this.position = new Position()
    this.nBlock

  newBrick()
    this.bricks.add(new Brick(sprite))

  addBrick(Brick b)
    this.bricks.add(b)

  removeBrick()

  phaserTranslate(optional position)
    this.phaserGroup.translate(position.xPixels, position.yPixels)

  down()
    var move = new Move()

    this.table.moveBlock(this, move.down)

    this.phaserTranslate()

    return this.position    

  up() left() right()

  destroy()
    this = undefined

Array2D
  findN(n)

Cell
  constructor
    this.x
    this.y
    this.nBrick
    this.nBlock

  clear()
    this.nBlock, this.nBrick = null

  setTo(nBrick, nBlock)
    this.nBrick = nBrick
    this.nBlock = nBlock

CellsArray extends Array2D
  findNBrick()
  findNBlock()
    return [cell, cell, ...]

  cell(x, y)
    return this[x, y]

  clear(Array cells)
    forEach c.clear()

  row(x)
    return this[x]

Row extends ArrayBase
  this.x

  clear(Array cells)
    cells.forEach i => i.clear()

Table
  constructor
    this.cellsArray = new CellsArray

  findCellByBrick(Number nBrick)
    return this.cellsArray.findNBrick(nBrick)   

  findCellByBlock(Number nBlock)
    return this.cellsArray.findNBlock(nBlock)

  moveBrick(Brick brick, Position p)
    this.findCellByBrick(brick.nBrick).clear()

    var newCell = this.cellsArray.cell(p.x, p.y)

    newCell.setTo(
      brick.nBrick, brick.nBlock
    )

    return newCell

  moveBlock(Block b, callback)
    b.bricks.forEach brick =>
      this.moveBrick brick, callback(brick.position)

  clearRow(x)
    var row = new Row(this.cellsArray.row(x))
    row.clear()


Move
  down(Position p)
    return new Position({x, y + 1})
