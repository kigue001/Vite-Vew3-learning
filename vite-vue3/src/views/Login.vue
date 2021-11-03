<template>
  <main class="container-fluid d-flex justify-content-center align-items-center">
    <div class="card shadow" style="width: 500px">
      <div class="card-header">
        <span>Login</span>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="onSubmit()">
          <div class="form-floating mb-3">
            <input type="text" id="idUser" class="form-control" placeholder="이용자 ID" />
            <label for="idUser" class="form-label"> 이용자 ID </label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" id="noPassWord" class="form-control" placeholder="Password" />
            <label for="noPassWord" class="form-label"> 비밀번호 </label>
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label"> <input class="form-check-input" type="checkbox" name="remember" /> ID/PW 기억하기 </label>
          </div>
          <div class="d-grid col-6 mx-auto">
            <button type="submit" class="btn btn-primary">로그인</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();
  const route = useRoute();
  function onSubmit(): void {
    router.push({ name: 'Home' });
    // console.log('test');
    // axios.get('http://localhost:5000/todos').then((response: any) => {
    //   console.log(response);
    // });
  }
</script>

<style scoped lang="scss"></style>
