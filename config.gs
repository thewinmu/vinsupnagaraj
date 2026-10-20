/**
 * config.js - การตั้งค่าส่วนกลางของระบบ (Centralized Configuration)
 * แบรนด์: วินทร์ทรัพย์นาคราช
 */
const APP_CONFIG = {
  // 🌐 Web App Script URL ล่าสุดของ Google Apps Script
  WEB_URL: "https://script.google.com/macros/s/AKfycbwksOEbiqQP14T4VnrO_4FeOk9xiinHLKwdsl-AVcH5VYcNPWMdaCftuTFC51lvI9xk/exec",

  // 📱 รายการ LIFF ID ทั้งหมดตามโมดูล
  LIFF: {
    BOOKING: "2007499712-B0uid9G3",       // ระบบจองคิว (booking.html)
    PICKACARD_HUB: "2007499712-07LXXVaY", // ฮับ Pick a Card
    PICKACARD_KRU: "2007499712-EtMhu4c2", // Pick a Card ครู
    MEMBERSHIP: "2007499712-J15McRGz"     // ระบบสมาชิก
  },

  // 🔗 ลิงก์ตรงสำหรับเปิดผ่าน LINE
  LIFF_URL: {
    BOOKING: "https://liff.line.me/2007499712-B0uid9G3",
    PICKACARD_HUB: "https://liff.line.me/2007499712-07LXXVaY",
    PICKACARD_KRU: "https://liff.line.me/2007499712-EtMhu4c2",
    MEMBERSHIP: "https://liff.line.me/2007499712-J15McRGz"
  },

  // 🏛️ ข้อมูลแบรนด์
  BRAND_NAME: "วินทร์ทรัพย์นาคราช"
};
