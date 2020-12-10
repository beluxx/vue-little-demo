<template>
  <label :for="name">{{ label }}</label>
</template>

<script>
export default {
  props: ["name", "label"]
};
</script>