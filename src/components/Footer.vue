<template>
  <q-footer class="bg-footer">
    <q-toolbar>
      <q-toolbar-title
        class="text-uppercase text-overline text-white text-weight-bold"
      >
        {{ new Date().getFullYear() }} - All rights reserved &copy;
      </q-toolbar-title>
      <q-img src="logo-dark.png" class="oval" width="50px" />
    </q-toolbar>
  </q-footer>
</template>
<script setup></script>
<style scoped>
.bg-footer {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    -225deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(238, 65, 72, 1) 12%,
    rgba(247, 151, 36, 1) 24%,
    rgba(248, 198, 79, 1) 36%,
    rgba(144, 192, 109, 1) 48%,
    rgba(59, 170, 138, 1) 60%,
    rgba(87, 120, 145, 1) 72%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>
