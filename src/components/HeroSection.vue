<template>
  <section class="hero_section" id="services">
    <div class="container">
      <div class="row pt-110 jc-end">
        <div class="col-30">
          <h1 class="title fs-40 c-white">Unlock Your Online Growth Potential</h1>
          <p class="sub-title ptb-35 fs-23 c-white">
            Online Marketing to secure customer retention, leads, and sales. We
            focus on the bigger picture.
          </p>
          <button class="button c-black bg-white fs-18">
            Our Services
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
          </button>
        </div>
        <div class="col-50 d-flex jc-c">
            <div class="card_consultant text-c b-rad-20 align-s-end pad-0-20 bg-white box-shad">
                <img
                  class="image_card b-rad-50"
                  src="/public/images/marketing-consultant-expert.jpg"
                  alt=""
                />
                <h4>Richard Madsen</h4>
                <p>Marketing Consultant Expert</p>
                <span class="phone_card c-orange">
                  <a href="#">
                    <font-awesome-icon class="phone-orange" :icon="['fas', 'phone']" />
                    (555) 802-1234
                  </a>
                </span>
                <input type="text" placeholder="Your Name*" required/>
                <input type="text" placeholder="Your Email*" required/>
                <input type="text" placeholder="Your Phone Number*" required/>
                <button class="button bg-orangered c-white" type="button">
                  <a href="#">
                    Get a Callback
                  </a>
                </button>
                <p class="c-lightgrey">By submitting my data I agree to be contacted</p>
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
