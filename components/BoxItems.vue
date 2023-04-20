
<template>
  <div class="box">
    <h1>title</h1>
    <div class="list-box">
      <div class>
        <ul class="list list-uz">
          <li v-for="item in arrayUZ" :key="item.id" class="list-item" :value="item.id">
            <p class="item-title" @click.prevent="uzPart(item.id,$event)">{{ item.en_text }}</p>
            <span class="item-check"></span>
          </li>
        </ul>
      </div>
      <div class>
        <ul class="list list-en">
          <li v-for="item in arrayEN" :key="item.id" class="list-item" :value="item.id">
            <p class="item-title" @click.prevent="enPart(item.id,$event)">{{ item.uz_text }}</p>
            <span class="item-check"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import beginner from '@/data/beginner'
export default {
  name: 'BoxItems',
  data() {
    return {
      arrayUZ:[],
      arrayEN: [],
      allValue:'',
      enId: null,
      uzId: null,
    }
  },
  methods: {
    //random array en
    enArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!this.arrayEN.includes(arr[randomIndex])) {
          this.arrayEN.push(arr[randomIndex]);
        } else {
          i--;
        }
      }
    },
    //random array uz
    uzArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!this.arrayUZ.includes(arr[randomIndex])) {
          this.arrayUZ.push(arr[randomIndex]);
        } else {
          i--;
        }
      }
    },
    //item click  uz list
    uzPart(id, event) {
      const elEnList = document.querySelector('.list-en')
      const elUzList = document.querySelector('.list-uz')
      this.uzId = id
      if (this.allValue === 'uz') {
        this.allValue = 'uz';
        console.log('oxshamad uz');
        for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elUzList.childNodes[i].childNodes[0]
              listItem.classList.remove('active')
          }
          event.target.parentElement.childNodes[0].classList.add('active')
      } else {
        this.allValue = 'uz'
        event.target.parentElement.childNodes[0].classList.add('active')
        //id solishtirish
        if (this.enId === id) {
          let chackItem = event.target.parentElement.childNodes[2]
          chackItem.style.display = 'block'
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elEnList.childNodes[i]
            if (listItem.value === id) {
              let chackItem = listItem.childNodes[2]
              chackItem.style.display = 'block'
            }
          }
        } else {
          console.log('oxshad lekin yemad uz');
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listTitle = elEnList.childNodes[i].childNodes[0]
            let listItemUZ = elUzList.childNodes[i].childNodes[0]
            this.uzId = null;
            setTimeout(() => {
              listTitle.classList.remove('active')
              listItemUZ.classList.remove('active')
            },500)
          }
        }
      }
    },
     //item click  en list
    enPart(id, event) {
      const elUzList = document.querySelector('.list-uz')
      const elEnList = document.querySelector('.list-en')
      this.enId = id
      if (this.allValue === 'en') {
        this.allValue = 'en'
        console.log('oxshamad en');
        for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elEnList.childNodes[i].childNodes[0]
              listItem.classList.remove('active')
          }
        event.target.parentElement.childNodes[0].classList.add('active')
      } else {
        this.allValue = 'en'
        event.target.parentElement.childNodes[0].classList.add('active')
        //id solishtirish
        if (this.uzId === id) {
          let chackItem = event.target.parentElement.childNodes[2]
          chackItem.style.display = 'block'
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elUzList.childNodes[i]
            if (listItem.value === id) {
              let chackItem = listItem.childNodes[2]
              chackItem.style.display = 'block'
            }
          }
        } else {
          console.log('oxshad lekin yemad en');
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listTitle = elUzList.childNodes[i].childNodes[0]
            let listItemEN = elEnList.childNodes[i].childNodes[0]
              this.enId = null;
            setTimeout(() => {
              listTitle.classList.remove('active')
              listItemEN.classList.remove('active')
            },500)
          }
        }
      }
    }

  },
  mounted() {
    this.enArray(beginner[0].step_1.data)
    this.uzArray(beginner[0].step_1.data)
  },
}
</script>
<style>
.list-box {
  width: 100%;
  display: flex;
}
.list {
  width:100%;
  padding: 0;
  display: block;
  list-style: none;
}
.list-item {
  position: relative;
}
.item-title {
  padding: 5px 15px;
  margin-bottom: 5px;
  border-radius: 50px;
  background-color: #44db1b;
}
.item-check {
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0.434);
  position: absolute;
  border-radius: 50px;
  left: 0;
  top: 0;
  z-index: 2;
}
.sucsess {
  background-color: blue;
}
.default {
  background-color: #44db1b;
}
.active {
  background-color:#349618 !important;
}
</style>
