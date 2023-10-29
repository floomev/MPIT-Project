import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import FinderView from '../views/FindView.vue'
import QuestionsView from "../views/QuestionsView.vue"
 import PoemView from '../views/PoemView.vue'
const router = createRouter ({
   
    routes: [ {
        path: '/main',
        component: MainView,
        name: 'MainPage'

    },
    {
        path: '/finder',
        component: FinderView,
        name: 'Find'


    },
    {
        path: '/questions',
        component: QuestionsView,
        name: 'Questions'


    },
    {
        path: '/poem',
        component: PoemView,
        name: 'poem'


    }

    ] ,
    history: createWebHistory(),
})
export default router