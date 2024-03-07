<script setup lang="ts">
interface ListBoda {
  id: number
  name: string
  surname: string
  isAttendingWedding: boolean
  isAttendingPreWedding: boolean
  alojamiento: string
  autobus: string
  company: string
}
definePageMeta({
  middleware: 'auth',
  layout: 'table',
})
const supabase = useSupabaseClient()
const { data: listboda } = useAsyncData(async () => {
  const { data } = await supabase.from('listboda').select('*')
  return data as ListBoda[]
})
function handleLogout() {
  supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <section>
    <div>
      <h2
        class="text-3xl mb-10 text-center text-blue-500"
      >
        📋 Lista
      </h2>
      <table>
        <thead
          class="bg-blue-500 text-white"
        >
          <tr>
            <th class="px-4 py-1 border-x border-solid border-blue-600">
              Nombre
            </th>
            <th class="px-4 py-1  border-r border-solid border-blue-600">
              Apellidos
            </th>
            <th class="px-4 py-1 border-r border-solid border-blue-600">
              Acompañante
            </th>
            <th class="px-4 py-1 border-r border-solid border-blue-600">
              Va a la boda?
            </th>
            <th class="px-4 py-1 border-r border-solid border-blue-600">
              PRE-boda?
            </th>
            <th class="px-4 py-1 border-r border-solid border-blue-600">
              Alojamiento
            </th>
            <th class="px-4 py-1 border-r border-solid border-blue-600">
              Autobus
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in listboda"
            :key="item.id"
            class="[&:nth-child(even)]:bg-blue-100"
          >
            <td class="px-4 py-1 border-x border-solid border-gray-300">
              {{ item.name }}
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              {{ item.surname }}
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              <ul>
                <li
                  v-for="(person, index) in JSON.parse(item.company)"
                  :key="index"
                >
                  {{ person.fullname }} {{ person.edad }}
                </li>
              </ul>
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              {{
                item.isAttendingWedding
                  ? 'Sí'
                  : 'No'
              }}
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              {{
                item.isAttendingPreWedding
                  ? 'Sí'
                  : 'No'
              }}
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              {{ item.alojamiento }}
            </td>
            <td class="px-4 py-1 border-r border-solid border-gray-300">
              {{ item.autobus }}
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="flex justify-end"
      >
        <button
          class="bg-red-500 text-white px-4 py-2 max-w-44 rounded-md w-full mt-10"
          @click="handleLogout()"
        >
          Salir
        </button>
      </div>
    </div>
  </section>
</template>
