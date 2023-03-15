<template>
    <div>
        <h1>Fetch Data</h1>
        <div>
            <h1>Fetch Data</h1>
            <div id="btn">
                <button @click="getPost">Get Posts</button>
            </div>
            <div id="btn">
                <button @click="dPost">clear</button>
            </div>

            <hr />
            <div class="cards">
                <div class="card" v-for="item in post" v-bind:key="item.id">
                    <p><strong>Id:-</strong>{{ item.id }}</p>
                    <p><strong>Name:-</strong>{{ item.name }}</p>
                    <p><strong>body:-</strong>{{ item.body }}</p>
                    <p><strong>email:-</strong>{{ item.email }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "list",
    data() {
        return {
            post: [],
        };
    },
    methods: {
        getPost() {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((response) => response.json())
                .then((data) => (this.post = data));
        },
        dPost() {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((response) => response.json())
                .then((data) => this.post = " ")

        },
    },
};
</script>
  
<style lang="css" scoped>
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    width: 300px;
    margin: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>
  