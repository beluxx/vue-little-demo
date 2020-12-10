import Errors from "./errors"
import axios from "axios"

/**
 * Form 表单数据
 */
class Form {

    /**
     * 构造函数
     * @param {Form} data Form 对象
     */
    constructor(data) {
        this.originData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.success = false;
        this.errors = new Errors()
    }

    /**
     * 返回表单的所有字段及其数据
     */
    data() {
        let data = {};

        for (let field in this.originData) {
            data[field] = this[field];
        }

        // return this.originData  // 不能直接返回这样的吗？
        return data
    }

    /**
     * 清空表单数据
     */
    reset() {
        for (let field in this.originData) {
            delete this[field];
        }

        // 不能这样吗？
        // delete this.originData
    }

    /**
     * 表单提交处理 ----> 这是有问题的，尚未修复。暂时别用这个方法
     * @param {string} url 发送的请求地址
     * @param {string} method 发送的请求方式，默认为post
     */
    submit(url, method) {
        if (method.length === 0) {
            method = 'post';
        }
        return new Promise((resolve, reject) => {
            axios[method](url, this.data()).then(response => {
                this.onSuccess(response.data);
                this.success = true;
                resolve(response.data);
            }).catch(error => {
                this.onFail(error.response.data.errors);
                reject(error.response.data);
            })
        })
    }

    /**
     * 发送post请求
     * @param {string} url 发送post请求的地址
     */
    post(url) {
        return this.submit(url, 'post');
    }

    /**
     * 发送put请求
     * @param {string} url 发送put请求的地址
     */
    put(url) {
        return this.submit(url, 'post');
    }

    /**
     * 处理表单提交成功
     * @param {Form} data Form数据
     */
    onSuccess(data) {
        console.log(data);
        this.reset()
    }

    /**
     * 处理表单提交失败
     * @param {Errors} errors 表单提交失败的Errors对象
     */
    onFail(errors) {
        this.errors.set(errors);
    }
}

export default Form;