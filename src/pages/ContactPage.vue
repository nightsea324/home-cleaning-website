<template>
  <q-page>
    <!-- Page Header -->
    <section class="bg-green-1 q-pa-xl text-center">
      <div style="max-width: 800px; margin: 0 auto">
        <h1 class="text-h3 text-weight-bold q-mb-sm" style="color: #2c3e50">聯絡我們</h1>
        <p class="text-body1 text-grey-7">
          填寫表單或直接來電，我們將在最短時間內回覆您
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="q-pa-xl">
      <div style="max-width: 1200px; margin: 0 auto">
        <div class="row q-col-gutter-xl">
          <!-- Contact Form -->
          <div class="col-12 col-md-7">
            <q-card flat bordered class="q-pa-lg" style="border-radius: 16px">
              <div class="text-h5 text-weight-bold q-mb-lg">預約清潔服務</div>
              <q-form @submit="onSubmit" class="q-gutter-md">
                <div class="row q-col-gutter-md">
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="form.name"
                      label="您的姓名"
                      outlined
                      rounded
                      :rules="[val => !!val || '請輸入姓名']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-account" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12 col-sm-6">
                    <q-input
                      v-model="form.phone"
                      label="聯絡電話"
                      outlined
                      rounded
                      :rules="[val => !!val || '請輸入電話']"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mdi-phone" />
                      </template>
                    </q-input>
                  </div>
                </div>

                <q-input
                  v-model="form.email"
                  label="電子郵件"
                  type="email"
                  outlined
                  rounded
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-email" />
                  </template>
                </q-input>

                <q-input
                  v-model="form.address"
                  label="清潔地址"
                  outlined
                  rounded
                  :rules="[val => !!val || '請輸入地址']"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-map-marker" />
                  </template>
                </q-input>

                <q-select
                  v-model="form.service"
                  :options="serviceOptions"
                  label="選擇服務類型"
                  outlined
                  rounded
                  :rules="[val => !!val || '請選擇服務類型']"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-broom" />
                  </template>
                </q-select>

                <q-input
                  v-model="form.date"
                  label="希望服務日期"
                  outlined
                  rounded
                  type="date"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-calendar" />
                  </template>
                </q-input>

                <q-input
                  v-model="form.message"
                  label="其他需求說明"
                  type="textarea"
                  outlined
                  rounded
                  rows="4"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-message-text" />
                  </template>
                </q-input>

                <q-btn
                  unelevated
                  no-caps
                  label="送出預約"
                  type="submit"
                  color="primary"
                  size="lg"
                  rounded
                  class="full-width"
                  icon-right="mdi-send"
                />
              </q-form>
            </q-card>
          </div>

          <!-- Contact Info -->
          <div class="col-12 col-md-5">
            <div class="column q-gutter-lg">
              <q-card flat class="q-pa-lg bg-primary text-white" style="border-radius: 16px">
                <div class="text-h5 text-weight-bold q-mb-lg">聯絡資訊</div>
                <q-list dark>
                  <q-item v-for="info in contactInfo" :key="info.label" class="q-px-none">
                    <q-item-section avatar>
                      <q-avatar color="white" text-color="primary" :icon="info.icon" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">{{ info.label }}</q-item-label>
                      <q-item-label caption class="text-green-2">{{ info.value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>

              <q-card flat bordered class="q-pa-lg" style="border-radius: 16px">
                <div class="text-h6 text-weight-bold q-mb-md">服務時間</div>
                <q-list dense>
                  <q-item v-for="hour in hours" :key="hour.day" class="q-px-none">
                    <q-item-section>
                      <q-item-label class="text-weight-medium">{{ hour.day }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label :class="hour.closed ? 'text-red' : 'text-grey-8'">
                        {{ hour.time }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>

              <q-card flat bordered class="q-pa-lg" style="border-radius: 16px">
                <div class="text-h6 text-weight-bold q-mb-sm">
                  <q-icon name="mdi-tag-heart" color="accent" class="q-mr-sm" />
                  首次優惠
                </div>
                <p class="text-body2 text-grey-7 q-mb-sm" style="line-height: 1.8">
                  首次預約即享 <strong class="text-accent text-h6">9 折</strong> 優惠！填寫表單或來電預約時告知即可。
                </p>
              </q-card>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar, useMeta } from "quasar";

export default {
  name: "ContactPage",
  setup() {
    const $q = useQuasar();

    useMeta({
      title: "聯絡我們 - 昕禾居家清潔｜免費估價預約",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "立即預約昕禾居家清潔服務！免費專線 0800-123-456，線上預約表單，首次預約享9折優惠。台北市中山區南京東路一段100號。" },
        keywords: { name: "keywords", content: "預約清潔,免費估價,清潔服務預約,台北清潔預約,昕禾聯絡方式" },
        ogTitle: { property: "og:title", content: "聯絡我們 - 昕禾居家清潔" },
        ogDescription: { property: "og:description", content: "填寫表單或直接來電，首次預約享9折優惠！" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const form = ref({
      name: "",
      phone: "",
      email: "",
      address: "",
      service: null,
      date: "",
      message: "",
    });

    const serviceOptions = [
      "日常清潔",
      "深度清潔",
      "搬遷清潔",
      "辦公室清潔",
      "冷氣清洗",
      "裝潢後清潔",
    ];

    const contactInfo = [
      { icon: "mdi-phone", label: "免費專線", value: "0800-123-456" },
      { icon: "mdi-email", label: "電子郵件", value: "service@cleanhome.com.tw" },
      { icon: "mdi-map-marker", label: "公司地址", value: "台北市中山區南京東路一段100號" },
      { icon: "mdi-facebook", label: "Facebook", value: "facebook.com/cleanhome.tw" },
    ];

    const hours = [
      { day: "週一至週五", time: "08:00 - 20:00" },
      { day: "週六", time: "09:00 - 18:00" },
      { day: "週日", time: "公休", closed: true },
    ];

    function onSubmit() {
      $q.notify({
        type: "positive",
        message: "預約表單已送出！我們將盡快與您聯繫。",
        position: "top",
        timeout: 3000,
      });
      form.value = {
        name: "",
        phone: "",
        email: "",
        address: "",
        service: null,
        date: "",
        message: "",
      };
    }

    return { form, serviceOptions, contactInfo, hours, onSubmit };
  },
};
</script>
