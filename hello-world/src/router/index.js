import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApplyLimitTest from "../view.loan/ApplyLimitTest";
import AddCreditAccountProcessTest from "../view.loan/AddCreditAccountProcessTest";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ApplyLimitTest',
      name: 'ApplyLimitTest',
      component: ApplyLimitTest
    },
    {
      path: '/AddCreditAccountProcessTest',
      name: 'AddCreditAccountProcessTest',
      component: AddCreditAccountProcessTest
    }
  ]
})
