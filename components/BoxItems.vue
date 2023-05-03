
<template>
  <div class="box">
    <div class="box-header">
      <div class="box-caunt">Caunt: {{ caunt }}</div>
      <div class="box-step">
        <p>1</p>
        <StarStep :value="rasult" />
      </div>
      <div class="box-time">Timer {{minutes}} : {{seconds}}</div>
    </div>
    <div class="list-box">
      <div>
        <ul class="list list-uz">
          <li v-for="item in arrayUZ" :key="item.id" class="list-item">
            <button
              class="item-title"
              @click="itemClickHandler(item.id, 'uz')"
              :class="{ [selectedItemsClass]: ids?.find(elem => elem.id === item.id && elem.lang === 'uz') }"
              :disabled="successedIds.has(item.id)"
            >{{ item.uz_text }}</button>
          </li>
        </ul>
      </div>
      <div>
        <ul class="list list-en">
          <li v-for="item in arrayEN" :key="item.id" class="list-item">
            <button
              class="item-title"
              @click="itemClickHandler(item.id, 'en')"
              :disabled="successedIds.has(item.id)"
              :class="{ [selectedItemsClass]: ids?.find(elem => elem.id === item.id && elem.lang === 'en') }"
            >
              {{
              item.en_text }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import beginner from '@/data/beginner'
import StarStep from './ui/StarStep.vue';
export default {
  name: "BoxItems",
  data() {
    return {
      rasult:0,
      caunt: 0,
      minutes:0,
      seconds: 20,
      myTimer:null,
      arrayUZ: [],
      arrayEN: [],
      ids: [],
      selectedItemsClass: "active",
      successedIds: new Set()
    };
  },
  methods: {
    //random array en
    enArray(arr) {
      for (let i = 0; i < arr.length; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        if (!this.arrayEN.includes(arr[randomIndex])) {
          this.arrayEN.push(arr[randomIndex]);
        }
        else {
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
        }
        else {
          i--;
        }
      }
    },
    //click item
    itemClickHandler(id, lang) {
      if (!this.ids.length) {
        console.log(id, lang);
        this.ids.push({ id, lang });
        return;
      }
      if (this.ids.length === 1) {
        if (this.ids[0].lang === lang) {
          this.selectedItemsClass = "error";
          setTimeout(() => {
            this.ids = [];
            this.selectedItemsClass = "active";
          }, 1000);
          return;
        }
        this.ids.push({ id, lang });
        this.checkIds();
        return;
      }
    },
    checkIds() {
      if (this.ids[0]?.id === this.ids[1]?.id) {
        const id = this.ids[0].id;
        this.selectedItemsClass = "success";
        ++this.caunt
        if (this.caunt > 2 && this.caunt < 4) {
          ++this.rasult
        } else if (this.caunt > 6 && this.caunt < 8) {
          ++this.rasult
        } else if (this.caunt > 9 && this.caunt < 11) {
          ++this.rasult
        }
        setTimeout(() => {
          this.ids = [];
          this.selectedItemsClass = "active";
          this.successedIds.add(id);
        }, 1000);
        return;
      }
      this.selectedItemsClass = "error";
      setTimeout(() => {
        this.ids = [];
        this.selectedItemsClass = "active";
      }, 1000);
    },
    timer() {
      if (this.minutes === 0 && this.seconds === 1) {
        this.stopTimer()
      }
      if (this.seconds <= 0) {
        this.seconds = 60;
        this.minutes--
      }
      this.seconds--;
    },
    startTimer() {
      this.myTimer = setInterval(this.timer, 1000);
    },
    stopTimer() {
      clearInterval(this.myTimer);
    }
  },
  mounted() {
    this.enArray(beginner[0].step_1.data);
    this.uzArray(beginner[0].step_1.data);
    this.startTimer()
  },
  components: { StarStep }
}
</script>
<style lang="scss">
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  .box-step {
    p{
      text-align: center;
      margin: 0;
      font-size: 40px;
    }
  }
  .box-caunt,.box-time{
    width: 100px;
  }
}

.list-box {
  display: flex;
}

.list {
  width: 100%;
  padding: 0;
  display: block;
  list-style: none;
}

.list-item {
  position: relative;

  button:disabled {
    background-color: #E5B8FF;
    border-bottom: 7px solid #4F228D;
    color: #4F228D;
  }

  .active {
    border-bottom: 7px solid #E5B8FF;
  }

  .success {
    background-color: #7CF87A;
    border-bottom: 7px solid #4F228D;
    color: #4F228D;
  }

  .error {
    background-color: #D44F4F;
    border-bottom: 7px solid #fff;

    &::before {
      content: '';
      width: 200px;
      height: 200px;
      // background-color: #D44F4F;
      background-image: url('../store/image/b4d0d7e30b0810ff3c0b440d12495dcb.gif');
      background-size: cover;
      position: absolute;
      top: 100px;
      left: 500px;
    }
  }
}

.list-en {
  margin-left: 30px;
}

.item-title {
  width: 100%;
  padding: 16px 80px;
  margin-bottom: 15px;
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
}</style>
