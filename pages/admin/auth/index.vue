<template>
  <section class="auth">
      <div class="container">

          <form  class="auth__form" @submit.prevent="onSubmit">
              <AppInput type="email" v-model="user.email">Login:</AppInput>
              <AppInput type="password" v-model="user.password">Password:</AppInput>

              <div class="controls">
                  <AppButton>Login!</AppButton>
              </div>

          </form>

      </div>
  </section>
</template>

<script>
export default {

// layout:'admin',

data() {
    return {
        user: {
            email:'',
            password:''
        }
    }
},

methods: {
    onSubmit() {

        this.$store.dispatch('authUser', this.user)
        .then( (res) => {
            // console.log(res)
            this.$router.push('/admin/')

                    // reset
            // this.user.email = ''
            // this.user.password = ''
        })
        .catch((e) => {
            console.log(e)
            this.user.email = ''
            this.user.password = ''
        })

    }
}
}
</script>

<style lang="scss">
.auth {
    // max-width: 400px;
    text-align: center;
}
.auth__form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    align-items: center;
    
    input {
        min-width: 460px;
    }
}
</style>