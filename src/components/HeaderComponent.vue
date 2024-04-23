
<script>
export default {
  props:{
    headerLink:{
      type: Array
    }
  }
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="logo">
        <a href="#">
          <img src="/images/avada-marketing-logo.png" alt="" />
        </a>
      </div>
      <ul class="links">
        <li v-for="singleLink in headerLink">
          <a :href="singleLink.src">
            <!-- INSERIRE L'ICONA FONTAWESOME PER PHONE -->
            <font-awesome-icon class="phone-orange" :icon="['fas', 'phone']" v-if="singleLink.name === '(555) 802-1234'"/>
            {{ singleLink.name }}
            <!-- <span class="arrow" v-html="singleLink.icon">
            </span> -->
            <!-- INSERIRE L'ICONA FONTAWESOME PER HOME & SERVICES -->
            <font-awesome-icon class="arrow" :icon="['fas', 'angle-down']" v-if="singleLink.name === 'Home' || singleLink.name === 'Services' "/>
          </a>
          
        </li>
        <!-- <li>
          <a href="#">
            Home
            
          </a>
        </li>
        <li>
          <a href="#">
            Services
            <font-awesome-icon class="arrow" :icon="['fas', 'angle-down']" />
          </a>
        </li>
        <li>
          <a href="#"> Why Us </a>
        </li>
        <li>
          <a href="#"> Case Studies </a>
        </li>
        <li>
          <a href="#"> About </a>
        </li>
        <li>
          <a href="#"> Blog </a>
        </li>
        <li>
          <a href="#">
            <font-awesome-icon class="phone-orange" :icon="['fas', 'phone']" />
            (555) 802-1234
          </a>
        </li> -->
      </ul>
      <button class="header_button" type="button">Free Quote</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "../style/partials/HeaderComponent";
</style>
