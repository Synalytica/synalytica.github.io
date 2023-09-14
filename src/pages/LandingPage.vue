<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <q-card flat class="q-pa-md card-rounded">
          <q-card-section
            class="text-overline text-uppercase text-center text-weight-bold grad-text"
            style="font-size: large"
          >
            SYNALYTICA&trade; LLC is a venture studio developing multiple
            technology products/solutions for various industries/applications
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup></script>
<style scoped>
.card-rounded {
  border-radius: 10px;
}
.grad-text {
  background: rgb(0, 0, 0);
  background: -webkit-linear-gradient(
    45deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(238, 65, 72, 1) 12%,
    rgba(247, 151, 36, 1) 24%,
    rgba(248, 198, 79, 1) 36%,
    rgba(144, 192, 109, 1) 48%,
    rgba(59, 170, 138, 1) 60%,
    rgba(87, 120, 145, 1) 72%,
    rgba(0, 0, 0, 1) 100%
  );
  font-weight: 900;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
