<template>
  <view class="container">
    <view class="form">
      <view class="form-group">
        <input type="text" v-model="changePwdData.username" placeholder="用户名" />
      </view>
      <view class="form-group">
        <input type="password" v-model="changePwdData.password" placeholder="新密码" />
      </view>
      <view class="btn changePwd-btn" @click="changePassword">修改密码</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      changePwdData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    changePassword() {
      // 修改密码逻辑
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 300px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
