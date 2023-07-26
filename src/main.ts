import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'

import { Quasar, Notify } from 'quasar'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

const httpLink = createHttpLink({
  uri: 'https://spacex-production.up.railway.app/',
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).use(Quasar, {
  plugins: {
    Notify
  }
})

app.use(createPinia())
app.use(router)

app.mount('#app')
