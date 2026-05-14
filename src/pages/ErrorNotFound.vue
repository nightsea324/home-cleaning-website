<template>
  <q-page class="flex flex-center" style="min-height: 60vh">
    <div class="text-center q-pa-lg">
      <q-icon name="mdi-alert-circle-outline" size="80px" color="grey-5" class="q-mb-md" />
      <div class="text-h3 text-weight-bold text-grey-8 q-mb-sm">404</div>
      <p class="text-h6 text-grey-6 q-mb-lg">抱歉，找不到您要的頁面</p>
      <q-btn unelevated no-caps label="回到首頁" color="primary" rounded to="/" icon="mdi-home" />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "ErrorNotFound",
};
</script>
