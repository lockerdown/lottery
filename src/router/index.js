import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import First from '@/components/firstClass'
import Second from '@/components/secondClass'
import Third from '@/components/thirdClass'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello,
    children: [{
        path: 'first',
        name: 'First',
        component: First,
      },
      {
        path: 'second',
        name: 'Second',
        component: Second
      },
      {
        path: 'third',
        name: 'Third',
        component: Third
      }
    ]
  }]
})
