<script setup>
import { modal } from '~/store/modal'
</script>

<template>
  <section>
    <div>
      <h2
        class="text-3xl mb-10 text-center text-blue-500"
      >
        ¡Hola a todos!
      </h2>
      <img
        src="https://akihqkakvkhumzgnzpch.supabase.co/storage/v1/object/public/images/retiro.jpg"
        alt="Pareja"
        class="w-full rounded-lg mb-5"
      >
      <p class="mb-5">
        Nos alegra comunicaros que el próximo 27 de julio de 2024 nos casamos.
      </p>
      <p class="mb-5">
        La ceremonia será en la Parroquia de San Juan Bautista en <b>Jadraque</b> a las <b>18:00h</b>. Después, lo celebraremos en la finca Monte de Cutamilla hasta que el cuerpo aguante.
      </p>
      <p class="mb-5">
        Hemos creado esta página web para que podáis encontrar todos los detalles de nuestra boda.
      </p>
      <p class="mb-5">
        Os dejamos un breve <b
          class="text-blue-500"
          @click="modal().handleFormInvoke()"
        >cuestionario</b> a continuación para que nos ayudéis con la organización del fin de semana.
      </p>
      <p class="mb-5">
        Os esperamos con muchísima ilusión.
      </p>
    </div>
  </section>
</template>
