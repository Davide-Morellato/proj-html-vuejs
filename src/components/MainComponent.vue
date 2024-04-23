<script>
import AbstractSection from "./AbstractSection.vue";
import AwardsSection from "./AwardsSection.vue";
import BrandsSection from "./BrandsSection.vue";
import HeroSection from "./HeroSection.vue";
import IncreaseBrandSection from "./IncreaseBrandSection.vue";
import InvestorsSection from "./InvestorsSection.vue";
import LeadingSection from "./LeadingSection.vue";
import RelationshipSection from "./RelationshipSection.vue";
import SocialMediaSection from "./SocialMediaSection.vue";
import WorkWithUsSection from "./WorkWithUsSection.vue";

export default {
  components: {
    HeroSection,
    IncreaseBrandSection,
    InvestorsSection,
    SocialMediaSection,
    BrandsSection,
    LeadingSection,
    WorkWithUsSection,
    RelationshipSection,
    AwardsSection,
    AbstractSection,
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
  <section>
    <LeadingSection />
  </section>
  <section>
    <WorkWithUsSection />
  </section>
  <section>
  <RelationshipSection/>
  </section>
  <section>
    <AwardsSection />
  </section>
  <section>
    <AbstractSection />
  </section>
</template>

<style lang="scss" scoped></style>
