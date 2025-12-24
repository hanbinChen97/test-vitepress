<template>
  <footer class="footer">
    <div class="container">
      <!-- 左侧列：友情链接 -->
      <div class="footer-column">
        <h3 class="footer-title">友情链接</h3>
        <ul class="friend-links">
          <li><a href="#">[Link 1]</a></li>
          <li><a href="#">[Link 2]</a></li>
          <li><a href="#">[Link 3]</a></li>
          <li><a href="#">[Link 4]</a></li>
        </ul>
      </div>

      <!-- 中间列：联系我们 -->
      <div class="footer-column">
        <h3 class="footer-title">联系我们</h3>
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-icon">📞</span>
            <span class="contact-text">服务热线：962666</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">⏰</span>
            <span class="contact-text">服务时间：8:00-20:00</span>
          </div>
          <div class="contact-item">
            <span class="contact-icon">✉️</span>
            <span class="contact-text">Email：service@security.sh.cn</span>
          </div>
        </div>
      </div>

      <!-- 右侧列：关注我们 -->
      <div class="footer-column">
        <h3 class="footer-title">关注我们</h3>
        <div class="social-icons">
          <a href="#" class="social-icon">[Social Icon 1]</a>
          <a href="#" class="social-icon">[Social Icon 2]</a>
          <a href="#" class="social-icon">[Social Icon 3]</a>
        </div>
        <div class="copyright">
          <p>© [Year] [Company] | [ICP Code]</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f5f5f5;
  padding: 40px 0;
  color: #666;
  margin-top: 40px;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #1976d2;
  width: fit-content;
}

.friend-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.friend-links li {
  margin-bottom: 10px;
}

.friend-links li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.friend-links li a:hover {
  color: #1976d2;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-icon {
  font-size: 18px;
}

.contact-text {
  font-size: 14px;
}

.social-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  color: #666;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.social-icon:hover {
  background-color: #1976d2;
  color: #fff;
  transform: translateY(-3px);
}

.copyright {
  font-size: 12px;
  color: #999;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer .container {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 480px) {
  .footer .container {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .footer-column {
    align-items: center;
    text-align: center;
  }
  
  .footer-title {
    margin: 0 auto 20px;
  }
}
</style>