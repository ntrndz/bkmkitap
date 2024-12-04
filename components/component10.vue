<script lang="ts" setup>
import { ref } from 'vue';

const campaigns = ref([
  {
    id: 954,
    image: 'https://cdn.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022-12340819-75-O.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Fosforlu Kalem 38 Pastel 4Lü 2022',
    link: 'https://www.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022',
    price: '149.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 952,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/952.jpg',
    title: '100 TL\'lik alışverişe Edding 2185 Jel Roller 5Li Set Karışık Metalik-Beyaz',
    link: 'https://www.bkmkitap.com/edding-crystal-jelly-roller-kalem-5li-poset',
    price: '99.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 953,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/953.jpg',
    title: '100 TL\'lik alışverişe Adel Auto Prime Canlı Renkler 0.7 Mm Asorti',
    link: 'https://www.bkmkitap.com/adel-auto-prime-canli-renkler-07-mm-asorti',
    price: '49.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 910,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/910.jpg',
    title: '100 TL\'lik alışverişe Touch Marker 12li Çift Uçlu Marker Kalem Seti',
    link: 'https://www.bkmkitap.com/touch-marker-12li-cift-uclu-marker-kalem-seti',
    price: '119.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 950,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/950.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Pastel Boya Silinebilir Wax 25 Renk',
    link: 'https://www.bkmkitap.com/faber-castell-silinebilir-wax-crayon-pastel-boya-25li-5281122725',
    price: '199.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 926,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/881.jpg',
    title: '100 TL\'lik alışverişe Matematik Rulosu Öğretici Matematik Oyuncağıl',
    link: 'https://www.bkmkitap.com/matematik-rulosu-ogretici-matematik-oyuncagi',
    price: '89.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },

  
]);

const secondRowCampaigns = ref([
  {
    id: 954,
    image: 'https://cdn.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022-12340819-75-O.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Fosforlu Kalem 38 Pastel 4Lü 2022',
    link: 'https://www.bkmkitap.com/faber-castell-fosforlu-kalem-38-pastel-4lu-2022',
    price: '149.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 952,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/952.jpg',
    title: '100 TL\'lik alışverişe Edding 2185 Jel Roller 5Li Set Karışık Metalik-Beyaz',
    link: 'https://www.bkmkitap.com/edding-crystal-jelly-roller-kalem-5li-poset',
    price: '99.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 953,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/953.jpg',
    title: '100 TL\'lik alışverişe Adel Auto Prime Canlı Renkler 0.7 Mm Asorti',
    link: 'https://www.bkmkitap.com/adel-auto-prime-canli-renkler-07-mm-asorti',
    price: '49.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 910,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/910.jpg',
    title: '100 TL\'lik alışverişe Touch Marker 12li Çift Uçlu Marker Kalem Seti',
    link: 'https://www.bkmkitap.com/touch-marker-12li-cift-uclu-marker-kalem-seti',
    price: '119.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 950,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/950.jpg',
    title: '100 TL\'lik alışverişe Faber-Castell Pastel Boya Silinebilir Wax 25 Renk',
    link: 'https://www.bkmkitap.com/faber-castell-silinebilir-wax-crayon-pastel-boya-25li-5281122725',
    price: '199.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },
  {
    id: 926,
    image: 'https://cdn.bkmkitap.com/Data/Kampanya/926.jpg',
    title: '100 TL\'lik alışverişe Helvacı Aksesuarlı Islak Mendil',
    link: 'https://www.bkmkitap.com/helvaci-aksesuarli-islak-mendil',
    price: '29.90 TL',
    isActive: false, // Başlangıçta aktif değil
  },

  
]);



// Aktif durumu değiştirme fonksiyonu
const toggleCampaign = (campaign: any) => {
  campaign.isActive = !campaign.isActive; // Durumu tersine çevir
};

</script>

<template>
  <div class="cart-campaign-list">
    <h2 class="cart-cmp-title">Sepete Özel Kampanyalar</h2>

    <!-- Üst sıra -->
    <div class="campaign-grid">
      <div
        v-for="campaign in campaigns"
        :key="campaign.id"
        class="campaign-card"
      >
        <div class="card-header">
          <div class="card-banner"></div>
          <img :src="campaign.image" :alt="campaign.title" />
        </div>
        <div class="card-body">
          <a :href="campaign.link" target="_blank" class="campaign-title">
            {{ campaign.title }}
          </a>
          <div class="campaign-price">{{ campaign.price }}</div>
          <div class="campaign-actions">
            <button
              @click="toggleCampaign(campaign)"
              class="action-button"
            >
              {{ campaign.isActive ? 'Aktif' : 'Aktif Et' }}
              <input
                type="checkbox"
                class="campaign-checkbox"
                :checked="campaign.isActive"
                readonly
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Alt sıra -->
    <div class="campaign-grid mt-4">
      <div
        v-for="campaign in secondRowCampaigns"
        :key="`alt-${campaign.id}`"
        class="campaign-card"
      >
        <div class="card-header">
          <div class="card-banner"></div>
          <img :src="campaign.image" :alt="campaign.title" />
        </div>
        <div class="card-body">
          <a :href="campaign.link" target="_blank" class="campaign-title">
            {{ campaign.title }}
          </a>
          <div class="campaign-price">{{ campaign.price }}</div>
          <div class="campaign-actions">
            <button
              @click="toggleCampaign(campaign)"
              class="action-button"
            >
              {{ campaign.isActive ? 'Aktif' : 'Aktif Et' }}
              <input
                type="checkbox"
                class="campaign-checkbox"
                :checked="campaign.isActive"
                readonly
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-campaign-list {
  background-color: #ffffff;
  padding: 20px;
}

.cart-cmp-title {
  color: #e30613; /* Kırmızı başlık */
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 20px;
  margin-left: 35px;
}

.campaign-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.campaign-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 30px;
  overflow: hidden;
  width: 200px;
  
}

.campaign-card:hover {
  border-color: #e30613; /* Hover kırmızı kenar */
  box-shadow: 0 0 3px 1px rgba(255, 0, 0, 0.8);
 
}

.card-header {
  position: relative;
  text-align: center;
}

.card-banner {
  background-color: #e30613;
  height: 35px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.card-header img {
  width: 75%;
  height: auto;
  margin-top: 40px;
}

.card-body {
  padding: 10px;
  text-align: center;
}

.campaign-title {
  font-size: 12px;
  font-weight: bold;
  color: #000000; 
  text-decoration: none;
}

.campaign-title:hover {
  text-decoration: underline;
}

.campaign-price {
  color: #333;
  font-size: 1rem;
  margin: 10px 0;
}

.campaign-actions {
  margin-top: 10px;
}

.action-button {
  background: #ffffff; /* Beyaz buton */
  color: #000000;
  border: 1px solid #000000;
  border-radius: 7px;
  padding: 8px 40px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.action-button:hover {
  color: rgb(255, 0, 0);
  border-color: #e30613;
  box-shadow: 0 0 3px 1px rgba(255, 0, 0, 0.8);
}
</style>
