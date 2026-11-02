# The Serendipity Chapel • Open Weddings for Kind Strangers
> **Ready for Life and Work Assignment Submission**  
> *A self-contained, interactive digital wedding sanctuary featuring a Tinder-Style Swipe Discovery Deck, Virtual Livestream Hall, Draggable Atmosphere Filters, Bespoke 3D Rings (Three.js), Couple Profiles & Gourmet Menus with Smart Recommendations, Stranger Banquet Seats, Couple Passcode Gate, Anonymous Digital Love Letters, OpenRouter AI, and Web Audio API Synthesis.*

---

## 📝 Short Note for Submission (Ghi chú nộp bài)

### English Version (for assignment submission form)
* **The Idea:**  
  *The Serendipity Chapel* is an interactive open wedding platform that invites kind internet strangers to discover, attend, and celebrate 6 real-world upcoming weddings across the globe (Kyoto, Da Nang, Florence, Barcelona, Cotswolds, and Niseko).
  1. **Kind Stranger View:**
     - **Tinder-Style Swipe Matcher (Visual Hook):** Rather than cluttering the screen with 6 large cards, an intuitive gesture-driven card deck lets users drag/swipe cards (left to pass, right to match & celebrate) with physics-based rotation, stamp badges, and action controls. A toggle allows switching to a "Compact Cards" grid view anytime.
     - **Draggable Atmosphere Filter Bar:** Horizontally draggable pill filters categorize weddings by Setting (*Outdoor* vs. *Indoor*), Pet Policy (*Pet-Friendly* vs. *No Pets*), Age Policy (*Kids Welcome* vs. *Adults Only*), and Seat Availability (*Stranger Seats Open*).
     - **Virtual Ceremony Livestream Hall ("Attend Online"):** An interactive live broadcast simulator featuring a real-time viewer ticker, flying Danmaku cheers, and live actions (tossing rose petals, clinking champagne glasses with procedural audio, and lighting candles).
     - **Bride & Groom Profiles & Gourmet Menus:** Detailed modal highlighting couples' bios, professions, passions, quotes, meeting stories, 4-course banquet menus, and **Smart Tailored Recommendations** based on personal taste.
     - **Bespoke 3D Rings (Three.js):** Real-time WebGL scene dynamically transforming ring metals (Rose Gold, Yellow Gold, Platinum, Titanium) and gemstones (Jade, Diamond, Sapphire, Aquamarine, Peridot) per couple.
     - **Stranger Banquet Seats & Anonymous Love Notes:** Request in-person seats at open banquet tables, and hand-draw digital letters on an HTML5 Canvas pad with an Anonymous disguise mode.
  2. **Couple Host Portal:**  
     Secured by couple-specific passcodes (`KYOTO2026`, `DANANG2026`, `FLORENCE2026`, `BARCELONA2026`, `COTSWOLDS2026`, `NISEKO2026`), allowing newlyweds to manage stranger seat capacities, approve in-person RSVP requests, and browse their postbox of handwritten and anonymous love notes.

* **Target Audience & Problem Context:**  
  Designed for digital wanderers craving genuine micro-moments of human connection and warmth, and modern couples eager to open their milestone celebrations to friendly strangers either virtually or at their banquet table.

* **Technical Exploration:**  
  - **Tinder Swipe Discovery Deck & Touch/Mouse Physics:** Built a card stack with touch and mouse drag physics, rotational inertia, dynamic opacity for `LOVE IT` / `PASS` stamp badges, and deck completion states.
  - **Virtual Livestream Hall & Danmaku Broadcast Simulator:** Engineered a live ceremony player with real-time viewer counters, floating Danmaku bullet comments, and interactive live audience reactions.
  - **Draggable Horizontally-Scrollable Filter Bar:** Implemented mouse-drag scrolling and responsive pill buttons filtering across 4 atmospheric dimensions.
  - **Couple Profile, Culinary & Smart Recommendation Engine:** Modal presenting bride & groom backgrounds, 4-course gourmet dining menus, and tag-based algorithm recommendations.
  - **Couple Passcode Verification & Dual View State:** Client-side authentication gate protecting the Host Dashboard, coupled with synchronized LocalStorage (`serendipity_weddings_v6`, `serendipity_wishes_v6`).
  - **Bespoke 3D Rings & Gemstones (Three.js WebGL):** Procedural physical shaders updating metals (Rose Gold, 24K Yellow Gold, Platinum, Frosted Titanium) and gemstone colors dynamically per couple.
  - **OpenRouter AI Integration (`nvidia/nemotron-3.5-super-vl:free`):** AI Ghostwriter generating customized blessings across 4 emotional tones, plus automated personalized Bride & Groom letter replies adapted to specific wedding stories.
  - **HTML5 Canvas Interactive Doodle Pad with Anonymous Disguise:** Touch-friendly sketch pad exporting Base64 DataURLs with privacy shielding.
  - **Web Audio API Sound Synthesizer:** Pure procedural synthesis of crystal champagne glass clinks, harp chimes, fireworks, and ambient generative lofi chords with a real-time frequency visualizer (zero external audio files).

* **What I Would Improve with More Time:**  
  - Integrate a real-time database (Supabase or Firebase) with automated email notifications when a couple approves a stranger's in-person RSVP seat.
  - Add WebRTC for an interactive digital photo-booth (letting strangers snap a polaroid selfie with a wedding photo frame to leave on the wall).
  - WebXR / Augmented Reality mode to project the 3D wedding rings onto user tables.

---

### Bản Tiếng Việt (Hướng dẫn chi tiết & Trải nghiệm)
* **1. Ý tưởng (The Idea):**  
  Nền tảng "Đám cưới mở trên Internet" giới thiệu 6 đám cưới vòng quanh thế giới (Kyoto, Đà Nẵng, Florence, Barcelona, Cotswolds, Niseko) với 2 chế độ:
  - **Chế độ Khách lạ (Kind Stranger View):** 
    - **Visual Hook Tinder Swipe Deck:** Giao diện thẻ bài vuốt chạm như Tinder (kéo sang phải để thích/chúc phúc, kéo sang trái để bỏ qua) giúp giao diện cực kỳ gọn gàng, không bị ngợp bởi 6 thẻ to. Có nút chuyển đổi sang xem dạng lưới "Compact Cards" bất cứ lúc nào.
    - **Thanh lọc sở thích kéo/trượt được (Draggable Filters):** Lọc theo Ngoài trời/Trong nhà, Mang thú cưng 🐾, Cho em bé 👶/Người lớn 🍸, Ghế trống 🎟️.
    - **Tham dự lễ cưới Online (Virtual Ceremony Livestream Hall):** Màn hình phát sóng trực tiếp giả lập với số lượng người xem thời gian thực, mưa bình luận Danmaku bay ngang màn hình, các nút tương tác trực tiếp: Rải hoa hồng 🌸, Cụng ly rượu mừng 🥂 (phát âm thanh Web Audio), Thắp nến nguyện ước 🕯️.
    - **Hồ sơ chi tiết & Thực đơn tiệc cưới 4 món:** Xem tên tuổi, nghề nghiệp, sở thích, câu nói yêu thích của cô dâu chú rể, cùng thực đơn tiệc sang trọng và hệ thống **Gợi ý đám cưới tương tự (Smart Recommendations)**.
    - **Nhẫn cưới 3D Three.js riêng biệt:** Mỗi cặp đôi có một mẫu nhẫn và đá quý 3D độc bản (Vàng hồng, Bạch kim, Ngọc bích, Kim cương xanh...).
    - **Đăng ký ghế ăn cưới & Thư tay Ẩn danh:** Gửi đơn xin dự tiệc trực tiếp và vẽ thư tay có tuỳ chọn **Anonymous Mode** (giấu danh tính).
  - **Chế độ Cô dâu Chú rể (Couple Host Portal):** Có **hàng rào bảo mật bằng Passcode**, người dùng phải nhập đúng mật mã của cặp đôi mới được vào quản lý số lượng ghế, duyệt đơn xin ghế và đọc hòm thư tình cảm gửi về.
* **2. Khám phá kỹ thuật (Technical Exploration):**  
  - Tinder Swipe Deck với hiệu ứng vật lý xoay và văng thẻ mượt mà.
  - Phòng phát sóng trực tiếp ảo (Livestream Hall) với Danmaku và tương tác rải hoa/cụng ly.
  - Thanh filter dạng pills kéo trượt mượt mà.
  - Hồ sơ chi tiết & Hệ thống gợi ý đám cưới theo sở thích người xem.
  - Xác thực mật mã cặp đôi (Couple Passcode Gate) + Quản lý trạng thái 2 chế độ.
  - Three.js 3D cập nhật vật liệu nhẫn và đá quý theo từng tiệc cưới.
  - Tích hợp OpenRouter AI (`nvidia/nemotron-3.5-super-vl:free`).
  - Canvas vẽ thiệp tay có chế độ Ẩn danh.
  - Web Audio API tự tổng hợp âm thanh ly cụng, chuông harp, pháo hoa và nhạc lofi.
* **3. Danh sách mật mã Demo của 6 cặp đôi:**
  - Julian & Eleanor (Kyoto): `KYOTO2026`
  - Hoang Long & Minh Anh (Da Nang): `DANANG2026`
  - Liam & Sophia (Florence): `FLORENCE2026`
  - Mateo & Camila (Barcelona): `BARCELONA2026`
  - Arthur & Chloe (Cotswolds): `COTSWOLDS2026`
  - Kenji & Aoi (Niseko): `NISEKO2026`
  *(Có sẵn nút "Auto-Fill Passcode" trong màn hình đăng nhập để giảng viên test nhanh)*

---

## 🚀 How to Deploy to a Live URL (Free in 30 Seconds)

### Option 1: Netlify Drop (Easiest - No GitHub Account Required)
1. Open [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the `dms4` folder directly into the upload area on your browser.
3. Within 10 seconds, Netlify generates a live, publicly accessible URL (e.g. `https://serendipity-chapel-xxxx.netlify.app`).

### Option 2: Vercel
1. Push the directory to your GitHub repository.
2. Go to [vercel.com](https://vercel.com) -> New Project -> Import Repository.
3. Click **Deploy**.

### Option 3: GitHub Pages
1. Create a new public repository on GitHub.
2. Push all files (`index.html`, `style.css`, `app.js`, `audio.js`, `ai.js`, `three-scene.js`, `doodle.js`) to the `main` branch.
3. In GitHub Settings -> **Pages** -> Source: `Deploy from a branch` -> Select `main` -> Click **Save**.

---

## 📦 File Inventory in Submission Package
- `index.html`: Complete, self-contained semantic HTML5 structure with Tinder Deck, Livestream Hall, profile modals, banquet menus & recommendations.
- `style.css`: Danmaku animations, Tinder swipe stack styles, polaroid transforms, dress code badge styling.
- `three-scene.js`: Three.js 3D WebGL real-time golden rings & gemstones with dynamic material transitions.
- `app.js`: Master application controller with Tinder gesture physics, Livestream simulator, passcode authentication, 6 global weddings registry, bride/groom profiles, banquet menus, smart recommendations, and Anonymous mode.
- `ai.js`: OpenRouter client running `nvidia/nemotron-3.5-super-vl:free` with intelligent fallbacks.
- `audio.js`: Web Audio API procedural synthesizer for glass clink, harp chime, fireworks, and ambient lofi chords.
- `doodle.js`: HTML5 Canvas interactive sketch pad with multi-palette and image export.
- `wedding-submission.zip`: Complete zipped bundle ready for submission.
- `README.md`: Project documentation and assessment notes.
