<template>
  <q-page padding>
    <div class="row">
      <div class="col">
        <q-card flat class="q-pa-md card-rounded text-center">
          <q-card-section>
            <h4
              class="text-h4 text-overline text-uppercase text-center text-weight-bold grad-text"
              id="hero-text"
            ></h4>
            <q-banner dense rounded class="text-subtitle">
              Our mission is to establish self-sustaining ventures through
              shared resources and expertise, both through our internal team, as
              well as from a network of seasoned investors and expert advisors
            </q-banner>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="row">
      <div class="col q-my-xl">
        <q-separator inset />
      </div>
    </div>
    <div class="row items-center justify-around">
      <div
        v-for="offering in offerings.sort((a, b) => a.id - b.id)"
        class="col-md-4 col-xs-12 q-px-xs q-py-md flex-center text-center"
        :key="offering.id"
      >
        <Offering :content="offering" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";
import Offering from "src/components/Offering.vue";
const heroText = `A "Startup Studio" catalyzing ideas  using ai and big data to solve real-world shortcomings`;
const waitForMs = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const typeSentence = async (sentence, eleRef, delay = 30) => {
  const heroEle = document.getElementById("hero-text");
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    heroEle.append(letters[i]);
    i++;
  }
  return;
};
onMounted(async () => await typeSentence(heroText));
const offerings = [
  {
    id: 1,
    vertical: "Q4 2023",
    title: "Starter Up",
    tags: ["Branding", "Marketing", "Business"],
    description:
      "Build brand identities with a blend of intelligence, automation, and creativity - for content creators, consultants and businesses seeking creative efficiency",
    logo: 'logos/starter-up.png',
    url: "https://starter-up.synalytica.com",
  },
  {
    id: 2,
    vertical: "Q4 2023",
    title: "Energylicious",
    tags: ["Energy", "Utilities", "Sustainability"],
    description:
      "Analyze and optimize energy costs and consumption - for residential energy consumers seeking efficiency and savings",
    logo: 'logos/energylicious.png',
    url: "https://energylicious.synalytica.com",
  },
  // {
  //   id: 4,
  //   vertical: "Q4 2024",
  //   title: "FolioWiz",
  //   tags: ["Fintech", "Finance", "Investments"],
  //   description:
  //     "A sophisticated AI-driven stock portfolio management platform, enabling optimal and automated investment decisions.",
  //   logo: null,
  //   url: "https://foliowiz.synalytica.com",
  // },
  {
    id: 3,
    vertical: "Q2 2024",
    title: "QuadCaffe",
    tags: ["Education", "Analytics", "Collegiate"],
    description:
      "Simplify college research and selection using big data - for high school students",
    logo: null,
    url: "https://quadcaffe.synalytica.com",
  },
  // {
  //   id: 5,
  //   vertical: "Q4 2024",
  //   title: "WarrVault",
  //   tags: ["Fintech", "Blockchain", "Insurance"],
  //   description:
  //     "A blockchain-based digital inventory management platform for product owners, manufacturers, and consumers to manage and maintain warranties and service contracts.",
  //   logo: null,
  //   url: "https://warrvault.synalytica.com",
  // },
];
</script>
<style scoped>
.card-rounded {
  border-radius: 10px;
}
h4.text-overline {
  font-size: 1.7rem !important;
}
.grad-text {
  background: rgb(0, 0, 0);
  background: -webkit-linear-gradient(
    215deg,
    rgba(238, 65, 72, 1) 12%,
    rgba(247, 151, 36, 1) 24%,
    rgba(248, 198, 79, 1) 36%,
    rgba(144, 192, 109, 1) 48%,
    rgba(59, 170, 138, 1) 60%,
    rgba(87, 120, 145, 1) 72%
  );
  font-weight: 900;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
