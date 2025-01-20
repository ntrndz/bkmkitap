<template>
  <div class="book-detail">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <span v-for="(item, index) in breadcrumb" :key="index">
        <span v-if="index > 0"> &gt; </span>{{ item }}
      </span>
    </nav>

    <div class="book-container">
      <!-- Left: Book Image -->
      <img :src="book.image" alt="book cover" class="book-image" />

      <!-- Right: Book Information -->
      <div class="book-info">
        <h1 class="book-title">{{ book.title }}</h1>
        <p class="book-author">{{ book.author }}</p>

        <!-- Price and Discount Section -->
        <div class="price-discount-container">
          <!-- Left: Price -->
          <div class="price-section">
            <p class="producer-price">Üretici Liste Fiyatı</p>
            <p class="original-price">
              <span class="strike">{{ book.originalPrice }} TL</span>
            </p>
            <p class="discounted-price">{{ book.discountedPrice }} TL</p>
          </div>

          <!-- Right: Discount Info -->
          <div class="discount-info">
            <div class="discount-badge">
              %{{ book.discountRate }} İndirim
            </div>
            <p class="savings">Kazancınız: <span>{{ book.savings }} TL</span></p>
            <p class="parapuan">Parapuan: {{ book.parapuan }}</p>
          </div>
        </div>

        <!-- Add to Favorites -->
        <button class="add-to-favorites">
          <i class="fas fa-heart"></i> ❤ Alışveriş Listeme Ekle
        </button>

        <!-- Quantity and Add to Cart -->
        <div class="actions">
          <div class="quantity-controls">
            <button @click="decreaseQuantity" class="quantity-btn">-</button>
            <span class="quantity">{{ quantity }}</span>
            <button @click="increaseQuantity" class="quantity-btn">+</button>
          </div>
          <button @click="addToCart" class="add-to-cart">Sepete Ekle</button>
        </div>

        <!-- Book Details -->
        <div class="book-details">
<div class="details-row">
  <p><strong>Türü:</strong> Roman</p>
  <p><strong>Kapak:</strong> Cilti</p>
  <p><strong>Sayfa Sayısı:</strong> 392</p>
</div>
<div class="details-row">
  <p><strong>ISBN:</strong> 9786256149007</p>
  <p><strong>Basım Yılı:</strong> 2024</p>
  <p><strong>Kağıt Tipi:</strong> 1. Hamur</p>
</div>
<div class="sales-info">
  <p><span class="sales-icon">📊</span> Satış Rakamları: 2720 adet satılmıştır.</p>
</div>
</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "BookDetail",
  data() {
    return {
      breadcrumb: ["Anasayfa", "Edebiyat Kitapları", "Araştırma ve İnceleme Kitapları", "Edebiyatın İlhamıyla Taylor Swift"],
      book: {
        title: "Edebiyatın İlhamıyla Taylor Swift",
        author: "Rachel Feder",
        originalPrice: 265.0,
        discountedPrice: 185.5,
        savings: 79.5,
        discountRate: 30,
        parapuan: 188,
        genre: "Araştırma ve İnceleme Kitapları",
        cover: "Ciltli",
        pages: 256,
        paperType: "1. Hamur",
        isbn: "9786259580351",
        publicationYear: 2024,
        sales: 461,
        image: "/images/kitap.png",
      },
      quantity: ref(1),
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) this.quantity--;
    },
    addToCart() {
      alert("Kitap sepete eklendi!");
    },
  },
});
</script>

<style scoped>
.book-details {
font-family: Arial, sans-serif;
font-size: 14px;
margin-top: 20px;
}
.details-row {
display: flex;
justify-content: space-between;
margin-bottom: 8px;
}
.details-row p {
margin: 0;
flex: 1;
}
.breadcrumb {
  font-size: 14px;
  margin-bottom: 20px;
  color: #555;
  margin-left: 225px;
}

.book-container {
  display: flex;
  align-items: center; /* Dikeyde ortalar */
  justify-content: center; /* Yatayda ortalar */
  gap: 70px; /* Görsel ve metin arasındaki boşluk */
  margin: 0 auto; /* Tüm yapıyı yatayda ortalar */
  max-width: 1200px; /* Genişlik sınırı */
  padding: 20px; /* Üstten ve alttan boşluk */
  margin-bottom: 500px;
}

.book-image {
  width: 290px;
  height: 440px;
  object-fit: cover; /* Görüntüyü kırpmadan sığdırır */
  display: block;
  margin-right: 50px; /* Görselin sağ tarafına ek mesafe */

}

.book-info {
  flex: 1;
}

.book-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.book-author {
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
}

.price-discount-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.price-section {
  text-align: left;
}

.producer-price {
  color: red;
  font-size: 14px;
  margin-bottom: 5px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  margin-bottom: 5px;
}

.discounted-price {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.discount-info {
  text-align: right;
  
}

.discount-badge {
  background-color: #d4edda;
  color: #155724;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.savings {
  color: green;
  font-size: 14px;
}

.parapuan {
  font-size: 14px;
  color: #333;
}

.add-to-favorites {
  background: none;
  border: none;
  color: #e30613;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 5px;
}

.quantity-btn {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
}

.quantity {
  font-weight: bold;
}

.add-to-cart {
  background-color: #e30613; /* Arka plan rengi */
  color: white; /* Yazı rengi */
  border: none; /* Kenarlık kaldır */
  padding: 15px 30px; /* Butonu büyütmek için iç boşlukları artır */
  cursor: pointer; /* İmleci el işareti yap */
  font-size: 18px; /* Yazı boyutunu büyüt */
  border-radius: 10px; /* Kenarları yumuşat */
  font-weight: bold; /* Yazıyı kalın yap */
  transition: all 0.3s ease; /* Hover geçişleri için */
  width: 700px;
}

/* Hover efekti */
.add-to-cart:hover {
  background-color: #8d0e17; /* Daha koyu bir kırmızı */
  transform: scale(1.05); /* Hover durumunda butonu büyüt */
}


.details {
  margin-top: 20px;
}

.details p {
  margin: 5px 0;
}

.sales {
  color: #e30613;
  border: 1px solid #e30613;
  padding: 5px;
  border-radius: 5px;
}
.sales-info {
margin-top: 10px;
border: 1px solid red;
border-radius: 8px;
padding: 8px;
color: red;
display: flex;
align-items: center;
}
.sales-icon {
margin-right: 8px;
}
</style>