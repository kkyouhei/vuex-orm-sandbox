// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VuexORM, { Model } from '@vuex-orm/core'
import API from './api'

class User extends Model {
  static entity = 'users'
  static fields () {
    return {
      id: this.attr(null),
      name: this.attr(''),
      role_id: this.attr(null),
      role: this.belongsTo(Role, 'role_id')
    }
  }
}

class Role extends Model {
  static entity = 'roles'

  static fields () {
    return {
      id: this.attr(null),
      title: this.attr(''),
      users: this.hasMany(User, 'role_id')
    }
  }
}

Vue.use(Vuex)

const database = new VuexORM.Database()
database.register(User, {})
database.register(Role, {})

// Create Vuex Store and register database through Vuex ORM.
const store = new Vuex.Store({
  plugins: [VuexORM.install(database)],
  getters: {
    users: (state, getters) => {
      return getters['entities/users/query']()
        .with('role')
        .get()
    }
  }
})

Vue.config.productionTip = false

API.getUserAndRole(res => {
  store.dispatch('entities/users/create', { data: res['users'] })
  store.dispatch('entities/roles/create', { data: res['roles'] })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
