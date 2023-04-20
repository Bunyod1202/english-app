
<template>
  <div class="box">
    <h1>title</h1>
    <div class="list-box">
      <div class>
        <ul class="list list-uz">
          <li v-for="item in arrayUZ" :key="item.id" class="list-item" :value="item.id">
            <p class="item-title" @click.prevent="uzPart(item.id,$event)">{{ item.uz_text }}</p>
            <span class="item-check"></span>
          </li>
        </ul>
      </div>
      <div class>
        <ul class="list list-en">
          <li v-for="item in arrayEN" :key="item.id" class="list-item" :value="item.id">
            <p class="item-title" @click.prevent="enPart(item.id,$event)">{{ item.en_text }}</p>
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
          let chackItem = event.target.parentElement
          chackItem.childNodes[2].style.display = 'block'
          chackItem.childNodes[0].classList.remove('active')
          chackItem.childNodes[0].classList.add('success')
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elEnList.childNodes[i]
            if (listItem.value === id) {
              let chackItem = listItem.childNodes[2]
              chackItem.style.display = 'block'
              listItem.childNodes[0].classList.remove('active')
              listItem.childNodes[0].classList.add('success')
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
          let chackItem = event.target.parentElement
          chackItem.childNodes[2].style.display = 'block'
          chackItem.childNodes[0].classList.remove('active')
          chackItem.childNodes[0].classList.add('success')
          for (let i = 0; i < this.arrayUZ.length; i++) {
            let listItem = elUzList.childNodes[i]
            if (listItem.value === id) {
              let chackItem = listItem.childNodes[2]
              chackItem.style.display = 'block'
              listItem.childNodes[0].classList.remove('active')
              listItem.childNodes[0].classList.add('success')
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
.list-en{
  margin-left: 30px;
}
.item-title {
  padding: 16px 80px;
  margin-bottom: 5px;
  border-radius: 50px;
  text-align: center;
 background-color: #2C1250;
border-bottom: 7px solid #4F228D;
box-shadow: inset 0px 4px 4px #00000040;
border-radius: 15px;
font-weight: 400;
font-size: 26px;
line-height: 107.7%;
color: #fff;
}
.item-check {
  width: 100%;
  height: 100%;
  display: none;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  border-radius: 15px;
  left: 0;
  top: 0;
  z-index: 2;
}
.active {
  border-bottom: 7px solid  #8c57d7;
  color: #8c57d7;
}
.success {
  background-color: #E5B8FF;
border-bottom: 7px solid #4F228D;
color: #4F228D;
}
</style>
