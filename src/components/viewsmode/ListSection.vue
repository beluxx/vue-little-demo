<style scoped>
.card-header h5 {
  margin-top: 0.5em;
  display: inline-block;
}
.card-header .view-mode {
  float: right;
}
</style>

<template>
  <div class="card">
    <div class="card-header">
      <h5>
        <slot name="title"></slot>
      </h5>
      <button
        class="btn btn-success view-mode"
        @click.prevent="switch_view_mode"
      >{{ view.switch_to }}</button>
    </div>
    <div class="card-body">
      <div class="list-group" v-if="view.mode === 'list'">
        <ul class="list-group">
          <slot></slot>
        </ul>
      </div>
      <div class="row row-cols-1 row-cols-md-3" v-else>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["view_mode"],
  data() {
    return {
      view: {
        mode: this.view_mode,
        switch_to: this.view_mode === "list" ? "卡片视图" : "列表视图"
      }
    };
  },
  methods: {
    switch_view_mode() {
      if (this.view_mode === "list") {
        this.view.mode = "card";
        this.view.switch_to = "列表视图";
      } else {
        this.view.mode = "list";
        this.view.switch_to = "卡片视图";
      }

      // 发送视图改变事件 --> 子组件向父组件(这里的是App根)传值
      this.$emit("view-mode-changed", this.view.mode);
    }
  }
};
</script>