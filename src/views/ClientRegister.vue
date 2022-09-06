<script lang="ts">
import Text from '../components/inputs/Text.vue'
import Button from '../components/Button/Button.vue'
import Container from '../components/Container/Container.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'ClientRegister',
  components: {
    Text,
    Button,
    Container
  }
}
import vue from 'vue'
</script>

<template>
  <Container>
    <Text />
    <Button></Button>
  </Container>
  <router-view />
</template>
