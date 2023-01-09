<template>
  <q-header class="bg-primary text-white">
    <div class="q-pa-md">
      <div class="column text-center" style="height: 150px">
        <div class="col">
          <p class="" style="font-size: 16pt; padding-top: 50px">
            Quantos cursos ja frequentou?
          </p>
        </div>
        <div class="col text-justify" style="display: block; padding: 0 80px">
          <q-input dark color="orange" v-model="text"> </q-input>
        </div>
      </div>
    </div>
  </q-header>
  <q-page-container>
    <q-page class="shadow-4">
      <div class="col-12 q-m-xs text-center q-gutter-lg" style="padding: 100px 0 20px 0">
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">1</span></q-btn
        >
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">2</span></q-btn
        >
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">3</span></q-btn
        >
      </div>
      <div class="col-12 text-center q-gutter-lg" style="padding: 0px 0 20px 0">
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">4</span></q-btn
        >
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">5</span></q-btn
        >
        <q-btn round size="20px" color="white"
          ><span class="text-grey" style="font-size: 16pt">6</span></q-btn
        >
      </div>
      <div class="col-12 text-center q-gutter-lg" style="padding: 0px 0 20px 0">
        <q-btn round size="20px" color="primary"
          ><span class="text-grey" style="font-size: 16pt">7</span></q-btn
        >
        <q-btn round size="20px" color="primary"
          ><span class="text-grey" style="font-size: 16pt">8</span></q-btn
        >
        <q-btn round size="20px" color="primary"
          ><span class="text-grey" style="font-size: 16pt">9</span></q-btn
        >
      </div>
      <div class="col-12 text-center q-gutter-lg">
        <q-btn
          round
          size="20px"
          flat
          disable
          style="box-shadow: 0"
          color="white"
          ><span style="font-size: 16pt">7</span></q-btn
        >
        <q-btn round size="20px" color="primary"
          ><span class="text-grey" style="font-size: 16pt">8</span></q-btn
        >
        <q-btn round size="20px" color="primary"
          ><span class="text-grey" style="font-size: 16pt">9</span></q-btn
        >
      </div>
      <q-page-sticky position="bottom-right" :offset="[35, 10]">
        <q-btn
          round
          color="primary"
          icon="arrow_upward"
          class="rotate-90"
          to="dial2"
        />
      </q-page-sticky>
    </q-page>
  </q-page-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style lang="sass">
.q-header
  height: 250px
  z-index: 0
.q-page
  position: relative
  top: -50px
  z-index: 1
  margin: 0 auto
  width: 92%
  background-color: white
  border-radius: 50px
</style>