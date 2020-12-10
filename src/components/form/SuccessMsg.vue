<style scoped>
.alert {
  margin-top: 10px;
}
</style>

<template>
  <div class="alert alert-success" role="alert" v-show="success">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["success"]
};
</script>