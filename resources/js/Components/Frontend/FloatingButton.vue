<template>
    <div class="fixed bottom-4 right-4">
        <button @click="changeLanguage('es')"
                class="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-md w-12 h-12">
            <!-- Puedes personalizar el contenido del botón aquí -->
            <i class="fas fa-plus"></i>
        </button>
    </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>
