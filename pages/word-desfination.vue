<template>
  <div class="container">
    <div class="row input-wrap">
      <input type="text" class="word-input" placeholder="Enter word" @input="getDefinition($event.target.value)" >
    </div>
    <div class="row">
      <div class="word-box">
        <div class="texts">
          <h3>{{ date?.word }}</h3>
          <p>{{ text }}</p>
        </div>
        <div>
          <button v-for="item in audios" :key="item" class="audio-btn" @click.prevent="playSound(item)"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_646_58)">
              <path d="M6.75 20.25V33.75H15.75L27 45V9.00002L15.75 20.25H6.75ZM37.125 27C37.125 23.0175 34.83 19.5975 31.5 17.9325V36.045C34.83 34.4025 37.125 30.9825 37.125 27ZM31.5 7.26752V11.9025C38.0025 13.8375 42.75 19.8675 42.75 27C42.75 34.1325 38.0025 40.1625 31.5 42.0975V46.7325C40.5225 44.685 47.25 36.63 47.25 27C47.25 17.37 40.5225 9.31502 31.5 7.26752Z" fill="#7127BA"/>
            </g>
            <defs>
              <clipPath id="clip0_646_58">
                <rect width="54" height="54" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </button>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="wrap-box" v-for="item in date?.meanings">
        <p class="box-title">{{ item.partOfSpeech }}</p>
        <div class="box">
          <p>synonyms: {{ item.synonyms }}</p>
          <p>antonyms: {{ item.antonyms }}</p>


            <div class="main-box-wrap" v-for="(ite,index) in item.definitions">
               <p class="box-title">{{ index + 1 }}</p>
              <div class="main-box">
                <div class="definition">
                  <h4 class="box-title">definition</h4>
                  <div>
                    <p>{{ ite.definition }}</p>
                  </div>
                </div>
                <div class="example">
                  <h4 class="box-title">example</h4>
                  <div>
                    <p>{{ ite.example }}</p>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name:'WordDefination',
  computed: {
    ...mapState({
      date: state => state.definition.definition,
    }),
    text (){
      return this.date?.phonetics[this.date?.phonetics.length -1]?.text
    },
    audios() {
      return this.date?.phonetics.reduce((acc,item)=> {
        if (item?.audio){
         acc.push(item.audio)
        }
        return acc
      },[])
    }
  },
  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },
     getDefinition (val) {
      this.debounceKH(async()=>{
      const word = await this.$store.dispatch('definition/fetchDefinition',val)
        console.log(this.date)
      },800)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-wrap {
  margin-top: 100px;
  .word-input {
    width: 500px;
    padding: 20px;
    border-radius: 20px;
    border: none;
    background-color: #7346B1;
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 33px;
    color: #FFFFFF;
    outline: none;
    &::placeholder {
      color: #ffffff;
    }
  }
}
.word-box {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .texts {
    h3 {
      font-family: 'Preahvihear';
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 107.7%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
    p {
      font-family: 'Preahvihear';
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 107.7%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      color: #FFFFFF;
    }
  }
  .audio-btn {
    background-color: transparent;
    border-radius: 50%;
    border: none;
  }
}
.wrap-box {
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .box-title {
    padding: 5px 20px;
    background: #4F228D;
    border-top-right-radius: 20px;
    border-top-left-radius:20px ;
    font-family: 'Preahvihear';
    font-style: normal;
    font-weight: 400;
    font-size: 27px;
    line-height: 107.7%;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }
  .box {
    padding: 30px;
    width: 100%;
    background: #4F228D;
    box-shadow: inset 41px 48px 66px rgba(0, 0, 0, 0.25);
    border-radius: 25px;
    .main-box-wrap {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .box-title {
        background-color: #7346B1;
      }
      .main-box {
        padding: 20px;
        width: 100%;
        background: #7346B1;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h4 {
          background-color: #4F228D;
          margin: 0;
          margin-top: 20px;
          font-family: 'Preahvihear';
          font-style: normal;
          font-weight: 400;
          font-size: 27px;
          line-height: 107.7%;
          display: flex;
          align-items: center;
          letter-spacing: 0.02em;
          color: #FFFFFF;
        }
        p {
          font-family: 'Preahvihear';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 107.7%;
          display: flex;
          align-items: center;
          letter-spacing: 0.02em;
          color: #FFFFFF;
        }
        .definition {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          div {
            width: 100%;
            padding: 20px;
            background: #4F228D;
            border-radius: 25px;
          }

        }
        .example {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          div {
            width: 100%;
            padding: 20px;
            background: #4F228D;
            border-radius: 25px;
          }
        }
      }
    }
  }
}
</style>
