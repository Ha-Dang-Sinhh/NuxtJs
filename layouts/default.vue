<template>
  <div class="overflow-x-hidden bg-gray-100 container mx-auto">
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
