<template>
    <div>
        <h1>Fetch Data</h1>
        <div id="btn">
            <button @click="getPost">Get_data</button>
        </div>
        <div id="btn">
            <button @click="dPost">clear</button>
        </div>

        <hr />
        <table>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
            </tr>
            <tr v-for="item in post" v-bind:key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.body }}</td>
            </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    name: "list",
    data() {
        return {
            post: {}
        }

    },
    methods: {
        getPost() {
            fetch("https://jsonplaceholder.typicode.com/comments")
                .then((response) => response.json())
                .then((data) => this.post = data)
            fetch("https://restcountries.com/v3.1/all")
                .then((response) => response.json())
                .then((data) => console.log(data))

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
table {
    width: 100%;
    height: auto;
    border: 1px solid black;

}

td {
    text-align: center;
    font-size: 14px;
    padding: 10px;
}

#btn {
    display: inline-block;
    padding-left: 20px;
}
</style>
  