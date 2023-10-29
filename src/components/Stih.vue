<template>
    <select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: 1, text: 'Please select an option' },
          { value: 2, text: 'This is First option' },
          { value: 3, text: 'Selected Option' }
        ]
      }
    }
  }
</script>