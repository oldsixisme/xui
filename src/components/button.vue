<template>
  <button :class="['my_button--' + type]"></button>
</template>
  <script>
  export default {
    name: 'my-button',
    props: {
      type: {
        type: String,
        default: 'default',
      }
  }
}
  </script>