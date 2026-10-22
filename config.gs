/**
 * วินทร์ทรัพย์นาคราช (@thewinmu) - Master System Config
 * รวมศูนย์ Web App URL และ LINE LIFF ID ทุกโมดูล
 * Version: 2026.10.22-PROD
 */

const SYSTEM_CONFIG = {
  // 1. Web App URL ตัวล่าสุดจาก Google Apps Script (ลงท้ายด้วย /exec เท่านั้น)
  API_URL: "https://script.google.com/macros/s/AKfycbwBK-NcHXTiaoVhJyBxB3fMVGFj9x8lSjvU1ECL6pzmjjIWLFqgN-94ny9niIjtow9B/exec",
  
  // 2. LINE LIFF IDs ของแต่ละบริการ
  LIFF: {
    MEMBER: "2007499712-B0uid9G3",    // หน้า memberships.html
    BOOKING: "2007499712-B0uid9G3",   // หน้า booking.html
    SHOP: "2007499712-B0uid9G3",      // หน้า index.html
    TRACKING: "2007499712-B0uid9G3"   // หน้า tracking.html
  },
  
  LAST_UPDATED: "2026-10-22"
};

/**
 * ดึง API URL กลาง
 * บังคับใช้ค่าจาก SYSTEM_CONFIG เสมอ เพื่อป้องกันปัญหาแคช URL เก่าค้างในเครื่องผู้ใช้
 */
function getMasterApiUrl() {
  return SYSTEM_CONFIG.API_URL;
}

/**
 * ดึง LINE LIFF ID ตามประเภทการใช้งาน
 */
function getLiffId(type) {
  if (!type) return SYSTEM_CONFIG.LIFF.MEMBER;
  const key = String(type).toUpperCase();
  return SYSTEM_CONFIG.LIFF[key] || SYSTEM_CONFIG.LIFF.MEMBER;
}
