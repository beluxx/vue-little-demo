<style scoped>
.alert {
  margin-top: 10px;
}
</style>

<template>
  <div class="alert alert-danger" role="alert" v-show="error">{{ error }}</div>
</template>

<script>
export default {
  props: ["error"]
};
</script>