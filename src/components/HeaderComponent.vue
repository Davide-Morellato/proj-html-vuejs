<template>
  <div class="container">
    <div class="row">
      <div class="logo">
        <a href="#">
          <img src="/images/avada-marketing-logo.png" alt="" />
        </a>
      </div>
      <ul class="links">
        <li>
          <a href="#">
            Home
            <font-awesome-icon class="arrow" :icon="['fas', 'angle-down']" />
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
        </li>
      </ul>
      <button class="header_button" type="button">Free Quote</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../style/partials/HeaderComponent";
</style>
