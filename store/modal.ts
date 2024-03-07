export const modal = defineStore('modalData', {
  state: () => ({
    isFormVisible: false,
  }),
  actions: {
    handleFormInvoke() {
      this.isFormVisible = !this.isFormVisible
      document.body.classList.add('overflow-hidden')
    },
    handleRemoveInvoke() {
      this.isFormVisible = false
      document.body.classList.remove('overflow-hidden')
    },
  },
})
