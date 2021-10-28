<template>
  <div class="login">
    <div v-if="validationErrors.length" class="login__error">
      <button @click="resetError" type="button" class="reset">
        <i class="fas fa-times-circle"></i>
      </button>
      <div class="login__error-content">
        Please resolve the following error(s) before proceeding.
        <ul>
          <li
            v-for="(error, index) in validationErrors"
            :key="`error-${index}`"
            v-html="error"
          />
        </ul>
      </div>
    </div>
    <div class="login__content" v-if="!isAuth">
      <p class="login__title">
        Login
      </p>
      <div class="login__control">
        <label>E-mail:</label>
        <input type="text" v-model="email">
      </div>
      <div class="login__control">
        <label>Password:</label>
        <input type="password" v-model="password">
      </div>
      <div class="login__control">
        <button @click.passive="validate">
          Login
        </button>
      </div>
    </div>
    <div class="login__content" v-else>
      <router-link to="/pokemon">
        <button type="button" class="login__home">
          Go To Home
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
      validationErrors: []
    }
  },
  methods: {
    ...mapActions('auth', ['signInAction']),
    resetError() {
      this.validationErrors = [];
    },
    resetForm() {
      this.email = ''
      this.password = ''
    },
    validate() {
      this.resetError();
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty")
      }
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty")
      }
      if (this.validationErrors.length <= 0) {
        this.signIn();
      }
    },
    signIn() {
      this.signInAction({
        email: this.email,
        password: this.password
      })
      this.resetForm()
    }
  },
  computed: {
    ...mapState('auth', ['isAuth'])
  }
}
</script>

<style lang="stylus" scoped>
.login
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  .login__error
    background: #dc3545
    border-radius: 15px
    margin: 15px 0
    width: 340px
    position: relative
    .reset
      background: transparent
      border: 1px solid transparent
      color: #fff
      cursor: pointer
      font-size: 14px
      position: absolute
      right: 5px
      top: 10px
    .login__error-content
      padding: 15px 20px
  .login__content
    background: #1d6042
    border-radius: 15px
    padding: 15px 20px
    margin: 15px 0
  .login__title
    font-size: 26px
    font-weight: bold
    margin-top: 10px
    margin-bottom: 25px
    text-align: center
  .login__control
    display: flex
    justify-content: space-between
    margin-bottom: 25px
    min-width: 300px
    label
      font-weight: normal
      font-size: 18px
      margin-right: 10px
    input
      border-radius: 5px
      border: 0
      padding: 10px
    button
      background: #f8f9fa
      border-radius: 5px
      border: 1px solid #f8f9fa
      display: block
      font-weight: bold
      padding: 10px 15px
      text-transform: uppercase
      width: 100%
      &:hover
        background: #2c3e50
        border: 1px solid #2c3e50
        color: #fff
        cursor: pointer
        transition: all 0.2s ease-in-out
button.login__home
  background: #f8f9fa
  border-radius: 5px
  border: 1px solid #f8f9fa
  cursor: pointer
  padding: 10px 15px
  text-transform: uppercase
</style>