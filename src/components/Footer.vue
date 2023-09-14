<template>
  <q-footer class="bg-footer">
    <q-toolbar>
      <q-toolbar-title
        class="text-uppercase text-overline text-white text-weight-bold"
      >
        {{ new Date().getFullYear() }} - All rights reserved &copy;
      </q-toolbar-title>
      <a class="q-pr-sm" href="https://github.com/synalytica" target="_blank">
        <q-icon
          class="text-weight-bolder text-grey-5"
          flat
          round
          size="sm"
          name="mdi-github"
          color="white"
        />
      </a>
      <a
        class="q-pr-sm"
        href="https://www.linkedin.com/company/synalytica"
        target="_blank"
      >
        <q-icon
          class="text-weight-bolder text-grey-5"
          flat
          round
          size="sm"
          name="mdi-linkedin"
          color="white"
        />
      </a>
      <a class="q-pr-sm" href="https://twitter.com/synalytica" target="_blank">
        <q-icon
          class="text-weight-bolder text-grey-5"
          flat
          round
          size="sm"
          name="mdi-twitter"
          color="white"
        />
      </a>
      <a class="q-pr-sm" href="https://facebook.com/synalytica" target="_blank">
        <q-icon
          class="text-weight-bolder text-grey-5"
          flat
          round
          size="sm"
          name="mdi-facebook"
          color="white"
        />
      </a>
      <a
        class="q-pr-sm"
        href="https://instagram.com/synalytica"
        target="_blank"
      >
        <q-icon
          class="text-weight-bolder text-grey-5"
          flat
          round
          size="sm"
          name="mdi-instagram"
          color="white"
        />
      </a>
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
    rgba(0, 0, 0, 0.9) 0%,
    rgba(238, 65, 72, 0.8) 12%,
    rgba(247, 151, 36, 0.8) 24%,
    rgba(248, 198, 79, 0.8) 36%,
    rgba(144, 192, 109, 0.8) 48%,
    rgba(59, 170, 138, 0.8) 60%,
    rgba(87, 120, 145, 0.8) 72%,
    rgba(0, 0, 0, 0.9) 100%
  );
}
</style>
