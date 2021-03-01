<template>
  <v-app class="flex" app>
    <page-header />
    <main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
body{
  height: 100vh;
}

.container{
  padding: 0;
  max-width: 100%;
}

v-app {
  margin: auto;
  padding-top:70px;
}

.xs6{
  padding-top: 100px;
  max-width: 33.33% !important;
}

.v-btn{
  min-width: 100px;
  margin-bottom: 10px;
}

</style>
