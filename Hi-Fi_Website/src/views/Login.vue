<template>
  <v-container>
   

                  <div class="container">
                    <div class="content">

                      <div class="login-container animated fadeInDown" style="animation-delay:.3s;">
                        <!--   Login   -->
                        <div class="login justify-content-center" id="login-form">
                          <h1 class="form-title"><i class="fas fa-user" style="color:#55a0ff;"></i> <br> LOGIN
                            <hr>
                          </h1>

                          <div class="form-container animated fadeIn" style="animation-delay:.7s;">
                            <form>

                              <label for=""><i class="fas fa-at"></i> Email </label>
                              <input type="email" name="email" placeholder="E-mail">

                              <label for=""><i class="fab fa-slack-hash"></i> Password </label>
                              <input type="password" name="password" placeholder="Password">

                              <div class="submit-buttons">
                                <input type="submit" value="Connect">
                                <input type="button" value="Login" class="btn-register" @click="login">
                              </div>

                            </form>
                          </div>
                        </div>
                        <!--   Login   -->

                        <!--    Register    -->

                        
                        <div class="login animated fadeIn" style="animation-delay:.7s;animation-duration:4s;" id="login-bg"></div>

                      </div>

                    </div>
                  </div>

      
  </v-container>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      localStorage.logged = true;
      this.$router.push('/home')
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully logged in');
        this.$router.push('/home');
      })
      .catch(error => {
        alert(error.message);
      });
    },
  }
}
</script>

<style scoped>
body{
  background:#f8fafc;
}

.content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .login-container{
        background: white;
        position: relative;
        border-radius: 5px;
        display: flex;
        width: 70vw;
        height: 70vh;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.07);
        transition: .4s;
    }
    
    
    .login{
        transition: .4s;
        font-family: Comfortaa;
    }
    
    .login#login-form{
        width: 50%;
        display: block;
        padding: 15px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 20px;
    }
    
    .login#login-bg{
        width: 50%;
        display: inline-flex;
        background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F531880%2Fpexels-photo-531880.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D1%26w%3D500&f=1&nofb=1);
        background-size: cover;
        background-position: center center;
        float: right;
        border-radius: 0 5px 5px 0;
    }
    
    .register{
        width: 50%;
        display: block;
        padding: 15px;
        align-items: center;
        text-align: center;
        position: relative;
        margin-top: 30px;
        transition: .4s;
        font-family: Comfortaa;
        display: none;
    }
    
    
    .form-title{
       position: absolute;
       top: 11%;
       left: 0;
       right: 0;
       text-align: center;
       color: #dedede;
       font-size: 2.2em;
       font-family: Spartan;
       line-height: 1.4;
       margin-top: -24px;
    }
    
    .form-title hr{
        width: 75%;
        border: 2px solid #dedede1f;
        border-radius: 10px;
        margin-top: 20px;
    }
    
    .register .form-title{
            margin-top: -54px;
    }
    
    
    .form-container{
        padding: 25px 10px;
        border-radius: 5px;
        width: 80%;
        text-align: left;
        margin-top: 70px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    
    label{
        font-size: .7em;
        color: #7392ff;
        margin: 0px 0 !important;
        margin-left: 4px !important;
    }
    
    input{
        background: #f8fafc ;
        border: 0;
        width: 100%;
        display: block;
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 20px !important;
        outline: 0;
        transition: .4s;
    }
    
    input::placeholder{
        opacity: .4;
    }
    
    .submit-buttons{
        display: flex;
    }
    
    .submit-buttons input{
        width: 50%;
        text-align: center;
        color: white;
        transition: .2s;
    }
    
    .submit-buttons input:hover{
        opacity: .7;
    }
    
    .submit-buttons input:nth-of-type(1){
        border-radius: 5px 0 0 5px;
        background: #54a0ff;
    }
    
    .submit-buttons input:nth-of-type(2){
        border-radius: 0 5px 5px 0;
        background: #c8d6e5;
    }
    
    @media (max-width:933px){
        .login#login-bg{
            width: 0;
        }
        
         .login#login-form,.register{
            width: 100%;
        }
        
        input{
            width: 100%;
        }
    }
</style>
