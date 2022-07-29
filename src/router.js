import {createRouter,createWebHistory} from 'vue-router'
import Home from "./components/Home.vue"
import Questions from './components/questions/questions.vue'
import BlogArts from './components/blog/arts.vue';
import login from './components/users/login.vue'
import qPage from './components/questions/question.vue'
// import linkModal from './components/tools/linkModal.vue'
import addQuestion from './components/questions/addQuestion.vue'
import artPage from './components/blog/artPage.vue';
import signup from './components/users/signup.vue';
import panel from './components/users/panel.vue';
import viewTool from './components/users/viewUserTools.vue';
import addPost from './components/blog/addPost.vue';
import NotFound from './components/notFound.vue';
import media from './components/media/media.vue';
import addMed from './components/media/addMedia.vue';
import addPro from './components/shop/addProduct.vue';
import mediaPage from './components/media/mediaPage.vue';
import products from './components/shop/products.vue';
import proPage from './components/shop/proPage.vue';
import imgModal from './components/tools/imgModal.vue'


const routes = [
    {path:'/',component:Home},
    {path:'/uploadImg',component:imgModal},
    {path:'/questions',component:Questions},
    {path:'/blog',component:BlogArts},
    {path:'/media',component:media},
    {path:'/shop',component:products},
    {path:'/media/:id',component:mediaPage},
    {path:'/p/:id',component:proPage},
    {path:'/signin',component:login},
    {path:'/signup',component:signup},
    {path:'/panel',component:panel,children: [
        { path: ':tool', component: viewTool },
      ]},
    {path:'/q/:id',component:qPage},
    {path:'/article/:id',component:artPage},
    // {path:'/link',component:linkModal}, 
    {path:'/q/addQuestion',component:addQuestion},
    {path:'/media/addMedia',component:addMed},
    {path:'/shop/addProduct',component:addPro},
    {path:'/blog/addArticles',component:addPost},
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router