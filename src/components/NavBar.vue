<template>
  <q-header class="bg-nav">
    <q-toolbar>
      <q-toolbar-title class="text-overline text-uppercase">
        <q-img
          src="logo-light.png"
          width="50px"
          class="q-mr-none q-pr-none oval"
        />
        <span class="text-wrap font-weight-bold">ynalytica</span>
      </q-toolbar-title>
      <q-btn class="mobile-hide text-weight-bolder" flat to="/">
        <q-icon name="tactic" class="q-pr-xs" />
        Offerings
      </q-btn>
      <q-separator class="mobile-hide" color="white" vertical inset />
      <q-btn class="mobile-hide text-weight-bolder" flat to="/team">
        <q-icon name="request_quote" class="q-pr-xs" />
        <span class="mobile-hide">Team</span>
      </q-btn>
      <q-btn class="mobile-hide text-weight-bolder" flat to="/board">
        <q-icon name="contact_page" class="q-pr-xs" />
        <span class="mobile-hide">Board</span>
      </q-btn>
      <q-separator class="mobile-hide" color="white" vertical inset />
      <q-btn class="mobile-hide text-weight-bolder" flat to="/contact">
        <q-icon name="contact_page" class="q-pr-xs" />
        <span class="mobile-hide">Contact</span>
      </q-btn>
      <q-toggle
        :model-value="$q.dark.mode"
        @update:model-value="() => null"
        @click="$q.dark.toggle()"
        checked-icon="dark_mode"
        unchecked-icon="light_mode"
        :color="$q.dark.mode ? 'black' : 'white'"
      />
    </q-toolbar>
  </q-header>
  <Footer />
</template>
<script setup>
import Footer from "src/components/Footer.vue";
</script>
<style scoped>
.text-wrap {
  float: left;
  padding-left: 0;
  padding-top: 12px;
  margin-left: -12px;
  z-index: 10;
}
.oval {
  width: 30px;
  height: 50px;
  color: #111;
  text-align: center;
  font-size: 80px;
  float: left;
  shape-outside: square();
  padding: 10px;
  background-color: transparent;
  background-clip: content-box;
}
.bg-nav {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    225deg,
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
