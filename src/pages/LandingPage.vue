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
              Our mission is to establish self-sustaining, autonomous ventures
              for each product by catalyzing innovation, capitalizing on our
              expertise and resources, and harnessing a robust network of
              investors, mentors, and advisors.
            </q-banner>
          </q-card-section>
        </q-card>
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
const heroText = `A "Startup Studio" developing and nurturing tech-driven products and startup ideas with a unique emphasis on AI, Big Data, and Blockchain technologies`;
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
      "An innovative AI-powered platform for brand identity development, offering comprehensive automation, personalized branding assets, and greater creative efficiency for content creators, small businesses, and startups.",
    logo: null,
    url: "https://starter-up.synalytica.com",
  },
  {
    id: 2,
    vertical: "Q4 2023",
    title: "Energylicious",
    tags: ["Energy", "Utilities", "Sustainability"],
    description:
      "A personalized AI-powered platform for energy management, enabling residential consumers to understand, analyze, predict, and optimize their energy consumption and costs.",
    logo: null,
    url: "https://energylicious.synalytica.com",
  },
  {
    id: 4,
    vertical: "Q4 2024",
    title: "FolioWiz",
    tags: ["Fintech", "Finance", "Investments"],
    description:
      "A sophisticated AI-driven stock portfolio management platform, enabling optimal and automated investment decisions.",
    logo: null,
    url: "https://foliowiz.synalytica.com",
  },
  {
    id: 3,
    vertical: "Q2 2024",
    title: "QuadCaffe",
    tags: ["Education", "Analytics", "Collegiate"],
    description:
      "A transformative big data driven platform empowering high school students with data-driven insights to aid their college research and selection process.",
    logo: null,
    url: "https://quadcaffe.synalytica.com",
  },
  {
    id: 5,
    vertical: "Q4 2024",
    title: "WarrVault",
    tags: ["Fintech", "Blockchain", "Insurance"],
    description:
      "A blockchain-based digital inventory management platform for product owners, manufacturers, and consumers to manage and maintain warranties and service contracts.",
    logo: null,
    url: "https://warrvault.synalytica.com",
  },
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
