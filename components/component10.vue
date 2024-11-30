<!-- MyComponent.vue -->
<template>
    <div class="my-component">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
  
      <button @click="toggleMessage">{{ buttonText }}</button>
  
      <p v-if="showMessage">Bu mesaj bir butona tıklanarak gösterildi!</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Veri tanımları
  const title = ref('Basit Vue Component');
  const description = ref('Bu component Vue 3 ve Composition API kullanılarak yazılmıştır.');
  const buttonText = ref('Mesajı Göster');
  const showMessage = ref(false);
  
  // Butona tıklama işlevi
  const toggleMessage = () => {
    showMessage.value = !showMessage.value;
    buttonText.value = showMessage.value ? 'Mesajı Gizle' : 'Mesajı Göster';
  };
  </script>
  
  <style scoped>
  .my-component {
    border: 1px solid #ddd;
    padding: 20px;
    max-width: 400px;
    margin: 20px auto;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  button {
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 15px;
    font-size: 16px;
  }
  </style>
  