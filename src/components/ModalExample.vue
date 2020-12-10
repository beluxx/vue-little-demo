<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            <slot name="header" v-bind:title="title">{{ title }}</slot>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li v-for="language in languages" v-bind:key="language.id">
              <slot v-bind:language="language">{{ language }}</slot>
              <span v-if="language === 'PHP'">☑️</span>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalExample",
  data() {
    return {
      languages: [],
      title: ""
    };
  },
  // props: ["languages", "title"],
  // 有个问题就是说，一般这个数据来源是从root根app那里获取呢
  // 还是各个组件自己单独获取?
  mounted() {
    this.axios
      .get("api/title")
      .then(response => (this.title = response.data.title))
      .catch(response => console.log("aaaa", response));
    this.axios
      .get("api/languages")
      .then(response => (this.languages = response.data.languages));
  }
};
</script>

<style scoped>
ul li {
  text-align: left;
}
</style>