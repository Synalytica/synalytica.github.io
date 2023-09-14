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
    <div class="row items-center justify-around">
      <div
        v-for="offering in offerings"
        class="col-md-4 col-xs-12 q-px-xs q-py-md text-center"
        :key="offering.id"
      >
        <Offering :content="offering" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import Offering from "src/components/Offering.vue";
const offerings = [
  {
    id: 1,
    vertical: "one",
    title: "Starter Up",
    tags: ["AI", "Content Generation", "Branding", "Marketing"],
    description:
      "Starter Up is a SaaS platform that enables companies to generate their brand identity using AI.",
    logo: "https://www.synalytica.com/wp-content/uploads/2021/08/starterup-logo.png",
    url: "https://starter-up.synalytica.com",
  },
  {
    id: 2,
    vertical: "one",
    title: "Energylicious",
    tags: ["Energy", "Dashboard", "Analytics"],
    description:
      "Energylicious is a SaaS platform that enables energy companies to manage their entire business from a single platform.",
    logo: "https://www.synalytica.com/wp-content/uploads/2021/08/energylicious-logo.png",
    url: "https://energylicious.synalytica.com",
  },
  {
    id: 3,
    vertical: "xyz",
    title: "FolioWiz",
    tags: ["Finance", "Investments", "Portfolio Management"],
    description:
      "FolioWiz is a SaaS platform that enables investors to manage their entire portfolio from a single platform.",
    logo: "https://www.synalytica.com/wp-content/uploads/2021/08/foliowiz-logo.png",
    url: "https://foliowiz.synalytica.com",
  },
  {
    id: 4,
    vertical: "one",
    title: "QuadCaffe",
    tags: ["Education", "Data", "Analytics"],
    description:
      "QuadCaffe is a SaaS platform that enables colleges to manage their entire business from a single platform.",
    logo: "https://www.synalytica.com/wp-content/uploads/2021/08/quadcaffe-logo.png",
    url: "https://quadcaffe.synalytica.com",
  },
  {
    id: 5,
    vertical: "xyz",
    title: "WarrVault",
    tags: ["Consumer Services", "Blockchain", "Warranty"],
    description:
      "WarrVault is a SaaS platform that enables companies to manage their entire business from a single platform.",
    logo: "https://www.synalytica.com/wp-content/uploads/2021/08/warrvault-logo.png",
    url: "https://warrvault.synalytica.com",
  },
];
</script>
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
