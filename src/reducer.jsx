export const createUser = (data) => {
  return {
    type: 'add',
      payload: data
  }
}

export const deleteUser = () => {
  return {
    type: 'delete',
    payload: 1
  }
}

//REDUCER

export function useUsers() {
  return useSelector(state => state)
}

export const userReducer = (state = {arr:[]}, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                arr: state.arr.concat(action.payload)
            }

        case 'delete':
            return {
                ...state,
                arr: state.arr.splice(0,state.arr.length-1)
            }
        default:
            return state
    }
}


