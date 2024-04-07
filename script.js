var buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // 移除所有按钮的.active类
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // 添加当前按钮的.active类
    button.classList.add('active');

    // 根据按钮执行相应的操作，例如切换到相应的页面
    var buttonId = button.id;
    if (buttonId === 'jiabi') {
      // 执行按钮1的操作
      // 切换到按钮1对应的页面
      console.log("按钮1被点击了!");
      // 这里可以添加按钮1的操作逻辑

    } else if (buttonId === 'timeline') {
      // 执行按钮2的操作
      // 切换到按钮2对应的页面
      console.log("按钮2被点击了!");
      // 这里可以添加按钮2的操作逻辑

    } else if (buttonId === 'about') {
      // 执行按钮3的操作
      // 切换到按钮3对应的页面
      console.log("按钮3被点击了!");
      // 这里可以添加按钮3的操作逻辑

    } else if (buttonId === 'kiss') {
      // 切换到按钮4对应的页面
      function navigateToButton4Page() {
        // 在这里编写切换到按钮4对应页面的逻辑
        window.location.href = "kiss.html"; // 使用页面重定向方式切换到按钮4对应的页面
        
        // 或者你可以修改页面内容来显示按钮4对应的内容
        // 可以使用DOM操作来修改页面的内容，例如修改文本、显示/隐藏元素等
      }
      
      // 监听按钮4的点击事件
      var button4 = document.getElementById('kiss');
      button4.addEventListener('click', navigateToButton4Page);
    }
  });
});
