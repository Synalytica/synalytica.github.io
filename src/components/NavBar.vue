<template>
  <q-header class="bg-nav">
    <q-toolbar>
      <q-btn
        class="desktop-hide"
        flat
        round
        dense
        icon="mdi-menu"
        @click="() => (drawer = !drawer)"
      />
      <q-toolbar-title class="text-overline text-uppercase">
        <q-img
          src="logo-light.png"
          width="50px"
          class="q-mr-none q-pr-none oval"
        />
        <span class="text-wrap font-weight-bold">ynalytica</span>
      </q-toolbar-title>
      <q-btn class="mobile-hide text-weight-bolder" flat to="/">
        <q-icon left name="mdi-graph" />
        Offerings
      </q-btn>
      <q-separator class="mobile-hide" color="white" vertical inset />
      <q-btn class="mobile-hide text-weight-bolder" flat to="/team">
        <q-icon left name="mdi-crowd" />
        <span class="mobile-hide">Team</span>
      </q-btn>
      <q-btn class="mobile-hide text-weight-bolder" flat to="/board">
        <q-icon left name="mdi-account-group" />
        <span class="mobile-hide">Board</span>
      </q-btn>
      <q-separator class="mobile-hide" color="white" vertical inset />
      <q-btn class="mobile-hide text-weight-bolder" flat to="/contact">
        <q-icon left name="mdi-human-greeting-proximity" />
        <span class="mobile-hide">Contact</span>
      </q-btn>
      <q-toggle
        :model-value="$q.dark.mode"
        @update:model-value="() => null"
        @click="$q.dark.toggle()"
        checked-icon="mdi-brightness-4"
        unchecked-icon="mdi-brightness-6"
        :color="$q.dark.mode ? 'black' : 'white'"
      />
    </q-toolbar>
  </q-header>
  <Footer />
  <q-drawer
    v-model="drawer"
    :width="200"
    :breakpoint="500"
    class="desktop-hide"
  >
    <q-list padding>
      <q-item clickable v-ripple to="/">
        <q-item-section avatar>
          <q-icon name="mdi-graph" />
        </q-item-section>
        <q-item-section> Offerings </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/team">
        <q-item-section avatar>
          <q-icon name="mdi-crowd" />
        </q-item-section>
        <q-item-section> Team </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/board">
        <q-item-section avatar>
          <q-icon name="mdi-account-group" />
        </q-item-section>
        <q-item-section> Board </q-item-section>
      </q-item>
      <q-item clickable v-ripple to="/contact">
        <q-item-section avatar>
          <q-icon name="mdi-human-greeting-proximity" />
        </q-item-section>
        <q-item-section> Contact </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script setup>
import { ref } from "vue";
import Footer from "src/components/Footer.vue";
const drawer = ref(false);
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
