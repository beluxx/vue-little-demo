<template>
  <button
    :type="type"
    class="btn"
    :class="{'btn-primary': type==='submit', 'btn-default': type==='cancel'}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["type"]
};
</script>