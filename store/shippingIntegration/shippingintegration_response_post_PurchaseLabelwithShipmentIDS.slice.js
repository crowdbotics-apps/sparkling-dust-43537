import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const shippingintegration_post_labels_shipment_create = createAsyncThunk(
  "shippingintegration_response_post_PurchaseLabelwithShipmentIDS/shippingintegration_post_labels_shipment_create",
  async payload => {
    const response = await apiService.shippingintegration_post_labels_shipment_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const shippingintegration_response_post_PurchaseLabelwithShipmentIDSSlice = createSlice(
  {
    name: "shippingintegration_response_post_PurchaseLabelwithShipmentIDS",
    initialState,
    reducers: {},
    extraReducers: {
      [shippingintegration_post_labels_shipment_create.pending]: (
        state,
        action
      ) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      },
      [shippingintegration_post_labels_shipment_create.fulfilled]: (
        state,
        action
      ) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      },
      [shippingintegration_post_labels_shipment_create.rejected]: (
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
  shippingintegration_post_labels_shipment_create,
  slice: shippingintegration_response_post_PurchaseLabelwithShipmentIDSSlice
}
