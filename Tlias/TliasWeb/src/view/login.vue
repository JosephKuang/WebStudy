<template>
  <div class="login-container">
    <div class="login-box">
      <h2>登录</h2>
      <form>
        <div class="input-group">
          <label for="username">用户名</label>
          <input id="username" type="text" placeholder="请输入用户名" />
        </div>
        <div class="input-group">
          <label for="password">密码</label>
          <input id="password" type="password" placeholder="请输入密码" />
        </div>
        <button type="button">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-box {
  width: 300px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.input-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #555;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px 0;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  background-color: #66b1ff;
}
</style>
