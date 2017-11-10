<template>
  <div class="row">
    <div class="col s12 m6 l3" v-for="item in items" :key="item">
      <div class="card">
        <div class="card-image">
          <img :src="item.img">
          <span class="card-title">{{ item.name }}</span>
        </div>
        <div class="card-content">
          <p>{{ item.description }}</p>
        </div>
        <div class="card-action">
          <a href="#"> <i class="large material-icons ontact_phone"></i>{{ item.phone_number }}</a>
        </div>
      </div>
    </div>
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

export default class card extends Vue{
  items = [ {
          name: '고수찜닭',
          phone_number: '01012345678',
          img: './assets/p1.jpg',
          description: '맛집'
        },
        {
          name: '오겡끼데스까',
          phone_number: '01012345678',
          img: './assets/p2.jpg',
          description: '맛맛집'
        },
        {
          name: '찌개사랑',
          phone_number: '01012345678',
          img: './assets/p2.jpg',
          description: '맛맛맛집'
        }
        ];
}
</script>

<<style scoped>
 img {
   width:400px;
   height: 300px;
 }
</style>
