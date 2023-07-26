<template>
  <section>
    <h2>SpaceX</h2>

    <section class="spacex-block">
      <h2>Company info</h2>
      <div v-if="!(companyLoading || isCompanyError)">
        <p>founder: {{ company.company.founder }}</p>
        <p>year: {{ company.company.founded }}</p>
        <p>
          {{ company.company.summary }}
        </p>
        <a
          :href="company.company.links.website"
          target="_blank"
          >Landing</a
        >
      </div>
      <VLoader :value="companyLoading" />
      <p v-show="isCompanyError">Bad request to company info, {{ isCompanyError }}</p>
    </section>

    <section class="spacex-block">
      <h2>Dragons list</h2>
      <div v-if="!(dragonsLoading || isDragonsError)">
        <div
          v-for="({active, id, name, type}) in dragons.dragons"
          :key="id"
          class="spacex-dragon"
        >
          <p>status: {{ active }}</p>
          <p>id: {{ id }}</p>
          <p>
            name: {{ name }}
          </p>
          <p>
            type: {{ type }}
          </p>

          <router-link
            :to="`/dragon/${id}`"
            class="spacex-dragonLink"
          >
            read more
          </router-link>
        </div>
      </div>
      <VLoader :value="companyLoading" />
      <p v-show="isCompanyError">Bad request to dragons</p>
    </section>

    <section class="spacex-block">
      <h2>Users list</h2>
      <div v-if="!(usersLoading || isUsersError)">
        {{ users }}
      </div>
      <VLoader :value="usersLoading" />

      <p v-show="isUsersError">Bad request to company info, {{ isUsersError }}</p>
    </section>

    <section class="spacex-block">
      <h2>Mutate users</h2>

      <VLoader :value="sendMessageLoading" />

      <button @click="sendMessage">
        Send message
      </button>

      {{ sendMessageError ? sendMessageError : '' }}

      <!-- TODO: need to remove variable option from useMutation -->
      <!-- <button @click="sendMessage(object)">
        Send message
      </button> -->
    </section>

 
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VLoader from '@/components/Loader/VLoader.vue'

import { useQuery, useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { 
  QUERY_COMPANY_INFO,
  QUERY_DRAGONS,
  QUERY_USERS_INFO,
  MUTATE_INSERT_USERS,
 } from '@/server/graphQl/index.ts'

const { result: company, loading: companyLoading, error: isCompanyError } = useQuery(QUERY_COMPANY_INFO)

const { result: dragons, loading: dragonsLoading, error: isDragonsError } = useQuery(QUERY_DRAGONS)

const { result: users, loading: usersLoading, error: isUsersError } = useQuery(QUERY_USERS_INFO, {
  "distinctOn": [
    "name"
  ],
  "orderBy":  {
    "id": "asc"
  }
})

const object = ref({
  objects: [
    {
      name: 'Leo',
    }
  ]
})
const { mutate: sendMessage, loading: sendMessageLoading, error: sendMessageError, onDone } = useMutation(MUTATE_INSERT_USERS, {
  variables: object.value,
})

onDone(result => {
  console.log(result)
})
</script>

<style lang="scss">
.spacex {
  &-block {
    position: relative;
    margin-bottom: 16px;
  }

  &-dragon {
    margin-bottom: 8px;
    padding-bottom: 8px;
    box-shadow: var(--shadow);
  }
}

button {
  cursor: pointer;
  background: #fff;
  padding: 8px;
  border: red;
}
</style>
