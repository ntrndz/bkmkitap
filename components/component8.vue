<template>
  <div class="filter-container">
    <div class="category-header" @click="toggleCategory">
      <h3>Kategoriler</h3>
      <span :class="isCategoryOpen ? 'arrow-up' : 'arrow-down'"></span>
    </div>
    <div v-if="isCategoryOpen" class="category-content">
      <div v-for="(filter, index) in filters" :key="index" class="filter-group">
        <div class="filter-header" @click="toggleFilter(index)">
          <h4>{{ filter.name }}</h4>
          <span :class="openFilters[index] ? 'arrow-up' : 'arrow-down'"></span>
        </div>
        <div v-if="openFilters[index]" class="filter-options">
          <!-- Arama Çubuğu (Sadece Marka ve Model için) -->
          <div v-if="filter.name !== 'Edebiyat Kitapları'" class="filter-search">
            <input
              type="text"
              class="filter-search-input"
              :placeholder="`${filter.name} ara`"
              v-model="searchTerms[filter.name]"
              @input="filterOptions(filter.name)"
            />
          </div>
          <!-- Edebiyat Kitapları için buton -->
          <div v-if="filter.name === 'Edebiyat Kitapları'">
            <button
              v-for="(option, optionIndex) in filter.options"
              :key="optionIndex"
              class="filter-button"
              @click="selectOption(option)"
            >
              {{ option }}
            </button>
          </div>
          <!-- Marka ve Model için checkbox -->
          <div v-else>
            <div
              v-for="(option, optionIndex) in filteredOptions[filter.name]"
              :key="optionIndex"
              class="filter-item filter-hover"
            >
              <label>
                <input
                  type="checkbox"
                  :value="option"
                  :name="filter.name"
                  v-model="selectedFilters[filter.name]"
                />
                {{ option }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="apply-button" @click="applyFilters">Filtreyi Uygula</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const isCategoryOpen = ref(true);
const filters = ref([
  {
    name: "Edebiyat Kitapları",
    options: [
      "En İyi Korku Kitapları",
      "Aforizma",
      "Casusluk Kitapları",
      "En Çok Satan Seri Katil Kitapları",
      "En Çok Okunan Suç Kitapları",
      "En Çok Satan Gizemli Kitaplar",
      "En Çok Satan 50 Dünya Klasiği",
    ],
  },
  {
    name: "Marka",
    options: [
      "İndigo Kitap",
      "Ephesus Yayınları",
      "Epsilon Yayınevi",
      "Can Yayınları",
      "İthaki Yayınları",
      "Pegasus Yayınları",
      "Ren Kitap",
      "Dokuz Yayınları",
    ],
  },
  {
    name: "Model",
    options: [
      "Kolektif",
      "Nahid Sırrı Örik",
      "J. K. Rowling",
      "Vladimir Nabokov",
      "Ernest Hemingway",
    ],
  },
]);

const openFilters = reactive(filters.value.map(() => true));
const selectedFilters = reactive<Record<string, string[]>>({});
const searchTerms = reactive<Record<string, string>>({});
const filteredOptions = reactive<Record<string, string[]>>({});

filters.value.forEach((filter) => {
  selectedFilters[filter.name] = [];
  searchTerms[filter.name] = "";
  filteredOptions[filter.name] = filter.options.slice();
});

const toggleCategory = () => {
  isCategoryOpen.value = !isCategoryOpen.value;
};

const toggleFilter = (index: number) => {
  openFilters[index] = !openFilters[index];
};

const applyFilters = () => {
  console.log("Selected Filters:", selectedFilters);
};

const selectOption = (option: string) => {
  console.log(`Edebiyat kategorisinden seçilen: ${option}`);
};

const filterOptions = (filterName: string) => {
  const searchTerm = searchTerms[filterName].toLowerCase();
  const filter = filters.value.find((f) => f.name === filterName);
  if (filter) {
    filteredOptions[filterName] = filter.options.filter((option) =>
      option.toLowerCase().includes(searchTerm)
    );
  }
};
</script>

<style scoped>
.filter-container {
  font-family: Arial, sans-serif;
  border: 0px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  width: 300px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  font-style: inherit;
}

.filter-group {
  margin: 10px 0;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: #f9f9f9;
  padding: 5px 10px;
  border-radius: 10px;
}

.filter-options {
  padding: 10px;
}

.filter-item {
  margin: 5px 0;
  padding-left: 5px;
  transition: background-color 0.3s ease;
}

.filter-hover:hover {
  background-color: red;
  color: white;
  border-radius: 10px;
  cursor: pointer;
}

.filter-button {
  display: block;
  background-color: transparent;
  color: black;
  border-radius: 10px;
  padding: 1px;
  margin: 5px 0;
  text-align: left;
  width: 100%;
  cursor: pointer;  transition: background-color 0.3s ease;
  border: 0.1px solid transparent;
}

.filter-button:hover {
  background-color: red;
  color: white;
}

.arrow-up,
.arrow-down {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  cursor: pointer;
}

.arrow-up {
  border-bottom: 8px solid black;
}

.arrow-down {
  border-top: 8px solid black;
}

.apply-button {
  margin-top: 10px;
  background: red;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  font-size: 14px;
}

.apply-button:hover {
  background: darkred;
  
}

.filter-search {
  margin-bottom: 10px;
}

.filter-search-input {
  width: 100%;
  padding: 5px;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.category-header h3{
  color:black;
  font-size: 1.2rem;
}
.filter-header h4{
  color:red;
  font-size: 1re;
}
</style>
