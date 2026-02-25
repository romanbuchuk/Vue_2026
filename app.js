const { createApp } = Vue;

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
          this.contacts.push(this.fullName);
          this.reset();
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

app.mount('#app');
