<template>
  <q-page>
    <!-- Hero Section -->
    <section class="hero-section flex flex-center">
      <div class="row items-center q-px-lg" style="max-width: 1200px; width: 100%">
        <div class="col-12 col-md-6 q-pa-lg">
          <div class="text-overline text-primary text-weight-bold q-mb-sm" style="letter-spacing: 2px">
            專業居家清潔服務
          </div>
          <h1 class="text-h2 text-weight-bold q-mb-md" style="line-height: 1.2; color: #2c3e50">
            給您一個<br /><span class="text-primary">乾淨舒適</span>的家
          </h1>
          <p class="text-body1 text-grey-8 q-mb-lg" style="line-height: 1.8; max-width: 480px">
            「昕」是清晨的光，代表嶄新與希望；「禾」是穩定與豐盛，寓意用心耕耘每一個細節。從日常清潔到深度整理，讓每一個空間恢復潔淨與溫度。
          </p>
          <div class="row q-gutter-md">
            <q-btn
              unelevated
              no-caps
              label="免費估價"
              color="primary"
              :size="$q.screen.lt.sm ? 'md' : 'lg'"
              rounded
              to="/contact"
              icon-right="mdi-arrow-right"
            />
            <q-btn
              outline
              no-caps
              label="了解服務"
              color="primary"
              :size="$q.screen.lt.sm ? 'md' : 'lg'"
              rounded
              to="/services"
            />
          </div>
          <div class="row q-gutter-lg q-mt-xl">
            <div>
              <div class="text-h4 text-weight-bold text-primary">5000+</div>
              <div class="text-caption text-grey-7">服務家庭</div>
            </div>
            <div>
              <div class="text-h4 text-weight-bold text-primary">98%</div>
              <div class="text-caption text-grey-7">滿意度</div>
            </div>
            <div>
              <div class="text-h4 text-weight-bold text-primary">8年</div>
              <div class="text-caption text-grey-7">服務經驗</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 q-pa-lg flex flex-center gt-sm">
          <q-icon name="mdi-home-heart" size="280px" color="primary" style="opacity: 0.3" />
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="q-pa-xl" style="background: #fafafa">
      <div style="max-width: 1200px; margin: 0 auto" class="text-center">
        <div class="section-title" style="display: inline-block">我們的服務</div>
        <p class="section-subtitle q-mx-auto q-mb-xl">
          提供多元化的清潔服務，滿足您不同的需求
        </p>
        <div class="row q-col-gutter-lg">
          <div v-for="service in services" :key="service.title" class="col-12 col-sm-6 col-md-3">
            <q-card flat class="service-card q-pa-lg text-center" style="height: 100%">
              <div class="feature-icon bg-green-1 q-mx-auto q-mb-md">
                <q-icon :name="service.icon" size="36px" color="primary" />
              </div>
              <div class="text-h6 text-weight-bold q-mb-sm">{{ service.title }}</div>
              <p class="text-body2 text-grey-7">{{ service.desc }}</p>
            </q-card>
          </div>
        </div>
        <q-btn
          unelevated
          no-caps
          label="查看全部服務"
          color="primary"
          rounded
          class="q-mt-xl"
          to="/services"
          icon-right="mdi-arrow-right"
        />
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="q-pa-xl">
      <div style="max-width: 1200px; margin: 0 auto">
        <div class="row items-center q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <div class="section-title">為什麼選擇我們？</div>
            <p class="section-subtitle q-mb-lg">
              我們致力於提供最高品質的清潔服務，讓每位客戶都能安心託付
            </p>
            <q-list>
              <q-item v-for="reason in reasons" :key="reason.title" class="q-mb-md">
                <q-item-section avatar>
                  <q-avatar color="green-1" text-color="primary" icon="">
                    <q-icon :name="reason.icon" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold text-subtitle1">{{ reason.title }}</q-item-label>
                  <q-item-label caption style="line-height: 1.6">{{ reason.desc }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-12 col-md-6 flex flex-center">
            <div class="bg-green-1 rounded-borders q-pa-xl" style="border-radius: 24px; width: 100%">
              <div class="row q-col-gutter-lg">
                <div v-for="stat in stats" :key="stat.label" class="col-6 text-center">
                  <q-icon :name="stat.icon" size="40px" color="primary" class="q-mb-sm" />
                  <div class="text-h4 text-weight-bold text-primary">{{ stat.value }}</div>
                  <div class="text-caption text-grey-7">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="q-pa-xl" style="background: #fafafa">
      <div style="max-width: 1200px; margin: 0 auto" class="text-center">
        <div class="section-title" style="display: inline-block">客戶好評</div>
        <p class="section-subtitle q-mx-auto q-mb-xl">
          聽聽我們的客戶怎麼說
        </p>
        <div class="row q-col-gutter-lg">
          <div v-for="review in reviews" :key="review.name" class="col-12 col-md-4">
            <q-card flat class="testimonial-card q-pa-lg text-left" style="height: 100%">
              <div class="row items-center q-mb-md">
                <q-avatar color="primary" text-color="white" class="q-mr-sm">
                  {{ review.name[0] }}
                </q-avatar>
                <div>
                  <div class="text-weight-bold">{{ review.name }}</div>
                  <div class="text-caption text-grey-6">{{ review.area }}</div>
                </div>
              </div>
              <div class="q-mb-sm">
                <q-icon v-for="n in 5" :key="n" name="mdi-star" color="amber" size="18px" />
              </div>
              <p class="text-body2 text-grey-8" style="line-height: 1.8">
                {{ review.text }}
              </p>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section q-pa-xl text-center text-white">
      <div style="max-width: 800px; margin: 0 auto">
        <q-icon name="mdi-phone-ring" size="48px" class="q-mb-md" />
        <h2 class="text-h4 text-weight-bold q-mb-sm">準備好讓您的家煥然一新了嗎？</h2>
        <p class="text-body1 q-mb-lg" style="opacity: 0.9">
          立即聯絡我們，獲得免費估價。讓專業團隊為您打造潔淨空間！
        </p>
        <div class="row justify-center q-gutter-md">
          <q-btn
            unelevated
            no-caps
            label="立即預約"
            color="white"
            text-color="primary"
            size="lg"
            rounded
            to="/contact"
          />
          <q-btn
            outline
            no-caps
            label="撥打 0967-193-868"
            color="white"
            size="lg"
            rounded
            icon="mdi-phone"
            href="tel:0967193868"
            type="a"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { useMeta, useQuasar } from "quasar";

export default {
  name: "IndexPage",
  setup() {
    const $q = useQuasar();
    useMeta({
      title: "昕禾生活 - 台中專業居家清潔服務｜收納整理｜裝潢清潔",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "昕禾生活事業有限公司提供居家清潔、收納管理、搬家清潔、裝潢清潔、辦公室清潔等專業服務。台中市西屯區，週一至週日全時段服務。" },
        keywords: { name: "keywords", content: "台中居家清潔,台中清潔公司,西屯區清潔,搬家清潔,裝潢清潔,辦公室清潔,收納管理,大掃除,昕禾生活" },
        ogTitle: { property: "og:title", content: "昕禾生活 - 台中專業居家清潔服務" },
        ogDescription: { property: "og:description", content: "「昕」代表嶄新與希望，「禾」寓意用心耕耘每一個細節。從日常清潔到深度整理，讓每個空間恢復潔淨與溫度。" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const services = [
      { icon: "mdi-broom", title: "居家清潔", desc: "日常居家環境維護，讓您回到乾淨舒適的家" },
      { icon: "mdi-spray-bottle", title: "大掃除", desc: "深度清潔每個角落，還原居家原本面貌" },
      { icon: "mdi-sofa", title: "搬家清潔", desc: "搬遷前後全面清潔，安心入住新空間" },
      { icon: "mdi-office-building", title: "辦公室清潔", desc: "維持專業辦公環境，提升工作效率與形象" },
    ];

    const reasons = [
      { icon: "mdi-shield-check", title: "專業清潔人員", desc: "經過嚴格培訓的清潔團隊，確保每次服務都達到高品質標準" },
      { icon: "mdi-magnify", title: "細節到位不馬虎", desc: "注重每一個細節，從看得到的地方到容易忽略的角落，絕不馬虎" },
      { icon: "mdi-clipboard-check", title: "客製化服務方案", desc: "根據您的需求量身打造清潔方案，滿足不同空間與預算的需求" },
      { icon: "mdi-clock-check", title: "彈性服務時間", desc: "週一至週日 09:00-21:00 全時段服務，配合您的作息安排" },
    ];

    const stats = [
      { icon: "mdi-account-group", value: "5,000+", label: "服務家庭" },
      { icon: "mdi-thumb-up", value: "98%", label: "客戶滿意度" },
      { icon: "mdi-calendar-check", value: "8年+", label: "服務經驗" },
      { icon: "mdi-account-hard-hat", value: "50+", label: "專業人員" },
    ];

    const reviews = [
      { name: "陳小姐", area: "台中市西屯區", text: "清潔人員非常專業細心，連廚房油煙機都清得亮晶晶。以後固定找他們了！" },
      { name: "林先生", area: "台中市北屯區", text: "搬新家前請他們來做深度清潔，效果超乎預期。價格也很合理，大力推薦！" },
      { name: "王太太", area: "台中市南屯區", text: "每個月固定請他們來打掃，服務品質一直很穩定。客服回覆也很即時，非常滿意。" },
    ];

    return { $q, services, reasons, stats, reviews };
  },
};
</script>
