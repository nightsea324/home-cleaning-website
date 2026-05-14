<template>
  <q-page>
    <!-- Page Header -->
    <section class="bg-green-1 q-pa-xl text-center">
      <div style="max-width: 800px; margin: 0 auto">
        <h1 class="text-h3 text-weight-bold q-mb-sm" style="color: #2c3e50">聯絡我們</h1>
        <p class="text-body1 text-grey-7">
          歡迎透過電話或 LINE 與我們聯繫，將有專人為您服務
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="q-pa-xl">
      <div style="max-width: 1200px; margin: 0 auto">
        <div class="row q-col-gutter-xl">
          <!-- Contact CTA -->
          <div class="col-12 col-md-7">
            <q-card flat bordered class="q-pa-lg" style="border-radius: 16px">
              <div class="text-h5 text-weight-bold q-mb-md">預約清潔服務</div>
              <p class="text-body1 text-grey-7 q-mb-lg" style="line-height: 1.8">
                如晨光般帶來嶄新希望，用心耕耘每一個細節。歡迎直接來電或透過 LINE 與我們聯繫，專人將為您提供免費估價與諮詢服務。
              </p>
              <div class="column q-gutter-md">
                <q-btn
                  unelevated
                  no-caps
                  label="LINE 聯絡我們"
                  color="positive"
                  size="lg"
                  rounded
                  class="full-width"
                  icon="mdi-chat"
                  :href="lineLink"
                  target="_blank"
                  rel="noopener"
                  type="a"
                />
                <q-btn
                  outline
                  no-caps
                  label="撥打電話聯絡"
                  color="primary"
                  size="lg"
                  rounded
                  class="full-width"
                  icon="mdi-phone"
                  href="tel:0967193868"
                  type="a"
                />
              </div>
            </q-card>
          </div>

          <!-- Contact Info -->
          <div class="col-12 col-md-5">
            <div class="column q-gutter-lg">
              <q-card flat class="q-pa-lg bg-primary text-white" style="border-radius: 16px">
                <div class="text-h5 text-weight-bold q-mb-lg">聯絡資訊</div>
                <q-list dark>
                  <q-item v-for="info in contactInfo" :key="info.label" class="q-px-none" :clickable="!!info.link" :tag="info.link ? 'a' : 'div'" :href="info.link" target="_blank" rel="noopener">
                    <q-item-section avatar>
                      <q-avatar color="white" text-color="primary" :icon="info.icon" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-weight-bold">{{ info.label }}</q-item-label>
                      <q-item-label caption class="text-green-2">{{ info.value }}</q-item-label>
                    </q-item-section>
                    <q-item-section v-if="info.link" side>
                      <q-icon name="mdi-open-in-new" color="green-2" size="16px" />
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
                  歡迎直接聯繫我們，客製化服務方案滿足您的需求！
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
import { useMeta } from "quasar";

export default {
  name: "ContactPage",
  setup() {
    useMeta({
      title: "聯絡我們 - 昕禾生活｜台中清潔服務",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "聯絡昕禾生活清潔服務！透過電話或 LINE 直接與我們聯繫，台中市西屯區，週一至週日 09:00-21:00 全時段服務。" },
        keywords: { name: "keywords", content: "聯絡清潔,免費估價,台中清潔,西屯區清潔,昕禾生活聯絡" },
        ogTitle: { property: "og:title", content: "聯絡我們 - 昕禾生活" },
        ogDescription: { property: "og:description", content: "透過電話或 LINE 直接聯繫，讓專業團隊為您服務！" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const lineLink = "https://lin.ee/z05H7OH";

    const contactInfo = [
      { icon: "mdi-map-marker", label: "服務地區", value: "台中市西屯區" },
      { icon: "mdi-domain", label: "公司全名", value: "昕禾生活事業有限公司" },
      { icon: "mdi-facebook", label: "Facebook", value: "昕禾生活事業", link: "https://www.facebook.com/profile.php?id=61565276375462" },
    ];

    const hours = [
      { day: "週一至週日", time: "09:00 - 21:00" },
    ];

    return { lineLink, contactInfo, hours };
  },
};
</script>
