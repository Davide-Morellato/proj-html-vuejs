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
          src: '#home'
        },
        {
          name: 'Services',
          src: '#services'
        },
        {
          name: 'Why Us',
          src: '#why_us'
        },
        {
          name: 'Case Studies',
          src: '#case_studies'
        },
        {
          name: 'About',
          src: '#about'
        },
        {
          name: 'Blog',
          src: '#blog'
        },
        {
          name: '(555) 802-1234',
          src: '#call_us'
        },
      ],
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
