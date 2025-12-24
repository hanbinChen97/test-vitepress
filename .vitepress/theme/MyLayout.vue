<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-before>
      <Header />
    </template>
    <template #footer>
      <Footer />
    </template>
  </DefaultTheme.Layout>
</template>