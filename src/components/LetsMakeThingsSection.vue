<template>
  <div class="bg-black pbt-80" id="call_us">
    <div class="container">
      <div class="row jc-sa">
        <div class="col-40 d-flex f-dir-col align-c-end f-wrap gap-20">
          <h1 class="fs-80 c-white">
            Let's Make Things Happen
          </h1>
          <p class="sub-title c-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo doloribus, dolorem ea quibusdam vel quas vero.
          </p>
          <p class="c-white fs-10 f-italic">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Nemo eligendi et ex!
            Iure consequatur beatae nam nulla veniam laboriosam, quisquam laborum distinctio veritatis facere repellat natus, assumenda perspiciatis quas?"
          </p>
          <h5 class="c-white">
            George Anderson
          </h5>
          <p class="c-white fs-10">
            DigitalBox CEO
          </p>
        </div>
        <div class="col-40 d-flex jc-c pl-50">
          <form action="#">
            <div class="card_marketing d-flex ml-50">
              <div class="card_consultant text-c b-rad-20 align-s-end bg-white pad-0-20 box-shad">
                <img
                  class="image_card b-rad-50"
                  src="/public/images/marketing-consultant-expert.jpg"
                  alt=""
                />
                <h4>Richard Madsen</h4>
                <p>Marketing Consultant Expert</p>
                <span class="phone c-orange">
                  <font-awesome-icon
                    class="phone c-orange"
                    :icon="['fas', 'phone']"
                  />
                  (555) 802-1234
                </span>
                <input type="text" placeholder="Your Name*" />
                <input type="text" placeholder="Your Email*" />
                <input type="text" placeholder="Your Phone Number*" />
                <button class="button fs-15 c-white bg-orangered" type="button">Get a Callback</button>
                <p class="c-lightgrey">
                  By submitting my data I agree to be contacted
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/LetsMakeThingsSection";
</style>
