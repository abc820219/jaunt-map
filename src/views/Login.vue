<template>
  <div class="login">
    <div class="login-box">
      <h1 class="login-logo">
        <img src="@/assets/images/logo.svg" alt="jaunt Map 小旅行" />
      </h1>
      <JButton class="login-button" width="385px" height="60px">
        <img
          class="google-icon"
          src="@/assets/images/google logo.svg"
          alt="google_logo"
        />
        Google 登入
      </JButton>
      <br />
      <JButton class="login-button" width="385px" height="60px"
        >訪客登入</JButton
      >
    </div>
  </div>
</template>

<style lang="scss" >
.login {
  font-weight: 400;
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 178px;
  }
  .google-icon {
    margin-right: 4px;
  }
  .login-logo {
    width: 205px;
    margin-bottom: 128px;
  }
  .login-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    font-size: 20px;
    &:hover {
      color: #ACABB0;
    }
  }
}
</style>
