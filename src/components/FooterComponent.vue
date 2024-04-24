<script>
import { store } from "../store.js";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="pt-50">
    <div class="container pt-10">
      <div class="row jc-sa">
        <div class="col-40 white">
          <ul>
            <li>
              <h5 class="c-black fs-40 pb-20">
                Grow Your online Business Strategically, and Improve Customer
                Retention.
              </h5>
            </li>
            <ul class="d-flex gap-30 pt-15 c-black">
              <li v-for="(linkBrand, i) in store.footerBrands" :key="i">
                <a :href="linkBrand.src">
                  <font-awesome-icon :icon="[`${linkBrand.iconBrandTheme}`,`${linkBrand.iconBrandName}`]" />
                </a>
              </li>
              <!-- <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'x-twitter']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'youtube']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'tiktok']" />
                </a>
              </li> -->
            </ul>
          </ul>
        </div>
        <div class="col-15 pb-20">
          <h3 class="pb-20">Services</h3>
          <ul
            class="line-height"
            v-for="(linkServices, i) in store.footerServices"
            :key="i"
          >
            <li class="pb-5">
              <a :href="linkServices.src">
                {{ linkServices.name }}
              </a>
            </li>
            <!-- <li>
              <a href="#">Perchè Discord</a>
            </li>
            <li>
              <a href="#">Nitro</a>
            </li>
            <li>
              <a href="#">Sicurezza</a>
            </li>
            <li>
              <a href="#">Assistenza</a>
            </li>
            <li>
              <a href="#">Assistenza</a>
            </li> -->
          </ul>
        </div>
        <div class="col-15 pb-20">
          <h3 class="pb-20">Resources</h3>
          <ul
            class="line-height"
            v-for="(linkResources, i) in store.footerResources"
            :key="i"
          >
            <li class="pb-5">
              <a :href="linkResources.src">
                {{ linkResources.name }}
              </a>
            </li>
            <!-- <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Marchio</a></li>
            <li><a href="#">Redazione</a></li> -->
          </ul>
        </div>
        <div class="col-15 pb-20">
          <h3 class="pb-20">Company</h3>
          <ul
            class="line-height"
            v-for="(linkCompany, i) in store.footerCompany"
            :key="i"
          >
            <li class="pb-5">
              <a :href="linkCompany.src">
                {{ linkCompany.name }}
              </a>
            </li>
            <!-- <li><a href="#">Perchè Discord</a></li>
            <li><a href="#">Nitro</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="pos-rel mt-50">
    <div class="container mb-50">
      <ul class="row jc-se">
        <li class="pr-50">
          &#169; 2020 &#8226; Avada Consultant &#8226; Powered by WordPress
        </li>
        <li v-for="(linkCredit, i) in store.footerCredits" :key="i">
          <a :href="linkCredit.src"> {{linkCredit.contact}}</a>
        </li>
        <!-- <li class="text-e">
          <a href="#">info@yourcompany.com</a>
        </li> -->
      </ul>
    </div>
    <div class="contact pos-abs align-c align-c-end d-flex f-wrap f-dir-col pad-20 text-e ">
      <img
        class="expert b-rad-50"
        src="/public/images/marketing-expert-cta.png"
        alt=""
      />
      <p class="mex pad-15 b-rad-10 text-c box-shad c-grey">
        This is a Free HubSpot live chat. You can create your own chat flows and
        engage your customers with Avada & HubSpot!
      </p>
      <img class="bubble bg-orangered b-rad-50 align-s-end" src="/public/images/speech-bubbles.webp" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/FooterComponent";
</style>
