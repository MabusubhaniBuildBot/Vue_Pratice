<template>
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  <prat_2 />
  <hr />
  <pra_1 />
  <br />
  <vue_pro_1 />
  <prat_3 title="Article Title" likes="62343" />
  <hr />
  <h1 id="B">Slot Concepts</h1>
  <br />
  <card>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <img src="../realme.jpg" style="width:100px;" />
    </template>
    <template v-slot:footer>
      <button>view details</button>
    </template>
  </card>

  <hr />
  <h1 id="B">Custom Component Event</h1><br /><br />
  <center><button @click="showPopup = true">Show Popup</button></center>
  <popup v-show="showPopup" @close="closePopup" />
  <hr />
  <h1 id="B">Component Style</h1><br /><br />
  <button @click="activeTab = 'TabA'">Tab_A</button>
  <button @click="activeTab = 'TabB'">Tab_B</button>
  <button @click="activeTab = 'TabC'">Tab_C</button>
  <TabA v-if="activeTab === 'TabA'" />
  <TabB v-if="activeTab === 'TabB'" />
  <TabC v-if="activeTab === 'TabC'" />
  <br /><br />
  <Teleport portal-root></Teleport>
  <portal />
  <ref />
  <br />
</template>
<script >
import pra_1 from './components/Pra_1.vue'
import vue_pro_1 from './components/vue_pro_1.vue'
import prat_2 from './components/Home/Pratice_Task/prat_2.vue'
import prat_3 from './components/Home/Pratice_Task/prat_3.vue'
import popup from './components/Home/Pratice_Task/popup.vue'
import card from './components/Home/Slot/card.vue'
import TabA from './components/Home/Components/TabA.vue'
import TabB from './components/Home/Components/TabB.vue'
import TabC from './components/Home/Components/Tabc.vue'
import portal from './components/Home/Components/portal.vue'
import ref from './components/ref.vue'
export default {
  name: 'App',
  components: {
    popup,
    pra_1,
    prat_2,
    vue_pro_1,
    prat_3,
    card,
    TabA,
    TabB,
    TabC,
    portal,
    ref,

  },
  data() {
    return {
      showPopup: false,
      activeTab: true
    }
  },
  methods: {
    closePopup(name) {
      this.showPopup = false
      console.log('name', name)

    }
  }
}
</script>

<style scoped>
#B {
  color: darkgoldenrod;
}
</style> 