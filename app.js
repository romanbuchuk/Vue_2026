// const $buttonEl = document.querySelector('button');
// const $inputEl = document.querySelector('#task');
// const $listEl = document.querySelector('ul');

// function handleClick() {
//     const enteredValue = $inputEl.value;
//     const $listItemEl = document.createElement('li');

//     $listItemEl.textContent = enteredValue;
//     $listEl.appendChild($listItemEl);

//     $inputEl.value = '';
// }

// $buttonEl.addEventListener('click', handleClick);
const { createApp } = Vue;

const app = createApp({
    data() {
      return {
        count: 0,
        name: 'John Doe'
      }
    },
    methods: {
        add(num) {
          this.count += num;
        },
        remove(num) {
          this.count -= num;
        },
        test(){
          alert();
        }
    }
});

app.mount('#app');
