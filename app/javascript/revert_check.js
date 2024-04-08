window.addEventListener('turbo:load', function(){
  const articleCheckButtons = document.querySelectorAll(".article-check-button");
  articleCheckButtons.forEach(function (button) {
    button.addEventListener("click", () => {
      const articleId = button.getAttribute("data");
      // confirmメソッドによるポップアップ
      if (confirm("記事を既読状態に戻しますか?")) {
        const XHR = new XMLHttpRequest();
        XHR.open("GET", `/checks/revert/${articleId}`, true);
        XHR.send();
        XHR.onload = () => {
          button.remove();
        }
      }
    });
  });
});
