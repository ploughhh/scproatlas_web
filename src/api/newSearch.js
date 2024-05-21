import { $set } from 'vue'

export const pickChange = (val) => {
  if (val) {
    $set(this.item, this.item.value, val)
  } else {
    $set(this.item, this.item.value, '')
  }
}
