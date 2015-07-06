Block
  removeBrick()

  left() right()

  destroy()
    this = undefined

Array2D
  findN(n)


CellsArray extends Array2D
  findNBrick()
  findNBlock()
    return [cell, cell, ...]

  clear(Array cells)
    forEach c.clear()

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

