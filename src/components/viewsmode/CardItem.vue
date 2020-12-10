<template>
  <div class="col mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">
          <slot></slot>
        </h5>
        <a :href="url" class="btn btn-primary">点击查看</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url"]
};
</script>