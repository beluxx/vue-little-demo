<style scoped>
.post-list {
  margin-top: 50px;
}
</style>

<template>
  <div class="post-list">
    <ListSection :view_mode="view_mode" @view-mode-changed="change_view_mode">
      <!-- #title  这是slot的缩略写法 -->
      <template #title>文章列表</template>
      <template v-if="view_mode === 'list'">
        <ListItem v-for="post in posts" :key="post.id" :url="post.url">{{ post.title }}</ListItem>
      </template>
      <template v-else>
        <CardItem v-for="post in posts" :key="post.id" :post="post">
          <template #title>{{ post.title }}</template>
          <template #action-label>点击查看</template>
        </CardItem>
      </template>
    </ListSection>
  </div>
</template>

<script>
import ListSection from "./viewsmode/ListSection";
import ListItem from "./viewsmode/ListItem";
import CardItem from "./viewsmode/CardItem";

export default {
  components: {
    ListSection,
    ListItem,
    CardItem
  },
  data() {
    return {
      view_mode: "list",
      posts: []
    };
  },
  methods: {
    change_view_mode(mode) {
      // 监听子组件的的view-mode-changed的事件的回调函数
      this.view_mode = mode;
    }
  },
  mounted() {
    this.axios
      .get("api/post")
      .then(response => {
        // console.log("Get Posts Data = ", response.data.posts);
        this.posts = response.data.posts;
        // for (let p in this.posts) {
        //   console.log(p);
        // }
        // this.posts.forEach(p => {
        //   //   console.log(p);
        //   //   console.log(p.title); // 这就需要后端出来的json数据经过Marshal处理
        // });
      })
      .catch(error => {
        console.log("从服务器加载文章失败, ", error);
      });
  }
};
</script>