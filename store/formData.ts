export const lista = defineStore('formData', {
  state: () => ({
    formData: {
      name: '',
      surname: '',
      alojamiento: '',
      autobus: '',
      isAttendingWedding: true,
      isAttendingPreWedding: null,
      company: [] as { fullname: string, edad: string }[],
    },
  }),
  actions: {
    handleEmptyData() {
      this.formData = {
        name: '',
        surname: '',
        alojamiento: '',
        autobus: '',
        isAttendingWedding: true,
        isAttendingPreWedding: null,
        company: [],
      }
    },
    handleMorePeople() {
      this.formData.company.push({ fullname: '', edad: '' })
    },
    handleRemovePeople(index: number) {
      this.formData.company.splice(index, 1)
    },
  },
})
