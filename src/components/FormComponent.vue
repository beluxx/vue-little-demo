<style scoped>
.post-form {
  margin: 50px auto;
  padding: 30px;
}
.alert {
  margin-top: 10px;
}
</style>

<template>
  <div class="card col-8 post-form">
    <h3 class="text-center">发布新文章</h3>
    <hr />
    <form @submit.prevent="store">
      <div class="form-group">
        <label for="title">标题</label>
        <input type="text" ref="title" class="form-control" id="title" v-model="article.title" />
        <div
          class="alert alert-danger"
          role="alert"
          v-show="validation.hasError('article.title')"
        >{{ validation.firstError('article.title') }}</div>
      </div>
      <div class="form-group">
        <label for="author">作者</label>
        <input type="text" ref="author" class="form-control" id="author" v-model="article.author" />
        <div
          class="alert alert-danger"
          role="alert"
          v-show="validation.hasError('article.author')"
        >{{ validation.firstError('article.author') }}</div>
      </div>
      <div class="form-group">
        <label for="content">内容</label>
        <textarea
          class="form-control"
          ref="content"
          id="content"
          rows="5"
          v-model="article.content"
        ></textarea>
        <div
          class="alert alert-danger"
          role="alert"
          v-show="validation.hasError('article.content')"
        >{{ validation.firstError('article.content') }}</div>
      </div>
      <button type="submit" class="btn btn-primary">立即发布</button>
      <div class="alert alert-success" role="alert" v-show="published">文章发布成功。</div>
    </form>
  </div>
</template>

<script>
import { Validator } from "simple-vue-validator";
// const Validator = SimpleVueValidation.Validator;

export default {
  name: "FormComponent",
  props: {
    username: String
  },
  data() {
    return {
      article: {
        title: "",
        author: this.username,
        content: ""
      },
      published: false
    };
  },
  validators: {
    "article.title": function(value) {
      return Validator.value(value).required();
    },
    "article.author": function(value) {
      return Validator.value(value).required();
    },
    "article.content": function(value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    store() {
      this.$validate()
        .then(sucess => {
          if (sucess) {
            // 验证成功
            // https://segmentfault.com/a/1190000018774494
            // 此处传递的是article对象，因此后端得到的应该是request playload
            this.axios
              .post("api/post", this.article)
              .then(res => {
                this.published = true;
                console.log(res.data);
              })
              .catch(err => {
                let resErr = err.response.data;
                console.log(resErr);
              });
          } else {
            // 验证失败
          }
        })
        .catch(err => {
          // 验证器出现问题
          console.log("验证器出现问题", err);
        });
    }
  }
};
</script>