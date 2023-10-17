<template>
  <div class="login-modal" v-if="loginModal">
    <div class="modal-card">
      <form @submit.prevent="userLogin">
        <div class="img-box">
          <label class="input-img-lable" :style=" form.img?`background-image:url(${form.img})`:''">
            <input
              class="input-img"
              @change="updateImageDisplay($event)"
              type="file"
              id="choose-file"
              required
            />
          </label>
        </div>
        <input
          class="input-name"
          type="text"
          v-model="form.user_name"
          placeholder="Enter your user name"
          required
        />
        <div class="btn-group">
          <button class="login-btn" type="submit">sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user_name: '',
        img: null
      },
      loginModal:true,
    }
  },
  methods: {
    updateImageDisplay(event) {
      const curFiles = event.target.files;
      this.form.img = URL.createObjectURL(curFiles[0])
    },
    userLogin() {
      if (this.form.img !== '' && this.form.user_name !== '') {
        localStorage.setItem("user", JSON.stringify(this.form))
        this.loginModal = false
      }
    }
  },
  mounted() {
    console.log(JSON.parse(localStorage.getItem("user")));
    if (JSON.parse(localStorage.getItem("user"))) {
      this.loginModal = false
    } else {
      this.loginModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.login-modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #11071fa3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000000;
}
.modal-card {
  width: 100%;
  max-width: 800px;
  padding: 85px;
  background-color: #2C1250;
  border-top: 16px  solid #4F228D;
  border-bottom: 16px  solid #4F228D;
  border-radius: 85px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-img{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  opacity: 0;
  cursor: pointer;
}
.input-img-lable {
  width: 200px;
  height: 200px;
  display: block;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: inset 5px 15px 4px #00000040;
  background-image: url('@/static/image/user.png');
  background-repeat: no-repeat;
  background-size:cover;
  margin: 0 auto;
}
.input-name{
  width: 100%;
  max-width: 455px;
  margin-top: 40px;
  padding: 15px 25px;
  background-color: #FFFFFF;
  box-shadow: inset 8px 8px 4px #00000040;
  border-radius: 22px;
  border: none;
  font-weight: 400;
  font-size: 26px;
  line-height: 107.7%;
}
.btn-group {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.login-btn{
  padding: 15px 35px;
  background: #E5B8FF;
box-shadow: inset 8px 8px 4px rgba(0, 0, 0, 0.25);
border-radius: 21px;
font-family: 'Preahvihear';
font-weight: 400;
font-size: 26px;
line-height: 107.7%;
color: #4F228D;
}
</style>
