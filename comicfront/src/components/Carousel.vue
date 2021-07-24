<template>
<div>
  <b-carousel d="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd" >
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://www.vuescript.com/wp-content/uploads/2018/12/Customizable-Carousel-Slider-For-Vue.js-hooper.png" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
  <b-carousel-slide>
    <template v-slot:img>
      <b-card-group>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
        <b-card img-src="https://res.cloudinary.com/vuejsprojects/image/upload/c_scale,f_auto,q_auto,w_auto/v1/post/vue-carousel-3d.jpg" overlay></b-card>
      </b-card-group>
    </template>
  </b-carousel-slide>
</b-carousel>
<p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
</div>
</template>

<script>
export default {
 methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
}
</script>

<style>

</style>