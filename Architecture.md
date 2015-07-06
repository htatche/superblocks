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

Table
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
