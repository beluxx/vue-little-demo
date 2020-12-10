class Errors {
    // 构造函数
    constructor() {
        this.errors = {};
    }

    // 从对象中获取错误字段
    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    clear(field) {
        this.errors[field] = '';
    }

    set(errors) {
        this.errors = errors;
    }
}

export default Errors