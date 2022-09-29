export const SET_FILTER = 'SET_FILTER'
export const SET_SORT_BY = 'SET_SORT_BY'

export const setFilter = (payload) => ({
  payload,
  type: SET_FILTER,
})

export const setSortBy = (payload) => ({
  payload,
  type: SET_SORT_BY,
})
