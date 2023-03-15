<!-- <template>
    <button @click="cards">create</button>
    <div class="container">
        <div class="card" v-for="(country, index) in countries" :key="index">
            <div class="card-header">
                <h3>{{ country.name.common }}</h3>
            </div>
            <div class="card-body">
                <img :src="country.flags.png" alt="flag" class="card-img" />
                <p><strong>Capital:</strong> {{ country.capital }}</p>
                <p><strong>Region:</strong> {{ country.region }}</p>
                <p><strong>Subregion:</strong> {{ country.subregion }}</p>
                <p><strong>Borders:</strong> {{ country.borders}}</p>
                <p><strong>Languages:</strong> {{ Object.values(country.languages).join(", ") }}</p>
                <p><strong>Currencies:</strong> {{ Object.values(country.currencies).join(", ") }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "App",
    data() {
        return {
            countries: [],
        };
    },
    methods: {
        cards() {
            fetch("https://restcountries.com/v3.1/all")
                .then((response) => response.json())
                .then((data) => {
                    this.countries = data;
                })
                .catch((error) => console.error(error));
        }

    },
};
</script>
  
<style>
.container {
    display: flex;
    flex-wrap: wrap;
}

.card {
    width: 30%;
    margin: 1%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
}

.card-header {
    background-color: #eee;
    padding: 10px;
}

.card-body {
    padding: 10px;
}

.card-img {
    display: block;
    margin: auto;
    max-width: 100%;
}
</style>
   -->

<!-- <template>
    <div id="card-body">
        <div class="card" v-for="(country, index) in countries" :key="index">
            <div class="card-image">
                <img :src="country.flags.png" :alt="country.name.common" class="center">
            </div>
            <div class="card-content">
                <h2 class="title">{{ country.name.common }}</h2>
                <p><strong>Capital:</strong> {{ country.capital }}</p>
                <p><strong>Region:</strong> {{ country.region }}</p>
                <p><strong>Subregion:</strong> {{ country.subregion }}</p>
                <p><strong>Population:</strong> {{ country.population }}</p>
                <p><strong>Languages:</strong> {{ country.languages ? country.languages[0] : "None" }}</p>
                <p><strong>Borders:</strong> {{ country.borders ? country.borders[0] : "None" }}</p>


            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CountryList',
    data() {
        return {
            countries: []
        }
    },
    mounted() {
        this.fetchCountries()
    },
    methods: {
        fetchCountries() {
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    this.countries = data
                })
                .catch(error => console.log(error))
        }
    }
}
</script>
  
<style>
.card {
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: 2px 2px #ccc;
    margin-bottom: 20px;
    margin: 30px;
    overflow: hidden;
    width: 350px;
    height: 500px;
}

.card-image {
    width: 400px;
    height: 200px;
}

.card-image img {
    width: 100%;
    height: 100%;
}

.card-content {
    padding: 20px;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

#card-body {
    padding: 10px;
}
</style>
   -->



<template>
    <div>
        <div class="search-bar">
            <input type="text" v-model="searchText" placeholder="Search by name or capital">
        </div>
        <div class="card" v-for="(country, index) in filteredCountries" :key="index">
            <div class="card-image">
                <img :src="country.flags.png" :alt="country.name.common">
            </div>
            <div class="card-content">
                <h2 class="title">{{ country.name.common }}</h2>
                <p><strong>Capital:</strong> {{ country.capital }}</p>
                <p><strong>Region:</strong> {{ country.region }}</p>
                <p><strong>Subregion:</strong> {{ country.subregion }}</p>
                <p><strong>Borders:</strong> {{ country.borders ? country.borders[0] : "None" }}</p>
                <p><strong>Languages:</strong> {{ country.languages }}</p>
                <p><strong>Population:</strong> {{ country.population }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'CountryList',
    data() {
        return {
            countries: [],
            searchText: ''
        }
    },
    mounted() {
        this.fetchCountries()
    },
    methods: {
        fetchCountries() {
            fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => {
                    this.countries = data
                })
                .catch(error => console.log(error))
        }
    },
    computed: {
        filteredCountries() {
            return this.countries.filter((country) => {
                return (
                    country.name.common.toLowerCase().includes(this.searchText.toLowerCase()) ||
                    country.capital?.[0]?.toLowerCase().includes(this.searchText.toLowerCase())
                )
            })
        }
    }
}
</script>
  
<style>
.card {
    display: inline-block;
    border: 1px solid #ccc;
    box-shadow: 2px 2px #ccc;
    margin-bottom: 20px;
    margin: 30px;
    overflow: hidden;
    width: 350px;
    height: 500px;
}

.card-image {
    width: 400px;
    height: 200px;
}

.card-image img {
    width: 100%;
    height: 100%;
}

.card-content {
    padding: 20px;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.search-bar {
    margin-bottom: 20px;
}
</style>
  