function getDefaultState () {
  const defaultState = {
    error: null,
    list: [],
    name: undefined
  }

  return Object.assign({}, defaultState)
}
const list = (state = getDefaultState(), action) => {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case 'FETCHING_LIST':
      newState = getDefaultState()
      break
    case 'GOT_LIST':
      newState.error = null
      newState.list = action.list
      newState.name = action.name
      break
    case 'LIST_ERROR':
      newState.error = action.error
      newState.list = []
      newState.name = undefined
      break
  }

  return newState
}

export default list
