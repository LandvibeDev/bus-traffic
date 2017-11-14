<template>
  <div>
    {{hi}}
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})

export default class Test extends Vue{
  hi = "hi"
}
</script>
