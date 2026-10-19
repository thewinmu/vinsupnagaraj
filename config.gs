/**
 * config.js - การตั้งค่าส่วนกลางของระบบ (Centralized Configuration)
 * ควบคุม Web App URL และ LIFF ID ของทุกหน้าเว็บ
 */
const APP_CONFIG = {
  // 🌐 Web App Script URL ปัจจุบัน
  WEB_URL: "https://script.google.com/macros/s/AKfycbyztwCdkFfoD1eUxN3cRzAbyHRuX3f8QqQ3aTp5Se5WZ6IiJbl3xWZ_vNn_6RZXlqFK9A/exec",

  // 📱 LIFF IDs ทั้งหมดสำหรับแต่ละโมดูล
  LIFF: {
    BOOKING: "2007499712-B0uid9G3",       // ระบบจองคิว (booking.html)
    PICKACARD_HUB: "2007499712-07LXXVaY", // หน้ารวม Pick a Card (pickacard_hub.html)
    PICKACARD_KRU: "2007499712-EtMhu4c2", // หน้า Pick a Card ครู (pickacard_kru.html)
    MEMBERSHIP: "2007499712-J15McRGz"     // ระบบสมาชิก (memberships.html)
  },

  // 🔗 LIFF URLs สำหรับเปิดตรงใน LINE
  LIFF_URL: {
    BOOKING: "https://liff.line.me/2007499712-B0uid9G3",
    PICKACARD_HUB: "https://liff.line.me/2007499712-07LXXVaY",
    PICKACARD_KRU: "https://liff.line.me/2007499712-EtMhu4c2",
    MEMBERSHIP: "https://liff.line.me/2007499712-J15McRGz"
  },

  // 🏛️ แบรนด์
  BRAND_NAME: "วินทร์ทรัพย์นาคราช"
};
