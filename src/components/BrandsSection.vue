<template>
  <div class="container mt-150 mb-200">
    <div class="row jc-c align-c f-dir-col gap-30">
      <div class="d-flex align-c f-dir-col f-dir-col">
        <h2 class="fs-50 pb-10">Some Brands We Work With</h2>
        <h6 class="fs-20">
          Quisque aliquet, libero consequat elementum convallis.
        </h6>
      </div>
      <ul class="logo_brands d-flex gap-20">
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
      <div class="box d-flex box-shad align-c b-rad-10 pad-30">
        <div>
          <img
            class="expert b-rad-50"
            src="/public/images/marketing-expert-cta.png"
            alt=""
          />
        </div>
        <div class="expert_title pad-0-5">
            <h6 class="fs-20">
                Sandy Reiff
            </h6>
            <p class="fs-15">
                Marketing Consultant Expert
            </p>
        </div>
        <div class="f-grow text-c">
            <p class="fw-bold fs-30">
                Drive Leads and Sales with Avada
            </p>
        </div>
        <div>
            <button class="button bg-lightorange c-orange b-rad-10 fs-18">
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
