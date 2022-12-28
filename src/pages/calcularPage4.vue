<template>
  <q-page class="">
    <!-- page content -->

    <div class="q-pa-sm text-center q-gutter-sm">
    
    <q-btn    
      padding="xs 25%"
      style="position: fixed; top: 400px; left: 50px; right: 50px"
      color="primary"
      label="Calcular"
      to="parabens5"
    />
  </div>
  </q-page>

  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "calcularPage4",
});
</script>

<style lang="sass">
.q-page
    background-color: white
    position: fixed
    top: 0
    left: 0
    right: 0
    botton: 0
    border-radius: 0
    
</style>
