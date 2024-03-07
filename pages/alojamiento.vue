<script setup>
import { modal } from '~/store/modal'
</script>

<template>
  <section>
    <div>
      <h2
        class="text-3xl mb-10 text-center text-blue-500"
      >
        🏠 Alojamiento
      </h2>
      <p class="mb-5">
        Para vuestra comodidad, hemos decidido que la gente que quiera venir a Jadraque desde el viernes, buscarles distintas opciones de alojamiento. Por lo que agradeceríamos, que nos <b
          class="text-blue-500"
          @click="modal().handleFormInvoke()"
        >informarais cuanto antes</b> de vuestro plan.
      </p>
      <p class="mb-5">
        Si quisierais venir solo el sábado y dormir en Jadraque o alrededores, por favor, también <b
          class="text-blue-500"
          @click="modal().handleFormInvoke()"
        >comunicádnoslo</b>.
      </p>
    </div>
  </section>
</template>
