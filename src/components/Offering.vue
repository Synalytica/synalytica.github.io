<template>
  <q-card flat bordered :class="$q.dark.mode ? '' : 'bg-grey-1'">
    <q-card-section horizontal>
      <q-card-section class="q-pt-md">
        <div class="text-overline text-uppercase">
          <a :href="props.content.url" target="_blank">
            <q-icon
              name="mdi-open-in-new"
              class="text-primary"
              left
              size="lg"
            />
          </a>
          Synalytica {{ props.content.vertical }}
        </div>
        <div class="text-h4 q-mt-sm q-mb-lg">
          {{ props.content.title }}&trade;
        </div>
        <div class="text-subtitle text-grey">
          {{ props.content.description }}
        </div>
        <p class="q-pt-md">
          <q-chip
            v-for="tag in props.content.tags"
            :key="tag"
            class="text-uppercase text-overline grad-text"
            outline
          >
            {{ tag }}
          </q-chip>
        </p>
      </q-card-section>
      <!-- <q-card-section class="col flex flex-center">
        <q-img class="rounded-borders" :src="props.content.logo" />
      </q-card-section> -->
    </q-card-section>
  </q-card>
</template>
<script setup>
import { defineProps } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped>
.q-card {
  height: 270px;
  width: 90%;
  border-radius: 2rem;
  position: relative;
  transition: box-shadow 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}

.q-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px 10px rgba(39, 53, 124, 0.4);
}

.q-card:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  opacity: 0;
  border-radius: 1.5rem;
  transition: opacity 0.3s ease-in-out;
  z-index: -1;
}

.q-card:hover:before {
  opacity: 1;
}

.q-card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, #27357c 0%, #cc2323 100%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
}

.q-card:hover .q-card-overlay {
  opacity: 1;
}

.grad-text {
  background-blend-mode: overlay !important;
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
  ) !important;
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
  ) !important;
  background-clip: text !important;
  opacity: 1 !important;
  font-weight: 900 !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}
</style>
