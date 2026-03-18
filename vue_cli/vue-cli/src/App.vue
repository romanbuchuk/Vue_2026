<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      contacts: [],
      isBold: false
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    firstNameClass() {
      return { bold: this.isBold }
    },
    lastNameClass() {
      return { bold: this.isBold }
    }
  },
  methods: {
    add() {
      this.contacts.push(this.fullName)
    },
    reset() {
      this.firstName = ''
      this.lastName = ''
    },
    remove(index) {
      this.contacts.splice(index, 1)
    }
  }
}
</script>

<template>
  <div>
    <h2>{{ fullName }}</h2>

    <div>
      <label for="firstName" :class="firstNameClass">First Name</label>
      <input type="text" id="firstName" ref="firstName" />
      <label for="lastName" :class="lastNameClass">Last Name</label>
      <input type="text" v-model="lastName" />

      <div>
        <div class="buttons">
          <button @click="add">Add</button>
          <button @click="reset">Reset</button>
        </div>
        <div class="buttons">
          <input type="checkbox" id="checkbox" v-model="isBold" />
          <label for="checkbox">Should be bold</label>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(contact, index) in contacts" @click="remove(index)" :key="contact">
        <input type="text" @click.stop />
        <p>{{ contact }} - {{ index }}</p>
      </li>
    </ul>
  </div>
</template>

<style></style>
