<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr />

    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >模态框</button>
    <!-- 模态框 -->
    <!-- 主体内容 -->
    <ModalExample>
      <!-- 具名的slot -->
      <!-- <template v-slot:header></template> -->
      <!-- 不具名的slot，绑定slot的数据 -->
      <!-- <template v-slot:default="bodyProps">
        {{ bodyProps.language.name }}
        <span v-if="bodyProps.language.name === 'PHP'">☑️</span>
      </template>-->
    </ModalExample>

    <!-- 从根App传递给组件，使用props来实现 -->
    <!-- <FormExample :username="username"></FormExample> -->

    <!-- 重构form组件，使用复用子组件来构建form -->
    <PostForm :username="username"></PostForm>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ModalExample from "./components/ModalExample.vue";
// import FormExample from "./components/FormComponent.vue";
import PostForm from "./components/PostForm.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ModalExample,
    // FormExample,
    PostForm
  },
  data() {
    return {
      title: "Vue Study Example -- Component",
      username: "123", // 试试如果是整数，会提示警告。不会报错，这感觉不算是强制
      languages: [
        { id: 1, name: "PHP" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "Golang" }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
