import axios from "axios"
import { SHIPPING_API_INTEGRATION_TOKEN } from "react-native-dotenv"
const shippingIntegration = axios.create({
  baseURL: "https://api.shipengine.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${SHIPPING_API_INTEGRATION_TOKEN}`
  }
})
function shippingintegration_post_labels_shipment_create(payload) {
  return shippingIntegration.post(`/labels/shipment/`, payload.data)
}
function shippingintegration_get_insurance_shipsurance_balance_read(payload) {
  return shippingIntegration.get(`/insurance/shipsurance/balance`)
}
export const apiService = {
  shippingintegration_post_labels_shipment_create,
  shippingintegration_get_insurance_shipsurance_balance_read
}
