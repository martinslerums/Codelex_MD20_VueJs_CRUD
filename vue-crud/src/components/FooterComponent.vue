<template>
  <footer class="footer">
    <h4>Connect with me</h4>
    <div class="socials">
      <a class="instagram" href="https://www.instagram.com/maarcha42/" target="_blank"></a>
      <a class="linkedin" href="https://www.linkedin.com/in/martinslerums/" target="_blank"></a>
      <a class="facebook" href="https://www.facebook.com/martins.lerums" target="_blank"></a>
      <a class="github" href="https://github.com/martinslerums" target="_blank"></a>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer {
  display: flex;
  background-color: #999999;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 20px 40px;
}
.socials {
  display: flex;
  gap: 40px;
  padding: 30px;
  align-items: center;
}
.instagram {
  width: 32px;
  height: 32px;
  background-image: url(../assets/instagram.png);
  background-size: contain;
}
.facebook {
  width: 32px;
  height: 32px;
  background-image: url(../assets/facebook.png);
  background-size: contain;
}
.linkedin {
  width: 32px;
  height: 32px;
  background-image: url(../assets/linkedin.png);
  background-size: contain;
}
.github {
  width: 32px;
  height: 32px;
  background-image: url(../assets/github.svg);
  background-size: contain;
}
</style>