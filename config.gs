/**
 * ============================================================================
 * THE WIN MU - OMNICHANNEL SYSTEM CONFIGURATION
 * ไฟล์ศูนย์รวมการตั้งค่าระบบ (อัปเดตที่นี่ที่เดียว มีผลกับทุกหน้าเว็บ)
 * ============================================================================
 */

const SYSTEM_CONFIG = {
    // 🔗 1. Web App URL (ลิงก์หลังบ้านจาก Google Apps Script)
    WEB_APP_URL: "https://script.google.com/macros/s/AKfycbwWUVLc2LbWDgws-QYyUBqKkxGRor3APsXEjm1Ml9Xoj0A6X1fUDmXOw7jk9jeiSVgdmw/exec",
    
    // 🆔 2. รหัสหน้าต่าง LIFF (LIFF IDs)
    LIFF: {
        MEMBERSHIP: "2007499712-J15McRGz",       // หน้าบัตรสมาชิก (memberships.html)
        PICKACARD_HUB: "2007499712-O7LXXVaY",    // หน้าโถงพยากรณ์รวม (pickacard_hub.html)
        PICKACARD_KRU: "2007499712-EtMhu4c2"     // หน้าสุ่มไพ่สาส์นครู (pickacard_kru.html)
    },

    // 📁 3. รหัสโฟลเดอร์ Google Drive (สำหรับหมวดหมู่ต่างๆ)
    DRIVE_FOLDER: {
        KRU: "1g4nh17S_I8_0UK4mdhwTBYRKhF3FVVkN",      // โฟลเดอร์สาส์นครู
        ANGEL: "16SSHTmxmWyIiSCrwCNLlZkBl6ALGGEc2"     // โฟลเดอร์สาส์นเทวดา
    },

    // 💰 4. ตั้งค่าระบบทั่วไป
    FEE: {
        PICKACARD: 20  // ค่าครูเปิดไพ่
    }
};
