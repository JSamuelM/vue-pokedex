<template>
  <div class="register">
    <div v-if="validationErrors.length" class="register__error">
      <button @click="resetError" type="button" class="reset">
        <i class="fas fa-times-circle"></i>
      </button>
      <div class="register__error-content">
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
    <div class="register__content">
      <p class="register__title">
        Register
      </p>
      <div class="register__control">
        <label>E-mail:</label>
        <input type="text" v-model="email">
      </div>
      <div class="register__control">
        <label>Password:</label>
        <input type="password" v-model="password">
      </div>
      <div class="register__control">
        <label>Password Repear:</label>
        <input type="password" v-model="passwordRepeat">
      </div>
      <div class="register__control">
        <button @click.passive="validate">
          register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      validationErrors: []
    }
  },
  methods: {
    ...mapActions('auth', ['signUpAction']),
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      this.resetError();
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty")
      }
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty")
      }
      if(!(this.password === this.passwordRepeat)) {
        this.validationErrors.push("<strong>Passwords</strong> did not match");
      }
      if (this.validationErrors.length <= 0) {
        this.signUp();
      }
    },
    signUp() {
      this.signUpAction({
        email: this.email,
        password: this.password
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
.register
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
  .register__error
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
    .register__error-content
      padding: 15px 20px
  .register__content
    background: #1d6042
    border-radius: 15px
    padding: 15px 20px
    margin: 15px 0
  .register__title
    font-size: 26px
    font-weight: bold
    margin-top: 10px
    margin-bottom: 25px
    text-align: center
  .register__control
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
</style>