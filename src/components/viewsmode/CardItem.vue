<style scoped>
.card-text {
  vertical-align: middle;
}
.card-text small {
  margin-right: 5px;
}
</style>

<template>
  <div class="col mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <slot name="title"></slot>
        </h5>
        <p class="card-text">
          <small class="text-muted">
            <svg
              v-show="post.status === 1"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-file-check"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
              />
              <path
                fill-rule="evenodd"
                d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <svg
              v-show="post.status === false"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-file-x"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4z"
              />
              <path
                fill-rule="evenodd"
                d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"
              />
            </svg>
            <!-- 本地组件过滤器 -->
            <!-- {{ post.status ? '草稿' : '已发布' }} -->
            {{ post.status | status_human_readable}}
          </small>
          <small class="text-muted">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-clock"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
              />
              <path
                fill-rule="evenodd"
                d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
            <!-- 全局过滤器 -->
            {{ post.created_at | diff_for_human }}
          </small>
        </p>
        <a :href="post.url" class="btn btn-primary">
          <slot name="action-label"></slot>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  filters: {
    status_human_readable(status) {
      switch (status) {
        case true:
          return "已发布";
        case false:
          return "草稿";
        default:
          return "未知状态";
      }
    }
  }
};
</script>