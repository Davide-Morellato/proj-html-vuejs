
<script>
import {store} from '../store.js'

export default {
  data(){
    return{
      store,
    }
  }
}
</script>

<template>
  <section>
    <div class="container low-pad">
      <form action="index.html" class="row">
        <nav class="col-40 white">
          <ul>
            <li>
              <h5>
                Grow Your online Business Strategically, and Improve Customer
                Retention.
              </h5>
            </li>
            <ul class="flex">
              <li>
                <a href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </a>
              </li>
              <li>
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
              </li>
            </ul>
          </ul>
        </nav>
        <nav class="col-15">
          <h4>Services</h4>
          <ul class="line-height" v-for="(linkServices, i) in store.footerServices" :key="i">
            <li>
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
        </nav>
        <nav class="col-15">
          <h4>Resources</h4>
          <ul class="line-height" v-for="(linkResources, i) in store.footerResources" :key="i">
            <li>
              <a :href="linkResources.src">
                {{ linkResources.name }}
              </a>
            </li>
            <!-- <li><a href="#">Lavora con noi</a></li>
            <li><a href="#">Marchio</a></li>
            <li><a href="#">Redazione</a></li> -->
          </ul>
        </nav>
        <nav class="col-15">
          <h4>Company</h4>
          <ul class="line-height"  v-for="(linkCompany, i) in store.footerCompany" :key="i">
            <li>
              <a :href="linkCompany.src">
               {{ linkCompany.name }}
              </a>
            </li>
            <!-- <li><a href="#">Perchè Discord</a></li>
            <li><a href="#">Nitro</a></li> -->
          </ul>
        </nav>
      </form>
    </div>
  </section>

  <div class="pos-rel">
    <div class="container mb-50">
      <ul class="row">
        <li class="r-pad">
          &#169; 2020 &#8226; Avada Consultant &#8226; Powered by WordPress
        </li>
        <li>
          <a href="#">
            Call Us (555) 802-1234
          </a>
        </li>
        <li  class="login">
          <a href="#">info@yourcompany.com</a>
        </li>
      </ul>
    </div>
    <div class="contact text-end">
      <img class="expert" src="/public/images/marketing-expert-cta.png" alt="">
        <p class="mex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <img class="bubble" src="/public/images/speech-bubbles.webp" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/FooterComponent";
</style>
