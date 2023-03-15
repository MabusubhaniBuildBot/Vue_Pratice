<template>
    <h1 id="h1">Binding Concepts</h1>
    <hr>
    <h1>Basics component</h1>
    <h2>First home component</h2>
    <h2>A basic HTML table</h2>
    <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
    </table>
    <h1 id="B">Binding text</h1>
    <h2>{{ Course1 }} , {{ Course }}</h2>
    <h2 v-text="Course"></h2>
    <h2 v-text="Course1"></h2>
    <div v-html="link"></div>
    <br />
    <br />
    <Button v-bind:disabled="isDisiable">Bind </Button>
    <h1 id="B">Binding Class</h1>
    <h1 class="sta" v-bind:class="status">Status</h1>
    <h2 v-bind:class="ispromoted && 'promoted'">Promoted </h2>
    <h2 v-bind:class="isSouldout ? 'soldout' : 'new'">SouldOut Product?</h2>
    <h2 v-bind:class="['new', 'promoted']">New product promoted </h2>
    <hr />
    <h1 id="h1">Condition Rendering</h1>
    <h2 v-if="num >= 0">The number is grater than 0</h2>
    <h2 v-else>The number is less than 0</h2>
    <h2 v-if="num > 0">The Given number is positive</h2>
    <h2 v-else-if="num < 0">The Given number is Negitive</h2>
    <h2 v-else>It is not a number</h2>
    <ul v-if="display">
        <li>ereg</li>
        <li>erfe</li>
        <li>erf</li>
        <li>keref</li>
        <li>kerger</li>
        <li>sdfc</li>
    </ul>
    <hr />
    <h1 id="h1">List_Rendering</h1>
    <h3 v-for="name in names">{{ name }} </h3>
    <h3 v-for="(name, index) in names">{{ index }}-{{ name }} </h3>
    <h2 id="B">Objects in array</h2>
    <h3 v-for="fml in fullname  ">{{ fml.first }}-{{ fml.middle }}-{{ fml.last }} </h3>
    <h2 id="B">Methods</h2>
    <h2>Add() Method-----{{ add() }}</h2>
    <h2>Add_para() Method-----{{ add_para(1, 2, 3) }}</h2>
    <hr />
    <h1 id="h1">Form Handling</h1>
</template>
<script>
export default {
    name: "Pratice",
    data() {
        return {
            num: 10,
            Course: 'VueJs',
            Course1: 'HTML',
            link: '<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>',
            isDisiable: true,
            status: 'dangar',
            ispromoted: false,
            isSouldout: true,
            display: true,
            names: ['abc', 'def', 'hij', 'klm', 'nop', 'qrst', 'uvw', 'xyz'],
            fullname: [
                {
                    first: 'hgvkhgc',
                    middle: 'vhsd',
                    last: 'hgchg'
                },
                {
                    first: 'hgvkhgc',
                    middle: 'vhsd',
                    last: 'hgchg'
                },
                {
                    first: 'hgvkhgc',
                    middle: 'vhsd',
                    last: 'hgchg'
                }
            ]

        }

    },
    methods: {
        add() {
            return 2 + 3 + 10;
        },
        add_para(a, b, c) {
            return a + b + c;
        }
    }
}

</script>
<style scoped>
table,
th,
td {
    width: auto;
    height: auto;
    border: 1px solid burlywood;
}

#h1 {
    color: brown;
    text-align: center;
}

#B {
    color: darkgoldenrod;
}

.sta {
    text-decoration: underline;
}

.promoted {
    font-style: italic;
}

.new {
    color: olivedrab;
}

.soldout {
    color: red;
}
</style>