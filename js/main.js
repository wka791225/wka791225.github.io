// ========================================
// main.js — 首頁分頁切換邏輯
// ========================================

function switchTab(tabId) {
  // 移除所有 active class
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  allTabs.forEach(tab => tab.classList.remove('active'));
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 添加 active class 到選中的標籤
  document.getElementById(tabId).classList.add('active');

  // 添加 active class 到對應的按鈕
  const tabMap = ['travel', 'work', 'life', 'study'];
  allButtons.forEach((btn, index) => {
    if (tabMap[index] === tabId) {
      btn.classList.add('active');
    }
  });

  // 平滑滾動到頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
