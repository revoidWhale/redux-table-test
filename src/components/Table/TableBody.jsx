import HeaderRow from './HeaderRow'
import TableRow from './TableRow'
import { select } from '../../scripts/select'
import classes from './../../styles/task.module.css'
import { Link } from 'react-router-dom'

const TableBody = ({ items, sortBy, filters, onSort, onFilter, onBuy }) => {
  const selectedItems = select(filters, items, sortBy)

  return (
    <div>
      <div className={classes.table}>
        <HeaderRow filters={filters} onFilter={onFilter} onSort={onSort} />{' '}
      </div>
      <table className={classes.table}>
        <tbody>
          {selectedItems.map((el) => (
            <Link key={el.id} to={`/project/${el.id}`}>
              <TableRow key={el.id} data={el} onBuy={onBuy} />
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableBody
