<template>
  <section class="banner-section banner-one">
    <div class="banner-carousel">
      <!-- Slide Item -->
      <no-ssr>
        <Swiper
          style="height: 790px"
          @active-index-change="slideActiveChanged"
          :modules="[SwiperAutoplay, SwiperEffectCreative]"
          :slides-per-view="1"
          :loop="true"
          :effect="'creative'"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :creative-effect="{
            prev: {
              shadow: false,
              translate: ['-20%', 0, -1],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }"
        >
          <SwiperSlide
            v-for="slide in 10"
            :key="slide"
            :class="{ active: currentSlide === slide }"
          >
            <div class="slide-item">
              <div
                class="image-layer"
                style="
                  background-image: url(/assets/images/main-slider/slide_v1_1.jpg);
                "
              ></div>
              <div class="auto-container">
                <div class="content-box">
                  <div class="content">
                    <div class="inner">
                      <div class="sub-title">The best Agriculture products</div>
                      <h1>
                        Welcome to<br />
                        agriculture Form
                      </h1>
                      <div class="link-box">
                        <nuxt-link to="/about" class="thm-btn"
                          >Discover More</nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </no-ssr>
    </div>
  </section>
</template>

<script setup>
const currentSlide = ref(0);
function slideActiveChanged(evt) {
  currentSlide.value = evt.activeIndex + 1;
  console.log(currentSlide.value);
}
</script>

<style scoped></style>
