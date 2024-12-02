<script lang="ts" setup>
import { ref } from 'vue';

const campaigns = ref([
  {
    id: 954,
    image: 'https://cdn.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022-12340819-75-O.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Fosforlu Kalem 38 Pastel 4Lü 2022',
    link: 'https://www.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022',
    price: '149.90 TL',
  },
  {
    id: 952,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/952.jpg',
    title: '100 TL\'lik alışverişe Edding 2185 Jel Roller 5Li Set Karışık Metalik-Beyaz',
    link: 'https://www.bkmkitap.com/edding-crystal-jelly-roller-kalem-5li-poset',
    price: '99.90 TL',
  },
  {
    id: 953,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/953.jpg',
    title: '100 TL\'lik alışverişe Adel Auto Prime Canlı Renkler 0.7 Mm Asorti',
    link: 'https://www.bkmkitap.com/adel-auto-prime-canli-renkler-07-mm-asorti',
    price: '49.90 TL',
  },
  {
    id: 951,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/951.jpg',
    title: '100 TL\'lik alışverişe NTT 6Lı Defter Seti - Animals',
    link: 'https://www.bkmkitap.com/ntt-6li-defter-seti-animals-8x12cm-48-sayfa',
    price: '24.90 TL',
  },
  {
    id: 950,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/950.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Pastel Boya Silinebilir Wax 25 Renk',
    link: 'https://www.bkmkitap.com/faber-castell-silinebilir-wax-crayon-pastel-boya-25li-5281122725',
    price: '199.90 TL',
  },
  {
    id: 926,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/926.jpg',
    title: '100 TL\'lik alışverişe Helvacı Aksesuarlı Islak Mendil',
    link: 'https://www.bkmkitap.com/helvaci-aksesuarli-islak-mendil',
    price: '29.90 TL',
  },
]);

const toggleCampaign = (id: number) => {
  console.log(`Campaign with id ${id} toggled.`);
};
</script>

<template>
  <div class="cart-campaign-list py-1 my-2">
    <div class="cart-cmp-title text-primary mb-1 fw-semibold">Sepete Özel Kampanyalar</div>
    <div class="row">
      <div
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="col-6 col-sm-2 mb-2 mb-md-1"
      >
        <div class="campaign-item w-100 h-100 px-1 pb-1 bg-white">
          <div class="campaign-item-img border-round">
            <img :src="campaign.image" :alt="campaign.title" class="border-round" />
          </div>
          <div class="campaign-item-title fw-semibold">
            <a :href="campaign.link" target="_blank" class="text-decoration-none text-dark">
              {{ campaign.title }}
            </a>
          </div>
          <div class="text-secondary mt-1">{{ campaign.price }}</div>
          <div class="mt-1">
            <button
              class="btn btn-primary w-100"
              @click="toggleCampaign(campaign.id)"
            >
              Aktif Et
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-campaign-list {
  background-color: #f8f9fa;
}
.campaign-item {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.campaign-item-img img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
.campaign-item-title {
  font-size: 14px;
  margin-top: 8px;
}
</style>
