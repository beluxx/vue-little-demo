<template>
  <input
    class="form-control"
    type="text"
    :id="name"
    :name="name"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: ["name", "value"]
};
</script>