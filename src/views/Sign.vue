<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet color="blue lighten-3" rounded="lg" min-height="268"></v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
            <div class="wallpaper-register"></div>
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                  <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Register</h1>
                    <br />
                    <br />
                    <form class="form-group">
                      <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                      <br />
                      <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                      <br />
                      <input v-model="password_new" type="password" class="form-control" placeholder="Password Again" required>
                      <br />
                      <input type="submit" class="btn btn-primary blue" @click="doLogin">
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet color="blue lighten-3" rounded="lg" min-height="268">    
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
  },
  name: 'Sign',
  data: () => ({
    email: '',
    password: '',
    password_new: ''
  })
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
        background: url(https://picsum.photos/700);
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
