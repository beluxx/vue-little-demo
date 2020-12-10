<template>
  <FormSection @store="store">
    <template slot="title">发布新文章</template>
    <template slot="input-group">
      <div class="form-group">
        <Label name="title" label="标题"></Label>
        <InputText name="title" v-model="article.title"></InputText>
        <ErrorMsg :error="validation.firstError('article.title')"></ErrorMsg>
      </div>

      <div class="form-group">
        <Label name="author" label="作者"></Label>
        <InputText name="author" v-model="article.author"></InputText>
        <ErrorMsg :error="validation.firstError('article.author')"></ErrorMsg>
      </div>

      <div class="form-group">
        <Label name="content" label="内容"></Label>
        <TextArea name="content" v-model="article.content"></TextArea>
        <ErrorMsg :error="validation.firstError('article.content')"></ErrorMsg>
      </div>
    </template>
    <template slot="action">
      <Button type="submit">立即发布</Button>
    </template>
    <template slot="toast">
      <SuccessMsg :success="article.success">文章发布成功。</SuccessMsg>
    </template>
  </FormSection>
</template>

<script>
import FormData from "../utils/form";
import FormSection from "./form/FormSection";
import InputText from "./form/InputText";
import TextArea from "./form/TextArea";
import Button from "./form/Button";
import Label from "./form/Label";
import SuccessMsg from "./form/SuccessMsg";
import ErrorMsg from ".//form/ErrorMsg";

import { Validator } from "simple-vue-validator";

export default {
  components: {
    FormSection,
    InputText,
    TextArea,
    Label,
    Button,
    SuccessMsg,
    ErrorMsg
  },
  props: {
    username: String
  },
  data() {
    return {
      article: new FormData({
        title: "",
        author: this.username,
        content: ""
      })
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
      this.$validate().then(sucess => {
        if (sucess) {
          // 验证通过
          this.axios
            .post("api/post", this.article.data())
            .then(data => {
              console.log(data);
              this.article.success = true;
            })
            .catch(data => console.log(data));
        }
      });
    },
    clear(field) {
      this.article.errors.clear(field);
    }
  }
};
</script>