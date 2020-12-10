<style scoped>
.form {
  margin: 50px auto;
  padding: 30px;
}
</style>

<template>
  <div class="card col-8 form">
    <h3 class="text-center">
      <slot name="title"></slot>
    </h3>
    <hr />
    <form @submit.prevent="$emit('store')">
      <slot name="input-group"></slot>
      <slot name="action"></slot>
    </form>
    <slot name="toast"></slot>
  </div>
</template>

<script>
export default {};
</script>