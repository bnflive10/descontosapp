<template>
  <q-header class="bg-white text-white">
<q-img
    :src="url"
    fit="none"
    class="header-image absolute-top"
    style="height: 230px" />  </q-header>

  <q-page>
    <!-- page content -->

    <div class="text-center q-gutter-sm">
      <h6 style="position: relative; top: -25px">PARABENS BNFLIVE10!</h6>
      <q-img
        :src="img30"
        class="header-image"
        style="width: 250px; position: relative; top: -45px"
      />

      <p
        class="text-grey"
        style="padding: 0 50px; position: relative; top: -20px"
      >
        salve ate 30% no pagamento do proximo curso
      </p>
    <div style="position: relative; top: 70px">
    <p style="padding: 0 80px; position: relative; top: 10px">O codigo expira dentro de <strong>01:59:38</strong></p>
    <q-btn    
      padding="xs 25%"
      dense
      style="position: relative; top: 0px"
      color="primary"
      label="Reclamar agora"
      to="pay6"
    />
<q-btn    
      
      dense
      flat
      style="position: relative; top: 5px; margin: 0 20%"
      color="grey"
      label="PULAR"
      to="pay6"
    />
    </div>
    
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "dial2Page2",
  data() {
    return {
      url: "img/confete.png",
      img30: "img/desconto.png",
    };
  },
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
    height: 100%
    position: relative
    z-index: 1
</style>
