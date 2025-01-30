export const vueCode = `<script>
import NanoForm from 'ts-nano-form'

const resolver = (data) => {
  const errors = {
    name: ''
  }
  if (!data.name) errors.name = 'name required'

  return errors
}

const TsNanoForm = NanoForm();

const FormUser = TsNanoForm.createForm({
  resolver: resolver
})
const { field, submit } = FormUser

export default {
  data() {
    return {
      name: null,
      nameError: ''
    }
  },
  beforeMount() {
    field('name').subscribeValue((value) => (this.name = value))
    field('name').subscribeError((value) => (this.nameError = value))
  },
  methods: {
    changeName(event) {
      field('name').setValue(event.target.value)
    },
    submitName() {
      submit((data) => console.log('submit', data))
    }
  }
}
</script>

<template>
  <form @submit.prevent="submitName">
    <label>
      <p>Name</p>
      <input :value="name" @input="(event) => changeName(event)" placeholder="Name" />
      <p>{{ this.nameError }}</p>
    </label>
    <button type="submit">Submit</button>
  </form>
</template>`;
