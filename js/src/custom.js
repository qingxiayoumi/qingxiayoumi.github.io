/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/failure.jpg");
      document.title = '崩溃啦';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.ico");
      $('[rel="shortcut icon"]').attr('href', "/images/favicon-32x32-next.png");
      document.title = '又好了';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}
