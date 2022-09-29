import TableBody from './Table/TableBody'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, setSortBy } from '../redux/actions'
import classes from './../styles/task.module.css'

const ProjectTable = () => {
  const state = useSelector((store) => store.tableReducer)
  const { sortBy, filters } = state
  const dispatch = useDispatch()
  const items = useSelector((store) => store.tableReducer.tableData)

  const onFilter = (value) => dispatch(setFilter(value))
  const onSort = (value) => dispatch(setSortBy(value))
  const onBuy = (id) => alert(id)

  return (
    <div className={classes.container}>
      <TableBody {...{ items, sortBy, filters, onSort, onFilter, onBuy }} />
    </div>
  )
}

export default ProjectTable
