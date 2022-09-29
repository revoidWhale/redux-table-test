import classes from './../../styles/task.module.css'

const HeaderRow = ({ filters, onFilter, onSort }) => {
  const statusHandle = (e) => onFilter({ status: e.target.value })
  const typeHandle = (e) => onFilter({ type: e.target.value })

  const relations = [
    ['Project', 'name'],
    ['Token Type', 'type'],
    ['Conditions', 'conditions'],
    ['Volume', 'volume'],
    ['ROI', 'roi'],
    ['Free float', 'free'],
    ['Insurance hedge', 'hedge'],
  ]

  const onSortHandle = (e) => {
    onSort(relations.find((el) => el[0] === e.target.innerText)[1])
  }

  return (
    <thead className={classes.table__header}>
      <tr>
        <th></th>
        <th className={classes.table__header_cell}>
          <select
            value={filters.status}
            onChange={statusHandle}
            className={classes.table__select}
          >
            <option>All</option>
            <option>red</option>
            <option>yellow</option>
            <option>green</option>
          </select>
        </th>
        <th className={classes.table__header_cell}>
          <span onClick={onSortHandle}>Project</span>
        </th>
        <th className={classes.table__header_cell}>
          <select
            value={filters.type}
            onChange={typeHandle}
            className={classes.table__select}
          >
            <option>All</option>
            <option>TRST</option>
            <option>THT</option>
            <option>THC</option>
          </select>
          <span onClick={onSortHandle}>Token Type</span>
        </th>
        <th className={classes.table__header_cell} onClick={onSortHandle}>
          Conditions
        </th>
        <th className={classes.table__header_cell} onClick={onSortHandle}>
          Volume
        </th>
        <th className={classes.table__header_cell}>ROI</th>
        <th className={classes.table__header_cell}>Free float</th>
        <th className={classes.table__header_cell}>Insurance hedge</th>
        <th></th>
      </tr>
    </thead>
  )
}

export default HeaderRow
