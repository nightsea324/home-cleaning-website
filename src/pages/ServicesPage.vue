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
      title: "服務項目 - 昕禾生活｜台中居家清潔",
      titleTemplate: "",
      meta: {
        description: { name: "description", content: "昕禾生活提供居家清潔、收納管理、搬家清潔、裝潢清潔、空屋清潔、抽油煙機清洗、辦公室清潔等14項專業服務。台中地區，客製化方案。" },
        keywords: { name: "keywords", content: "台中居家清潔,收納管理,搬家清潔,裝潢清潔,空屋清潔,抽油煙機清洗,辦公室清潔,大掃除,廚房清潔,玻璃清潔" },
        ogTitle: { property: "og:title", content: "服務項目 - 昕禾生活" },
        ogDescription: { property: "og:description", content: "14項專業清潔服務，從日常清潔到特殊清潔，滿足您的所有需求。" },
        ogType: { property: "og:type", content: "website" },
      },
    });

    const services = [
      {
        icon: "mdi-broom",
        title: "居家清潔",
        badge: "熱門",
        desc: "定期維護居家環境整潔，專業人員依照標準流程，確保每個區域都乾淨整齊。",
        items: ["客廳、臥室吸塵拖地", "廚房檯面與水槽清潔", "浴室基礎清潔", "垃圾整理與丟棄", "家具表面除塵"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-package-variant-closed",
        title: "收納管理",
        badge: "推薦",
        desc: "專業收納規劃，讓您的居住空間更加井然有序，找東西不再困難。",
        items: ["空間規劃與動線優化", "衣物分類收納", "廚房收納整理", "書房與雜物間整理", "收納用品建議"],
        price: "依需求報價",
      },
      {
        icon: "mdi-truck-delivery",
        title: "搬家清潔",
        badge: "",
        desc: "搬入新居或退租時的全面清潔服務，確保空間達到入住標準。",
        items: ["全室除塵與清潔", "廚房衛浴深度清潔", "窗戶與陽台清洗", "櫥櫃內外清潔", "牆面汙漬處理"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-hammer-wrench",
        title: "裝潢清潔",
        badge: "",
        desc: "裝潢工程完畢後的細緻清潔，清除粉塵、殘膠與建材殘留物。",
        items: ["粉塵全面清除", "殘膠去除", "地板清潔保養", "窗框與軌道清潔", "五金擦拭亮化"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-home-outline",
        title: "空屋清潔",
        badge: "",
        desc: "針對空置房屋進行全面清潔，無論是出租前準備或新屋入住前的清潔。",
        items: ["全室地板清潔", "牆面與天花板除塵", "衛浴設備清潔", "廚房設備清潔", "門窗軌道清理"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-fan",
        title: "抽油煙機清洗",
        badge: "",
        desc: "專業拆洗抽油煙機，清除積年油垢，恢復排煙效率，維護廚房空氣品質。",
        items: ["油煙機外殼清洗", "風扇葉片拆洗", "濾網深度清潔", "內部管道清理", "功能檢測"],
        price: "依機型報價",
      },
      {
        icon: "mdi-office-building",
        title: "辦公室清潔",
        badge: "",
        desc: "維持專業辦公環境整潔，提升企業形象與員工工作效率。",
        items: ["辦公區域清潔", "會議室整理", "茶水間與廁所清潔", "地毯吸塵", "垃圾清運"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-spray-bottle",
        title: "大掃除",
        badge: "季節推薦",
        desc: "針對長期累積的頑固汙垢進行徹底清潔，適合年終或季節性大掃除。",
        items: ["廚房油汙深度清洗", "浴室水垢與霉斑處理", "窗戶與紗窗清洗", "家電表面深度清潔", "地板保養"],
        price: "依坪數報價",
      },
      {
        icon: "mdi-silverware-fork-knife",
        title: "廚房清潔",
        badge: "",
        desc: "針對廚房區域的深度清潔，去除油垢、水漬，還原廚房清爽面貌。",
        items: ["流理台與水槽清潔", "瓦斯爐深度除垢", "冰箱外部清潔", "櫥櫃內外擦拭", "磁磚縫隙清潔"],
        price: "依需求報價",
      },
      {
        icon: "mdi-window-closed-variant",
        title: "玻璃清潔",
        badge: "",
        desc: "專業玻璃清潔服務，讓門窗透亮如新，提升居家採光與美觀。",
        items: ["室內外玻璃清洗", "窗框與軌道清潔", "紗窗清洗", "落地窗清潔", "玻璃帷幕清洗"],
        price: "依面積報價",
      },
      {
        icon: "mdi-stairs",
        title: "樓梯清潔",
        badge: "",
        desc: "公寓大樓或透天厝樓梯間的清潔服務，維持公共空間的整潔。",
        items: ["樓梯踏面清洗", "扶手擦拭消毒", "轉角除塵", "踢腳板清潔", "梯間照明除塵"],
        price: "依樓層報價",
      },
      {
        icon: "mdi-account-heart",
        title: "家事服務",
        badge: "",
        desc: "日常家務協助，包含清潔、整理等居家事務，減輕您的生活負擔。",
        items: ["日常清掃拖地", "衣物整理", "簡易收納", "垃圾處理", "其他家事協助"],
        price: "依時數報價",
      },
      {
        icon: "mdi-human-wheelchair",
        title: "老人照顧",
        badge: "",
        desc: "為年長者提供居家環境整理與基礎生活協助，讓長輩住得舒適安心。",
        items: ["居住環境清潔", "生活空間整理", "基礎生活協助", "安全環境維護", "定期關懷服務"],
        price: "依需求報價",
      },
      {
        icon: "mdi-star-circle",
        title: "特殊清潔",
        badge: "",
        desc: "針對特殊狀況的清潔需求，提供客製化解決方案。",
        items: ["特殊汙漬處理", "消毒殺菌服務", "異味去除", "特殊材質清潔", "其他客製需求"],
        price: "依需求報價",
      },
    ];

    return { services };
  },
};
</script>
