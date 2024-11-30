<template>
  <div class="sign-up">
    <div class="text-center header">
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-left.svg" alt="Icon Left" class="icon" />
      <h5 class="title">Üye Ol</h5>
      <img src="https://cdn.bkmkitap.com/Data/EditorFiles/title_icon-right.svg" alt="Icon Right" class="icon" />
    </div>

    <div class="container">
      <div class="card">
        <input v-model="ad" type="text" placeholder="Ad" class="input-field" />
        <input v-model="soyad" type="text" placeholder="Soyad" class="input-field" />
        <input v-model="email" type="email" placeholder="E-posta" class="input-field" />
        <input v-model="password1" type="password" placeholder="Şifre" class="input-field" />
        <input v-model="password2" type="password" placeholder="Şifre Tekrar" class="input-field" />
        <div class="checkbox">
          <input v-model="val" type="checkbox" />
          <label for="terms">Kullanım Koşulları ve Gizlilik Politikası'nı okudum, kabul ediyorum.</label>
        </div>
        <button @click="submitForm" class="submit-btn">Üye Ol</button>
      </div>

      <div class="image-card">
        <img
          src="https://cdn.bkmkitap.com/Data/EditorFiles/bkmkitap/uye-kayit-mobil-uygulamamizi-indirin.jpg"
          alt="Mobile App Image"
          class="image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      val: true,
      password1: "",
      password2: "",
      ad: "",
      soyad: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      // Formu gönderme işlemi buraya eklenecek
      console.log("Form Submitted");
    },
  },
};
</script>

<style scoped lang="scss">
.sign-up {
  background-color: #e6e6e6;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.icon {
  margin: 0 10px;
}

.title {
  display: inline-block;
  max-width: 100%;
  font-size: 2.75rem;
  font-family: "AvenirNextLTPro-Demi";
  margin-top: 50px;
  margin-left: 10px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  border: 2px solid #e30613;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 400px;
}

.input-field {
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.checkbox {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.checkbox input {
  margin-right: 10px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #e30613;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #b70011;
}

.image-card {
  width: 400px;
  height: auto;
  max-width: 100%;
  margin-left: 20px;
}

.image {
  width: 100%;
  border-radius: 10%;
}
</style>
