<template>
  <h1>Catrgory: {{ language }}</h1>
</template>

<script>
export default {
  data() {
    return {
      language: ""
    };
  },
  methods: {
    updateCategory() {
      this.language = this.$route.params.language;
    }
  },
  mounted() {
    this.updateCategory();
  },
  watch: {
    $route: "updateCategory"
  }
};
</script>