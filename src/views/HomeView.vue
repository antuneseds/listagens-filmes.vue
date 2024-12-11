<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

</script>
<template>
  <div>
   <h1 class="home">Home</h1>
  </div>


  <swiper class="my-swiper" loop> 
        <swiper-slide>
          <img src="../assets/divertidamente.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/duna.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/robo.jpg" alt="" />

        </swiper-slide>
        <swiper-slide>
          <img src="../assets/substance.jpg" alt="" />
          
        </swiper-slide>
      </swiper>
  
</template>

<style>
.home {
  text-align: center;
}



.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
