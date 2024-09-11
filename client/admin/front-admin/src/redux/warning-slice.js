import { createSlice } from '@reduxjs/toolkit'

export const warningSlice = createSlice({
  name: 'warning',
  initialState: {
    formElement: {
      data: null
    },
    tableEndpoint: null
  },
  reducers: {
    showFormElement: (state, action) => {
      state.formElement = action.payload
    },
    refreshTable: (state, action) => {
      state.tableEndpoint = action.payload
    }
  }
})

export const {
  showFormElement,
  refreshTable
} = warningSlice.actions

export default warningSlice.reducer
