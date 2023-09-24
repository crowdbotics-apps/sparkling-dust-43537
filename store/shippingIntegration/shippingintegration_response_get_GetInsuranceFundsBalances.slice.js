import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const shippingintegration_get_insurance_shipsurance_balance_read = createAsyncThunk(
  "shippingintegration_response_get_GetInsuranceFundsBalances/shippingintegration_get_insurance_shipsurance_balance_read",
  async payload => {
    const response = await apiService.shippingintegration_get_insurance_shipsurance_balance_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shippingintegration_response_get_GetInsuranceFundsBalancesSlice = createSlice(
  {
    name: "shippingintegration_response_get_GetInsuranceFundsBalances",
    initialState,
    reducers: {},
    extraReducers: {
      [shippingintegration_get_insurance_shipsurance_balance_read.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [shippingintegration_get_insurance_shipsurance_balance_read.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      },
      [shippingintegration_get_insurance_shipsurance_balance_read.rejected]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      }
    }
  }
)
export default {
  shippingintegration_get_insurance_shipsurance_balance_read,
  slice: shippingintegration_response_get_GetInsuranceFundsBalancesSlice
}
