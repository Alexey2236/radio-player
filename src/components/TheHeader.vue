<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link to="/"
          ><div class="header__logo">
            <img src="../assets/logo.svg" alt="" class="logo-img" />
            Радио
          </div></router-link
        >

        <nav class="header__nav">
          <ul>
            <li class="header__nav-item">
              <router-link to="musicInfo" active-class="active"
                >О музыке</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  padding: 10px 0;
  border-bottom: 2px solid rgba(235, 235, 245, 0.6);
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #5996f7;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.header__search {
  padding: 2px 10px;
  width: 300px;
  height: 30px;
  background: #2f2f2f;
  border-radius: 24px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: rgba(235, 235, 245, 0.6);
}

.header__nav ul {
  display: flex;
  column-gap: 20px;
}
.header__nav-item a {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: rgba(235, 235, 245, 0.6);
}

.active {
  padding: 0 8px;
  border-bottom: 4px solid #0061fd;
}
</style>
