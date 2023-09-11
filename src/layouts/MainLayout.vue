<template>
  <q-layout view="hHh LpR fFf">
    <NavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import NavBar from "src/components/NavBar.vue";
</script>
