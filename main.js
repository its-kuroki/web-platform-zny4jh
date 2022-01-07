if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function () {
    console.log("Service Worker is registered!!");
  });
}

// インストールボタンのDOMエレメントを取得
const installBtn = document.getElementById('installBtn');
if (installBtn) {

  // PWAのインストールイベントを取得
  window.addEventListener('beforeinstallprompt', function (event) {
    window.installPromptEvent = event;
    installBtn.style.display = 'block';
    return false;
  });

  installBtn.addEventListener('click', function (event) {
    var installPromptEvent = window.installPromptEvent;
    if (installPromptEvent) {
      installPromptEvent.prompt();
      installPromptEvent.userChoice.then(function (choice) {
        if (choice.outcome === 'accepted') {
          console.log('pwa installed.');
          location.reload();
        } else {
          console.log('pwa not installed.');
        }
      });
    }
  });
}
