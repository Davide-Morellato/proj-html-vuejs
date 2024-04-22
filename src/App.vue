<script>

import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";


export default{
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  data(){
    return{
      headerLinks: [
        {
          name: 'Home',
          src: '#'
        },
        {
          name: 'Services',
          src: '#'
        },
        {
          name: 'Why Us',
          src: '#'
        },
        {
          name: 'Case Studies',
          src: '#'
        },
        {
          name: 'About',
          src: '#'
        },
        {
          name: 'Blog',
          src: '#'
        },
        {
          name: '(555) 802-1234',
          src: '#'
        },
      ]
    }
  }
}
</script>

<template>
<HeaderComponent :headerLink="headerLinks"/>
<MainComponent/>
<FooterComponent/>
</template>

<style lang="scss">
@use '/src/style/general.scss'
</style>
