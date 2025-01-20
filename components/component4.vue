<template>
  <div class="sign-up">
    <div class="tabs">
      <button :class="{ active: isSignUp }" @click="toggleTab(true)">Üye Kayıt</button>
      <button :class="{ active: !isSignUp }" @click="toggleTab(false)">Üye Girişi</button>
    </div>

    <div v-if="isSignUp" class="container">
      <div class="form-group">
        <input v-model="ad" type="text" placeholder="Ad *" class="input-field" />
        <input v-model="soyad" type="text" placeholder="Soyad *" class="input-field" />
        <input v-model="birthday" type="date" placeholder="Doğum Tarihi" class="input-field" />
        <input v-model="cepno" type="tel" placeholder="Cep Telefonu *" class="input-field" />
        <input v-model="email" type="email" placeholder="E-posta Adresi *" class="input-field" />

        
        <div class="password-field">
          <input
            v-model="password1"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Şifre *"
            class="input-field"
          />
          <img
            :src="passwordVisible ? '/images/eye-open.png' : '/images/eye-closed.png'"
            alt="Toggle Password Visibility"
            class="toggle-password-icon"
            @click="togglePasswordVisibility"
          />
        </div>

        <div class="password-field">
          <input
            v-model="password2"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Şifre Tekrar *"
            class="input-field"
          />
          <img
            :src="passwordVisible1 ? '/images/eye-open.png' : '/images/eye-closed.png'"
            alt="Toggle Password Visibility"
            class="toggle-password-icon1"
            @click="togglePasswordVisibility1"
          />
        </div>


      </div>

      <div class="checkbox-group">
        <div class="checkbox" v-for="(label, index) in checkboxLabels" :key="index">
          <input type="checkbox" v-model="checkboxValues[index]" />
          <label>{{ label }}</label>
        </div>
      </div>

      <button @click="handleRegister" class="submit-btn">Kayıt Ol</button>

      <div class="social-login">
        <div class="separator">veya</div>
        <button class="social-btn facebook">Facebook ile Kayıt Ol</button>
        <button class="social-btn google">Google ile Kayıt Ol</button>
      </div>
    </div>



    <div v-if="!isSignUp" class="form-container">
      <div class="form-group">
        <input v-model="email" type="email" placeholder="E-posta Adresi *" class="input-field" />
        <div class="password-field">
          <input
            v-model="password1"
            :type="passwordVisible ? 'text' : 'password'"
            placeholder="Şifre *"
            class="input-field"
          />
          <img
            :src="passwordVisible ? '/images/eye-open.png' : '/images/eye-closed.png'"
            alt="Toggle Password Visibility"
            class="toggle-password-icon"
            @click="togglePasswordVisibility"
          />
        </div>

      </div>

      <div class="checkbox-group">
        <div class="checkbox" v-for="(label, index) in checkboxLabels2" :key="index">
          <input type="checkbox" v-model="checkboxValues[index]" />
          <label>{{ label }}</label>
        </div>
      </div>

      <button @click="handleLogin" class="submit-btn">Giriş Yap</button>

      <div class="social-login">
        <div class="separator">veya</div>
        <button class="social-btn facebook">Facebook ile Bağlan</button>
        <button class="social-btn google">Google ile Bağlan</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { useNuxtApp } from "#app";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import { addDoc, collection } from "firebase/firestore";
const passwordVisible = ref(false); // Şifre görünürlüğü kontrolü
const passwordVisible1 = ref(false); // Şifre görünürlüğü kontrolü
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
const togglePasswordVisibility1 = () => {
  passwordVisible1.value = !passwordVisible1.value;
};
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Component4",
  setup() {
    const isSignUp = ref(true);
    const ad = ref("");
    const soyad = ref("");
    const birthday = ref("");
    const cepno = ref("");
    const email = ref("");
    const password1 = ref("");
    const password2 = ref("");
    const checkboxValues = ref([false, false, false]);
    const authStore = useAuthStore();
        const router = useRouter();
        const { $firebaseDb } = useNuxtApp();
    const checkboxLabels = ref([
      "Ticari Elektronik İleti Onayı metnini okudum, onaylıyorum. Tarafınızdan gönderilecek bilgilendirme e-postalarını almak istiyorum.",
        "Ticari Elektronik İleti Onayı metnini okudum, onaylıyorum. Tarafınızdan gönderilecek bilgilendirme sms'lerini almak istiyorum.",
        "Ticari Elektronik İleti Onayı metnini okudum, onaylıyorum. Tarafınızdan gönderilecek bilgilendirme arama'larını almak istiyorum.",
        "KVKK Sözleşmesi'ni okudum ve kabul ediyorum.",

       
    ]);

    const checkboxLabels2 = ref([
      "Beni Hatırla",
      
    ]);

    const toggleTab = (signUp: boolean) => {
      isSignUp.value = signUp;
    };

    const submitForm = () => {
      console.log("Form Data:", {
        ad: ad.value,
        soyad: soyad.value,
        birthday: birthday.value,
        cepno: cepno.value,
        email: email.value,
        password1: password1.value,
        checkboxValues: checkboxValues.value,
      });
    };


    const registerUser = async () => {
      if (password1.value !== password2.value) {
        alert("Şifreler uyuşmuyor!");
        return;
      }
      try {
        await authStore.register(email.value, password1.value);
        await addDoc(collection($firebaseDb, "users"), {
          ad: ad.value,
          soyad: soyad.value,
          birthday: birthday.value,
          cepno: cepno.value,
          email: email.value,
        });
        alert("Kayıt başarılı! Profil sayfasına yönlendiriliyorsunuz.");
        router.push("/page3"); // Profil sayfasına yönlendir
      } catch (error) {
        console.error("Kayıt sırasında bir hata oluştu:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      }
    };

    const loginUser = async () => {
      try {
        await authStore.login(email.value, password1.value);
        alert("Giriş başarılı!");
        router.push("/page3"); // Profil sayfasına yönlendir
      } catch (error) {
        console.error("Giriş sırasında bir hata oluştu:", error);
        alert("Bir hata oluştu, lütfen bilgilerinizi kontrol edin.");
      }
    };

    const handleRegister = async () => {
      submitForm(); // Formu kontrol etmek ve verileri göstermek için
      await registerUser(); // Kayıt işlemini yürütmek için
    };

    const handleLogin = async () => {
      submitForm(); // Formu kontrol etmek ve verileri göstermek için
      await loginUser(); // Giriş işlemini yürütmek için
    };

    return {
      isSignUp,
      ad,
      soyad,
      birthday,
      cepno,
      email,
      password1,
      password2,
      checkboxLabels,
      checkboxLabels2,
      checkboxValues,
      toggleTab,
      submitForm,
      passwordVisible,
      passwordVisible1,
      togglePasswordVisibility,
      togglePasswordVisibility1,
      registerUser,
      loginUser,
      handleRegister,
      handleLogin,
    };
  },
});
</script>

<style scoped lang="scss">
.sign-up {
  width: 60%; /* Genişliği artırdım */
  max-width: 600px; /* Maksimum genişlik belirlendi */
  margin: 0 auto; /* Ortalamak için */
  background-color: #fff; /* Arka plan rengi */
  padding: 20px; /* İç boşluklar */
  border-radius: 10px; /* Köşe yuvarlama */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Hafif bir gölge efekti */
  margin-top: 100px;
  margin-bottom: 55px;
}


.tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tabs button {
  flex: 1;
  padding: 10px;
  border: none;
  background: #ffffff;
  cursor: pointer;
}

.tabs button.active {
  color: #e30613;
  font-weight: bold;
}


.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  
}

.input-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.phone-input {
  display: flex;
  align-items: center;
  gap: 5px;
}


.checkbox-group {
  margin: 20px 0;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background: #e30613;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background: #b70011;
}

.social-login {
  text-align: center;
  margin-top: 20px;
}

.social-btn {
  display: block;
  margin: 5px 0;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
}

.facebook {
  background: #3b5998;
}

.google {
  background: #db4437;
}

.separator {
  margin: 20px 0;
  font-weight: bold;
  color: #999;
}

.password-field {
  position: relative;
  width: 100%; /* Kutucuğun genişliğini artırmak için %100 yapıldı */
}

.input-field {
  width: 100%; /* Kutucuğun genişliği %100 */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-right: 40px; /* Sağ tarafta simgeye yer bırakmak için artırıldı */
}

.toggle-password-icon {
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.toggle-password-icon1 {
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.input-group-append {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.text-gray {
  color: #888;
  font-size: 18px;
}



</style>
