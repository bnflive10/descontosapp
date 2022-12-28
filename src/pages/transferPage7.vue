<template>
  <q-page class="bg-primary" style="position: relative; margin: 0 auto">
    <!-- page content -->
    <div class="q-pa-md text-center q-gutter-sm" style="position:relative; top:100px">
    <q-img
      :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />
  </div>
    <div class="q-pa-sm">
        <div class="text-center text-white"  style="width: 80%; margin: 0 auto;position:relative; top:100px">
            <p class="text-h5">Transferencia concluida com sucesso</p>
        </div>

    </div>
    <div class="q-pa-sm text-grey-4 text-center q-gutter-sm">
      <q-btn 
        padding="10px 25%"
        style="position: relative; top: 400px"
        color="white"
        to="/"
      >
      <span class="text-grey-8 text-h6"> PRONTO</span>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "calcularPage4",
  data() {
    return {
      url: "img/success.png",
    };
  },
});
</script>

<style lang="sass">

</style>
