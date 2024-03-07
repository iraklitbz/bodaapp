<script setup>
import { modal } from '~/store/modal'
</script>

<template>
  <section>
    <h2
      class="text-3xl mb-10 text-center text-blue-500"
    >
      💍 El fin de semana
    </h2>
    <div>
      <h2
        class="text-2xl mb-4 text-left"
      >
        Viernes 26
      </h2>
      <p class="mb-5">
        Para los que queráis el día de antes picar y tomar unas copitas para ir calentando motores, celebraremos una preboda en <b>casa de Gusi</b> a las <b>20:30h</b>.
      </p>
      <p class="mb-5">
        Necesitaremos <b
          class="text-blue-500"
          @click="modal().handleFormInvoke()"
        >confirmación</b> de los que vayáis a venir desde el viernes.
      </p>
      <img
        src="https://akihqkakvkhumzgnzpch.supabase.co/storage/v1/object/public/images/casagusi.jpg"
        alt="Pareja"
        class="w-full rounded-lg mb-5"
      >
    </div>
    <div
      class="mt-20"
    >
      <h2
        class="text-3xl mb-4 text-left"
      >
        Sábado 27: Día de la boda
      </h2>
      <p class="mb-5">
        Ceremonia religiosa en la parroquia de San Juan Bautista en <b>Jadraque</b> a las <b>18:00h</b>. Después, lo celebraremos en la finca monte <b>Cutamilla</b> (Sigüenza).
      </p>
      <p class="mb-5">
        Se dispondrá de servicio de autobuses ida y vuelta: <b>Guadalajara – Jadraque – Cutamilla.</b>
      </p>
      <img
        src="https://akihqkakvkhumzgnzpch.supabase.co/storage/v1/object/public/images/jadraque.jpeg"
        alt="Pareja"
        class="w-full rounded-lg mb-5 aspect-video"
      >
      <img
        src="https://akihqkakvkhumzgnzpch.supabase.co/storage/v1/object/public/images/finca.jpeg"
        alt="Pareja"
        class="w-full rounded-lg mb-5"
      >
    </div>
  </section>
</template>
