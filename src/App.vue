<template>
  <div class="full-width center-content">
    <hello-component name="World" />
    <p> {{ link }} </p>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'
export default {
  components: {
    HelloComponent
  }
}
</script>
