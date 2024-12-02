<template>
  <div class="home">
    <!-- Sidebar -->
    <div class="sidebar">
      <button class="sidebar-button" @click="updateState(0)">
        Component 1
      </button>
      <button class="sidebar-button" @click="updateState(1)">
        Component 2
      </button>
      <button class="sidebar-button" @click="updateState(2)">
        Component 3
      </button>
      <button class="sidebar-button" @click="updateState(3)">
        Component 4
      </button>
      <button class="sidebar-button" @click="updateState(4)">
        Component 5
      </button>
      <button class="sidebar-button" @click="updateState(5)">
        Component 6
      </button>
      <button class="sidebar-button" @click="updateState(6)">
        Component 7
      </button>
      <button class="sidebar-button" @click="updateState(7)">
        Component 8
      </button>
      <button class="sidebar-button" @click="updateState(8)">
        Component 9
      </button>
      <button class="sidebar-button" @click="updateState(9)">
        Component 10
      </button>
    </div>

    <!-- Main Section -->
    <div class="main-section" v-if="state === 0">
      <component1 />
    </div>
    <div class="main-section" v-if="state === 1">
      <component2 />
    </div>
    <div class="main-section" v-if="state === 2">
      <component3 />
    </div>
    <div class="main-section" v-if="state === 3">
      <component4 />
    </div>
    <div class="main-section" v-if="state === 4">
      <component5 />
    </div>
    <div class="main-section" v-if="state === 5">
      <component6 />
    </div>
    <div class="main-section" v-if="state === 6">
      <component7 />
    </div>
    <div class="main-section" v-if="state === 7">
      <component8 />
    </div>
    <div class="main-section" v-if="state === 8">
      <component9 />
    </div>
    <div class="main-section" v-if="state === 9">
      <component10 />
    </div>
  </div>
</template>


<script>
import("./style.css");

// Bileşenleri içeri aktarma
import component1 from "./components/component1.vue";
import component2 from "./components/component2.vue";
import component3 from "./components/component3.vue";
import component4 from "./components/component4.vue";
import component5 from "./components/component5.vue";
import component6 from "./components/component6.vue";
import component7 from "./components/component7.vue";
import component8 from "./components/component8.vue";
import component9 from "./components/component9.vue";
import component10 from "./components/component10.vue";

export default {
  data() {
    return {
      state: 0, // Hangi bileşenin görüntüleneceğini kontrol eder
    };
  },
  methods: {
    updateState(index) {
      this.state = index;
    },
  },
  components: {
    component1,
    component2,
    component3,
    component4,
    component5,
    component6,
    component7,
    component8,
    component9,
    component10,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 25%;
  background-color: #f4f4f4;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-button {
  display: block;
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  background-color: #e0e0e0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.sidebar-button:hover {
  background-color: #d0d0d0;
}

.main-section {
  flex-grow: 1;
  padding: 1rem;
  background-color: #ffffff;
  overflow-y: auto; /* Sağ tarafta kaydırma imkanı */
}
</style>