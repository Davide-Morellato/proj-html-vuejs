<template>
  <div class="container">
    <div class="row">
      <div class="flex-c">
        <h2 class="text-5">Some Brands We Work With</h2>
        <h6 class="text-2">
          Quisque aliquet, libero consequat elementum convallis.
        </h6>
      </div>
      <ul class="logo_brands">
        <li>
          <a href="#">
            <img class="brands" src="/public/images/abstract.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="brands" src="/public/images/cglobal.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="brands" src="/public/images/next.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="brands" src="/public/images/hemisferio.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="brands" src="/public/images/digitalbox.png" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="brands" src="/public/images/spaces.png" alt="" />
          </a>
        </li>
      </ul>
      <div class="box">
        <div>
          <img
            class="expert"
            src="/public/images/marketing-expert-cta.png"
            alt=""
          />
        </div>
        <div class="expert_title">
            <h6 class="text-md">
                Sandy Reiff
            </h6>
            <p class="text-sm">
                Marketing Consultant Expert
            </p>
        </div>
        <div class="grow">
            <p class="text-lg">
                Drive Leads and Sales with Avada
            </p>
        </div>
        <div>
            <button class="button_brands">
                <a href="#">
                    <font-awesome-icon class="phone-orange" :icon="['fas', 'phone']" />
                    (555) 802-1234
                </a>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/BrandsSection";
</style>
