import { SET_FILTER, SET_SORT_BY } from '../actions'

const initialState = {
  tableData: [
    {
      id: 1,
      name: 'Pyshky.net',
      status: 'green',
      type: 'TRST',
      conditions: 'x2,6 months',
      volume: 120000,
      roi: 4,
      free: 20,
      hedge: 20,
    },
    {
      id: 2,
      name: 'NFT-Flowershop',
      status: 'yellow',
      type: 'THT',
      conditions: 'x4,2 years',
      volume: 80000,
      roi: 23,
      free: 12,
      hedge: 0,
    },
    {
      id: 3,
      name: 'Tokenhunt-club',
      status: 'green',
      type: 'THC',
      conditions: 'x2,1 years',
      volume: 120000,
      roi: 23,
      free: 2,
      hedge: 20,
    },
    {
      id: 4,
      name: 'Web3 P2P University',
      status: 'red',
      type: 'TRST',
      conditions: 'x2,1 years',
      volume: 200000,
      roi: 6,
      free: 1,
      hedge: 0,
    },
  ],
  sortBy: '-name',
  filters: {
    status: 'All',
    type: 'All',
  },
}

export const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      }
    case SET_SORT_BY:
      const isSameField =
        `${state.sortBy}`.replace('-', '') ===
        `${action.payload}`.replace('-', '')

      return {
        ...state,
        sortBy: !isSameField
          ? action.payload
          : state.sortBy[0] === '-'
          ? action.payload
          : `-${action.payload}`,
      }
    default:
      return state
  }
}
