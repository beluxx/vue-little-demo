<template>
  <textarea
    class="form-control"
    rows="5"
    :id="name"
    :name="name"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @keyup="$emit('keyup')"
  ></textarea>
</template>

<script>
export default {
  props: ["name", "value"]
};
</script>