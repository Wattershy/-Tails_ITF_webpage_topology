(function() {  
  var countdown = 5;  
  var countdownElement = document.getElementById('countdown');  

  function updateCountdown() {  
      if (countdown > 0) {  
          countdownElement.textContent = countdown;  
          countdown--;  
          setTimeout(updateCountdown, 1000);  
      } else {  
          // 倒计时结束，隐藏加载动画，显示内容  
          document.getElementById('loading-container').style.display = 'none';  
          document.getElementById('content-container').style.display = 'block';  
      }  
  }  

  // 开始倒计时  
  updateCountdown();  
})();
window.onload = function () {
  //  获取导航栏节点
  var list1 = document.querySelectorAll(".yk_bar .info")

  // 获取内容节点
  var list2 = document.querySelectorAll(".yk_content .content")


  // 循环绑定导航栏节点点击事件
  for (let index = 0; index < list1.length; index++) {
    list1[index].addEventListener("click", function () {
      for (let i = 0; i < list1.length; i++) {
        list1[i].className = "info"
      }

      // 添加类名
      list1[index].className = "info active"

      // 对应的及
      for (let i2 = 0; i2 < list2.length; i2++) {
        if (index == i2) {
          list2[i2].style.display = "block"
        } else {
          list2[i2].style.display = "none"
        }

      }
    })
  }



  //  显示更多
  var more = document.querySelector("#more")
  more.addEventListener("click", function () {
    // 隐藏按钮
    this.style.display = "none"
    // 显示更多内容
    document.querySelector(".text2").style.display = "block"
  })

  const userName = new URLSearchParams(window.location.search).get('user_name') || localStorage.getItem('user_name') || 'Guest';  
  document.getElementById('userName').textContent = userName;  

  const theme = localStorage.getItem('theme') || 'light';  
  document.body.dataset.theme = theme;  

  if (theme === 'dark') {  
      document.body.classList.add('dark-theme'); // 假设你需要在body上添加一个类来触发CSS  
  }  

  getNowDate()
}

function submitUserName() {  
  const userName = document.getElementById('userInput').value;  
  document.getElementById('userName').textContent = userName;  
  localStorage.setItem('user_name', userName);  
}  

function toggleTheme() {  
  const currentTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';  
  document.body.dataset.theme = currentTheme;  
  localStorage.setItem('theme', currentTheme);  

  // 根据需要添加或移除类  
  if (currentTheme === 'dark') {  
      document.body.classList.add('dark-theme');  
  } else {  
      document.body.classList.remove('dark-theme');  
  }  
}
