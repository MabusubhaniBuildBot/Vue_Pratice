<template>
    <hr />
    <nav>
        <a href="#">My Vue</a> |
        <a :href="page.link.url" :title="`This page link goes to the ${page.link.text} page`" v-for="(page, index) in pages"
            :key="index" @click.prevent="activePage = index" class="nav-links" :class="{ active: activePage == index }">
            {{ page.link.text }}
        </a>
    </nav>
    <div id="content" class="content">
        <h1>{{ pages[activePage].pageTitle }}</h1>
        <p>{{ pages[activePage].content }}</p>
    </div>
</template>

<script>

export default {
    name: 'Prat_2',
    data() {
        return {
            activePage: 0,
            pages: [
                {
                    link: { text: 'Home', url: 'Home.html' },
                    pageTitle: 'Home Page',
                    content: 'This is the Home page Content'
                },
                {
                    link: { text: 'option_1', url: 'option_1.html' },
                    pageTitle: 'Option_1 Page',
                    content: 'This is the Option_1 page Content'
                },
                {
                    link: { text: 'option_2', url: 'option_2.html' },
                    pageTitle: 'Option_2 Page',
                    content: 'This is the Option_2 page Content'
                },
                {
                    link: { text: 'option_3', url: 'option_3.html' },
                    pageTitle: 'Option_3 Page',
                    content: 'This is the Option_3 page Content'
                },
                {
                    link: { text: 'About', url: 'About.html' },
                    pageTitle: 'About Page',
                    content: 'This is the About page Content'
                },

            ]
        }
    }


}
</script>
<style>
a {
    text-decoration: none;
    color: black;
    font-size: 12px;
    padding: 10px;
}

nav {
    background-color: #F5FBEF;
    padding: 10px;
    border-radius: 10px;
}
</style>