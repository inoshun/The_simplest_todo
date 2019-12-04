<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Default/Header.vue"
import Footer from "@/components/Default/Footer.vue"
export default {
  components: {
    Header,
    Footer
  }
}
</script>