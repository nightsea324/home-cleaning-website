<template>
  <q-layout view="hHh lpR fFf">
    <!-- Header -->
    <q-header class="bg-white text-dark" bordered>
      <q-toolbar class="q-px-md" style="max-width: 1200px; margin: 0 auto">
        <q-btn flat no-caps to="/" class="text-primary text-h6 text-weight-bold">
          <q-icon name="mdi-leaf" class="q-mr-sm" />
          昕禾居家清潔
        </q-btn>

        <q-space />

        <!-- Desktop Nav -->
        <div class="gt-sm row items-center q-gutter-md">
          <q-btn flat no-caps label="首頁" to="/" class="nav-link" />
          <q-btn flat no-caps label="服務項目" to="/services" class="nav-link" />
          <q-btn flat no-caps label="關於我們" to="/about" class="nav-link" />
          <q-btn
            unelevated
            no-caps
            label="立即預約"
            to="/contact"
            color="primary"
            class="q-ml-md"
            rounded
          />
        </div>

        <!-- Mobile Menu -->
        <q-btn
          flat
          round
          icon="mdi-menu"
          class="lt-md"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer v-model="drawer" side="right" overlay behavior="mobile" bordered>
      <q-list padding>
        <q-item-label header class="text-primary text-weight-bold text-h6">
          <q-icon name="mdi-leaf" class="q-mr-sm" />
          昕禾居家清潔
        </q-item-label>
        <q-separator class="q-mb-sm" />
        <q-item clickable v-ripple to="/" @click="drawer = false">
          <q-item-section avatar><q-icon name="mdi-home" /></q-item-section>
          <q-item-section>首頁</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/services" @click="drawer = false">
          <q-item-section avatar><q-icon name="mdi-broom" /></q-item-section>
          <q-item-section>服務項目</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" @click="drawer = false">
          <q-item-section avatar><q-icon name="mdi-information" /></q-item-section>
          <q-item-section>關於我們</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/contact" @click="drawer = false">
          <q-item-section avatar><q-icon name="mdi-phone" /></q-item-section>
          <q-item-section>立即預約</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-dark text-white q-pa-lg">
      <div style="max-width: 1200px; margin: 0 auto">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <div class="text-h6 text-weight-bold q-mb-sm">
              <q-icon name="mdi-leaf" class="q-mr-sm" />昕禾居家清潔
            </div>
            <p class="text-grey-4" style="line-height: 1.8">
              提供最專業的居家清潔服務，讓您的家煥然一新。我們用心對待每一個角落，給您最舒適的居住環境。
            </p>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-subtitle1 text-weight-bold q-mb-sm">快速連結</div>
            <div class="column q-gutter-xs">
              <q-btn flat no-caps label="首頁" to="/" color="grey-4" align="left" dense />
              <q-btn flat no-caps label="服務項目" to="/services" color="grey-4" align="left" dense />
              <q-btn flat no-caps label="關於我們" to="/about" color="grey-4" align="left" dense />
              <q-btn flat no-caps label="立即預約" to="/contact" color="grey-4" align="left" dense />
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-subtitle1 text-weight-bold q-mb-sm">聯絡資訊</div>
            <div class="column q-gutter-sm text-grey-4">
              <div><q-icon name="mdi-phone" class="q-mr-sm" />0800-123-456</div>
              <div><q-icon name="mdi-email" class="q-mr-sm" />service@cleanhome.com.tw</div>
              <div><q-icon name="mdi-map-marker" class="q-mr-sm" />台北市中山區南京東路一段100號</div>
              <div><q-icon name="mdi-clock" class="q-mr-sm" />週一至週六 08:00 - 20:00</div>
            </div>
          </div>
        </div>
        <q-separator dark class="q-my-md" />
        <div class="text-center text-grey-6 text-caption">
          &copy; {{ new Date().getFullYear() }} 昕禾居家清潔 Clean Home. All Rights Reserved.
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "MainLayout",
  setup() {
    const drawer = ref(false);
    return { drawer };
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  font-weight: 500;
  &.q-btn--active,
  &:hover {
    color: $primary;
  }
}
</style>
