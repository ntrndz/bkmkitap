<template>
  <div class="sign-up">
    <div class="tabs">
      <button :class="{ active: isSignUp }" @click="toggleTab(true)">Üye Kayıt</button>
      <button :class="{ active: !isSignUp }" @click="toggleTab(false)">Üye Girişi</button>
    </div>

    <div v-if="isSignUp" class="form-container">
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

      <button @click="submitForm" class="submit-btn">Kayıt Ol</button>

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

      <button @click="submitForm" class="submit-btn">Giriş Yap</button>

      <div class="social-login">
        <div class="separator">veya</div>
        <button class="social-btn facebook">Facebook ile Bağlan</button>
        <button class="social-btn google">Google ile Bağlan</button>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

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
  name: "SignUp",
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
    };
  },
});
</script>

<style scoped lang="scss">
.sign-up {
  max-width: 500px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
