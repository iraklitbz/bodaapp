<script setup>
import { modal } from '~/store/modal'
</script>

<template>
  <div>
    <HeaderComponent
      class="fixed top-0 left-0 z-30 w-full bg-blue-50"
    />
    <main class="max-w-2xl mx-auto px-6 md:px-0 pt-48 pb-8">
      <slot />
      <button
        v-if="!modal().isFormVisible"
        class="fixed bottom-4 right-4 z-40 p-4 rounded-full shadow-md bg-blue-600 hover:bg-blue-700"
        @click="modal().handleFormInvoke()"
      >
        <nuxt-icon
          name="pencil"
          class="text-white text-xl"
        />
      </button>
      <transition name="slide-up">
        <div
          v-if="modal().isFormVisible"
          class="fixed top-[85px] left-0 w-full bg-white h-full z-40 pb-20 overflow-y-auto"
        >
          <div class="max-w-2xl mx-auto px-6 md:px-0 pt-8 pb-8 relative">
            <FormComponent />
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active
{
  transition: all 0.2s;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translate(0, 50px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translate(0, -50px);
}
</style>
