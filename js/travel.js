// ========================================
// travel.js — 旅遊頁面分頁切換邏輯
// ========================================

function switchTab(tabId) {
  // 移除所有 active class
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  allTabs.forEach(tab => tab.classList.remove('active'));
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 添加 active class 到選中的標籤
  document.getElementById(tabId).classList.add('active');

  // 找到對應按鈕並加上 active
  allButtons.forEach(btn => {
    const btnText = btn.textContent.trim();
    const labelMap = {
      'overview': '📋',
      'day1': '第一天',
      'day2': '第二天',
      'day3': '第三天'
    };
    // 用 data-tab 屬性來匹配
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    }
  });

  // 平滑滾動到頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 鍵盤快捷鍵支持（按數字 0-3 切換分頁）
document.addEventListener('keydown', function (e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  const tabs = document.querySelectorAll('.tab-button');
  const key = parseInt(e.key);

  if (!isNaN(key) && key >= 0 && key < tabs.length) {
    const tabId = tabs[key].dataset.tab;
    if (tabId) {
      switchTab(tabId);
    }
  }
});
