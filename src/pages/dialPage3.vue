<template>
  <q-header class="bg-primary text-white"> </q-header>

  <q-page class="">
    <!-- page content -->

    <div class="q-pa-sm text-center q-gutter-sm">
    
    <q-btn    
      padding="xs 25%"
      style="position: relative; top: 400px"
      color="primary"
      label="Confirmar"
      to="calcular4"
    />
  </div>
  </q-page>

  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dial2Page3",
});
</script>

<style lang="sass">
.q-header
    height: 250px
    width: 100%
    position: fixed
    z-index: 0
.q-page
    background-color: white
    width: 90%
    position: fixed
    top: 150px
    left: 20px
    border-radius: 50px
    margin: auto
    z-index: 1

</style>
