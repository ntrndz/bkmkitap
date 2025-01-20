<template>

  <div class="cart-container1">
    <div class="cart-icon-and-text1">
      <img src="/public/images/sepet.png" alt="Sepet" class="cart-icon1" />
      <span class="cart-text1">Sepetim</span>
    </div>
  </div>
      
    <div class="cart-container">

      
      <!-- Sol Div (Ürünler Listesi) -->
      <div class="cart-left">
        
     
        <div class="cart-item">
          
          <!-- Kitap Resmi ve Bilgileri -->
          <div class="item-left">
            <img src="/images/kitap.png" alt="Ürün Görseli" class="product-image" />
            <div class="product-info">
              <h3 class="product-title">Edebiyatın İlhamıyla Taylor Swift</h3>
              <p class="product-author">Rachel Feder</p>
            </div>
          </div>
  
          <!-- Adet Butonları -->
          <div class="item-center">
            <p class="quantity-label">Adet:</p>
            <div class="quantity-controls">
              <button @click="decreaseQuantity" class="quantity-btn">-</button>
              <span class="quantity">{{ quantity }}</span>
              <button @click="increaseQuantity" class="quantity-btn">+</button>
            </div>
          </div>
  
          <!-- Fiyat -->
          <div class="item-right">
            <div class="price-section">
              <p class="price-label">Fiyat</p>
              <p class="producer-price">Üretici Liste Fiyatı</p>
              <p class="original-price">
                <span class="strike">265,00 TL</span>
              </p>
              <p class="savings">
                <span class="savings-badge">Kazancınız: 79,50 TL</span>
              </p>
              <p class="discounted-price">185,50 TL</p>
            </div>
            <!-- Sil ve Çöp Kutusu -->
            <div class="delete-section">
              <button @click="togglePopup" class="delete-btn">
                <span>Sil</span>
                <div class="trash-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6l-2 14H7L5 6"></path>
                    <path d="M10 11v6"></path>
                    <path d="M14 11v6"></path>
                    <path d="M4 6l1-1h14l1 1"></path>
                  </svg>
                </div>
              </button>
              <!-- Açılır Pencere -->
              <div v-if="popupVisible" class="popup">
                <p>Silmek istediğinize emin misiniz?</p>
                <div class="popup-actions">
                  <button @click="removeItem" class="popup-btn">Sil</button>
                  <button @click="addToFavorites" class="popup-btn popup-btn-fav">
                    Sil ve Favorilere Ekle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Alt Butonlar -->
        <div class="cart-left-buttons">
          <button class="cart-list-btn">
            <i class="fas fa-heart"></i> Alışveriş Listeme Ekle
          </button>
          <button class="cart-clear-btn">
            <i class="fas fa-trash"></i> Sepeti Temizle
          </button>
        </div>
      </div>
  
      <!-- Sağ Div (Sepet Özeti) -->
      <div class="cart-summary">
        <button class="continue-shopping-btn">Alışverişe Devam Et</button>
        <div class="coupon-section">
          <input type="text" placeholder="Kupon/Hediye Kartı Kodu" class="coupon-input" />
          <button class="apply-coupon-btn">Uygula</button>
        </div>
        <div class="totals">
          <p>Sepet Toplamı: <span>185,50 TL</span></p>
          <p>Kazancınız: <span class="savings">79,50 TL</span></p>
          <p>Genel Toplam: <span class="total">185,50 TL</span></p>
        </div>
        <button class="checkout-btn">Satın Al</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "Component12",
    setup() {
      const quantity = ref(1);
      const popupVisible = ref(false);
  
      const increaseQuantity = () => {
        quantity.value++;
      };
  
      const decreaseQuantity = () => {
        if (quantity.value > 1) quantity.value--;
      };
  
      const togglePopup = () => {
        popupVisible.value = !popupVisible.value;
      };
  
      const removeItem = () => {
        alert("Ürün silindi.");
        popupVisible.value = false;
      };
  
      const addToFavorites = () => {
        alert("Ürün silindi ve favorilere eklendi.");
        popupVisible.value = false;
      };
  
      return {
        quantity,
        popupVisible,
        increaseQuantity,
        decreaseQuantity,
        togglePopup,
        removeItem,
        addToFavorites,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Genel Container */
  .cart-container {
    display: flex;
    gap: 20px;
    padding: 20px;
    max-width: 1450px; /* Üst kısımla aynı genişlik */
    margin-left: auto; /* Yatayda ortalamak için */
    margin-right: auto; /* Yatayda ortalamak için */
    margin-bottom: 100px;
    margin-top: 5px;
   
  }
  
  /* Sol Div */
  .cart-left {
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-radius: 8px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ddd;
    padding: 16px;
    border-radius: 8px;
    position: relative;
  }
  
  .cart-item:hover {
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  }
  
  /* Kitap Resmi ve Bilgiler */
  .item-left {
    display: flex;
    gap: 16px;
  }
  
  .product-image {
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
  }
  
  .product-info {
    display: flex;
    flex-direction: column;
  }
  
  .product-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
  }
  
  .product-author {
    font-size: 14px;
    color: #666;
  }
  
  /* Adet */
  .item-center {
    text-align: center;
  }
  
  .quantity-label {
    font-size: 14px;
    font-weight: bold;
  }
  
  .quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .quantity-btn {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 4px 8px;
    cursor: pointer;
  }
  
  .quantity {
    font-weight: bold;
  }
  
  /* Fiyat ve Sil */
  .item-right {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  
  .price-section {
    text-align: left;
  }
  
  .price-label {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  
  .producer-price {
    font-size: 14px;
    color: red;
  }
  
  .original-price {
    font-size: 12px;
    color: #999;
  }
  
  .strike {
    text-decoration: line-through;
  }
  
  .savings {
    font-size: 12px;
    margin: 8px 0;
  }
  
  .savings-badge {
    background-color: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
  }
  
  .discounted-price {
    font-size: 16px;
    font-weight: bold;
    color: #e30613;
  }
  
  /* Sil ve Çöp Kutusu */
  .delete-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  
  .delete-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
    text-align: center;
  }
  
  .delete-btn span {
    font-size: 12px;
    font-weight: bold;
    color: black;
  }
  
  .trash-icon {
    width: 32px;
    height: 32px;
    border: 1px solid #ccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .trash-icon:hover {
    background-color: #f5f5f5;
  }
  
  .trash-icon .icon {
    width: 16px;
    height: 16px;
    color: #333;
  }
  
  /* Açılır Pencere */
  .popup {
    position: absolute;
    top: 40px;
    right: 0;
    background: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 8px;
    z-index: 10;
    width: 220px;
  }
  
  .popup p {
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #333;
  }
  
  .popup-actions {
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
  
  .popup-btn {
    flex: 1;
    padding: 8px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    text-align: center;
    background-color: #f5f5f5;
    color: #333;
  }
  
  .popup-btn:hover {
    background-color: #ddd;
  }
  
  .popup-btn-fav {
    background-color: red;
    color: white;
  }
  
  .popup-btn-fav:hover {
    background-color: darkred;
  }
  
  /* Alt Butonlar (Sol Div) */
  .cart-left-buttons {
    display: flex;
    justify-content: flex-start; /* Başlangıca hizala */
    gap: 8px; /* Butonlar arasındaki boşluk */
    align-items: center;
  }
  
  .cart-list-btn,
  .cart-clear-btn {
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    border-radius: 12px;
    color: #333;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .cart-list-btn i,
  .cart-clear-btn i {
    font-size: 14px;
  }
  
  .cart-list-btn:hover,
  .cart-clear-btn:hover {
    background-color: #e6e6e6;
  }
  
  /* Sağ Div */
  .cart-summary {
    flex: 1.2;
    border-radius: 8px;
    padding: 16px;
    background-color: #f9f9f9;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .continue-shopping-btn {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    text-align: center;
    color: red;
    font-weight: bold;
    cursor: pointer;
    border-radius: 16px;
  }
  
  .continue-shopping-btn:hover {
    background-color: red;
    color: white;
  }
  
  .coupon-section {
    display: flex;
    gap: 0;
    width: 100%;
  }
  
  .coupon-input {
    flex: 1;
    padding: 6px;
    border-radius: 12px;
    border: 1px solid #ccc;
  }
  
  .apply-coupon-btn {
    background-color: #e30613;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 12px;
  }
  
  .totals p {
    margin: 4px 0;
    font-size: 14px;
  }
  
  .savings {
    color: #28a745;
  }
  
  .total {
    font-weight: bold;
    color: black;
  }
  
  .checkout-btn {
    background-color: #e30613;
    color: white;
    border: none;
    padding: 10px 16px;
    width: 100%;
    cursor: pointer;
    border-radius: 8px;
    font-size: 16px;
  }
  
  .cart-cmp-title1 {
  color: #e30613; /* Kırmızı başlık */
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 350px;
}

.cart-container1 {
  display: flex;
  margin-left: 200px;
  margin-top: 40px;
  padding: 10px;
  
}

.cart-icon-and-text1 {
  display: flex; /* İkon ve yazıyı yan yana hizalamak için */
  align-items: center; /* Dikeyde ortala */
  gap: 8px; /* İkon ve yazı arasında boşluk */
  background-color: #ffffff; /* Arka plan rengi */
  padding: 10px 20px; /* İç boşluklar */
  border-radius: 8px; /* Köşeleri yuvarla */
  color: rgb(0, 0, 0); /* Yazı rengi beyaz */
  font-size: 30px; /* Yazı boyutu */
  font-weight: bold; /* Yazı kalınlığı */
}

.cart-icon1 {
  width: 50px; /* İkon genişliği */
  height: 50px; /* İkon yüksekliği */
  object-fit: contain; /* İkonu doğru ölçekle */
}

  </style>