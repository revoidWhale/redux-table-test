export const select = (filters, items, sortBy) => {
  const fieldName = `${sortBy}`.replace('-', '')
  let newItems = [...items]

  const filter = (field) =>
    newItems.filter((el) => el[field] === filters[field])

  if (sortBy.indexOf('conditions') >= 0) {
    const conditionsSort = (time) => {
      return newItems
        .filter((el) => el.conditions.indexOf(time) >= 0)
        .sort((a, b) => {
          const toNumber = (str) =>
            Number(str.replace(/[^,.\d]/g, '').replace(',', '.'))
          return toNumber(a[fieldName]) > toNumber(b[fieldName]) ? 1 : -1
        })
    }

    const years = conditionsSort('years')
    const months = conditionsSort('months')

    newItems = [...months, ...years]
  }

  if (filters.status !== 'All') newItems = filter('status')
  if (filters.type !== 'All') newItems = filter('type')

  if (typeof items[0][fieldName] === 'number') {
    newItems.sort((a, b) => a[fieldName] - b[fieldName])
  }

  if (sortBy.indexOf('name') >= 0 || sortBy.indexOf('type') >= 0) {
    newItems.sort((a, b) => (a[fieldName] > b[fieldName] ? 1 : -1))
  }

  return sortBy.indexOf('-') ? newItems.reverse() : newItems
}
