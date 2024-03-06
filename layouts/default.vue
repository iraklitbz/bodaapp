<script setup>
const isFormVisible = ref(false)
function handleFormInvoke() {
  isFormVisible.value = !isFormVisible.value
  document.body.classList.add('overflow-hidden')
}
function handleRemoveInvoke() {
  isFormVisible.value = false
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <div>
    <HeaderComponent
      class="fixed top-0 left-0 z-30 w-full bg-gray-100"
      :active-modal="isFormVisible"
      @handle-modal="handleRemoveInvoke"
    />
    <main class="max-w-2xl mx-auto px-6 md:px-0 pt-40 pb-8">
      <slot />
      <button
        v-if="!isFormVisible"
        class="fixed bottom-4 right-4 z-40 p-4 rounded-full shadow-md bg-blue-700"
        @click="handleFormInvoke()"
      >
        <nuxt-icon
          name="pencil"
          class="text-white text-xl"
        />
      </button>
      <transition name="slide-up">
        <div
          v-if="isFormVisible"
          class="fixed top-[85px] left-0 w-full bg-white h-full z-40 pb-20 overflow-y-auto"
        >
          <div class="max-w-2xl mx-auto px-6 md:px-0 pt-8 pb-8 relative">
            <FormComponent
              @close-form="handleFormInvoke"
            />
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
