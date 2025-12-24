<template>
  <!-- 顶部信息栏 -->
  <div class="top-info-bar">
    <div class="container">
      <div class="left-info">
        <div class="logo">[Logo]</div>
        <div class="home-icon">[Home Icon]</div>
      </div>
      <div class="right-info">
        <div class="service-hotline">
          <span class="phone-icon">[Phone Icon]</span>
          服务热线：962666
        </div>
        <div class="function-links">
          <a href="#">VIP登录</a> | 
          <a href="#">中文版</a> | 
          <a href="#">English</a>
        </div>
      </div>
    </div>
  </div>

  <!-- 主导航栏 -->
  <div class="main-nav">
    <div class="container">
      <ul class="nav-menu">
        <li><a href="#">首页</a></li>
        <li><a href="#">要闻动态</a></li>
        <li><a href="#">关于我们</a></li>
        <li><a href="#">一站式服务</a></li>
        <li><a href="#">经典案例</a></li>
        <li><a href="#">诚聘英才</a></li>
        <li><a href="#">专题宣传片</a></li>
        <li class="dropdown">
          <a href="#">更多></a>
          <ul class="dropdown-menu">
            <li><a href="#">下拉菜单项1</a></li>
            <li><a href="#">下拉菜单项2</a></li>
            <li><a href="#">下拉菜单项3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.top-info-bar {
  background-color: #f5f5f5;
  padding: 10px 0;
  font-size: 14px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.right-info {
  display: flex;
  align-items: center;
  gap: 30px;
}

.service-hotline {
  display: flex;
  align-items: center;
  gap: 5px;
}

.function-links a {
  text-decoration: none;
  color: #333;
  margin: 0 5px;
}

.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 15px 0;
  margin-top: 46px;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  padding: 5px 0;
}

.nav-menu li a:hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1976d2;
  animation: slideIn 0.3s ease;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
  min-width: 150px;
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-menu li a {
  display: block;
  padding: 8px 15px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

@keyframes slideIn {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
  /* 汉堡菜单样式 */
  .hamburger {
    display: block;
    cursor: pointer;
  }
  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #333;
    margin: 5px 0;
  }
}
</style>