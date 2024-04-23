<template>
  <section class="hero_section">
    <div class="container">
      <div class="hero_nav">
        <div class="card_nav">
          <h1 class="title">Unlock Your Online Growth Potential</h1>
          <p class="sub-title">
            Online Marketing to secure customer retention, leads, and sales. We
            focus on the bigger picture.
          </p>
          <button class="hero_button">
            Our Services
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </div>
        <div class="card_marketing">
            <div class="card_consultant">
                <img
                  class="image_card"
                  src="/public/images/marketing-consultant-expert.jpg"
                  alt=""
                />
                <h4>Richard Madsen</h4>
                <p>Marketing Consultant Expert</p>
                <span class="phone_card">
                  <font-awesome-icon class="phone-orange" :icon="['fas', 'phone']" />
                  (555) 802-1234
                </span>
                <input type="text" placeholder="Your Name*" />
                <input type="text" placeholder="Your Email*" />
                <input type="text" placeholder="Your Phone Number*" />
                <button class="button_card" type="button">Get a Callback</button>
                <div>By submitting my data I agree to be contacted</div>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../style/partials/HeroSection";
</style>
