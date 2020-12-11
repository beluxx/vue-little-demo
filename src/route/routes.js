import Home from "../components/Home"
import About from "../components/About"
import Feedback from "../components/Feedback"
import Category from "../components/Category"

export default {
    mode: 'history',

    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
        {
            path: "/feedback",
            component: Feedback,
        },
        {
            // 动态路由
            path: "/:name",
            name: 'category',
            component: Category,
        },
    ]
}