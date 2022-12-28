<template>
  <q-page class="">
    <!-- page content -->

    <div class="q-pa-md text-grey-7">
      <q-toolbar style="position: relative; top: 50px; margin-bottom: 70px">
        <q-btn
          flat
          to="parabens5"
          round
          dense
          icon="eva-arrow-back"
          size="sm"
          class="q-mr-lg"
        />

        <q-toolbar-title class="q-pl-lg" style="font-size: 12pt"
          >Informacoes de pagamento</q-toolbar-title
        >
      </q-toolbar>
      <q-stepper
        v-model="step"
        ref="stepper"
        flat
        alternative-labels
        color="primary"
        animated
      >
        <q-step :name="1" title="Desconto" icon="settings" :done="step > 1">
          <p>PREÇO TOTAL</p>
          <div class="row items-center">
            <div class="col-3">
              <p>
                <span class="text-dark text-h4">2.500</span>&nbsp;&nbsp;&nbsp;
              </p>
            </div>
            <div class="col-1">
              <p><span class="text-grey-5">MZN</span></p>
            </div>
          </div>
          <p class="text-primary" style="position: relative; top: -15px">
            Antes 5.000.00 desconto de 50% aplicado
          </p>
          <div style="padding: 10px 10%">
            <hr />
          </div>
          <div style="position: relative; top: 15px">
            <p>METODO DE PAGAMENTO</p>
            <q-avatar
              class="shadow-up-1"
              style="height: 25px; width: 70px"
              rounded
            >
              <img :src="url" />
            </q-avatar>
          </div>
          <div style="position: relative; top: 25px">
            <p>NUMERO VALIDO</p>
          </div>
          <div style="position: relative; top: 25px">
            <q-input
              class="text-center"
              outlined
              v-model="text"
              label="840313283"
            />
          </div>
        </q-step>

        <q-step
          :name="2"
          title="Pagamento"
          icon="create_new_folder"
          :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of
          keywords.
        </q-step>

        <q-step :name="3" title="Confirmar" icon="add_comment"> </q-step>

        <template v-slot:navigation>
          <q-stepper-navigation
            style="position: relative; top: 25px"
            class="text-center"
          >
            <q-btn
              @click="$refs.stepper.next()"
              color="primary"
              :label="step === 3 ? 'Terminar' : 'Continuar'"
              :to="step === 3 ? 'transfer7' : ''"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="primary"
              @click="$refs.stepper.previous()"
              label="Voltar"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  name: "payPage6",
  data() {
    return {
      url: "img/M-pesa-logo.png",
    };
  },
  setup() {
    return {
      step: ref(1),
    };
  },
});
</script>

<style lang="sass">
.q-header
  height: 50px
  width: 100%
  position: fixed
  z-index: 0
.q-page
  background-color: white
  height: 100%
  position: relative
</style>
