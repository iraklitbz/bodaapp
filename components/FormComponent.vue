<script setup>
const companions = ref([])
const ageOptions = []
const isAttendingWedding = ref(true)
const isAttendingPreWedding = ref(null)
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
function handleMorePeople() {
  companions.value.push({ fullname: '', edad: '' })
}
function handleRemovePeople(index) {
  companions.value.splice(index, 1)
}
</script>

<template>
  <div>
    <FormKit
      type="form"
      submit-label="Enviar"
      @submit="handleFormSend()"
    >
      <div
        class="flex gap-4 w-full"
      >
        <FormKit
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
          name="surname"
          placeholder="Nadal"
          type="text"
          label="Apellidos"
          validation="required"
          :validation-messages="{ required: 'Requerido' }"
        />
      </div>
      <div
        v-for="(person, index) in companions"
        :key="index"
        class="flex"
      >
        <div
          class="grid grid-cols-[60%,35%] gap-4 w-full"
        >
          <FormKit
            v-model="person.fullname"
            type="text"
            placeholder="Rafael Nadal"
            label="Nombre completo"
            validation="required"
            :validation-messages="{ required: 'Requerido' }"
          />
          <FormKit
            v-model="person.edad"
            placeholder="Niños solo"
            type="select"
            label="Edad"
            name="age"
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
            class="cursor-pointer text-red-600"
            @click="() => handleRemovePeople(index)"
          />
        </div>
      </div>
      <button
        type="button"
        class="mt-0 mb-10 w-full bg-gray-300 px-3 text-gray-800 text-base py-2 rounded-md transition-colors duration-300 ease-in-out"
        @click="handleMorePeople()"
      >
        + añadir persona
      </button>
      <div
        class="mb-10"
      >
        <FormKit
          v-model="isAttendingWedding"
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
        v-if="isAttendingWedding"
      >
        <div
          class="mb-10"
        >
          <FormKit
            v-model="isAttendingPreWedding"
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
            type="radio"
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
          <span
            class="text-sm text-gray-600 italic leading-0 block"
          >
            *Los horarios de los autobuses os los facilitaremos más adelante.
          </span>
        </div>
      </div>
    </FormKit>
  </div>
</template>
