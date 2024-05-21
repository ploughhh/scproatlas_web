import { defineComponent } from "vue"
export default defineComponent({
  name: "table-column-render",
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },
  render () {
    return this.render(this.row, this.index)
  }
})
