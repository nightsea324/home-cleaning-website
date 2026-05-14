<template>
  <q-page>
    <!-- Page Header -->
    <section class="bg-green-1 q-pa-xl text-center">
      <div style="max-width: 800px; margin: 0 auto">
        <h1 class="text-h3 text-weight-bold q-mb-sm" style="color: #2c3e50">服務項目</h1>
        <p class="text-body1 text-grey-7">
          我們提供多種清潔服務，從日常維護到深度清潔，滿足您的所有需求
        </p>
      </div>
    </section>

    <!-- Services Detail -->
    <section class="q-pa-xl">
      <div style="max-width: 1200px; margin: 0 auto">
        <div class="row q-col-gutter-xl">
          <div v-for="service in services" :key="service.title" class="col-12 col-md-6">
            <q-card flat bordered class="service-card q-pa-lg" style="height: 100%">
              <div class="row items-start q-gutter-md">
                <div class="feature-icon bg-green-1">
                  <q-icon :name="service.icon" size="36px" color="primary" />
                </div>
                <div class="col">
                  <div class="text-h5 text-weight-bold q-mb-xs">{{ service.title }}</div>
                  <q-badge :color="service.badge === '熱門' ? 'accent' : 'secondary'" v-if="service.badge" class="q-mb-sm">
                    {{ service.badge }}
                  </q-badge>
                  <p class="text-body2 text-grey-7 q-mb-md" style="line-height: 1.8">
                    {{ service.desc }}
                  </p>
                  <div class="text-subtitle2 text-weight-bold q-mb-sm">服務內容：</div>
                  <q-list dense>
                    <q-item v-for="item in service.items" :key="item" dense class="q-px-none">
                      <q-item-section avatar style="min-width: 32px">
                        <q-icon name="mdi-check-circle" color="primary" size="18px" />
                      </q-item-section>
                      <q-item-section class="text-body2">{{ item }}</q-item-section>
                    </q-item>
                  </q-list>
                  <q-separator class="q-my-md" />
                  <div class="row items-center justify-between">
                    <div>
                      <span class="text-caption text-grey-6">起始價格</span>
                      <div class="text-h6 text-weight-bold text-primary">NT$ {{ service.price }}</div>
                    </div>
                    <q-btn unelevated no-caps label="立即預約" color="primary" rounded to="/contact" />
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Note -->
    <section class="q-pa-xl bg-green-1">
      <div style="max-width: 800px; margin: 0 auto" class="text-center">
        <q-icon name="mdi-information" size="40px" color="primary" class="q-mb-md" />
        <h3 class="text-h5 text-weight-bold q-mb-sm">價格說明</h3>
        <p class="text-body1 text-grey-7" style="line-height: 1.8">
          實際價格依坪數、髒汙程度與特殊需求而定。我們提供<strong class="text-primary">免費到府估價</strong>服務，
          讓您在清楚了解服務內容與費用後再做決定，絕無額外隱藏費用。
        </p>
        <q-btn
          unelevated
          no-caps
          label="免費估價"
          color="primary"
          size="lg"
          rounded
          to="/contact"
          class="q-mt-md"
          icon-right="mdi-arrow-right"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";

export default {
  name: "ServicesPage",
  setup() {
    useMeta({
      title: "服務項目 - 昕禾居家清潔",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "昕禾提供日常清潔、深度清潔、搬遷清潔、辦公室清潔、冷氣清洗、裝潢後清潔等多元服務。透明價格，免費到府估價。" },
        keywords: { name: "keywords", content: "日常清潔費用,深度清潔價格,搬家清潔服務,辦公室清潔,冷氣清洗,裝潢清潔,居家清潔價目表" },
        ogTitle: { property: "og:title", content: "服務項目 - 昕禾居家清潔" },
        ogDescription: { property: "og:description", content: "多元化清潔服務，從日常清潔到深度清潔，滿足您的所有需求。" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const services = [
      {
        icon: "mdi-broom",
        title: "日常清潔",
        badge: "熱門",
        desc: "適合忙碌的您，定期維護居家環境整潔。我們的專業人員會依照標準流程，確保每個區域都乾淨整齊。",
        items: ["客廳、臥室吸塵拖地", "廚房檯面與水槽清潔", "浴室基礎清潔", "垃圾整理與丟棄", "家具表面除塵"],
        price: "2,500",
      },
      {
        icon: "mdi-spray-bottle",
        title: "深度清潔",
        badge: "推薦",
        desc: "針對長期累積的頑固汙垢進行徹底清潔。適合季節性大掃除或長期未清潔的居家環境。",
        items: ["廚房油煙機深度清洗", "浴室水垢與霉斑處理", "窗戶與紗窗清洗", "家電表面深度清潔", "地板打蠟保養"],
        price: "5,000",
      },
      {
        icon: "mdi-sofa",
        title: "搬遷清潔",
        badge: "",
        desc: "搬入新居或退租時的全面清潔服務。確保空間達到入住標準，讓您安心入住或順利退租。",
        items: ["全室除塵與消毒", "廚房衛浴深度清潔", "窗戶與陽台清洗", "櫥櫃內外清潔", "牆面汙漬處理"],
        price: "6,000",
      },
      {
        icon: "mdi-office-building",
        title: "辦公室清潔",
        badge: "",
        desc: "維持專業辦公環境整潔，提升企業形象與員工工作效率。可依需求安排定期服務。",
        items: ["辦公區域清潔", "會議室整理", "茶水間與廁所清潔", "地毯吸塵", "垃圾清運"],
        price: "4,000",
      },
      {
        icon: "mdi-air-filter",
        title: "冷氣清洗",
        badge: "季節限定",
        desc: "專業冷氣清洗服務，清除積年灰塵與黴菌，提升冷房效率，維護家人呼吸健康。",
        items: ["濾網清洗", "蒸發器深度清潔", "出風口除菌", "排水管疏通", "效能檢測"],
        price: "2,000",
      },
      {
        icon: "mdi-glass-fragile",
        title: "裝潢後清潔",
        badge: "",
        desc: "裝潢工程完畢後的細緻清潔，清除粉塵、殘膠與建材殘留物，還您一個嶄新空間。",
        items: ["粉塵全面清除", "殘膠去除", "地板清潔保養", "窗框與軌道清潔", "五金擦拭亮化"],
        price: "8,000",
      },
    ];

    return { services };
  },
};
</script>
