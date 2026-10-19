/**
 * config.js - การตั้งค่าส่วนกลาง (Centralized Configuration)
 * อัปเดตเฉพาะไฟล์นี้ ไม่กระทบส่วนอื่น
 */
const APP_CONFIG = {
  // 🌐 Web App Script URL ล่าสุด
  WEB_URL: "https://script.google.com/macros/s/AKfycbxVltJk-AnBjSQneK3HNgTgE5shsXsW7oQ-M_he-VX7haSJ3fmScsD6TisPTGRMupDyvg/exec",

  // 🤖 ระบบเชื่อมต่อบอท LINE (รองรับกรณีเชื่อมต่อกับบอท LINE หลายตัว)
  LINE: {
    // กำหนดบอทหลักที่ใช้งานอยู่ปัจจุบัน
    ACTIVE_BOT: "thewinmu",

    // รายการบอท LINE แต่ละบัญชี
    ACCOUNTS: {
      "thewinmu": {
        name: "วินทร์ทรัพย์นาคราช (หลัก)",
        lineId: "@thewinmu",
        // เมื่อเชื่อมต่อกับ LINE อื่น สามารถส่ง botKey เพื่อเลือกบอทส่งข้อความได้
      },
      "secondary_bot": {
        name: "บอทสำรอง / บอทสาขา",
        lineId: "@line_id_2",
      }
    }
  },

  // 📱 รายการ LIFF ID ทั้งหมดตามโมดูล
  LIFF: {
    BOOKING: "2007499712-B0uid9G3",       // ระบบจองคิว
    PICKACARD_HUB: "2007499712-07LXXVaY", // หน้ารวม Pick a Card
    PICKACARD_KRU: "2007499712-EtMhu4c2", // Pick a Card ครู
    MEMBERSHIP: "2007499712-J15McRGz"     // ระบบสมาชิก
  },

  // 🔗 LIFF URLs สำหรับเปิดผ่าน LINE
  LIFF_URL: {
    BOOKING: "https://liff.line.me/2007499712-B0uid9G3",
    PICKACARD_HUB: "https://liff.line.me/2007499712-07LXXVaY",
    PICKACARD_KRU: "https://liff.line.me/2007499712-EtMhu4c2",
    MEMBERSHIP: "https://liff.line.me/2007499712-J15McRGz"
  },

  // 🏛️ แบรนด์
  BRAND_NAME: "วินทร์ทรัพย์นาคราช"
};
