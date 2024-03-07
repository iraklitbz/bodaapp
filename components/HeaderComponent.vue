<script setup>
import { modal } from '~/store/modal'

const navMenu = ref([
  { name: 'Inicio', label: '🎉 Inicio', url: '/' },
  { name: 'findesemana', label: '💍 El fin de semana', url: '/boda' },
  { name: 'alojamiento', label: '🏠 Alojamiento', url: '/alojamiento' },
  { name: 'autobuses', label: ' 🚌 Autobuses', url: '/autobuses' },
])
function scrollToNavItem(index) {
  const nav = document.querySelector('.nav-menu')
  const navItem = nav.querySelector(`.navitem-${index}`)
  const offsetLeft = navItem.offsetLeft
  nav.scrollTo({ left: offsetLeft, behavior: 'smooth' })
}
</script>

<template>
  <header>
    <div class="relative">
      <h1>
        <nuxt-link
          to="/"
          class="text-3xl text-center block py-4 special-font"
          @click="scrollToNavItem(0)"
        >
          Elena & Jesús
          <span class="italic text-center text-lg block">
            27-07-2024
          </span>
        </nuxt-link>
      </h1>
      <button
        v-if="modal().isFormVisible"
        class="absolute top-1/2 right-10 -translate-y-1/2"
        @click="modal().handleRemoveInvoke()"
      >
        <nuxt-icon
          name="x"
          class="text-red-500 text-3xl hover:text-red-600 transition-all ease-in-out duration-3"
        />
      </button>
    </div>
    <div
      class="relative"
    >
      <nav
        class="bg-white shadow-md overflow-x-auto relative nav-menu"
      >
        <ul
          class="flex items-center md:justify-center w-full gap-7"
        >
          <li
            v-for="(item, index) in navMenu"
            :key="item.name"
          >
            <nuxt-link
              :to="item.url"
              class="whitespace-nowrap py-3 inline-block hover:text-blue-700 transition-colors duration-300 ease-in-out"
              :class="[
                index === 0 ? 'pl-8' : '',
                index === navMenu.length - 1 ? 'pr-16' : '',
                `navitem-${index}`,
              ]"
              @click="scrollToNavItem(index)"
            >
              {{ item.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <span class="absolute bottom-0 right-0 w-16 h-full bg-gradient-to-l from-gray-200" />
    </div>
  </header>
</template>

<style scoped>
  nav .router-link-exact-active {
    @apply text-blue-600
  }
</style>
