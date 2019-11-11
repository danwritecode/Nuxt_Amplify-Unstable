<template>
  <div>
      
      <div class="flex flex-col w-full max-w-xs mx-auto mt-40">
        <h1 class="mb-4 font-thin text-2xl text-center text-gray-700">Login</h1>
        <form class="px-8 py-6 border border-gray-200 shadow-xl rounded-lg">
            <div class="mb-4">
                <label class="mb-1 block font-bold text-sm text-gray-700">Username</label>
                <input v-model="form.username" type="text" placeholder="Username" class="px-2 py-1 h-10 w-full rounded border border-gray-200 shadow text-sm">
            </div>
            <div>
                <label class="mb-1 block font-bold text-sm text-gray-700">Password</label>
                <input v-model="form.password" type="password" placeholder="Username" class="px-2 py-1 h-10 w-full rounded border border-gray-200 shadow text-sm">
            </div>
            <div class="mt-4 flex items-center justify-between">
                <button @click="signIn()" class="px-2 py-1 border border-blue-600 rounded text-white bg-blue-600" type="button">Login</button>
                <a href="" class="inline-block align-baseline font-semibold text-sm text-blue-600">Forgot Password?</a>
            </div>
        </form>
      </div>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
    data() {
        return {
            form: {
                username: null,
                password: null
            },
            errorPost: false,
            errorMessage: null,
            posting: false
        }
    },
    methods: {
        signIn() {
            this.errorPost = false;
            this.posting = true;

            const {username, password } = this.form
            Auth.signIn({username, password})
                .then(user => (console.log(user), 
                            this.$router.push('/')))
                .catch(err => (console.log(err), this.errorMessage = err.message, this.errorPost = true, this.posting = false));
        }
    }
}
</script>

<style>

</style>