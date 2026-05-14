<template>
  <q-page>
    <!-- Page Header -->
    <section class="bg-green-1 q-pa-xl text-center">
      <div style="max-width: 800px; margin: 0 auto">
        <h1 class="text-h3 text-weight-bold q-mb-sm" style="color: #2c3e50">關於我們</h1>
        <p class="text-body1 text-grey-7">
          用心經營每一次服務，讓您安心將家託付給我們
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="q-pa-xl">
      <div style="max-width: 1000px; margin: 0 auto">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <div class="section-title">我們的故事</div>
            <p class="text-body1 text-grey-8" style="line-height: 2">
              「昕」象徵清晨的光，代表嶄新與希望；「禾」象徵穩定與豐盛，寓意用心耕耘每一個細節。昕禾生活的創辦人深感都市人忙碌的生活中，維持居家整潔是一大挑戰，因此創立了這個品牌。
            </p>
            <p class="text-body1 text-grey-8" style="line-height: 2">
              我們堅信，一個乾淨舒適的家是幸福生活的基礎。從最初的三人團隊，到如今超過 50 位專業清潔人員，
              我們始終秉持著「用心服務，乾淨如新」的理念，服務超過 5,000 個家庭。
            </p>
            <p class="text-body1 text-grey-8" style="line-height: 2">
              我們不只是打掃，更是在為每位客戶打造一個嶄新、舒適的生活空間。
            </p>
          </div>
          <div class="col-12 col-md-6 flex flex-center">
            <div class="bg-green-1 full-width q-pa-xl rounded-borders text-center" style="border-radius: 24px">
              <q-icon name="mdi-heart-multiple" size="120px" color="primary" style="opacity: 0.5" />
              <div class="text-h5 text-weight-bold text-primary q-mt-md">如晨光般嶄新，用心耕耘每一個細節</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="q-pa-xl" style="background: #fafafa">
      <div style="max-width: 1200px; margin: 0 auto" class="text-center">
        <div class="section-title" style="display: inline-block">核心價值</div>
        <p class="section-subtitle q-mx-auto q-mb-xl">
          這些是我們堅守的信念，也是我們持續進步的動力
        </p>
        <div class="row q-col-gutter-lg">
          <div v-for="value in values" :key="value.title" class="col-12 col-sm-6 col-md-3">
            <q-card flat class="q-pa-lg text-center" style="height: 100%; border-radius: 16px">
              <div class="feature-icon q-mx-auto q-mb-md" :class="value.bgColor">
                <q-icon :name="value.icon" size="36px" :color="value.color" />
              </div>
              <div class="text-h6 text-weight-bold q-mb-sm">{{ value.title }}</div>
              <p class="text-body2 text-grey-7" style="line-height: 1.8">{{ value.desc }}</p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="q-pa-xl">
      <div style="max-width: 1000px; margin: 0 auto" class="text-center">
        <div class="section-title" style="display: inline-block">專業團隊</div>
        <p class="section-subtitle q-mx-auto q-mb-xl">
          每位成員都經過嚴格的篩選與專業訓練
        </p>
        <div class="row q-col-gutter-lg justify-center">
          <div v-for="step in process" :key="step.title" class="col-12 col-sm-6 col-md-3">
            <div class="text-center">
              <q-avatar size="64px" color="primary" text-color="white" class="q-mb-md">
                <q-icon :name="step.icon" size="28px" />
              </q-avatar>
              <div class="text-subtitle1 text-weight-bold q-mb-xs">{{ step.title }}</div>
              <div class="text-caption text-grey-7">{{ step.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section q-pa-xl text-center text-white">
      <div style="max-width: 600px; margin: 0 auto">
        <h2 class="text-h4 text-weight-bold q-mb-md">想了解更多？</h2>
        <p class="text-body1 q-mb-lg" style="opacity: 0.9">
          歡迎聯絡我們，讓我們為您量身打造最適合的清潔方案
        </p>
        <q-btn
          unelevated
          no-caps
          label="聯絡我們"
          color="white"
          text-color="primary"
          size="lg"
          rounded
          to="/contact"
        />
      </div>
    </section>
  </q-page>
</template>

<script>
import { useMeta } from "quasar";

export default {
  name: "AboutPage",
  setup() {
    useMeta({
      title: "關於我們 - 昕禾生活事業有限公司｜台中清潔",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "「昕」象徵清晨的光，代表嶄新與希望；「禾」象徵穩定與豐盛，寓意用心耕耘每一個細節。昕禾生活事業有限公司，台中市西屯區在地清潔服務。" },
        keywords: { name: "keywords", content: "昕禾生活,台中清潔公司,西屯區清潔,專業清潔團隊,昕禾生活事業" },
        ogTitle: { property: "og:title", content: "關於我們 - 昕禾生活" },
        ogDescription: { property: "og:description", content: "用心經營每一次服務，讓您安心將家託付給我們。" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const values = [
      { icon: "mdi-diamond-stone", title: "品質至上", desc: "每次服務都以最高標準執行，絕不妥協", color: "primary", bgColor: "bg-green-1" },
      { icon: "mdi-handshake", title: "誠信透明", desc: "價格透明、服務清楚，建立長期信任關係", color: "secondary", bgColor: "bg-teal-1" },
      { icon: "mdi-leaf", title: "環保永續", desc: "使用環保清潔用品，對環境與健康負責任", color: "positive", bgColor: "bg-light-green-1" },
      { icon: "mdi-account-heart", title: "客戶優先", desc: "傾聽客戶需求，提供客製化的清潔方案", color: "accent", bgColor: "bg-orange-1" },
    ];

    const process = [
      { icon: "mdi-file-document-check", title: "嚴格篩選", desc: "身份驗證與背景調查" },
      { icon: "mdi-school", title: "專業培訓", desc: "40 小時以上專業訓練" },
      { icon: "mdi-certificate", title: "認證上崗", desc: "通過考核才可服務" },
      { icon: "mdi-star-check", title: "持續考核", desc: "定期評估服務品質" },
    ];

    return { values, process };
  },
};
</script>
