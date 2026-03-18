const { createApp } = Vue;
// const createApp = Vue.createApp;

const app = createApp({
    data() {
      return {
        isBold: false,
        firstName: '',
        lastName: '',
        contacts: [],
      }
    },
    computed: {
        fullName() {
          return `${this.firstName} ${this.lastName}`;
        },
        firstNameClass() {
          //  return [{ bold: this.isBold }, { error: !this.firstName }];
          return {
            bold: this.isBold,
            error: !this.firstName
          }
        },
        lastNameClass() {
          //  return [{ bold: this.isBold }, { error: !this.firstName }];
          return {
            bold: this.isBold,
            error: !this.lastName
          }
        }
    },
    watch: {
        // firstName(newFirstName, oldFirstName) {
        //     console.log(`firstName changed from ${oldFirstName} to ${newFirstName}`);
        //     this.fullName = `${newFirstName} ${this.lastName}`;
        // },
        // lastName(newLastName) {
        //     this.fullName = `${this.firstName} ${newLastName}`;
        // }
    },
    methods: {
        add() {
          const firstName = this.$refs.firstName.value;

          console.log(firstName);

          // this.contacts.push(this.fullName);
          //this.reset();
        },
        remove(index) {
          this.contacts.splice(index, 1);
        },
        reset() {
          this.firstName = '';
          this.lastName = '';
          this.fullName = '';
        }
    }
});

app.component('CustomTag', {
  template: `
    <h2>Hello World</h2>
  `,
  data() {
      return {
        firstName: '',
        lastName: '',
      }
    },
  
});

app.mount('#app');
