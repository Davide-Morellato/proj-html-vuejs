<script>
import BrandsSection from "./BrandsSection.vue";
import HeroSection from "./HeroSection.vue";
import IncreaseBrandSection from "./IncreaseBrandSection.vue";
import InvestorsSection from "./InvestorsSection.vue";
import SocialMediaSection from "./SocialMediaSection.vue";

export default {
  components: {
    HeroSection,
    IncreaseBrandSection,
    InvestorsSection,
    SocialMediaSection,
    BrandsSection,
  },
};
</script>

<template>
  <section>
    <HeroSection />
  </section>
  <section>
    <IncreaseBrandSection />
  </section>
  <section>
    <InvestorsSection />
  </section>
  <section>
    <SocialMediaSection />
  </section>
  <section>
    <BrandsSection />
  </section>
</template>

<style lang="scss" scoped></style>
