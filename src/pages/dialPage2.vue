<template>
  <q-header class="bg-primary text-white">

</q-header>
  
  <q-page class="">
    <!-- page content -->


    <q-page-sticky position="bottom-right" :offset="[25, 10]">
            <q-btn round color="primary" icon="arrow_upward" class="rotate-90" to="dial3"/>
          </q-page-sticky>
  </q-page>

  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dial2Page2",
});
</script>

<style lang="sass">
.q-header
    height: 250px
    width: 100%
    z-index: 0
    top: 0
.q-page
    background-color: white
    width: 90%
    position: fixed
    margin: 0 auto
    border-radius: 50px
    margin: auto
    z-index: 1
</style>
