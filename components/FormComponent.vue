<script setup>
import { lista } from '~/store/formData'
import { modal } from '~/store/modal'

const supabase = useSupabaseClient()
const ageOptions = []
const errorOnForm = ref(false)
ageOptions.push({
  value: 'Adulto',
  label: 'Soy adulto',
})
for (let i = 1; i <= 14; i++) {
  ageOptions.push({
    value: i === 1 ? '1 año' : `${i} años`,
    label: i === 1 ? '1 año' : `${i} años`,
  })
}
async function handleFormSend() {
  const { error } = await supabase.from('listboda').insert([
    {
      name: lista().formData.name,
      surname: lista().formData.surname,
      company: JSON.stringify(lista().formData.company),
      isAttendingWedding: lista().formData.isAttendingWedding,
      isAttendingPreWedding: lista().formData.isAttendingPreWedding,
      alojamiento: lista().formData.alojamiento,
      autobus: lista().formData.autobus,
    },
  ])
  if (error === null) {
    lista().handleEmptyData()
    modal().handleRemoveInvoke()
    navigateTo('/gracias')
  }
  else {
    errorOnForm.value = true
  }
}
</script>

<template>
  <div>
    <FormKit
      id="mainForm"
      v-model="lista().formData"
      type="form"
      submit-label="Enviar"
      @submit="handleFormSend()"
    >
      <div
        class="flex gap-4 w-full"
      >
        <FormKit
          id="name"
          name="name"
          placeholder="Rafael"
          type="text"
          label="Nombre"
          :classes="{
            outer: 'w-24',
          }"
          validation="required"
          :validation-messages="{ required: 'Requerido' }"
        />
        <FormKit
          id="surname"
          name="surname"
          placeholder="Nadal"
          type="text"
          label="Apellidos"
          validation="required"
          :validation-messages="{ required: 'Requerido' }"
        />
      </div>
      <div
        v-for="(person, index) in lista().formData.company"
        :key="index"
        class="flex"
      >
        <div
          class="grid grid-cols-[60%,35%] gap-4 w-full"
        >
          <FormKit
            :id="`${index}-fullname`"
            v-model="person.fullname"
            type="text"
            placeholder="Rafael Nadal"
            label="Nombre completo"
            validation="required"
            :validation-messages="{ required: 'Requerido' }"
          />
          <FormKit
            :id="`${index}-age`"
            v-model="person.edad"
            placeholder="Niños solo"
            type="select"
            label="Edad"
            :options="ageOptions"
          >
            <template #selectIcon>
              <nuxt-icon
                name="chevronDown"
                class="pointer-events-none mr-2"
              />
            </template>
          </FormKit>
        </div>
        <div
          class="relative w-7 top-7 h-[46px] flex items-center justify-end"
        >
          <nuxt-icon
            name="minus"
            class="cursor-pointer text-red-500 hover:text-red-600 transition-all ease-in-out duration-3"
            @click="lista().handleRemovePeople(index)"
          />
        </div>
      </div>
      <button
        type="button"
        class="mt-0 mb-10 w-full bg-gray-200 text-blue-500 hover:bg-gray-300 px-3 text-base py-2 rounded-md transition-colors duration-300 ease-in-out"
        @click="lista().handleMorePeople()"
      >
        + añadir persona
      </button>
      <div
        class="mb-10"
      >
        <FormKit
          id="isAttendingWedding"
          name="isAttendingWedding"
          type="radio"
          label="¿Vendrás a nuestra boda el sábado 27 de julio?"
          :options="[
            { label: '🎉 ¡Por supuesto!', value: true },
            { label: '😣 Lamentablemente, no podremos asistir.', value: false },
          ]"
          :classes="{
            decorator: 'w-4 h-4 peer-checked:bg-blue-600 flex items-center justify-center',
            option: 'mb-4',
          }"
          validation="required"
          :validation-messages="{ required: 'Requerido' }"
        >
          <template #decoratorIcon>
            <span
              class="w-1.5 h-1.5 bg-white rounded-full"
            />
          </template>
        </FormKit>
      </div>
      <div
        v-if="lista().formData.isAttendingWedding"
      >
        <div
          class="mb-10"
        >
          <FormKit
            id="isAttendingPreWedding"
            name="isAttendingPreWedding"
            type="radio"
            label="¿Vendrás a nuestra preboda el viernes?"
            :options="[
              { label: '💃🏻 ¡Cuenta conmigo!', value: true },
              { label: '💪 Prefiero descansar para el gran día.', value: false },
            ]"
            :classes="{
              decorator: 'w-4 h-4 peer-checked:bg-blue-600 flex items-center justify-center',
              option: 'mb-4',
            }"
            validation="required"
            :validation-messages="{ required: 'Requerido' }"
          >
            <template #decoratorIcon>
              <span
                class="w-1.5 h-1.5 bg-white rounded-full"
              />
            </template>
          </FormKit>
        </div>
        <div
          class="mb-10"
        >
          <FormKit
            id="alojamiento"
            type="radio"
            name="alojamiento"
            label="Alojamiento: ¿Querrás alojarte alguno de los dos días en Jadraque o alrededores?"
            :options="[
              { label: 'Sí, viernes y sábado', value: 'Viernes y sabado' },
              { label: 'Solo sábado', value: 'Sábado' },
              { label: 'Me encargo yo', value: 'Me encargo yo' },
              { label: 'Me vuelvo en autobús.', value: 'Me vuelvo en autobús' },
            ]"
            :classes="{
              decorator: 'w-4 h-4 peer-checked:bg-blue-600 flex items-center justify-center',
              option: 'mb-4',
            }"
            validation="required"
            :validation-messages="{ required: 'Requerido' }"
          >
            <template #decoratorIcon>
              <span
                class="w-1.5 h-1.5 bg-white rounded-full"
              />
            </template>
          </FormKit>
        </div>
        <div
          class="mb-10"
        >
          <FormKit
            id="autobus"
            name="autobus"
            type="radio"
            label="Uso de servicio de autobuses"
            :options="[
              { label: 'Guadalajara – Jadraque – Cutamilla – Guadalajara', value: 'Guadalajara – Jadraque – Cutamilla – Guadalajara' },
              { label: 'Jadraque - Cutamilla – Jadraque', value: 'Jadraque - Cutamilla – Jadraque' },
              { label: 'Iré por mi cuenta', value: 'Iré por mi cuenta' },
              { label: 'Me vuelvo en autobús.', value: 'Me vuelvo en autobús' },
            ]"
            :classes="{
              decorator: 'w-4 h-4 peer-checked:bg-blue-600 flex items-center justify-center',
              option: 'mb-4',
            }"
            validation="required"
            :validation-messages="{ required: 'Requerido' }"
          >
            <template #decoratorIcon>
              <span
                class="w-1.5 h-1.5 bg-white rounded-full"
              />
            </template>
          </FormKit>
          <span class="italic text-sm bg-yellow-50 p-3 rounded-lg text-yellow-700 leading-0 block">
            *Los horarios de los autobuses os los facilitaremos más adelante.
          </span>
        </div>
      </div>
    </FormKit>
    <div
      v-if="errorOnForm"
      class="text-red-500 text-center"
    >
      Ha habido un error al enviar el formulario. Por favor, inténtalo de nuevo.
    </div>
  </div>
</template>
