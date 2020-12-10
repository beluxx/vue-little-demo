<template>
  <li class="list-group-item">
    <a :href="url">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  props: ["url"]
};
</script>