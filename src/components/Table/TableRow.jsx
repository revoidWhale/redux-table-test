import classes from './../../styles/task.module.css'

const TableRow = ({ data, onBuy }) => {
  const { name, status, type, conditions, volume, roi, free, hedge, id } = data

  const cells = [
    name,
    type,
    conditions,
    `$ ${volume}`,
    `${roi} %`,
    free,
    `${hedge} %`,
  ]
  const pallete = [
    ['red', '#fce3d1'],
    ['yellow', '#edfcd1'],
    ['green', '#d1fcd1'],
  ]

  const palleteCircle = [
    ['red', '#f55d48'],
    ['yellow', '#f6b60e'],
    ['green', '#0EE640'],
  ]

  const backgroundColor = pallete.find((el) => el[0] === status)[1]
  const background = palleteCircle.find((el) => el[0] === status)[1]

  const onBuyHandle = (e) => {
    e.preventDefault()

    onBuy(id)
  }

  return (
    <tr className={classes.table__row} style={{ backgroundColor }}>
      <td className={classes.table__cell_circle}>
        <div className={classes.table__row_circle} style={{ background }} />
      </td>

      {cells.map((el, index) => (
        <td className={classes.table__cell} key={index}>
          {el}
        </td>
      ))}

      <td className={classes.table__cell}>
        <button className={classes.table__buy_btn} onClick={onBuyHandle}>
          Buy
        </button>
      </td>
    </tr>
  )
}

export default TableRow
