<script setup>
const email = ref('')
const password = ref('')
const supabase = useSupabaseClient()
const errorOnForm = ref(false)
async function handleLogin() {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error)
    errorOnForm.value = true
  else
    navigateTo('/lista')
}
</script>

<template>
  <div>
    <FormKit
      type="form"
      submit-label="Enviar"
      @submit="handleLogin()"
    >
      <FormKit
        id="email"
        v-model="email"
        name="email"
        placeholder="rafaelnadal@gmail.com"
        type="text"
        label="Email"
        validation="required"
        :validation-messages="{ required: 'Requerido' }"
      />
      <FormKit
        id="password"
        v-model="password"
        name="password"
        placeholder="Tu contraseña"
        type="password"
        label="Contraseña"
        validation="required"
        :validation-messages="{ required: 'Requerido' }"
      />
    </FormKit>
    <div
      v-if="errorOnForm"
      class="text-red-500 text-center"
    >
      Usuario o contraseña incorrectos
    </div>
  </div>
</template>
