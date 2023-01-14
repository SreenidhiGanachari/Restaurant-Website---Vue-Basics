import HomeName from './components/HomeName.vue';
import AddResto from './components/AddResto.vue';
import UpdateResto from './components/UpdateResto.vue';
import SignUp from './components/SignUp.vue';
import LoginPage from './components/LoginPage.vue';
import {createRouter , createWebHistory} from 'vue-router';

const routes =[
    {
        name:'HomeName',
        component:HomeName,
        path:'/',
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up',
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login',
    },
    {
        name:'AddResto',
        component:AddResto,
        path:'/add',
    },
    {
        name:'UpdateResto',
        component:UpdateResto,
        path:'/update',
    },

];

const router =createRouter(
    {
        history:createWebHistory(),
        routes,
    }
);

export default router ;


