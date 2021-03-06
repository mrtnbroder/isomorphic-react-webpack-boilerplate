
import { handleActions } from 'redux-actions'
import { initalModel } from './model'

// TYPES

export const types = {
  MODIFY: 'MODIFY'
}

// ACTIONS

export const actions = {
  modify: (payload) => ({ type: types.MODIFY, payload })
}

// UPDATE

export const update = handleActions({

  [`${types.MODIFY}`]: (state, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }

}, initalModel)
