/**
 * วินทร์ทรัพย์นาคราช (@thewinmu) - Master System Config
 * ไฟล์ศูนย์รวม Web App URL ที่ทุกหน้าเว็บจะเรียกใช้งานร่วมกัน
 */
const SYSTEM_CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbwBK-NcHXTiaoVhJyBxB3fMVGFj9x8lSjvU1ECL6pzmjjIWLFqgN-94ny9niIjtow9B/exec",
  LAST_UPDATED: "2026-10-22"
};

function getMasterApiUrl() {
  const cachedUrl = localStorage.getItem("NAGA_MASTER_API_URL");
  if (cachedUrl && cachedUrl.startsWith("https://script.google.com/macros/s/")) {
    return cachedUrl;
  }
  return SYSTEM_CONFIG.API_URL;
}
