
// ══════════════════════════════════════════
// TRANSLATION DICTIONARY
// ══════════════════════════════════════════
const T = {
  // NAV
  'nl-products':   {en:'Products',    zh:'產品'},
  'nl-gallery':    {en:'Colors',      zh:'色彩'},
  'nl-technology': {en:'Technology',  zh:'技術'},
  'nl-products':   {en:'Products',     zh:'產品'},
  'nl-app':        {en:'Applications', zh:'應用場景'},
  'nl-proj':       {en:'Projects',     zh:'專案'},
  'nl-about':      {en:'About',        zh:'關於我們'},
  'nl-contact':    {en:'Contact',      zh:'聯絡我們'},
  'nl-contact-a':  {en:'Contact',      zh:'聯絡我們'},
  'nl-catalog':    {en:'Catalog',      zh:'產品目錄'},
  // Catalog page nav
  'cat-products-nav': {en:'Products ▾',   zh:'產品 ▾'},
  'cat-nav-plye':  {en:'Flooring',                zh:'地板系統'},
  'cat-nav-stone': {en:'Stone',                   zh:'石材系統'},
  'cat-nav-fiber': {en:'Fiberboard',              zh:'纖維板系統'},
  'cat-catalog-nav': {en:'Catalog',               zh:'產品目錄'},
  'cat-app-nav':   {en:'Applications',             zh:'應用場景'},
  'cat-proj-nav':  {en:'Projects',                 zh:'專案'},
  'cat-cta-nav':   {en:'Contact',                  zh:'聯絡我們'},
  'nov-products':  {en:'Products',     zh:'產品'},
  'nov-app':       {en:'Applications', zh:'應用場景'},
  'nov-proj':      {en:'Projects',     zh:'專案'},
  'nov-about':     {en:'About',        zh:'關於我們'},
  'nov-cta':       {en:'Contact',      zh:'聯絡我們'},
  // STATIC HERO (homepage legacy note)
  'sh-eyebrow':    {en:'Ashley Kitchen · Taiwan', zh:'Ashley Kitchen · 台灣'},
  'sh-h1':         {en:'Smart Materials for Modern Architecture', zh:'為現代建築打造的智慧材料'},
  'sh-sub':        {en:'Innovative surface and structural material solutions — plyē breathable engineered boards for floors, Nalexible flexible stone for walls, and natural fiber acoustic panels for doors.', zh:'創新表面與結構材料解決方案——plyē 呼吸工程木地板、Nalexible 柔性天然石材牆面，以及天然纖維隔音門板，精準建材涵蓋地板、牆面與門。'},
  'sh-btn1':       {en:'Explore Materials', zh:'探索建材'},
  'sh-btn2':       {en:'Request a Sample', zh:'申請樣品'},
  // FOOTER CTA SECTION
  'fp3-type':      {en:'Natural Fiberboard', zh:'天然纖維門板'},
  'fp3-desc':      {en:'Hemp Fiber, Steel-Strength, Zero Formaldehyde.', zh:'大麻纖維、鋼鐵強度、零甲醛。'},
  'fp3-link':      {en:'Explore Fiberboard →', zh:'了解纖維門板 →'},
  'fcta-title':    {en:'Get a free sample kit for your next project', zh:'為您的下一個專案申請免費樣品包'},
  'fcta-btn':      {en:'Request a Sample →', zh:'申請樣品 →'},
  // BRAND STRIP
  'bs-dist':   {en:'Ashley Kitchen distributes', zh:'Ashley Kitchen 代理'},
  'bs-tag':    {en:'Redefining surfaces for modern living', zh:'重新定義現代生活的建材美學'},
  'bs-cert':   {en:'plyē: Patent M677196 · EU E1 · Made in Taiwan · Exporting to US / EU / ANZ · Nalexible: Taiwan Exclusive Distributor', zh:'plyē：專利M677196 · 歐盟E1 · 台灣製造 · 外銷美/歐/紐澳 · Nalexible：台灣獨家總代理'},
  // SLIDE 0
  's0-eyebrow':{en:'plyē Engineered Flooring', zh:'plyē 超耐磨工程木地板'},
  's0-h1':     {en:'The floor<br>that <em>lasts</em>', zh:'歷久彌新的<br><em>完美地板</em>'},
  'ph-diy':    {en:'Click. Lock. <em>Done.</em> — DIY Install.', zh:'一扣。鎖定。<em>完成。</em>— 自行安裝。'},
  'ph-desc':   {en:'An engineered surface system designed for modern architecture — 9mm eucalyptus core, patent click-lock, 12 oak shades, EU E1 certified, 19dB sound reduction.', zh:'專為現代建築設計的工程地板系統 — 9mm桉木芯材、專利卡扣、12款橡木色、歐盟E1認證、19dB隔音。'},
  's0-diy':    {en:'Click. Lock. <em>Done.</em> — DIY Install.', zh:'一扣。鎖定。<em>完成。</em>— DIY 自行安裝。'},
  's0-desc':   {en:'9mm eucalyptus click-lock. Patent M677196. 12 oak shades. EU E1 ultra-low formaldehyde. 19dB sound reduction. DIY install — no glue, no tools.', zh:'9mm桉木夾板四向專利卡扣。專利M677196。12款橡木色。歐盟E1超低甲醛。19dB隔音認證。免膠免工具DIY施工。'},
  's0-btn1':   {en:'Explore plyē',       zh:'探索 plyē'},
  's0-btn2':   {en:'Request a Sample →', zh:'申請樣品 →'},
  's0-stat1-num': {en:'Patent',           zh:'專利'},
  's0-stat1':  {en:'Click-Lock',         zh:'卡扣系統'},
  's0-stat2':  {en:'Sound Reduction',    zh:'隔音效果'},
  's0-stat3':  {en:'Formaldehyde',       zh:'甲醛標準'},
  's0-stat4':  {en:'Certified',          zh:'認證'},
  // SLIDE 1
  's1-eyebrow':{en:'Nalexible · Natural Stone', zh:'Nalexible · 天然石材'},
  // SLIDE 2 (LumiSlate)
  's2l-eyebrow':{en:'Nalexible · LumiSlate', zh:'Nalexible · 透光石材板'},
  's2l-h1':    {en:'Stone that<br><em>glows</em> with light', zh:'光穿石材<br><em>璀璨生輝</em>'},
  's2l-desc':  {en:'Translucent resin backing lets backlight pass through ultra-thin natural stone — creating living light-and-shadow effects for hotel lobbies and feature walls.', zh:'透光樹脂背材讓背光穿透超薄天然石材——為飯店大廳與特色牆面創造生動的光影效果。'},
  's2l-btn1':  {en:'Explore LumiSlate', zh:'探索 LumiSlate'},
  's2l-btn2':  {en:'Request a Sample →', zh:'申請樣品 →'},
  's2l-stat1': {en:'Ultra Thin', zh:'超薄'},
  's2l-stat2': {en:'Transmitting', zh:'透光'},
  's2l-stat3': {en:'Weight of Stone', zh:'石材重量'},
  's2l-stat4': {en:'Exclusive', zh:'獨家代理'},
  // SLIDE 3 (EasyStone)
  's3-eyebrow':{en:'Nalexible · Natural Stone Surface', zh:'Nalexible · 天然石材面'},
  's3-h1':     {en:'Natural stone.<br><em>Effortless</em> installation.', zh:'天然石材。<br><em>輕鬆</em>施工。'},
  's3-desc':   {en:'EasyStone self-adhesive panels and 3D Stone Brick bring the drama of natural stone to any surface — walls, ceilings, curves — at a fraction of the weight and cost.', zh:'EasyStone 自黏板材與3D石磚將天然石材的震撼帶入任何表面——牆面、天花板、曲面——僅需傳統石材的一小部分重量與成本。'},
  's3-btn1':   {en:'Explore Stone', zh:'探索石材'},
  's3-btn2':   {en:'Request a Sample →', zh:'申請樣品 →'},
  's3-stat1':  {en:'Lightweight', zh:'超輕量'},
  's3-stat2':  {en:'Self-Adhesive', zh:'自黏安裝'},
  's3-stat3':  {en:'Weight of Stone', zh:'石材重量'},
  's3-stat4':  {en:'Exclusive', zh:'獨家代理'},
  's1-h1':     {en:'Bends to any curve.<br><em>Glows</em> from within.', zh:'隨型彎曲。<br><em>由內發光。</em>'},
  's1-desc':   {en:'Premium natural stone veneer, 1–3mm thin. Suitable for curved surfaces, feature walls, and backlit panels. Taiwan exclusive distributor. Available for architectural specification.', zh:'頂級天然石材貼面，厚度僅1–3mm。適用於曲面、主題牆及透光板。台灣獨家總代理。提供建築師規格資料。'},
  's1-btn1':   {en:'Explore Stone →',  zh:'探索石材 →'},
  's1-btn2':   {en:'Request a Sample →', zh:'索取樣品 →'},
  's1-stat1':  {en:'Ultra Thin',         zh:'超薄'},
  's1-stat2':  {en:'Any Curve',          zh:'弧面適用'},
  's1-stat3':  {en:'Luminous',    zh:'透光發光'},
  's1-stat4':  {en:'Weight of Stone',          zh:'石材重量'},
  // SLIDE 2
  's2-eyebrow':{en:'Nalexible · Fiberboard', zh:'Nalexible · 天然纖維門板'},
  's2-h1':     {en:'Light. Strong.<br>Natural. <em>Quiet.</em>', zh:'輕盈。堅固。<br>天然。<em>靜謐。</em>'},
  's2-desc':   {en:'Hemp fiber composite panels — 60% lighter than steel, zero formaldehyde certified, and an acoustic door system rated for sound reduction. Taiwan exclusive distributor. B2B pricing and samples available.', zh:'天然麻纖維板，重量減輕60%，具鋼鐵等級強度，零甲醛，搭配隔音門系統將城市噪音化為寂靜。台灣獨家總代理。提供B2B報價及樣品。'},
  's2-btn1':   {en:'Explore Fiberboard →', zh:'探索天然纖維門板 →'},
  's2-btn2':   {en:'Request a Sample →', zh:'申請樣品 →'},
  's2-stat1':  {en:'Less Weight',        zh:'重量更輕'},
  's2-stat2':  {en:'Strength',           zh:'鋼鐵強度'},
  's2-stat3-num': {en:'No',              zh:'零'},
  's2-stat3':  {en:'Formaldehyde',        zh:'甲醛'},
  's2-stat4':  {en:'Acoustic Door',          zh:'隔音門'},
  // PRODUCTS
  'prod-label':{en:'Our Materials',      zh:'我們的建材'},
  'prod-title':{en:'Three <em>iconic</em><br>product lines', zh:'三大<em>旗艦</em><br>產品系列'},
  'prod-desc': {en:"Ashley Kitchen brings together plyē engineered flooring for global DIY markets and Nalexible's revolutionary stone veneer & fiberboard systems — exclusively in Taiwan.", zh:'Ashley Kitchen 整合 plyē 工程木地板（全球DIY市場）及 Nalexible 柔性石材與纖維門板系統（台灣獨家總代理），為您提供最完整的建材解決方案。'},
  'p1-type':   {en:'Engineered Flooring · Made in Taiwan · US / EU / ANZ', zh:'超耐磨工程木地板 · 台灣製造 · 外銷美/歐/紐澳'},
  'p1-desc':   {en:'9mm eucalyptus core. Patent click-lock. 12 oak colors. EU E1 certified.', zh:'9mm桉木夾板芯。專利卡扣。12種橡木色。歐盟E1認證。'},
  'p1-link':   {en:'Explore plyē →',    zh:'探索 plyē →'},
  'p2-type':   {en:'Flexible Stone Veneer · Taiwan Distributor', zh:'柔性石材貼面 · 台灣代理'},
  'p2-desc':   {en:'Ultra-thin 1–3mm natural stone. Flexible, flame retardant. Curved surfaces.', zh:'超薄1–3mm天然石材。柔性、阻燃。可用於曲面。'},
  'p2-link':   {en:'Explore Stone →',   zh:'探索石材 →'},
  'p3-type':   {en:'Fiberboard Series · Taiwan Distributor', zh:'纖維門板系列 · 台灣代理'},
  'p3-desc':   {en:'Natural fiber composite. Steel-strength. Interior doors and partition walls.', zh:'天然纖維門板。鋼鐵強度。室內門板與隔間牆。'},
  'p3-link':   {en:'Explore Fiberboard →', zh:'探索天然纖維門板 →'},
  // CLICK-LOCK SECTION
  'cl-eyebrow':     {en:'Patent Protected · Taiwan Utility Model', zh:'專利保護 · 台灣新型專利'},
  'cl-headline':    {en:'Click. Lock.<br><em>Done.</em><br>DIY Install.', zh:'一扣。鎖定。<br><em>完成。</em><br>自行安裝。'},
  'cl-sub':         {en:"plyē's four-direction click-lock is the only patented system that solves the short-edge gap defect — the chronic flaw of every floating floor. One person. One afternoon. No glue, no tools, no professional installer.", zh:'plyē 四向專利卡扣是唯一解決短邊縫隙缺陷的專利系統——所有浮鋪地板的宿命問題。一個人。一個下午。免膠、免工具、免工班。'},
  'cl-pt1':         {en:'Taiwan Utility Model Patent', zh:'台灣新型專利'},
  'cl-pill-1':      {en:'No Glue',        zh:'免上膠'},
  'cl-pill-5':      {en:'No Nails',       zh:'免釘'},
  'cl-pill-2':      {en:'No Tools',       zh:'免工具'},
  'cl-pill-3':      {en:'No Contractor',  zh:'免工班'},
  'cl-pill-4':      {en:'Reversible',     zh:'可拆裝'},
  'cl-step1-title': {en:'Place the first plank along the wall', zh:'第一片沿牆擺放'},
  'cl-step1-desc':  {en:'Leave only a 2–3mm expansion gap — far smaller than the 8–12mm required by HDF floors. Begin your layout.', zh:'只需留2–3mm伸縮縫——遠小於HDF地板所需的8–12mm。開始排列方向。'},
  'cl-step2-title': {en:'Angle and click the long edge', zh:'斜角嵌入長邊卡扣'},
  'cl-step2-desc':  {en:'Tilt the next plank at 20°, slide the tongue into the groove along the long side, then press flat. The long edge locks with a click.', zh:'將下一片以20°角傾斜，將榫舌沿長邊滑入凹槽，再壓平。長邊卡扣隨即鎖定。'},
  'cl-step3-title': {en:'Short edge self-locks — no mallet needed', zh:'短邊自動鎖定——免用橡皮槌'},
  'cl-step3-desc':  {en:'The patented short-edge system engages automatically as you press flat. No tapping block, no mallet. The defect that plagues every other floor — eliminated by design.', zh:'壓平的同時，專利短邊卡扣系統自動咬合。不需敲擊塊、不需橡皮槌。困擾所有浮鋪地板的短邊縫隙問題——由設計根本解決。'},
  'cl-result':      {en:'<strong>Complete a 20m² room in one afternoon.</strong> Remove and reinstall with zero damage to the subfloor. Install directly over existing tile — no demo required.', zh:'<strong>一個下午完成20m²的房間鋪設。</strong>可拆除重新安裝，不損傷底層地面。直接鋪設於現有磁磚上——無需拆除原地面。'},
  'fi-key-tag':     {en:'★ Key Selling Feature', zh:'★ 核心賣點'},
  // FEATURES
  'feat-title':{en:'What makes <em>plyē</em> different', zh:'為什麼選擇 <em>plyē</em>'},
  'fcap1':     {en:'plyē ORG-8825 — Soft Light Gray Oak', zh:'plyē ORG-8825 柔光灰橡'},
  'fcap2':     {en:'2–3mm natural edge gap — razor-clean finish', zh:'2–3mm 自然縫隙 — 極致乾淨的收邊'},
  'ft1':       {en:'9mm Eucalyptus Plywood Core', zh:'9mm 桉木夾板芯'},
  'fd1':       {en:'Cross-laminated eucalyptus — harder and more stable than standard HDF. Naturally insect-repelling, no chemical additives. Warm underfoot.', zh:'交叉壓合桉木，比標準 HDF 更硬、更穩定。天然防蟲，無化學添加劑。腳感溫暖舒適。'},
  'ft2':       {en:'Patent Click-Lock — Four Directions', zh:'四向專利卡扣系統'},
  'fd2':       {en:'Utility Model Patent M677196. Eliminates the short-edge defect — the flaw no competitor has solved. No glue needed — installs over existing tile without damage. One person, one afternoon.', zh:'新型專利 M677196。消除短邊縫隙缺陷——競爭對手皆無法解決的痼疾。免膠施工，可直接鋪設於現有磁磚上，不破壞原有地面。一個人，一個下午完成。'},
  'ft3':       {en:'Whisper-Quiet Underfoot — 19dB Sound Reduction', zh:'踩踏靜音無聲——19dB 隔音認證'},
  'fd3':       {en:'Most floors creak because planks shift. plyē\'s patent click-lock system seals every joint completely — zero gap, zero movement, zero noise. The result: 19dB impact sound reduction, exceeding Taiwan Building Code Article 46-6 (ΔLw ≥ 17dB), SGS certified. Quieter than any competitor on the market.', zh:'一般地板踩起來有聲音，是因為地板片之間存在縫隙、產生位移。plyē 專利卡扣系統讓每一個接縫完全密合——零縫隙、零位移、零噪音。結果：19dB 衝擊隔音，超越台灣建築法規第46-6條（ΔLw ≥ 17dB），SGS認證。踩踏靜音，優於市場上所有競品。'},
  'ft4':       {en:'Al₂O₃ Wear Layer · 12,000 Rev · Anti-Mold · Water-Repellent', zh:'Al₂O₃耐磨層 · 12,000轉 · 防霉抗菌 · 防水'},
  'fd4':       {en:'Mohs 9 aluminum oxide — the hardest mineral coating available, just below diamond. Rated at 12,000 revolutions: no floor in this category comes close. The ultra-dense surface eliminates the microscopic scratches and pores where bacteria and mold take hold. Water-repellent, antimicrobial, EU E1 certified — the invisible shield that keeps the floor clean long after installation.', zh:'莫氏9級氧化鋁耐磨層，硬度僅次於鑽石。12,000轉耐磨測試，同類地板中無出其右者。超高密度表面徹底消除細菌與黴菌賴以生存的微刮痕與毛細孔，防水、抗菌、防霉，歐盟E1超低甲醛認證——看不見的健康守護盾，讓地板潔淨長久。'},
  'ft5':       {en:'23cm Wide · 2–3mm Natural Gap', zh:'23cm寬板 · 2–3mm自然縫'},
  'fd5':       {en:'Wider than standard 19cm — fewer seams, more openness. Only 2–3mm expansion gap vs 8–12mm for HDF.', zh:'比標準19cm更寬，拼縫更少，視覺更開闊。伸縮縫僅需2–3mm（HDF需8–12mm），收邊極致乾淨。'},
  'cert-fsc-title':  {en:'FSC® Certified',           zh:'FSC® 認證'},
  'cert-fsc-sub':    {en:'Responsible Forest Management', zh:'負責任的森林管理'},
  'cert-hcho-title': {en:'Ultra-Low Formaldehyde',     zh:'超低甲醛'},
  'cert-hcho-sub':   {en:'CARB Phase 2 · EU E1',      zh:'美國CARB二期 · 歐盟E1'},
  'cert-iso9-title': {en:'ISO 9001',                  zh:'ISO 9001'},
  'cert-iso9-sub':   {en:'Quality Management System', zh:'品質管理系統'},
  'cert-iso14-title':{en:'ISO 14001',                 zh:'ISO 14001'},
  'cert-iso14-sub':  {en:'Environmental Management',  zh:'環境管理系統'},
  // STICKY CTA — index.html
  'sticky-cta-copy': {en:'<strong>Ready to move from shortlist to action?</strong> Choose sample-first or technical-first support in one step.', zh:'<strong>準備從 shortlist 進入下一步了嗎？</strong> 可一次選擇樣品優先或技術優先支援。'},
  'sticky-cta-btn':  {en:'Request Sample Pack →', zh:'申請樣品包 →'},
  'sticky-cta-btn-secondary': {en:'Technical support', zh:'技術支援'},
  // STICKY CTA — plye.html
  'plye-sticky-copy': {en:'<strong>plyē Engineered Flooring</strong> — Patent click-lock · EU E1 · Made in Taiwan.', zh:'<strong>plyē 超耐磨工程木地板</strong> — 專利卡扣 · 歐盟E1 · 台灣製造。'},
  'plye-sticky-btn':  {en:'Request a Sample →', zh:'申請樣品 →'},
  // STICKY CTA — nalexible-stone.html
  'stone-sticky-copy': {en:'<strong>Nalexible Stone Veneer</strong> — Stone that bends. Taiwan exclusive.', zh:'<strong>Nalexible 柔性石材</strong> — 石材也能彎曲。台灣獨家。'},
  'stone-sticky-btn':  {en:'Request a Sample', zh:'申請樣品'},
  // STICKY CTA — applications.html
  'app-sticky-copy': {en:'<strong>Flooring + Stone &amp; Fiberboard</strong> — Ashley Kitchen material systems for global projects.', zh:'<strong>地板 + 石材 + 纖維板</strong> — Ashley Kitchen 的全球專案建材系統。'},
  'app-sticky-btn':  {en:'REQUEST A SAMPLE →', zh:'申請樣品 →'},
  // STICKY CTA — projects.html
  'proj-sticky-copy': {en:'<strong>Flooring + Stone &amp; Fiberboard</strong> — Ashley Kitchen material systems for global projects.', zh:'<strong>地板 + 石材 + 纖維板</strong> — Ashley Kitchen 的全球專案建材系統。'},
  'proj-sticky-btn':  {en:'REQUEST A SAMPLE →', zh:'申請樣品 →'},
  // STICKY CTA — nalexible-fiberboard.html
  'fb-sticky-copy': {en:'<strong>Nalexible Fiberboard</strong> — Light. Strong. Natural. Quiet.', zh:'<strong>Nalexible 天然纖維門板</strong> — 輕盈。堅固。天然。靜謐。'},
  'fb-sticky-btn':  {en:'Request a Sample', zh:'申請樣品'},
  // GALLERY
  'gal-label': {en:'Color Collection',  zh:'色彩系列'},
  'gal-title': {en:'12 <em>oak shades</em>', zh:'12款<em>橡木色調</em>'},
  'gi-name-1':  {en:'Dawn White Oak',        zh:'晨曦白橡'},
  'gi-name-2':  {en:'Misty Sand Oak',        zh:'微光沙橡'},
  'gi-name-3':  {en:'Sunrise Gold Oak',      zh:'煦日金橡'},
  'gi-name-4':  {en:'Misty Oak',             zh:'霧感橡木'},
  'gi-name-5':  {en:'Warm Apricot Oak',      zh:'暖杏橡木'},
  'gi-name-6':  {en:'Soft Sand Oak',         zh:'柔沙橡木'},
  'gi-name-7':  {en:'Soft Light Gray Oak',   zh:'柔光灰橡'},
  'gi-name-8':  {en:'Warm Brown Oak',        zh:'溫潤棕橡'},
  'gi-name-9':  {en:'Misty Taupe Oak',       zh:'薄霧褐橡'},
  'gi-name-10': {en:'Quiet Gray Oak',        zh:'沈靜灰橡'},
  'gi-name-11': {en:'Classic Natural Oak',   zh:'經典原橡'},
  'gi-name-12': {en:'Deep Black Oak',        zh:'深邃黑橡'},
  // NALEXIBLE
  'nal-label': {en:'Nalexible — Taiwan Exclusive Distributor', zh:'Nalexible — 台灣獨家總代理'},
  'nal-title': {en:'Stone that <em>bends.</em> Boards that <em>breathe.</em>', zh:'能彎曲的石材。<em>能呼吸的板材。</em>'},
  'nal-desc':  {en:"Nalexible pioneers ultra-thin flexible natural stone and high-performance natural fiber panels. Ashley Kitchen is Taiwan's exclusive distributor for all Nalexible product lines.", zh:'Nalexible 引領超薄柔性天然石材及高性能天然纖維門板技術。Ashley Kitchen 為台灣所有 Nalexible 產品系列之獨家總代理。'},
  // Stone page intro (unique IDs — avoids nal-title/nal-desc overwrite)
  'stone-intro-title': {en:'Stone that <em>bends.</em><br>Light that <em>shines through.</em>', zh:'能彎曲的石材。<br><em>能透光的石材。</em>'},
  'stone-intro-desc':  {en:"Ultra-thin natural stone for walls, ceilings, and curves — flame retardant, moisture-resistant, and 1/30 the weight of solid stone. Taiwan exclusive distributor.", zh:'超薄天然石材，適用於牆面、天花板及曲面——防火、防潮，重量僅為實心石材的1/30。台灣獨家總代理。'},
  // Fiberboard page intro (unique IDs — avoids nal-title/nal-desc overwrite)
  'fb-intro-title': {en:'Boards that <em>breathe.</em><br>Doors that <em>hush.</em>', zh:'能呼吸的板材。<br><em>能靜音的門。</em>'},
  'fb-intro-desc':  {en:'Hemp-based fiberboard panels stronger than MDF at half the weight — zero formaldehyde, mold-proof, and 100% recyclable. Taiwan exclusive distributor.', zh:'天然纖維門板強度超越MDF，重量僅其一半——零甲醛、防霉、100%可回收。台灣獨家總代理。'},
  'nc1-type':  {en:'Stone Series',       zh:'石材系列'},
  'nc1-name':  {en:'Flexible Stone Veneer', zh:'柔性石材貼面'},
  'nc1-desc':  {en:'1–3mm ultra-thin natural slate. Flexible for curved surfaces. Fire resistant. 1/30 the weight of solid stone.', zh:'1–3mm超薄天然石材。可包覆曲面。防火。重量僅為實心石材的1/30。'},
  'nc2-type':  {en:'LumiSlate · Translucent Stone', zh:'LumiSlate · 透光石材'},
  'nc2-name':  {en:'Translucent Ultra-Thin Stone', zh:'透光超薄石材'},
  'nc2-desc':  {en:'Translucent resin backing lets light pass through stone — dramatic light and shadow for hotel lobbies and feature walls.', zh:'透光樹脂底材讓光線穿透石材，在飯店大廳、特色牆面創造戲劇性的光影效果。'},
  'nc3-type':  {en:'Stone Series · Premium Install', zh:'石材系列 · 精品裝潢'},
  'nc3-name':  {en:'Flexible Stone Veneer', zh:'柔性石材貼片'},
  'nc3-desc':  {en:'Ultra-thin natural stone panels for luxury residential and commercial feature walls. Warm granite and marble finishes — weightless, fire-resistant, and curved-surface ready.', zh:'超薄天然石材面板，適用於豪宅住宅與商業特色牆面。溫暖花崗岩與大理石紋路，輕量、防火，可包覆曲面。'},
  'nf-1':      {en:'Ultra-thin',          zh:'超薄'},
  'nf-2':      {en:'Ultra-light',         zh:'超輕'},
  'nf-3':      {en:'Flexible',            zh:'可彎曲'},
  'nf-4':      {en:'Flame retardant',     zh:'阻燃'},
  'nf-5':      {en:'Moisture-resistant',  zh:'防潮'},
  'nf-6':      {en:'Natural finish',      zh:'天然質感'},
  'nf-7':      {en:'Light-transmitting',  zh:'透光'},
  'nff-1':     {en:'Ultra-light',         zh:'超輕量'},
  'nff-2':     {en:'Steel strength',      zh:'鋼鐵強度'},
  'nff-3':     {en:'No formaldehyde',      zh:'無甲醛'},
  'nff-4':     {en:'Anti-mold',            zh:'防霉'},
  'nff-5':     {en:'Bio-based resin',     zh:'生物樹脂'},
  'nff-6':     {en:'Noise reduction',      zh:'降噪'},
  'nal-note':  {en:'Images sourced from <a href="https://www.nalexible.com" target="_blank">nalexible.com</a> — Taiwan exclusive distribution by Ashley Kitchen', zh:'圖片來源：<a href="https://www.nalexible.com" target="_blank">nalexible.com</a> — 台灣獨家代理：Ashley Kitchen'},
  // LIFESTYLE
  'life-label':{en:'Living with plyē',   zh:'plyē 的生活美學'},
  'life-title':{en:'Floors that <em>feel</em> like home', zh:'讓家更有<em>溫度</em>'},
  'lm1':       {en:'EU E1 · Child & Pet Safe', zh:'歐盟E1 · 兒童與寵物安全'},
  'lm2':       {en:'Scratch-Resistant',  zh:'耐刮耐磨'},
  'lm3':       {en:'ORG-8825 Soft Light Gray Oak', zh:'柔光灰橡 ORG-8825'},
  'lm4':       {en:'ORG-8815 Quiet Stone Grey Oak', zh:'沈靜灰橡 ORG-8815'},
  'ln1':       {en:'Family Living',      zh:'家庭生活'},
  'ln2':       {en:'Life with Pets',     zh:'與寵物同住'},
  'ln3':       {en:'Quiet Corners',      zh:'靜謐角落'},
  'ln4':       {en:'Contemporary Grey',  zh:'當代灰調'},
  'lm5':       {en:'Ceiling Application', zh:'天花板應用'},
  'ln5':       {en:'Architectural Surfaces', zh:'建築表面'},
  // VIDEOS
  'vid-label': {en:'Video Library',      zh:'影片庫'},
  'vid-title': {en:'See it <em>in action</em>', zh:'親眼<em>見證</em>'},
  'vid-desc':  {en:'Brand overview, flexibility demonstrations, material strength tests, and acoustic door features — the full Nalexible story in four films.', zh:'品牌介紹、柔韌性展示、材料強度測試與隔音門特色——四部影片完整呈現 Nalexible 的核心優勢。'},
  'v1': {en:'plyē ORIGIN Full Installation Guide', zh:'plyē ORIGIN 完整安裝指南'},
  'v2': {en:'Nalexible Flexible Stone — Official Demo', zh:'Nalexible 柔性石材 — 官方展示'},
  'v3': {en:'Nalexible LumiSlate — Light & Shadow', zh:'Nalexible LumiSlate — 光影展示'},
  'v4': {en:'19dB Sound Test — Live Lab Demo', zh:'19dB隔音測試 — 現場實驗室展示'},
  'v5': {en:'plyē Factory Tour — Made in Taiwan', zh:'plyē 工廠參觀 — 台灣製造'},
  // APPLICATIONS
  'applic-label':{en:'Applications',     zh:'應用場景'},
  'applic-title':{en:'Every <em>surface,</em> every space', zh:'每一面<em>表面</em>，每一個空間'},
  'ac1': {en:'Residential',  zh:'住宅'},
  'ac2': {en:'Commercial',   zh:'商業空間'},
  'ac3': {en:'Family Spaces',zh:'兒童空間'},
  'ac4': {en:'Hospitality',  zh:'旅館飯店'},
  // WHY
  'why-label': {en:'Why Ashley Kitchen', zh:'為何選擇 Ashley Kitchen'},
  'why-title': {en:'Built to <em>last.</em> Backed by science.', zh:'以科學為後盾，<em>持久耐用</em>'},
  'why-intro': {en:'Every decision at Ashley Kitchen — from raw material to installation system — is engineered to outlast trends, outperform standards, and leave no doubt in the specifier\'s mind.', zh:'Ashley Kitchen 的每一個決策——從原料選材到安裝系統——皆以超越潮流、超越標準為目標，讓每位設計師與指定師都毫無疑慮。'},
  'wp1n':{en:'1,320 lbf',zh:'1,320 lbf'},
  'wp1l':{en:'Janka Hardness — Harder Than Red Oak',zh:'強克硬度 — 比紅橡木更硬'},
  'wp1b':{en:'SGS Tested',zh:'SGS 認證'},
  'wp2n':{en:'EU E1',zh:'EU E1'},
  'wp2l':{en:'Formaldehyde ≤ 0.1 ppm',zh:'甲醛 ≤ 0.1 ppm'},
  'wp2b':{en:'Certified',zh:'認證合格'},
  'wp3n':{en:'19 dB',zh:'19 dB'},
  'wp3l':{en:'Sound Impact Reduction',zh:'撞擊音減少'},
  'wp3b':{en:'Lab Certified',zh:'實驗室認證'},
  'wp4n':{en:'Patent M677196',zh:'專利 M677196'},
  'wp4l':{en:'Zero Short-Edge Gap',zh:'零短邊縫隙'},
  'wp4b':{en:'Taiwan · Active',zh:'台灣 · 有效中'},
  'wt1':{en:'Factory-Direct Taiwan',zh:'台灣工廠直銷'},
  'wd1':{en:'30+ years of manufacturing. Full traceability from eucalyptus to finished board. No opaque import chains.',zh:'超過30年製造經驗。從桉木到成品全程可追溯。無不透明進口供應鏈。'},
  'wt2':{en:'Patented Technology',zh:'專利技術'},
  'wd2':{en:"Patent M677196 four-direction click-lock solves 9mm plywood's classic short-edge defect problem globally.",zh:'新型專利M677196四向卡扣，解決全球9mm夾板短邊缺陷的共同難題。'},
  'wt3':{en:'Global Supply',zh:'全球供應'},
  'wd3':{en:'Supplying NA, EU, and ANZ directly. Container logistics, distributor programs, OEM customisation available.',zh:'直接供應北美、歐盟、澳紐。整櫃物流、代理商計劃及OEM客製化服務。'},
  'wt4':{en:'Health & Safety',zh:'健康安全'},
  'wd4':{en:'EU E1 ultra-low formaldehyde. Eucalyptus naturally repels insects. Al₂O₃ antimicrobial surface. Safe for all ages.',zh:'歐盟E1超低甲醛。桉木天然防蟲。Al₂O₃抗菌表面。全齡皆宜。'},
  'wt5':{en:'19dB Certified',zh:'19dB隔音認證'},
  'wd5':{en:'Exceeds Taiwan Building Code Art. 46-6. Lab-certified sound impact reduction — footfall becomes a whisper.',zh:'超越建築法規46-6條規定。實驗室認證衝擊隔音，腳步聲化為低語。'},
  'wt6':{en:'DIY-Friendly',zh:'DIY友善設計'},
  'wd6':{en:'No glue, no tools. Patent click-lock over existing tile — fully reversible and reusable.',zh:'免膠免工具。專利卡扣可直接鋪於磁磚上，不傷原有地面，可反覆拆裝使用。'},
  // MARKETS
  'mkt-label': {en:'Target Markets',     zh:'目標市場'},
  'mkt-title': {en:'Global from <em>day one</em>', zh:'從第一天起<em>放眼全球</em>'},
  'mkt-desc':  {en:'A phased multi-market strategy — plyē for global DIY, Nalexible exclusively in Taiwan.', zh:'分階段多市場策略 — plyē 全球DIY市場，Nalexible 台灣獨家。'},
  'mc1-title': {en:'North America',      zh:'北美市場'},
  'mc1-desc':  {en:'DIY home improvement. Amazon US + CA FBA. Eucalyptus and low-VOC resonates with health-conscious consumers.', zh:'DIY家居改善。Amazon 美加 FBA。桉木與低VOC深受健康意識消費者青睞。'},
  'mc2-title': {en:'Europe & ANZ',       zh:'歐洲與澳紐'},
  'mc2-desc':  {en:'Sustainability-driven markets. EU E1, Made-in-Taiwan. Germany, Netherlands, UK, Australia, NZ as priority.', zh:'永續發展驅動市場。歐盟E1，台灣製造。優先布局德、荷、英、澳、紐。'},
  'mc3-title': {en:'Taiwan 台灣',         zh:'台灣市場'},
  'mc3-desc':  {en:'Exclusive Nalexible distributor — stone, LumiSlate, fiberboard. Architects, designers, commercial contractors. MOMO, PChome, Shopee.', zh:'Nalexible 台灣獨家代理 — 石材、透光系列、纖維門板。建築師、設計師、商業工程。MOMO、PChome、蝦皮購物。'},
  // ECOM
  'ecom-label':{en:'E-Commerce Strategy',zh:'電商策略'},
  'ecom-title':{en:'Sell <em>everywhere</em> they shop',zh:'在每個<em>購物平台</em>都找得到'},
  'ecom-desc': {en:"A multi-channel approach across global and Taiwan-specific platforms — from Amazon's DIY audience to Shopee Taiwan's massive user base.", zh:'跨越全球及台灣專屬平台的多渠道策略，從 Amazon 的 DIY 買家到蝦皮購物台灣龐大用戶群，全面覆蓋。'},
  'ecom-note': {en:'<strong>📋 Phased Roll-Out:</strong><br><strong>Phase 1:</strong> Own website + Amazon US/CA (plyē FBA) + Shopify D2C.<br><strong>Phase 2:</strong> Amazon EU/AU + MOMO + PChome + <strong>Shopee Taiwan 蝦皮</strong> (Nalexible).<br><strong>Phase 3:</strong> Temu + Taobao/Tmall + Architect portal.',
                zh:'<strong>📋 分階段上線計劃：</strong><br><strong>第一階段：</strong>自有官網 + Amazon 美加（plyē FBA）+ Shopify 直售。<br><strong>第二階段：</strong>Amazon 歐澳 + MOMO + PChome + <strong>蝦皮購物（Nalexible）</strong>。<br><strong>第三階段：</strong>Temu + 淘寶/天貓 + 建築師專業入口。'},
  'ch1-desc':  {en:'US, CA, DE, UK, AU. FBA. DIY + Home Improvement.',zh:'美加歐澳。FBA倉儲。DIY + 家居改善。'},
  'ch2-desc':  {en:'D2C global store. Sample requests, B2B, architect portal.',zh:'直售官方商城。樣品申請、B2B詢價、建築師入口。'},
  'ch3-desc':  {en:'Shopee Taiwan — Nalexible stone & fiberboard for Taiwan buyers. High-traffic platform.',zh:'蝦皮購物台灣站 — 販售 Nalexible 石材與纖維門板，觸及台灣住宅及商業買家。超高流量平台。'},
  'ch4-desc':  {en:'Taiwan domestic platforms for Nalexible retail distribution.',zh:'台灣本土平台，Nalexible 零售通路。'},
  'ch5-desc':  {en:'Volume cross-border SKUs for plyē global reach.',zh:'plyē 大量跨境出貨。'},
  'ch6-desc':  {en:'Chinese-speaking global markets. Tmall brand upgrade.',zh:'全球華語市場。天貓品牌旗艦升級路徑。'},
  // MOBILE APP SECTION (renamed to avoid collision with Applications section id="app-label")
  'mapp-label': {en:'Mobile App',         zh:'行動應用程式'},
  'mapp-title': {en:'Ashley Kitchen <em>in your pocket</em>', zh:'口袋裡的 <em>Ashley Kitchen</em>'},
  'mapp-desc':  {en:'A full-featured iOS & Android app — browse products, visualise floors in your room, request samples, track orders, watch installation videos.',zh:'功能完整的 iOS 和 Android App — 瀏覽產品、在您的房間中視覺化地板效果、申請樣品、追蹤訂單、觀看安裝教學。'},
  'app-hero-tag':{en:'NEW ARRIVAL',     zh:'新品上市'},
  'af1t':{en:'Full Product Catalogue',zh:'完整產品型錄'},
  'af1d':{en:'All plyē colors + all Nalexible stone and fiberboard lines with specs.',zh:'所有 plyē 色系 + Nalexible 石材與纖維門板系列，含完整規格。'},
  'af2t':{en:'AR Room Visualizer',zh:'AR空間視覺化'},
  'af2d':{en:'Point camera at your floor — see any plyē shade in your actual room in real time.',zh:'將相機對準地板，即時呈現任何 plyē 色調在您實際房間中的效果。'},
  'af3t':{en:'Sample Request',zh:'樣品申請'},
  'af3d':{en:'Request physical samples of any plyē or Nalexible product shipped to you.',zh:'申請任何 plyē 或 Nalexible 產品的實體樣品，直接寄送到府。'},
  'af4t':{en:'Installation Videos',zh:'安裝教學影片'},
  'af4d':{en:'Step-by-step DIY guides for plyē click-lock and Nalexible installation.',zh:'plyē 卡扣及 Nalexible 安裝的逐步 DIY 指南。'},
  'af5t':{en:'Shop + Platform Links',zh:'購物 + 平台連結'},
  'af5d':{en:'Direct links to Amazon, Shopee Taiwan, MOMO, PChome listings.',zh:'直連 Amazon、蝦皮購物、MOMO、PChome 賣場。'},
  'af6t':{en:'Project Calculator',zh:'工程計算機'},
  'af6d':{en:'Input room size — get instant box count and price estimate per color.',zh:'輸入房間尺寸，即時獲得箱數和各色系價格估算。'},
  'app-ios-sub':{en:'Download on the',  zh:'下載於'},
  'app-gp-sub': {en:'Get it on',        zh:'取得自'},
  // CONTACT
  'ct-label':  {en:'Get in Touch',       zh:'聯絡我們'},
  'ct-title':  {en:'Start your <em>project</em>', zh:'開始您的<em>專案</em>'},
  'ct-desc':   {en:'Sample requests, distributor pricing, architect specs, or project consultation. We supply globally.', zh:'樣品申請、代理商詢價、建築師規格或專案諮詢。我們提供全球供應服務。'},
  'ci1l':      {en:'Headquarters',       zh:'公司地址'},
  'ci3l':      {en:'Phone / Fax',        zh:'電話 / 傳真'},
  'ci4l':      {en:'Sales Contact',      zh:'業務聯絡'},
  'fl-email':  {en:'Email',              zh:'電子郵件'},
  'fl-name':   {en:'Full Name',          zh:'姓名'},
  'fl-co':     {en:'Company',            zh:'公司名稱'},
  'fl-country':{en:'Country',            zh:'國家/地區'},
  'fl-inq':    {en:'Inquiry Type',       zh:'詢問類別'},
  'fl-msg':    {en:'Message',            zh:'訊息'},
  'ct-submit': {en:'Send Inquiry →',     zh:'送出詢問 →'},
  // FOOTER
  'f-tagline': {en:'Smart Materials for Modern Living<br>Engineered in Taiwan, specified worldwide.', zh:'智慧建材，現代生活。<br>台灣製造，全球規格。'},
  'fc1-h':     {en:'Products',           zh:'產品'},
  'fc2-h':     {en:'Shop',              zh:'購買'},
  'fc3-h':     {en:'Company',           zh:'公司'},
  'f-about-text':{en:'Ashley Kitchen curates flooring, stone, and fiberboard systems for clearer project decisions, faster sample selection, and practical specification support. Headquartered in Neihu, Taipei.',
                  zh:'Ashley Kitchen 整合地板、石材與纖維板三大系統，協助你更快完成選材、樣品與規格決策。總部位於台北內湖。'},
  'f-stat1':   {en:'Years',             zh:'年製造經驗'},
  'f-stat2':   {en:'Oak Shades',        zh:'橡木色調'},
  'f-stat3':   {en:'Certified',         zh:'認證'},
  'fc-shopee': {en:'Shopee Taiwan 蝦皮',  zh:'蝦皮購物 Shopee'},
  'fc-sample': {en:'Request a Sample',   zh:'申請樣品'},
  'fc-about':  {en:'About Ashley Kitchen',zh:'關於 Ashley Kitchen'},
  'fc-proj':   {en:'Projects',           zh:'案例作品'},
  'fc-dist':   {en:'Distributors',       zh:'代理商'},
  'fc-contact':{en:'Contact',            zh:'聯絡我們'},
  // FIBERBOARD PANEL A
  'fb-eyb-0':  {en:'Nalexible · Natural Fiber Board · 01 / 03', zh:'Nalexible · 天然纖維門板 · 01 / 03'},
  'fb-h-0':    {en:'Light as air,<br><em>strong</em> as steel', zh:'輕如羽毛<br><em>強如鋼鐵</em>'},
  'fb-b-0':    {en:"Engineered from bio-based resins and natural hemp fibers, pressed to match steel compressive strength — at a fraction of the weight. Impact-resistant panels that handle what solid wood can't.", zh:'採用生物樹脂與天然大麻纖維複合壓製，強度媲美鋼鐵，重量大幅降低。抗衝擊板材，超越實木的應用極限。'},
  'fb-f0-1':   {en:'<div class="fb-feat-icon">⚡</div>Steel-equivalent compressive strength', zh:'<div class="fb-feat-icon">⚡</div>鋼鐵等效抗壓強度'},
  'fb-f0-2':   {en:'<div class="fb-feat-icon">🪶</div>Ultra-lightweight — easy to handle &amp; install', zh:'<div class="fb-feat-icon">🪶</div>超輕量化——易搬運與施工'},
  'fb-f0-3':   {en:'<div class="fb-feat-icon">🐘</div>Impact-resistant honeycomb core panels', zh:'<div class="fb-feat-icon">🐘</div>抗衝擊蜂巢芯板材'},
  'fb-f0-4':   {en:'<div class="fb-feat-icon">♻️</div>100% bio-based resin · Zero formaldehyde', zh:'<div class="fb-feat-icon">♻️</div>100% 生物樹脂 · 零甲醛'},
  'fb-s0-lw':  {en:'Less Weight', zh:'減輕重量'},
  'fb-s0-fm':  {en:'Formaldehyde', zh:'甲醛'},
  'fb-mat-eyebrow':   {en:'Nalexible · Material Science', zh:'Nalexible · 材料科學'},
  'fb-mat-recycle':   {en:'Bio-Based<br>Recyclable', zh:'生物基<br>可回收'},
  'fb-intro-desc2':   {en:'Two product lines. One material.', zh:'兩條產品線。同一材料。'},
  'fb-app-more':      {en:'Explore all applications', zh:'探索所有應用場景'},
  // FIBERBOARD PANEL B
  'fb-eyb-1':  {en:'Nalexible · Quiet Door Series · 02 / 02', zh:'Nalexible · 靜音門系列 · 02 / 02'},
  'fb-h-1':    {en:'Quiet living.<br><em>Nature</em> inside.', zh:'靜謐生活。<br><em>自然</em>在內。'},
  'fb-b-1':    {en:"Nalexible's Quiet Door wraps natural fiberboard with thermoformed panels for acoustic insulation that turns city noise into silence — while bringing the warmth of natural materials into every room.", zh:'Nalexible 靜音門以天然纖維門板為芯，外覆熱成形面板，提供卓越隔音效果，讓城市噪音歸零——同時將天然材質的溫潤感帶入每個空間。'},
  'fb-f1-1':   {en:'<div class="fb-feat-icon">🔇</div>Noise-reducing acoustic door system', zh:'<div class="fb-feat-icon">🔇</div>降噪隔音門系統'},
  'fb-f1-2':   {en:'<div class="fb-feat-icon">🌿</div>Natural hemp fiber core · Eco-certified', zh:'<div class="fb-feat-icon">🌿</div>天然大麻纖維芯 · 環保認證'},
  'fb-f1-3':   {en:'<div class="fb-feat-icon">🚪</div>Molded panel, acoustic &amp; magnetic door series', zh:'<div class="fb-feat-icon">🚪</div>模壓面板、隔音及磁性門系列'},
  'fb-f1-4':   {en:'<div class="fb-feat-icon">😴</div>Improves sleep quality · Reduces stress', zh:'<div class="fb-feat-icon">😴</div>改善睡眠品質 · 舒緩壓力'},
  'fb-btn1':   {en:'Explore Quiet Door', zh:'探索靜音門'},
  'fb-btn2':   {en:'Request a Sample →', zh:'申請樣品 →'},
  'fb-s1-ds':  {en:'Door Series', zh:'門板系列'},
  'fb-s1-ex':  {en:'Exclusive', zh:'獨家代理'},
  // FEATURE SECTION LABEL
  'feat-label':{en:'<span style="text-transform:none">plyē</span> — ORIGIN Series', zh:'<span style="text-transform:none">plyē</span> — ORIGIN 系列'},
  // NALEXIBLE STONE / FIBER LABELS (IDs already in HTML)
  'nal-stone-label':{en:'Stone Products', zh:'石材產品'},
  'nal-fiber-label':{en:'Fiberboard Products', zh:'纖維門板產品'},
  // NALEXIBLE FIBERBOARD CARDS
  'nc-fb1-type':{en:'Fiberboard Series · Natural Fiber Board', zh:'纖維門板系列 · 天然纖維門板'},
  'nc-fb1-name':{en:'Natural Fiber Board', zh:'天然纖維門板'},
  'nc-fb1-desc':{en:'Hemp fibers + bio-based resins. 60%+ lighter than traditional materials. Steel-equivalent strength. Zero formaldehyde. Moisture-resistant &amp; mold-proof.', zh:'大麻纖維+生物樹脂。比傳統材料輕60%以上。鋼鐵等效強度。零甲醛。防潮抗霉。'},
  'nc-fb2-type':{en:'Fiberboard Series · Interior Doors', zh:'纖維門板系列 · 室內門板'},
  'nc-fb2-name':{en:'Molded Panel &amp; Quiet Doors', zh:'模壓面板 &amp; 靜音門'},
  'nc-fb2-desc':{en:'Interior doors wrapped in thermoformed panels made from Nalexible Natural Fiber Board. Acoustic, magnetic &amp; quiet door variants available.', zh:'以 Nalexible 天然纖維門板為材，外覆熱成形面板的室內門板。提供隔音、磁性及靜音門等多種選擇。'},
  // Page-specific video captions (avoid shared-ID conflicts)
  'fb-vid-cap-1':    {en:'Natural Fiber Board — Structure &amp; Material Demo',          zh:'天然纖維門板 — 結構與材質展示'},
  'fb-vid-cap-2':    {en:'Natural Fiber Board — Load-Bearing Strength Demonstration',   zh:'天然纖維門板 — 承重強度展示'},
  'stone-vid-desc': {en:'Flexible stone veneer in action — from material production to LumiSlate luminous installation.', zh:'柔性石材貼面全覽——石材生產工藝介紹，到 LumiSlate 光影透光安裝展示。'},
  'stone-vid-cap-1': {en:'Nalexible — Flexible Stone · Material &amp; Production Process', zh:'Nalexible — 柔性石材 · 材質與生產工藝展示'},
  'stone-vid-cap-2': {en:'LumiSlate — Easy Installation · Light &amp; Natural Stone Beauty', zh:'LumiSlate — 輕鬆安裝 · 光影透石的天然美感'},
  // VIDEO CAPTIONS
  'vid-plye-lbl':  {en:'plyē — Flooring Videos', zh:'plyē — 地板影片'},
  'vid-stone-lbl': {en:'Nalexible — Stone Products', zh:'Nalexible — 石材產品'},
  'vid-cap-1':     {en:'Natural Fiber Board — Load-Bearing Strength Demo',              zh:'天然纖維門板 — 承重強度展示'},
  'vid-cap-2':     {en:'Quiet Door Series — Panel Design &amp; Application',         zh:'靜音門系列 — 門板設計與應用展示'},
  'vid-fiber-lbl': {en:'Nalexible — Fiberboard Products', zh:'Nalexible — 纖維門板產品'},
  'vid-cap-3':     {en:'Natural Fiber Board — Structure &amp; Material Demo', zh:'天然纖維門板 — 結構與材質展示'},
  'vid-cap-4':     {en:'LumiSlate — Translucent Stone Veneer · Light &amp; Natural Beauty', zh:'LumiSlate — 透光石材 · 光影與天然美感'},
  'vid-feat-lbl':  {en:'Nalexible — Featured', zh:'Nalexible — 精選影片'},
  'vid-cap-5':     {en:'Nalexible — Product Showcase', zh:'Nalexible — 產品展示'},
  // CONTACT
  'ci2l':      {en:'Email', zh:'電子郵件'},
  // ABOUT SECTION
  'about-label':  {en:'About Ashley Kitchen', zh:'關於 Ashley Kitchen'},
  'about-title':  {en:'Smart Materials for <em>Modern Living</em>', zh:'智慧建材，<em>現代生活</em>'},
  'about-tagline':{en:'Engineered in Taiwan.<br>Specified worldwide.', zh:'台灣製造。<br>全球規格。'},
  'about-p1':     {en:"Ashley Kitchen is Taiwan's premium building materials brand, bringing together two world-class product lines: <strong>plyē</strong> engineered flooring — made in Taiwan with a patented click-lock system — and <strong>Nalexible</strong> flexible stone veneer and natural fiberboard, for which Ashley Kitchen is Taiwan's exclusive distributor.", zh:'Ashley Kitchen 是台灣頂級建材品牌，整合兩大世界級產品線：<strong>plyē</strong> 工程木地板（台灣製造，專利卡扣系統）及 <strong>Nalexible</strong> 柔性石材貼面與天然纖維門板（Ashley Kitchen 為台灣獨家代理商）。'},
  'about-p2':     {en:'We supply architects, interior designers, contractors, and DIY consumers with materials that combine cutting-edge technology with natural beauty. Every product we carry is certified, traceable, and built to last.', zh:'我們為建築師、室內設計師、工程商及 DIY 消費者提供結合尖端技術與天然美感的建材。我們代理的每項產品均經認證、可追溯，且品質持久。'},
  'about-p3':     {en:'Headquartered in Neihu, Taipei, we serve global markets via Amazon, Shopee Taiwan, MOMO, PChome, and our own D2C platform.', zh:'總部位於台北內湖，透過 Amazon、蝦皮購物台灣、MOMO、PChome 及自有 D2C 平台服務全球市場。'},
  'about-stat1':  {en:'Years Manufacturing', zh:'年製造經驗'},
  'about-stat2':  {en:'Oak Colorways', zh:'橡木色系'},
  'about-stat3':  {en:'Sound Certified', zh:'隔音認證'},
  // APPLICATIONS (2nd section)
  'applic-label2':{en:'Applications', zh:'應用場景'},
  'applic-title2':{en:'Every <em>surface,</em> every space', zh:'每一面<em>表面</em>，每一個空間'},
  'applic-desc':  {en:'plyē and Nalexible are specified across residential, commercial, hospitality and institutional interiors worldwide.', zh:'plyē 與 Nalexible 廣泛應用於全球住宅、商業、旅館飯店及機構室內工程。'},
  'ac1b': {en:'Residential',   zh:'住宅'},
  'ac2b': {en:'Commercial',    zh:'商業空間'},
  'ac3b': {en:'Family Spaces', zh:'兒童空間'},
  'ac4b': {en:'Hospitality',   zh:'旅館飯店'},
  // APPLICATIONS (homepage cards)
  'app-label': {en:'Explore Applications', zh:'探索應用場景'},
  'app-res':   {en:'Residential',          zh:'住宅'},
  'app-com':   {en:'Commercial',           zh:'商業空間'},
  'app-hos':   {en:'Hospitality',          zh:'旅館飯店'},
  'app-out':   {en:'Outdoor & Façade',     zh:'戶外與建築外觀'},
  // PROJECTS (homepage)
  'proj-label': {en:'Architectural Projects', zh:'建築案例'},
  'proj-title': {en:'Built with <em>Ashley Kitchen</em>', zh:'Ashley Kitchen 建材實績'},
  'proj-desc':  {en:'Selected residential, commercial, and hospitality projects featuring plyē flooring, Nalexible stone veneer and natural fiber board applications.', zh:'精選住宅、商業與飯店案例，展示 plyē 木地板、Nalexible 石材與天然纖維門板的實際應用。'},
  'proj1-type': {en:'Residential · plyē ORIGIN', zh:'住宅 · plyē ORIGIN'},
  'proj1-name': {en:'Loft Residence', zh:'挑高住宅'},
  'proj1-loc':  {en:'Xinyi, Taipei · Taiwan', zh:'台灣台北信義區'},
  'proj2-type': {en:'Hospitality · Nalexible Stone', zh:'旅館飯店 · Nalexible 石材'},
  'proj2-name': {en:'The Amber Bar', zh:'琥珀酒吧'},
  'proj2-loc':  {en:'Hong Kong', zh:'香港'},
  'proj3-type': {en:'Residential · plyē ORIGIN', zh:'住宅 · plyē ORIGIN'},
  'proj3-name': {en:'City View Apartment', zh:'城市景觀公寓'},
  'proj3-loc':  {en:'Zhongshan, Taipei · Taiwan', zh:'台灣台北中山區'},
  'proj4-type': {en:'Residential · Nalexible Stone + plyē', zh:'住宅 · Nalexible 石材 + plyē'},
  'proj4-name': {en:'Luxury Kitchen Renovation', zh:'豪宅廚房翻新'},
  'proj4-loc':  {en:"Da'an, Taipei · Taiwan", zh:'台灣台北大安區'},
  'proj5-cat':  {en:'Residential · plyē', zh:'住宅 · plyē'},
  'proj5-name': {en:'Pet-Friendly Family Home', zh:'寵物友善家庭住宅'},
  'proj5-loc':  {en:'Taoyuan · EU E1 Formaldehyde Certified', zh:'桃園 · 歐盟E1甲醛認證'},
  'proj6-cat':  {en:'Luxury Residential · Nalexible', zh:'豪宅 · Nalexible'},
  'proj6-name': {en:'Silver Shine Gold Accent', zh:'銀耀金彩'},
  'proj6-loc':  {en:'Feature Wall Application', zh:'特色牆面應用'},
  'proj7-cat':  {en:'Residential · plyē', zh:'住宅 · plyē'},
  'proj7-name': {en:'Master Bedroom Retreat', zh:'主臥室空間'},
  'proj7-loc':  {en:'Taichung · ORG-8823 Soft Sand Oak', zh:'台中 · ORG-8823 柔沙橡木'},
  'proj8-cat':  {en:'Interior · Nalexible Fiberboard', zh:'室內 · Nalexible 纖維門板'},
  'proj8-name': {en:'Quiet Door Series', zh:'靜音門系列'},
  'proj8-loc':  {en:'Molded Panel Acoustic Door · Natural Fiber Board', zh:'模壓面板隔音門 · 天然纖維門板'},
  'proj9-cat':  {en:'Residential · plyē', zh:'住宅 · plyē'},
  'proj9-name': {en:'Scandinavian Open Plan', zh:'北歐開放式格局'},
  'proj9-loc':  {en:'Taipei · ORG-8811 Dawn White Oak', zh:'台北 · ORG-8811 晨曦白橡'},
  // HOMEPAGE TECHNOLOGY (unique IDs to avoid collision with product pages)
  'htec-label':   {en:'Innovative Technology', zh:'創新材料技術'},
  'htec-title':   {en:'Materials engineered for <em>performance</em>', zh:'專為<em>性能</em>而生的材料'},
  'htec1-name':   {en:'Breathable Structure', zh:'呼吸結構'},
  'htec1-desc':   {en:'Advanced moisture management keeps floors stable across climates and seasons.', zh:'先進濕度管理系統，讓地板在各種氣候與季節中保持穩定。'},
  'htec2-name':   {en:'Flexible Stone', zh:'柔性石材'},
  'htec2-desc':   {en:'Ultra-thin natural stone that bends to any curve — walls, columns, and complex surfaces.', zh:'超薄天然石材，可彎曲貼合任何曲面——牆面、柱體及複雜造型。'},
  'htec3-name':   {en:'Lightweight &amp; Durable', zh:'輕量高強'},
  'htec3-desc':   {en:'Hemp fiber panels at 60% less weight than steel — with equivalent structural strength.', zh:'大麻纖維板重量較鋼材輕60%，同時具備相當的結構強度。'},
  // TECHNOLOGY
  'tech-label':   {en:'Specifications', zh:'產品規格'},
  'tech-title':   {en:'Innovation <em>behind the surface</em>', zh:'表面<em>背後的創新</em>'},
  'tech-desc':    {en:'Two patented technologies — one for floors, one for walls — both redefining what building materials can do.', zh:'兩項專利技術——一用於地板，一用於牆面——共同重新定義建材的可能性。'},
  'tech-plye-lbl':{en:'plyē Technology', zh:'plyē 技術'},
  'tech1-title':  {en:'Patent Click-Lock M677196', zh:'專利卡扣 M677196'},
  'tech1-desc':   {en:'Four-direction click-lock system — the only 9mm eucalyptus plywood floor that eliminates the short-edge gap defect. No glue, no tools, reversible installation.', zh:'四向卡扣系統——唯一能消除9mm桉木夾板短邊缺陷問題的地板。免膠免工具，可逆安裝。'},
  'tech1-badge':  {en:'Patent M677196 · Taiwan', zh:'專利M677196 · 台灣'},
  'tech2-title':  {en:'19dB Sound Reduction', zh:'19dB 隔音效果'},
  'tech2-desc':   {en:'Exceeds Taiwan Building Code Article 46-6 (ΔLw ≥ 17dB). Lab-certified by SGS. Cross-laminated eucalyptus core absorbs impact noise.', zh:'超越台灣建築法規第46-6條（ΔLw ≥ 17dB）。SGS 實驗室認證。交叉壓合桉木芯吸收衝擊噪音。'},
  'tech2-badge':  {en:'SGS Certified · ΔLw ≥ 19dB', zh:'SGS 認證 · ΔLw ≥ 19dB'},
  'tech3-title':  {en:'Al₂O₃ Wear Layer', zh:'Al₂O₃ 耐磨層'},
  'tech3-desc':   {en:'Mohs 9 aluminum oxide — near diamond hardness. 12,000-revolution Taber wear rating. Antimicrobial surface. EU E1 ultra-low formaldehyde.', zh:'莫氏9級氧化鋁——接近鑽石硬度。12,000轉Taber耐磨等級。抗菌表面。歐盟E1超低甲醛。'},
  'tech3-badge':  {en:'12,000 Rev · Mohs 9 · F1', zh:'12,000轉 · 莫氏9 · F1'},
  'tech-nal-lbl': {en:'Nalexible Technology', zh:'Nalexible 技術'},
  'tech4-title':  {en:'Ultra-Thin Stone Peeling', zh:'超薄石材剝離技術'},
  'tech4-desc':   {en:'Proprietary technology splits natural stone into 1–3mm slices while preserving the full natural pattern. Flexible backing allows application on curved surfaces impossible for conventional stone.', zh:'專有技術將天然石材切割為1–3mm薄片，同時保留完整天然紋理。柔性背材可應用於傳統石材無法施工的曲面。'},
  'tech4-badge':  {en:'1–3mm · Natural Stone · Flexible', zh:'1–3mm · 天然石材 · 柔性'},
  'tech5-title':  {en:'LumiSlate Translucency', zh:'LumiSlate 透光技術'},
  'tech5-desc':   {en:'Translucent resin backing lets backlight pass through ultra-thin stone — creating living light-and-shadow effects impossible with any other material.', zh:'透光樹脂底材讓背光穿透超薄石材——創造其他材料無法實現的動態光影效果。'},
  'tech5-badge':  {en:'Light-Transmitting · Natural Stone', zh:'透光 · 天然石材'},
  // Stone page — Why Flexible Stone section
  'stone-why-label':  {en:'Why Flexible Stone',zh:'為何選擇柔性石材'},
  'stone-why-title':  {en:'The case against <em>solid stone.</em>',zh:'顛覆<em>傳統實心石材</em>的理由。'},
  'stone-why-desc':   {en:'Traditional stone slabs weigh 20× more, require industrial cutting equipment, and can\'t wrap curved surfaces. Nalexible changes every one of those constraints.',zh:'傳統石材重20倍，需要工業切割設備，也無法包覆曲面。Nalexible 打破了這每一項限制。'},
  'stone-why-img-cap':{en:'1mm stone. Elephant-grade strength.',zh:'1mm 石材。象級強度。'},
  'vc1-lbl':{en:'Weight / 10m²',zh:'重量 / 10m²'},
  'vc2-lbl':{en:'Transport',zh:'運輸方式'},
  'vc2-win':{en:'Roll &amp; courier',zh:'捲裝快遞'},
  'vc2-lose':{en:'Flatbed + forklift',zh:'平板車＋叉車'},
  'vc3-lbl':{en:'On-Site Cutting',zh:'現場切割'},
  'vc3-win':{en:'Woodsaw on site',zh:'現場木工鋸'},
  'vc3-lose':{en:'Water-jet off-site',zh:'異地水刀切割'},
  'vc4-lbl':{en:'Curved Surfaces',zh:'曲面貼覆'},
  'vc4-win':{en:'Any radius ≥380mm',zh:'任意半徑 ≥380mm'},
  'vc4-lose':{en:'Near-impossible',zh:'幾乎不可行'},
  'vc5-lbl':{en:'Install Speed',zh:'安裝速度'},
  'vc6-lbl':{en:'Safety',zh:'安全性'},
  'vc6-win':{en:'Adhered — won\'t fall',zh:'黏附式——不會脫落'},
  'vc6-lose':{en:'Crack &amp; fall risk',zh:'開裂脫落風險'},
  'stone-cmp-s1':{en:'The weight',zh:'重量比'},
  'stone-cmp-s2':{en:'Faster install',zh:'安裝更快'},
  'stone-cmp-s3':{en:'Natural stone',zh:'天然石材'},
  // Stone page — Products / How It's Made
  'nc3-type': {en:'Stone Series · 3D Wall Panel',zh:'石材系列 · 3D 牆板'},
  'nc3-name': {en:'3D Stone Wall Panel',zh:'3D 石材牆板'},
  'stone-him-label':{en:'How It\'s Made',zh:'製造工藝'},
  'stone-him-title':{en:'Peeled from stone.<br><em>Not cut.</em>',zh:'從石材中剝離。<br><em>而非切割。</em>'},
  'him1-title':{en:'Sourced Globally',zh:'全球採石'},
  'him1-desc': {en:'Premium shale, slate, sandstone, and marble quarried worldwide — each with unique natural grain and colour.',zh:'頂級頁岩、板岩、砂岩與大理石，全球採購——每一種都有獨特的天然紋理與色澤。'},
  'him2-title':{en:'Proprietary Peeling',zh:'專有剝離技術'},
  'him2-desc': {en:'A patented process separates natural stone into 1–3mm layers — preserving the full surface pattern without cutting or artificial texturing.',zh:'專利工藝將天然石材分離為1–3mm薄層——完整保留表面紋理，無需切割或人工紋理處理。'},
  'him3-title':{en:'Backed for Performance',zh:'背材強化性能'},
  'him3-desc': {en:'Resin and glass-fibre backing applied — adding flexibility, dimensional stability, and flame retardancy. Translucent resin for LumiSlate.',zh:'樹脂與玻璃纖維背材覆合——增加柔韌性、尺寸穩定性與阻燃性。LumiSlate 採用透光樹脂。'},
  // Stone page section heading (unique IDs to avoid overwriting)
  // LumiSlate comparison section
  'lumi-section-label':{en:'LumiSlate', zh:'LumiSlate'},
  'lc-title':    {en:'Light Through Natural Stone', zh:'天然石材透光技術'},
  'lc-desc':     {en:'Translucent resin backing lets backlight pass through ultra-thin stone — creating living light-and-shadow effects impossible with any other material. Drag to compare warm vs cold illumination.', zh:'透光樹脂底材讓背光穿透超薄石材——創造其他材料無法實現的動態光影效果。拖動滑桿比較暖光與冷光。'},
  'lc-tag-left': {en:'Warm', zh:'暖光'},
  'lc-tag-right':{en:'Cold', zh:'冷光'},
  'ls-v1':{en:'1–3<span style="font-size:13px;font-weight:400">mm</span>',zh:'1–3<span style="font-size:13px;font-weight:400">mm</span>'},
  'ls-l1':{en:'Stone Thickness',zh:'石材厚度'},
  'ls-v2':{en:'6,000<span style="font-size:13px;font-weight:400">lux</span>',zh:'6,000<span style="font-size:13px;font-weight:400">lux</span>'},
  'ls-l2':{en:'Backlight Output',zh:'背光亮度'},
  'ls-v3':{en:'50k<span style="font-size:13px;font-weight:400">h</span>',zh:'50k<span style="font-size:13px;font-weight:400">h</span>'},
  'ls-l3':{en:'LED Lifespan',zh:'LED 壽命'},
  'ls-v4':{en:'95<span style="font-size:13px;font-weight:400">%</span>',zh:'95<span style="font-size:13px;font-weight:400">%</span>'},
  'ls-l4':{en:'Light Transmittance',zh:'透光率'},
  // Stone Applications (teaser strip)
  'stone-app-label':{en:'Applications',zh:'應用場景'},
  'stone-app-title':{en:'Residential · Commercial<br><em>Hospitality · Outdoor &amp; Façade</em>',zh:'住宅·商業<br><em>酒店·戶外立面</em>'},
  'stone-app-desc': {en:'Flexible stone, plyē flooring and fiberboard — specified together across four application categories. Home furniture, feature walls, hotel lobbies, and exterior facades.',zh:'柔性石材、plyē 地板與纖維板——橫跨四大應用場景的完整解決方案。家具裝飾、特色牆面、酒店大廳與外牆立面。'},
  'stone-app-cta':{en:'Browse Applications →',zh:'查看所有應用場景 →'},
  'stone-app-prev1':{en:'Residential',zh:'住宅'},
  'stone-app-prev2':{en:'Commercial',zh:'商業'},
  'stone-app-prev3':{en:'Hospitality',zh:'酒店'},
  'stone-app-prev4':{en:'Outdoor &amp; Façade',zh:'戶外立面'},
  // Stone Videos
  'stone-vid-label':{en:'Brand Video',zh:'品牌影片'},
  'stone-vid-title':{en:'See Nalexible <em>in action</em>',zh:'親眼見證 Nalexible <em>實力</em>'},
  'stone-vid-desc': {en:'Technology, craftsmanship and applications — the complete Nalexible story.',zh:'技術、工藝與應用場景——完整的 Nalexible 品牌故事。'},
  'vid1-title':{en:'Nalexible — Brand Introduction',zh:'Nalexible——品牌介紹'},
  'vid1-desc': {en:'A complete introduction to Nalexible flexible stone — technology, applications, and the products redefining stone cladding worldwide.',zh:'柔性石材完整品牌介紹——技術工藝、應用場景，以及正在重新定義石材飾面的創新產品系列。'},
  'vid3-title':{en:'LumiSlate Light Transmittance Demo',zh:'LumiSlate 透光展示'},
  'vid3-desc': {en:'Watch natural stone glow — LumiSlate\'s translucent resin backing demonstrated live with warm and cold backlighting.',zh:'觀看天然石材發光——LumiSlate 透光樹脂背材於暖光與冷光下的現場實測展示。'},
  'vid4-title':{en:'Exterior Wall Panel Installation',zh:'外牆板安裝流程'},
  'vid4-desc': {en:'Step-by-step demonstration of mounting Nalexible stone panels on exterior facades — adhesive application, alignment, and finishing.',zh:'逐步演示 Nalexible 石材板安裝於外牆的完整流程——膠水塗布、對齊定位與收邊處理。'},
  // Catalog tabs
  'ctab-flexible':{en:'Flexible Stone',zh:'柔性石材'},
  'ctab-lumislate':{en:'LumiSlate',zh:'LumiSlate'},
  'ctab-easystone':{en:'EasyStone',zh:'EasyStone'},
  'ctab-uv':       {en:'UV Series',zh:'UV 系列'},
  'ctab-3d':       {en:'3D Wall Panel',zh:'3D 牆板'},
  'stone-tech-title': {en:'The science of <em>flexible stone</em>', zh:'<em>柔性石材</em>的科學'},
  'stone-tech-desc':  {en:'Proprietary ultra-thin peeling technology. Natural stone transformed — bendable, backlit, and weightless.', zh:'專有超薄剝離技術。天然石材全新演繹——可彎曲、可透光、輕若無物。'},
  'tech7-title':  {en:'Curved Surface Application', zh:'曲面應用技術'},
  'tech7-desc':   {en:'Unlike rigid stone, Nalexible flexible stone veneer wraps columns, arches, and curved walls with zero cutting waste. Fire-rated, moisture-resistant, and 1/30 the weight of solid stone cladding.', zh:'不同於傳統硬質石材，Nalexible 柔性石材可包覆柱體、拱形牆及曲面，零切割浪費。防火認證、防潮，重量僅為實心石材飾面的1/30。'},
  'tech7-badge':  {en:'Flame Retardant · Moisture-Resistant', zh:'防火認證 · 防潮'},
  'tech6-title':  {en:'Natural Fiber Board', zh:'天然纖維門板'},
  'tech6-desc':   {en:'Hemp fibers + bio-based resins, hot-pressed to match steel compressive strength at 60%+ less weight. Zero formaldehyde. 100% recyclable. Ideal for prefab and modular construction.', zh:'大麻纖維+生物樹脂熱壓成型，強度媲美鋼鐵，重量降低60%以上。零甲醛。100%可回收。適用於預製及模組化建築。'},
  'tech6-badge':  {en:'Bio-Resin · Zero VOC · Steel Strength', zh:'生物樹脂 · 零VOC · 鋼鐵強度'},
  // Fiberboard page section heading + cards (unique IDs)
  'fb-tech-title':  {en:'Engineered to <em>outperform.</em>', zh:'工程設計，<em>超越標準。</em>'},
  'fb-tech-desc':   {en:'How Nalexible Fiberboard compares to conventional alternatives — and the exact dimensions available for specification.', zh:'Nalexible 天然纖維板與傳統材料的比較，以及可供規格指定的精確尺寸。'},
  'fb-tech1-title': {en:'Hemp Fiber + Bio-Based Resin', zh:'大麻纖維 + 生物基樹脂'},
  'fb-tech1-desc':  {en:'Natural hemp fibers hot-pressed with bio-based resins — no formaldehyde, no VOCs. Matches steel-grade compressive strength at over 60% less weight. 100% recyclable end-of-life.', zh:'天然大麻纖維與生物基樹脂熱壓成型——零甲醛、零VOC。強度媲美鋼鐵，重量降低60%以上。100%可回收利用。'},
  'fb-tech1-badge': {en:'Bio-Resin · Zero VOC · Steel Strength', zh:'生物樹脂 · 零VOC · 鋼鐵強度'},
  'fb-tech2-title': {en:'Quiet Door Acoustic System', zh:'靜音門聲學系統'},
  'fb-tech2-desc':  {en:'Thermoformed Nalexible panels wrap interior door frames to create Quiet Door, Magnetic Door, and Acoustic Door variants — premium sound dampening from a natural, recyclable core.', zh:'熱成型 Nalexible 面板包覆室內門框，打造靜音門、磁力門及隔音門系列——天然可回收芯材實現頂級隔音效果。'},
  'fb-tech2-badge': {en:'Acoustic · Magnetic · Interior Doors', zh:'隔音 · 磁力 · 室內門'},
  'fb-tech3-title': {en:'Moisture-Proof & Mold-Resistant', zh:'防潮防霉'},
  'fb-tech3-desc':  {en:'The bio-based resin matrix creates a moisture-resistant surface without chemical treatments. Anti-mold properties extend panel life in high-humidity environments like bathrooms and kitchens.', zh:'生物基樹脂基質無需化學處理即可形成防潮表面。防霉特性延長面板在浴室、廚房等高濕環境中的使用壽命。'},
  'fb-tech3-badge': {en:'Moisture-Resistant · Anti-Mold', zh:'防潮 · 防霉'},
  'tech-spec-lbl':{en:'<span style="text-transform:none">plyē</span> Technical Specifications', zh:'<span style="text-transform:none">plyē</span> 技術規格'},
  'fb-spec-lbl':  {en:'Nalexible Fiberboard Specifications', zh:'Nalexible 天然纖維門板規格'},

  // ── Internal Structure section ──
  'fb-struct-label':      {en:'Material Science', zh:'材料科學'},
  'fb-struct-title':      {en:'The architecture <em>within.</em>', zh:'內在的<em>建築結構。</em>'},
  'fb-struct-desc':       {en:'At the core of every Nalexible Fiberboard lies a continuous topology curved composite structure — a wave-form honeycomb pressed from natural hemp fibres. This internal geometry, not chemical treatment, is what delivers steel-grade rigidity at a fraction of the weight.', zh:'每塊 Nalexible 天然纖維板的核心，是由天然大麻纖維壓制而成的連續拓撲曲面複合材——波形蜂巢結構。正是這種內部幾何形態，而非化學處理，賦予了板材鋼鐵級剛性，重量卻輕得多。'},
  'fb-struct-img1-type':  {en:'Continuous Topology Core', zh:'連續拓撲芯材'},
  'fb-struct-img1-name':  {en:'Wave-Form Hemp Fibre Matrix', zh:'波形大麻纖維基質'},
  'fb-struct-img2-type':  {en:'Cross-Section', zh:'剖面結構'},
  'fb-struct-img2-name':  {en:'Surface Panel + Core Layers', zh:'表面板 + 芯材層'},
  'fb-struct-pt1-title':  {en:'No External Frame Needed', zh:'無需外部框架'},
  'fb-struct-pt1-desc':   {en:'The internal topology distributes load in 3D — eliminating the need for steel reinforcement. The board itself is the structure.', zh:'內部拓撲結構以三維方式分散荷載，無需鋼筋加固，板材本身即是結構。'},
  'fb-struct-pt2-title':  {en:'3 Core Configurations', zh:'3 種芯材配置'},
  'fb-struct-pt2-desc':   {en:'2+1 · 2+2 · 3+2 surface/core configurations give architects precise control over strength, weight, and acoustic performance.', zh:'2+1 · 2+2 · 3+2 面板/芯材配置，讓建築師精確控制強度、重量與隔音性能。'},
  'fb-struct-pt3-title':  {en:'Spans up to 3000mm', zh:'跨距最長達 3000mm'},
  'fb-struct-pt3-desc':   {en:'Sheets up to 3000 × 1200mm span without intermediate supports — enabling ultra-long desks, open shelving, and span-critical applications.', zh:'板材尺寸最大達 3000 × 1200mm，無需中間支撐即可跨越，適用於超長桌面、開放式層架及大跨距工程。'},
  // ── Acoustic section ──
  'fb-acoustic-label':    {en:'Quiet Door Series', zh:'靜音門系列'},
  'fb-acoustic-title':    {en:'Sound absorbed.<br><em>Silence designed.</em>', zh:'聲波被吸收。<br><em>靜謐被設計。</em>'},
  'fb-acoustic-desc':     {en:"The continuous topology hemp fibre structure doesn't just provide structural strength — it is a natural sound trap. Sound waves entering the material are dispersed, fragmented, and absorbed across all frequency ranges. The result: a quieter room without added mass or chemical acoustic tiles.", zh:'連續拓撲大麻纖維結構不僅提供結構強度，更是天然的聲音陷阱。進入材料的聲波在全頻段內被分散、分解並吸收。結果：無需增加重量或化學聲學板，房間自然更安靜。'},
  'fb-aq1-title':         {en:'Sound Wave → Dispersion', zh:'聲波 → 分散'},
  'fb-aq1-desc':          {en:'The wave-form topology breaks incoming sound into smaller, scattered waves — reducing direct transmission before absorption begins.', zh:'波形拓撲結構將入射聲波分解為更小的散射波，在吸收開始前即降低直接傳遞。'},
  'fb-aq2-title':         {en:'Dispersion → Absorption', zh:'分散 → 吸收'},
  'fb-aq2-desc':          {en:'Hemp fibres convert sound energy into heat at a microscopic level — across low, mid, and high frequencies simultaneously.', zh:'大麻纖維在微觀層面將聲能轉化為熱能，同時涵蓋低、中、高頻段。'},
  'fb-aq3-title':         {en:'Absorption → Quiet', zh:'吸收 → 靜謐'},
  'fb-aq3-desc':          {en:'Full-frequency sound reduction — measurably quieter spaces without adding concrete mass, delivered in Quiet, Magnetic, and Acoustic door variants.', zh:'全頻段降噪，無需增加混凝土重量，提供靜音、磁吸及隔音三種門型選擇。'},
  'fb-aq-stat1':          {en:'Frequency Range', zh:'全頻段'},
  'fb-aq-stat2':          {en:'Added Mass', zh:'額外重量'},
  'fb-aq-stat3':          {en:'Door Variants', zh:'門型選擇'},
  // ── Applications section ──
  'fb-app-label':         {en:'Applications', zh:'應用場景'},
  'fb-app-title':         {en:'Where fiberboard <em>performs.</em>', zh:'纖維板<em>大顯身手</em>的場合'},
  'fb-app-desc':          {en:'From interior doors and commercial partitions to furniture and vehicle structures — Nalexible Fiberboard is engineered where performance, weight, and environmental responsibility matter most.', zh:'從室內門、商業隔間到家具及車輛結構，Nalexible 天然纖維板專為性能、重量與環保責任最受重視的場合而生。'},
  'fb-app1-cat':          {en:'Residential', zh:'住宅'},
  'fb-app1-name':         {en:'Interior Doors', zh:'室內門'},
  'fb-app2-cat':          {en:'Commercial', zh:'商業'},
  'fb-app2-name':         {en:'Space Partitions', zh:'空間隔間'},
  'fb-app3-cat':          {en:'Furniture', zh:'家具'},
  'fb-app3-name':         {en:'Long Desks &amp; Shelving', zh:'超長桌面與層架'},
  'fb-app4-cat':          {en:'Acoustic', zh:'隔音'},
  'fb-app4-name':         {en:'Quiet Door Series', zh:'靜音門系列'},
  'fb-uc1':               {en:'RV Structures', zh:'RV 車結構材'},
  'fb-uc2':               {en:'Marine Furniture', zh:'遊輪家具'},
  'fb-uc3':               {en:'Door Substrate', zh:'門芯材'},
  'fb-uc4':               {en:'Space Partitions', zh:'空間隔間'},
  'fb-uc5':               {en:'Cabinets', zh:'櫃體'},
  'fb-uc6':               {en:'Desktop Surfaces', zh:'桌面'},
  // ── Dimensions section ──
  'fb-dims-label':        {en:'Product Dimensions', zh:'產品尺寸'},
  'fb-dims-sheet-title':  {en:'Sheet Sizes (W × D)', zh:'板材尺寸（寬 × 深）'},
  'fb-dims-thick-title':  {en:'Thickness Options', zh:'厚度選項'},
  'fb-dims-th-size':      {en:'Sheet Size', zh:'尺寸'},
  'fb-dims-th-note':      {en:'Standard Format', zh:'規格類型'},
  'fb-dims-th-total':     {en:'Total (H)', zh:'總厚度（H）'},
  'fb-dims-th-surface':   {en:'Surface Panel', zh:'表面板'},
  'fb-dims-th-config':    {en:'Core Config', zh:'芯材配置'},
  'fb-dims-note':         {en:'Core configurations: 2+1 = dual surface + single core · 2+2 = dual surface + dual core · 3+2 = triple surface + dual core. Custom thicknesses available on request.', zh:'芯材配置：2+1 = 雙面板 + 單芯 · 2+2 = 雙面板 + 雙芯 · 3+2 = 三面板 + 雙芯。可依需求訂製厚度。'},

  // DOWNLOADS
  'dl-label': {en:'Downloads', zh:'下載資料'},
  'dl-title': {en:'Everything you need to <em>specify</em>', zh:'規格採購所需的<em>一切資料</em>'},
  'dl-desc':  {en:'Catalogs, technical data sheets, CAD files, installation guides, and certification documents — all in one place.', zh:'產品型錄、技術規格表、CAD檔案、安裝指南及認證文件——集中一處。'},
  'dl1-title':{en:'plyē Full Product Catalogue', zh:'plyē 完整產品型錄'},
  'dl1-desc': {en:'All 12 ORIGIN Series colors with technical specifications, installation requirements, and SKU codes.', zh:'12款 ORIGIN 系列色彩的完整技術規格、安裝要求及品項編碼。'},
  'dl1-meta': {en:'PDF · 4.2 MB · Updated Mar 2025', zh:'PDF · 4.2 MB · 2025年3月更新'},
  'dl1-btn':  {en:'Download →', zh:'下載 →'},
  'dl2-title':{en:'plyē CAD / BIM Files', zh:'plyē CAD / BIM 檔案'},
  'dl2-desc': {en:'AutoCAD DWG and Revit RFA files for all plyē floor profiles, suitable for architectural specification.', zh:'適用於建築規格的全系列 plyē 地板 AutoCAD DWG 及 Revit RFA 檔案。'},
  'dl2-meta': {en:'DWG / RFA · On Request', zh:'DWG / RFA · 依需求提供'},
  'dl2-btn':  {en:'Request →', zh:'索取 →'},
  'dl3-title':{en:'Certifications Package', zh:'認證文件包'},
  'dl3-desc': {en:'EU E1 formaldehyde, 19dB sound certification, Patent M677196, and Taiwan Building Code compliance documents.', zh:'歐盟E1甲醛認證、19dB隔音認證、專利M677196及台灣建築法規合規文件。'},
  'dl3-meta': {en:'PDF · Multiple Files', zh:'PDF · 多份文件'},
  'dl3-btn':  {en:'Download →', zh:'下載 →'},
  'dl4-title':{en:'Nalexible Stone Catalogue', zh:'Nalexible 石材型錄'},
  'dl4-desc': {en:'Complete Nalexible stone product range: Flexible Stone, LumiSlate, EasyStone, 3D Stone Brick — with installation details.', zh:'Nalexible 完整石材產品系列：柔性石材、LumiSlate、EasyStone、3D石磚——含安裝詳情。'},
  'dl4-meta': {en:'PDF · From nalexible.com', zh:'PDF · 來自 nalexible.com'},
  'dl4-btn':  {en:'Download →', zh:'下載 →'},
  'dl5-title':{en:'Installation Guide — plyē', zh:'plyē 安裝指南'},
  'dl5-desc': {en:'Step-by-step DIY installation for plyē click-lock. Subfloor prep, expansion gaps, stair nosing, and moisture barrier guide.', zh:'plyē 卡扣地板的逐步 DIY 安裝指南。地基處理、伸縮縫、階梯收邊及防潮層說明。'},
  'dl5-meta': {en:'PDF · 2.8 MB · Illustrated', zh:'PDF · 2.8 MB · 含圖解'},
  'dl5-btn':  {en:'Download →', zh:'下載 →'},
  'dl6-title':{en:'Nalexible Fiberboard Data Sheet', zh:'Nalexible 纖維門板技術資料表'},
  'dl6-desc': {en:'Natural Fiber Board technical data: compressive strength, dimensions, fire rating, formaldehyde class, and application guide.', zh:'天然纖維門板技術資料：抗壓強度、尺寸規格、防火等級、甲醛等級及應用指南。'},
  'dl6-meta': {en:'PDF · Technical Data Sheet', zh:'PDF · 技術資料表'},
  'dl6-btn':  {en:'Download →', zh:'下載 →'},
  // MOBILE NAV OVERLAY
  'nov-products': {en:'Products',     zh:'產品'},
  'nov-gallery':  {en:'Colors',       zh:'色彩'},
  'nov-tech':     {en:'Technology',   zh:'技術'},
  'nov-apps':     {en:'Applications', zh:'應用場景'},
  'nov-proj':     {en:'Projects',     zh:'案例作品'},
  'nov-videos':   {en:'Videos',       zh:'影片'},
  'nov-cta':      {en:'Contact',  zh:'聯絡我們'},
  // FOOTER COMPANY LINKS
  'fc-tech':  {en:'Technology', zh:'技術'},
  'fc-dl':    {en:'Downloads',  zh:'下載資料'},
  'fc-about': {en:'About',      zh:'關於我們'},
  'fc-news':  {en:'News',       zh:'最新消息'},
  // DOWNLOADS SECTION
  'dl-label': {en:'Downloads',  zh:'下載資料'},
  'dl-title': {en:'Everything you need to <em>specify</em>', zh:'規格採購所需的<em>一切資料</em>'},
  'dl-desc':  {en:'Catalogs, technical data sheets, CAD files, installation guides, and certification documents — all in one place.', zh:'產品型錄、技術規格表、CAD檔案、安裝指南及認證文件——集中一處。'},
  'dl1-title':{en:'plyē Product Catalog', zh:'plyē 產品型錄'},
  'dl1-desc': {en:'Full product range, color options, specifications, and installation overview for the ORIGIN Series.', zh:'ORIGIN系列完整產品範圍、色彩選擇、規格及安裝概覽。'},
  'dl1-meta': {en:'PDF · 4.2 MB · Updated Mar 2025', zh:'PDF · 4.2 MB · 2025年3月更新'},
  'dl2-title':{en:'CAD / BIM Files', zh:'CAD / BIM 檔案'},
  'dl2-desc': {en:'AutoCAD and Revit files for plyē flooring system — click-lock detail, cross-section, and room layout.', zh:'plyē地板系統的AutoCAD與Revit檔案——卡扣細節、剖面圖及房間佈局。'},
  'dl2-meta': {en:'DWG / RFA · On Request', zh:'DWG / RFA · 依需求提供'},
  'dl3-title':{en:'Technical Data Sheet', zh:'技術規格表'},
  'dl3-desc': {en:'Full technical specifications: thickness, wear layer, sound reduction, formaldehyde rating, fire performance.', zh:'完整技術規格：厚度、耐磨層、隔音、甲醛等級、防火性能。'},
  'dl3-meta': {en:'PDF · Multiple Files', zh:'PDF · 多份文件'},
  'dl4-title':{en:'Nalexible Stone Catalog', zh:'Nalexible 石材型錄'},
  'dl4-desc': {en:'Full Nalexible product range — Flexible Stone Veneer, LumiSlate, and Natural Fiber Board specifications.', zh:'Nalexible完整產品系列——柔性石材貼面、LumiSlate及天然纖維門板規格。'},
  'dl4-meta': {en:'PDF · From nalexible.com', zh:'PDF · 來自 nalexible.com'},
  'dl5-title':{en:'Installation Guide', zh:'安裝指南'},
  'dl5-desc': {en:'Step-by-step plyē click-lock installation — subfloor prep, expansion gaps, layout, and finishing details.', zh:'plyē卡扣安裝步驟——底層準備、伸縮縫、佈局及收邊細節。'},
  'dl5-meta': {en:'PDF · 2.8 MB · Illustrated', zh:'PDF · 2.8 MB · 含圖解'},
  'dl6-title':{en:'Certification Documents', zh:'認證文件'},
  'dl6-desc': {en:'SGS test reports for EU E1 formaldehyde, 19dB sound reduction, FSC chain-of-custody, and Patent M677196.', zh:'SGS歐盟E1甲醛、19dB隔音、FSC產銷監管鏈及專利M677196認證報告。'},
  'dl6-meta': {en:'PDF · Technical Data Sheet', zh:'PDF · 技術資料表'},
  // LEAD CTA STRIP
  'lcc1-title':{en:'Request a Sample',     zh:'申請樣品'},
  'lcc1-desc': {en:'Receive physical plyē floor samples and Nalexible stone swatches at your office or project site — free of charge.', zh:'免費取得plyē地板樣品及Nalexible石材色卡，直送您的辦公室或工地現場。'},
  'lcc1-btn':  {en:'Request a Sample →',   zh:'申請樣品 →'},
  'lcc2-title':{en:'Download Catalog',     zh:'下載型錄'},
  'lcc2-desc': {en:'Full product catalog with specifications, color range, and technical data. Available in English and Traditional Chinese.', zh:'完整產品型錄含規格、色彩系列及技術資料，提供中英文版本。'},
  'lcc2-btn':  {en:'View Downloads →',     zh:'前往下載 →'},
  'lcc3-title':{en:'Global Distribution',  zh:'全球經銷'},
  'lcc3-desc': {en:'plyē exports to US, EU, Australia, and New Zealand. Nalexible available in Taiwan. Inquire about your region.', zh:'plyē外銷美國、歐盟、澳洲及紐西蘭。Nalexible台灣獨家供應。歡迎洽詢您所在地區。'},
  'lcc3-btn':  {en:'Become a Distributor →', zh:'成為經銷商 →'},
  // IMAGE CAPTIONS — plyē features
  'fcap1':    {en:'plyē ORG-8825 — Soft Light Gray Oak', zh:'plyē ORG-8825 — 柔光灰橡木'},
  'fcap2':    {en:'plyē 23cm wide-plank · Dawn White Oak · Taipei residence', zh:'plyē 23cm寬版 · 黎明白橡木 · 台北住宅'},
  // ABOUT
  'about-label':  {en:'About Ashley Kitchen', zh:'關於 Ashley Kitchen'},
  'about-title':  {en:'Taiwan-made surfaces,<br><em>specified worldwide</em>', zh:'台灣製造的建材，<br><em>全球指定選用</em>'},
  'about-body1':  {en:'Ashley Kitchen is a Taipei-based material company with over 30 years in the building materials industry. We manufacture <strong>plyē</strong> — our patent click-lock eucalyptus engineered flooring — and serve as the Taiwan exclusive distributor of <strong>Nalexible</strong> flexible natural stone and fiber board systems.', zh:'Ashley Kitchen 是一家總部位於台北的建材公司，在建材產業深耕超過30年。我們自主製造 <strong>plyē</strong> 專利卡扣桉木工程木地板，同時擔任 <strong>Nalexible</strong> 柔性天然石材與纖維門板系統的台灣獨家總代理。'},
  'about-body2':  {en:'<strong>plyē</strong> is specified across the United States, European Union, Australia, New Zealand, and beyond — trusted by architects, interior designers, and developers in residential, commercial, and hospitality projects worldwide.', zh:'<strong>plyē</strong> 廣受美國、歐盟、澳洲、紐西蘭等地的建築師、室內設計師及開發商指定採用，應用於住宅、商業及飯店等各類專案。'},
  'as-years':     {en:'Years Experience', zh:'年產業經驗'},
  'as-markets':   {en:'Export Markets', zh:'外銷市場'},
  'as-brands':    {en:'Flagship Brands', zh:'旗艦品牌'},
  'as-patent':    {en:'Active Patent', zh:'有效專利'},
  'act1':         {en:'plyē Engineered Flooring', zh:'plyē 工程木地板'},
  'acd1':         {en:'Designed and manufactured in Taiwan. 9mm eucalyptus plywood core, four-direction patent click-lock (M677196), 12 oak shades, EU E1 ultra-low formaldehyde. The only engineered floor that eliminates the short-edge gap defect.', zh:'台灣設計製造。9mm桉木夾板芯、四向專利卡扣（M677196）、12款橡木色彩、歐盟E1超低甲醛。唯一消除短邊縫隙缺陷的工程木地板。'},
  'act2':         {en:'Nalexible — Taiwan Exclusive', zh:'Nalexible — 台灣獨家'},
  'acd2':         {en:'Ashley Kitchen is the exclusive Taiwan distributor of the full Nalexible material system — encompassing ultra-thin flexible stone veneer, LumiSlate light-transmitting panels, and Natural Fiber Board acoustic door systems.', zh:'Ashley Kitchen 為 Nalexible 完整建材系統的台灣獨家總代理——涵蓋超薄柔性石材貼面、LumiSlate透光面板及天然纖維門板隔音門系統。'},
  'act3':         {en:'Headquarters', zh:'公司總部'},
  'acd3':         {en:'No. 32, Aly. 18, Ln. 478, Ruiguang Rd., Neihu District, Taipei City 114063, Taiwan<br>T: +886-2-8797-7801 · F: +886-2-8797-7802', zh:'114063 台北市內湖區瑞光路478巷18弄32號<br>T: +886-2-8797-7801 · F: +886-2-8797-7802'},
  // SUSTAINABILITY
  'sus-label':  {en:'Sustainability', zh:'永續發展'},
  'sus-title':  {en:'Good for your space.<br><em>Good for the planet.</em>', zh:'好空間。<br><em>好地球。</em>'},
  'sus-desc':   {en:'Every material decision at Ashley Kitchen is made with environmental performance in mind — from source to installation to end-of-life.', zh:'Ashley Kitchen 的每一項建材決策，都以環境績效為核心——從原料來源到安裝施工，直至產品生命週期終結。'},
  'sus-t1':     {en:'FSC® Certified Eucalyptus', zh:'FSC® 認證桉木'},
  'sus-b1':     {en:'plyē\'s eucalyptus core is sourced exclusively from FSC-certified forests — ensuring responsible forest management, biodiversity protection, and traceable chain of custody from tree to finished board.', zh:'plyē 的桉木芯材完全來自 FSC 認證森林，確保負責任的森林管理、生物多樣性保護，以及從原木到成品的可追溯產銷監管鏈。'},
  'sus-t2':     {en:'EU E1 Ultra-Low Formaldehyde', zh:'歐盟E1超低甲醛'},
  'sus-b2':     {en:'plyē meets the European Union E1 standard: formaldehyde emissions ≤ 0.1 ppm — 10× lower than the maximum allowable limit in Taiwan. The Nalexible Natural Fiber Board goes further: zero formaldehyde emission (0 ppm), verified by SGS.', zh:'plyē 符合歐盟E1標準：甲醛排放量 ≤ 0.1 ppm——低於台灣最高允許限值的10倍。Nalexible天然纖維門板更進一步：甲醛排放量為零（0 ppm），經SGS認證。'},
  'sus-t3':     {en:'Natural Pest Resistance', zh:'天然防蟲特性'},
  'sus-b3':     {en:'Eucalyptus contains natural tannins that repel insects and resist microbial growth without any chemical pesticide treatment — eliminating a major source of toxic additives found in most engineered wood floors.', zh:'桉木含有天然單寧酸，無需任何化學農藥處理即可驅蟲抗菌——消除了大多數工程木地板中的主要有毒添加物來源。'},
  'sus-t4':     {en:'Patent Click-Lock — No-Waste Install', zh:'專利卡扣——零浪費安裝'},
  'sus-b4':     {en:'Patent M677196 click-lock requires no adhesive glue, no fasteners, and no chemical primers. The floating installation is fully reversible — planks can be uninstalled and reused in a new space, extending product life and reducing landfill waste.', zh:'專利M677196卡扣無需黏著劑、固定件或化學底漆。浮式安裝完全可逆——地板可拆卸後在新空間重複使用，延長產品壽命並減少廢棄物。'},
  'sus-t5':     {en:'100% Recyclable Fiberboard', zh:'100%可回收纖維門板'},
  'sus-b5':     {en:'Nalexible Natural Fiber Board is made from hemp fibers and bio-based resins — 100% recyclable at end of life. No formaldehyde binders, no petrochemical additives. Ideal for green building certifications including LEED and BREEAM.', zh:'Nalexible天然纖維門板採用大麻纖維與生物基樹脂製成——100%可回收再利用。無甲醛黏合劑，無石化添加物，適合LEED、BREEAM等綠建築認證。'},
  'sus-t6':     {en:'Made in Taiwan · Shorter Supply Chain', zh:'台灣製造·精簡供應鏈'},
  'sus-b6':     {en:'plyē is designed, engineered, and manufactured in Taipei. Local production means shorter shipping distances to Asia-Pacific markets, lower transport emissions, full quality traceability, and direct factory support for distributors and specifiers.', zh:'plyē 在台北設計、研發與製造。本地生產意味著更短的亞太市場運輸距離、更低的運輸排放、完整的品質追溯，以及對經銷商與設計師的直接原廠支援。'},
  // NEWS
  'news-label':  {en:'News &amp; Media', zh:'新聞與媒體'},
  'news-title':  {en:'Latest from <em>Ashley Kitchen</em>', zh:'Ashley Kitchen <em>最新消息</em>'},
  'news-desc':   {en:'Product launches, project features, industry coverage, and brand updates.', zh:'產品發布、案例介紹、產業報導與品牌最新動態。'},
  'nc1-cat':     {en:'Product Launch', zh:'產品發布'},
  'nc1-title':   {en:'plyē ORIGIN Series — 12 New Oak Shades', zh:'plyē ORIGIN 系列——12款全新橡木色彩'},
  'nc1-exc':     {en:'The expanded ORIGIN Series introduces four new colorways, including Soft Light Gray Oak (ORG-8825) and Sunrise Gold Oak (ORG-8813), now shipping to US and EU distributors.', zh:'擴充後的ORIGIN系列新增四款色彩，包括柔光灰橡木（ORG-8825）及旭日金橡木（ORG-8813），現已開始向美國及歐盟經銷商出貨。'},
  'nc1-link':    {en:'Read more →', zh:'了解更多 →'},
  'nc2-cat':     {en:'Distribution', zh:'經銷佈局'},
  'nc2-title':   {en:'Ashley Kitchen Named Taiwan Exclusive Nalexible Distributor', zh:'Ashley Kitchen 獲授權為Nalexible台灣獨家總代理'},
  'nc2-exc':     {en:'Ashley Kitchen has been appointed as the exclusive Taiwan distributor of the full Nalexible material system, including Flexible Stone Veneer, LumiSlate, and Natural Fiber Board.', zh:'Ashley Kitchen 正式獲授權為Nalexible完整建材系統的台灣獨家總代理，涵蓋柔性石材貼面、LumiSlate及天然纖維門板。'},
  'nc2-link':    {en:'Read more →', zh:'了解更多 →'},
  'nc3-cat':     {en:'Technology', zh:'技術創新'},
  'nc3-title':   {en:'Patent M677196 — The Click-Lock That Eliminates the Gap Defect', zh:'專利M677196——消除縫隙缺陷的卡扣系統'},
  'nc3-exc':     {en:'plyē\'s four-direction click-lock system, protected under Utility Model Patent M677196, is the only engineered flooring mechanism that fully eliminates the short-edge gap defect.', zh:'plyē的四向卡扣系統受新型專利M677196保護，是唯一能完全消除短邊縫隙缺陷的工程木地板機構。'},
  'nc3-link':    {en:'Read more →', zh:'了解更多 →'},
  'news-cta':    {en:'Contact us for press inquiries →', zh:'媒體採訪請洽 →'},

  // ── plye.html BRAND STRIP ──
  'plye-bs-origin':  {en:'ORIGIN Series', zh:'ORIGIN 系列'},
  'plye-bs-euca':    {en:'9mm Eucalyptus', zh:'9mm 桉木'},
  'plye-bs-patent':  {en:'Patent M677196', zh:'專利 M677196'},
  'plye-bs-mit':     {en:'Made in Taiwan', zh:'台灣製造'},
  'plye-bs-e1':      {en:'EU E1 Certified', zh:'歐盟E1認證'},
  'plye-bs-tag':     {en:'Built to last. Specified to stay.', zh:'為持久而建。為規格而選。'},

  // ── plye.html FEATURE BADGES ──
  'plye-badge1': {en:'9mm Eucalyptus · Natural Pest Resistance', zh:'9mm 桉木 · 天然防蟲'},
  'plye-badge2': {en:'Patent M677196 · Glue-Free · Reversible · DIY', zh:'專利M677196 · 免膠 · 可拆裝 · DIY'},
  'plye-badge3': {en:'19dB · Exceeds Building Code · SGS Tested', zh:'19dB · 超越建築法規 · SGS認證'},
  'plye-badge4': {en:'12,000 Rev · Al₂O₃ · Anti-Mold · Antimicrobial · EU E1', zh:'12,000轉 · Al₂O₃ · 防霉 · 抗菌 · 歐盟E1'},
  'plye-badge5': {en:'23cm Wide · 2–3mm Gap · Made in Taiwan', zh:'23cm寬板 · 2–3mm縫隙 · 台灣製造'},

  // ── plye.html PHOTO CAPTIONS ──
  'plye-cap1': {en:'One person. One afternoon. No glue, no tools, no contractor.', zh:'一個人。一個下午。免膠、免工具、免工班。'},
  'plye-cap2': {en:'Complete seal. No plank movement. No noise — 19dB impact sound reduction, SGS certified.', zh:'完全密合。零位移。零噪音——19dB 衝擊隔音認證，SGS 認證。'},
  'plye-cap3': {en:'Left: 12,000-rev scratch resistance test · Right: Water-repellent, anti-mold surface coating.', zh:'左：12,000轉耐磨測試 · 右：防水、防霉表面塗層。'},

  // ── plye.html SECTION DESCS ──
  'plye-tech-desc':  {en:'Patent-protected, SGS-certified, factory-direct from Taiwan.', zh:'專利保護、SGS認證、台灣原廠直銷。'},
  'plye-apps-desc':  {en:'plyē is specified for residential, commercial, hospitality, and family spaces worldwide.', zh:'plyē 廣泛應用於全球住宅、商業、旅館飯店及家庭空間。'},
  'plye-proj-desc':  {en:'Selected residential and commercial projects featuring plyē ORIGIN Series engineered flooring.', zh:'精選住宅與商業案例，展示 plyē ORIGIN 系列工程木地板的實際應用。'},
  'plye-dl-desc':    {en:'Catalogs, technical data sheets, CAD/BIM files, installation guides, and certification documents.', zh:'產品型錄、技術規格表、CAD/BIM 檔案、安裝指南及認證文件。'},
  'plye-ct-desc':    {en:'Samples. Pricing. Architect specs. We supply globally — we\'ll be in touch shortly.', zh:'樣品。報價。建築師規格。我們提供全球供應——我們將盡快與您聯繫。'},

  // ── plye.html CONTACT FORM ──
  'plye-fl-inq':     {en:'Inquiry Type', zh:'詢問類別'},
  'plye-ct-submit':  {en:'Send Inquiry →', zh:'送出詢問 →'},

  // ── plye.html FOOTER ──
  'plye-oak-shades': {en:'Oak Shades', zh:'橡木色調'},
  'plye-mit-footer': {en:'Made in Taiwan 🇹🇼', zh:'台灣製造 🇹🇼'},

  // ── nalexible-stone.html BRAND STRIP ──
  'stone-bs-veneer':    {en:'Stone Veneer', zh:'石材貼面'},
  'stone-bs-thin':      {en:'Ultra-Thin · 1–3mm', zh:'超薄 · 1–3mm'},
  'stone-bs-exclusive': {en:'Taiwan Exclusive', zh:'台灣獨家'},
  'stone-bs-flame':     {en:'Flame Retardant', zh:'防火阻燃'},
  'stone-bs-tag':       {en:'Real stone. Made to bend. Thin enough to glow.', zh:'真實石材。為彎曲而生。薄到可以發光。'},

  // ── nalexible-stone.html HERO DESCS ──
  'stone-hero-desc1': {en:'Ultra-thin natural stone panels (1–3mm) designed for flexibility. Lightweight, fire-resistant, moisture-resistant — for curved walls, ceilings, and facades.', zh:'超薄天然石材（1–3mm），專為柔性應用設計。輕量、防火、防潮 — 適用於曲面牆、天花板與外立面。'},
  'stone-hero-desc2': {en:'Translucent stone panels (1–3mm) — thin enough for light to pass through. For backlit walls, columns, and accent ceilings.', zh:'透光石材板（1–3mm）——薄到可以透光。適用於背光牆面、柱體與重點天花板。'},

  // ── nalexible-stone.html CATALOG FINISHES ──
  'stone-fin-14': {en:'— 14 finishes', zh:'— 14種表面'},
  'stone-fin-5':  {en:'— 5 finishes',  zh:'— 5種表面'},
  'stone-fin-11': {en:'— 11 finishes', zh:'— 11種表面'},

  // ── nalexible-stone.html FOOTER STAT ──
  'stone-thickness-lbl': {en:'Stone Thickness', zh:'石材厚度'},

  // ── nalexible-stone.html SECTION DESCS ──
  'stone-apps-desc': {en:'From hotel façades to residential bathrooms — Nalexible stone wraps any surface beautifully.', zh:'從飯店外牆到住宅浴室——Nalexible 石材可包覆任何表面。'},
  'stone-proj-desc': {en:'Selected hospitality, residential, and commercial projects featuring Nalexible flexible stone veneer and LumiSlate.', zh:'精選旅館飯店、住宅與商業案例，展示 Nalexible 石材的實際應用。'},
  'stone-dl-desc':   {en:'Technical data sheets, product catalogs, and installation guides for Nalexible stone products.', zh:'Nalexible 石材的技術規格表、產品型錄及安裝指南。'},
  'stone-ct-desc':   {en:'Samples. Pricing. Architect specs. We\'ll be in touch shortly.', zh:'樣品。報價。建築師規格。我們將盡快與您聯繫。'},

  // ── nalexible-stone.html CONTACT FORM ──
  'stone-fl-inq':    {en:'Inquiry Type', zh:'詢問類別'},
  'stone-ct-submit': {en:'Send Inquiry →', zh:'送出詢問 →'},

  // ── nalexible-stone.html FOOTER ──
  'stone-mit-footer': {en:'Made in Taiwan 🇹🇼', zh:'台灣製造 🇹🇼'},

  // ── nalexible-fiberboard.html BRAND STRIP ──
  'fb-bs-nfb':       {en:'Natural Fiber Board', zh:'天然纖維門板'},
  'fb-bs-quiet':     {en:'Quiet Door Series', zh:'靜音門系列'},
  'fb-bs-hemp':      {en:'Hemp · Bio-Resin', zh:'大麻纖維 · 生物樹脂'},
  'fb-bs-zerofm':    {en:'Zero Formaldehyde', zh:'零甲醛'},
  'fb-bs-exclusive': {en:'Taiwan Exclusive', zh:'台灣獨家'},
  'fb-bs-tag':       {en:'Hemp · Bio-Resin · Zero Formaldehyde · Taiwan Exclusive', zh:'大麻纖維 · 生物樹脂 · 零甲醛 · 台灣獨家'},

  // ── nalexible-fiberboard.html HERO DESC ──
  'fb-hero-desc': {en:'Natural hemp fiber + bio-based resin composite board.<br>Steel-grade strength, 60% lighter than steel — zero formaldehyde.<br>Interior doors, partitions, furniture. Taiwan exclusive distributor.', zh:'天然大麻纖維 + 生物基樹脂複合板材。<br>鋼鐵等級強度，比鋼輕60% — 零甲醛。<br>室內門板、隔間、家具。台灣獨家代理。'},

  // ── nalexible-fiberboard.html SPEC TABLE ──
  'fb-spec-formaldehyde': {en:'Formaldehyde', zh:'甲醛'},

  // ── nalexible-fiberboard.html SECTION DESCS ──
  'fb-dl-desc':  {en:'Technical data sheets, product catalogs, and installation guides for Nalexible fiberboard products.', zh:'Nalexible 纖維門板的技術規格表、產品型錄及安裝指南。'},
  'fb-ct-desc':  {en:'Samples. Pricing. Architect specs. We\'ll be in touch shortly.', zh:'樣品。報價。建築師規格。我們將盡快與您聯繫。'},

  // ── nalexible-fiberboard.html CONTACT FORM ──
  'fb-fl-inq':    {en:'Inquiry Type', zh:'詢問類別'},
  'fb-ct-submit': {en:'Send Inquiry →', zh:'送出詢問 →'},

  // ── nalexible-fiberboard.html FOOTER ──
  'fb-mit-footer': {en:'Made in Taiwan 🇹🇼', zh:'台灣製造 🇹🇼'},

  // ── index.html SUSTAINABILITY BADGES ──
  'sus-badge1': {en:'FSC® Chain of Custody · Certified', zh:'FSC® 產銷監管鏈 · 認證'},
  'sus-badge2': {en:'EU E1 · SGS Certified · ≤0.1 ppm', zh:'歐盟E1 · SGS認證 · ≤0.1 ppm'},
  'sus-badge3': {en:'No Chemical Additives · Natural Tannins', zh:'無化學添加劑 · 天然單寧酸'},
  'sus-badge4': {en:'Glue-Free · Reversible · Reusable', zh:'免膠 · 可逆安裝 · 可重複使用'},
  'sus-badge5': {en:'100% Recyclable · LEED Compatible · Bio-Resin', zh:'100%可回收 · LEED相容 · 生物樹脂'},
  'sus-badge6': {en:'Made in Taiwan · Factory-Direct · Traceable', zh:'台灣製造 · 原廠直銷 · 可追溯'},

  // ── index.html FOOTER ──
  'idx-mit-footer': {en:'Made in Taiwan 🇹🇼', zh:'台灣製造 🇹🇼'},
  // Global nav — desktop links (product page sub-nav, kept for backwards compat)
  'nl-plye':    {en:'Flooring',            zh:'地板系統'},
  'nl-stone':   {en:'Stone',               zh:'石材系統'},
  'nl-fiber':   {en:'Fiberboard',          zh:'纖維板系統'},
  // Global nav — mobile overlay links (product page sub-nav, kept for backwards compat)
  'nov-plye':   {en:'Flooring',            zh:'地板系統'},
  'nov-stone':  {en:'Stone',               zh:'石材系統'},
  'nov-fiber':  {en:'Fiberboard',          zh:'纖維板系統'},

  // ── plye.html LCC cards ──
  'plye-lcc1-title': {en:'Request a Sample',    zh:'申請樣品'},
  'plye-lcc1-desc':  {en:'Receive physical plyē floor samples at your office or project site — free of charge.', zh:'免費取得 plyē 地板實體樣品，直送您的辦公室或工地現場。'},
  'plye-lcc1-btn':   {en:'Request a Sample →',  zh:'申請樣品 →'},
  'plye-lcc2-title': {en:'Download Catalog',    zh:'下載型錄'},
  'plye-lcc2-desc':  {en:'Full plyē ORIGIN Series catalog with specifications, color range, and technical data.', zh:'plyē ORIGIN 系列完整型錄，含規格、色彩系列及技術資料。'},
  'plye-lcc2-btn':   {en:'View Downloads →',    zh:'前往下載 →'},
  'plye-lcc3-title': {en:'Global Distribution', zh:'全球經銷'},
  'plye-lcc3-desc':  {en:'plyē exports to US, EU, Australia, and New Zealand. Inquire about your region.', zh:'plyē 外銷美國、歐盟、澳洲及紐西蘭。歡迎洽詢您所在地區。'},
  'plye-lcc3-btn':   {en:'Become a Distributor →', zh:'成為經銷商 →'},

  // ── Footer navigation links (shared across all product pages) ──
  'ft-l-origin':  {en:'ORIGIN Series',         zh:'ORIGIN 系列'},
  'ft-l-12col':   {en:'12 Color Range',        zh:'12款色彩'},
  'ft-l-tech':    {en:'Technology',            zh:'技術'},
  'ft-l-dl':      {en:'Downloads',             zh:'下載資料'},
  'ft-l-sample':  {en:'Request a Sample',      zh:'申請樣品'},
  'ft-l-fstone':  {en:'Flexible Stone Veneer', zh:'柔性石材貼面'},
  'ft-l-nfb':     {en:'Natural Fiber Board',   zh:'天然纖維門板'},
  'ft-l-qd':      {en:'Quiet Door Series',     zh:'靜音門系列'},
  'ft-l-home':    {en:'Home',                  zh:'首頁'},
  'ft-l-about':   {en:'About',                 zh:'關於我們'},
  'ft-l-sus':     {en:'Sustainability',        zh:'永續發展'},
  'ft-l-news':    {en:'News',                  zh:'最新消息'},
  'ft-l-contact': {en:'Contact',               zh:'聯絡我們'},
  // Stone footer Exclusive stat
  'stone-f-excl': {en:'Exclusive',             zh:'獨家代理'},

  // ── index.html hero slide badges ──
  's0-sb-brand': {en:'plyē · Engineered Flooring',           zh:'plyē · 超耐磨工程木地板'},
  's0-sb-name':  {en:'ORIGIN Series',                        zh:'ORIGIN 系列'},
  's0-sb-sub':   {en:'9mm Eucalyptus · Made in Taiwan · Exporting to US / EU / ANZ', zh:'9mm 桉木 · 台灣製造 · 外銷美國/歐盟/澳紐'},
  's1-sb-brand': {en:'Nalexible · Stone Collection',         zh:'Nalexible · 天然石材系列'},
  's1-sb-name':  {en:'Flexible Veneer · LumiSlate',          zh:'柔性石材 · LumiSlate 透光板'},
  's1-sb-sub':   {en:'1–3mm Natural Stone · Taiwan Exclusive Distributor', zh:'1–3mm 天然石材 · 台灣獨家總代理'},
  's2-sb-brand': {en:'Nalexible · Natural Fiber Board',      zh:'Nalexible · 天然纖維門板'},
  's2-sb-name':  {en:'Fiberboard &amp; Acoustic Door Series', zh:'纖維門板 &amp; 靜音門系列'},
  's2-sb-sub':   {en:'Hemp Fiber · Bio-Based Resin · Taiwan Exclusive Distributor', zh:'大麻纖維 · 生物樹脂 · 台灣獨家總代理'},
  // ── plye.html hero badge ──
  'plye-sb-brand': {en:'plyē · Engineered Flooring',         zh:'plyē · 超耐磨工程木地板'},
  'plye-sb-name':  {en:'ORIGIN Series',                      zh:'ORIGIN 系列'},
  'plye-sb-sub':   {en:'9mm Eucalyptus · Made in Taiwan · Exporting Globally', zh:'9mm 桉木 · 台灣製造 · 全球外銷'},
  // ── index.html footer Products column links ──
  'idx-fc-l1': {en:'Catalog Overview',    zh:'目錄總覽'},
  'idx-fc-l2': {en:'Flooring',            zh:'地板系統'},
  'idx-fc-l3': {en:'Stone',               zh:'石材系統'},
  'idx-fc-l4': {en:'Fiberboard',          zh:'纖維板系統'},
  'idx-fc-l5': {en:'Application Guide',   zh:'應用指南'},

  // ── nalexible-stone.html CATALOG FINISH LABELS (extra instances) ──
  'stone-fin-5b': {en:'— 5 finishes', zh:'— 5款表面'},
  'stone-fin-5c': {en:'— 5 finishes', zh:'— 5款表面'},

  // ── nalexible-fiberboard.html FOOTER STATS ──
  'fb-footer-zero':  {en:'Zero',        zh:'零'},
  'fb-footer-fm':    {en:'Formaldehyde', zh:'甲醛'},
  'fb-footer-excl':  {en:'Exclusive',   zh:'獨家'},

  // ── plye.html HERO ──
  'plye-ph-eyebrow': {en:'<span style="text-transform:none">plyē</span> Engineered Flooring',   zh:'<span style="text-transform:none">plyē</span> 超耐磨工程木地板'},
  'plye-ph-h1':      {en:'A floor built to <em>last</em> —<br>and specified to stay.', zh:'為<em>持久</em>而建。<br>為規格而選。'},
  'ph-desc':         {en:'plyē is an engineered surface system designed for modern architecture.', zh:'plyē 是專為現代建築設計的工程地板系統。'},
  'ph-feat1':        {en:'9mm eucalyptus core for durability', zh:'9mm 桉木芯材，耐久耐磨'},
  'ph-feat2':        {en:'Patented click-lock installation',   zh:'專利卡扣安裝系統'},
  'ph-feat3':        {en:'Acoustic reduction up to 19dB',      zh:'最高 19dB 隔音效果'},
  'ph-feat4':        {en:'Natural oak finishes (12 shades)',    zh:'天然橡木飾面（12 色）'},
  'ph-app1':         {en:'Residential',  zh:'住宅'},
  'ph-app2':         {en:'Commercial',   zh:'商業'},
  'ph-app3':         {en:'Hospitality',  zh:'酒店'},
  'plye-ph-btn1':    {en:'Explore Flooring',  zh:'探索木地板'},
  'plye-ph-btn2':    {en:'Request a Sample',  zh:'申請樣品'},
  'plye-ph-btn3':    {en:'Contact Sales →',   zh:'聯絡銷售 →'},
  'plye-stat1-lbl':  {en:'Install',                     zh:'安裝方式'},
  'plye-stat2-lbl':  {en:'Click-Lock',                  zh:'卡扣系統'},
  'plye-stat3-lbl':  {en:'Sound Reduction',             zh:'隔音效果'},
  'plye-stat4-lbl':  {en:'Formaldehyde',                zh:'甲醛標準'},
  'plye-stat5-lbl':  {en:'Certified',                   zh:'認證'},

  // ── nalexible-stone.html HERO ──
  'stone-ph-eyebrow': {en:'Nalexible Stone Veneer',    zh:'Nalexible 柔性石材貼面'},
  'stone-ph-eyebrow1': {en:'Nalexible Stone Veneer',    zh:'Nalexible 柔性石材貼面'},
  'stone-ph-h1':       {en:'Real stone.<br><em>Made to bend.</em>', zh:'真實石材。<br><em>為彎曲而生。</em>'},
  'stone-ph-desc':     {en:'Ultra-thin natural stone panels (1–3mm) designed for flexibility. Lightweight, fire-resistant, moisture-resistant — for curved walls, ceilings, and facades.', zh:'超薄天然石材貼面（1–3mm），專為柔性設計。輕量、防火、防潮——適用於弧形牆面、天花板與外立面。'},
  'stone-ph-btn1':     {en:'Explore Stone',             zh:'探索石材'},
  'stone-ph-btn2':     {en:'Download Specs',            zh:'下載規格'},
  'stone-ph-eyebrow2': {en:'Nalexible LumiSlate',       zh:'Nalexible 透光石材板'},
  'stone-ph-h2':       {en:'Real stone.<br><em>Thin enough to glow.</em>', zh:'真實石材。<br><em>薄到可以發光。</em>'},
  'stone-ph-desc2':    {en:'Translucent stone panels (1–3mm) — thin enough for light to pass through. For backlit walls, columns, and accent ceilings.', zh:'透光天然石材板（1–3mm）——薄到光線可以穿透。適用於背光牆面、柱體與裝飾天花板。'},
  'stone-ph-btn3':     {en:'Discover LumiSlate',        zh:'探索 LumiSlate'},
  'stone-ph-btn4':     {en:'Request a Sample',           zh:'申請樣品'},
  'stone-ph-app1':     {en:'Residential',               zh:'住宅'},
  'stone-ph-app2':     {en:'Commercial',                zh:'商業'},
  'stone-ph-app3':     {en:'Hospitality',               zh:'酒店'},
  'stone-ph-app4':     {en:'Outdoor &amp; Façade',       zh:'戶外立面'},
  'stone-ph-app5':     {en:'Residential',               zh:'住宅'},
  'stone-ph-app6':     {en:'Commercial',                zh:'商業'},
  'stone-ph-app7':     {en:'Hospitality',               zh:'酒店'},
  'stone-ph-app8':     {en:'Outdoor &amp; Façade',       zh:'戶外立面'},
  'stone-stat1-lbl':   {en:'Ultra-Thin Stone',          zh:'超薄石材'},
  'stone-stat2-lbl':   {en:'Weight vs Solid Stone',     zh:'石材重量比'},
  'stone-stat3-lbl':   {en:'Curved Surfaces',           zh:'弧面適用'},
  'stone-stat4-lbl':   {en:'Exclusive Distributor',     zh:'獨家總代理'},

  // ── nalexible-fiberboard.html HERO ──
  'fb-ph-eyebrow':  {en:'Nalexible Natural Fiberboard', zh:'Nalexible 天然纖維門板'},
  'fb-ph-h1':       {en:'Hemp fibre boards.<br><em>Built to outlast.</em>', zh:'大麻纖維板材。<br><em>為持久而生。</em>'},
  'fb-ph-btn1':     {en:'Explore Fiberboard',           zh:'探索天然纖維門板'},
  'fb-ph-btn2':     {en:'Request a Sample',             zh:'申請樣品'},
  'fb-stat1-lbl':   {en:'Lighter than Steel',           zh:'更輕於鋼鐵'},
  'fb-stat2-lbl':   {en:'Formaldehyde',                 zh:'甲醛'},
  'fb-stat3-lbl':   {en:'Recyclable',                   zh:'可回收'},

  // ── nalexible-fiberboard.html HERO BADGE CARD ──
  'fb-sb-name':     {en:'Natural Fiber Board',               zh:'天然纖維門板'},
  'fb-sb-sub':      {en:'Hemp Fiber · Bio-Resin · Zero Formaldehyde', zh:'大麻纖維 · 生物樹脂 · 零甲醛'},
  'fb-vid-desc':    {en:'Natural Fiber Board material structure analysis and load-bearing strength demonstration.', zh:'天然纖維門板材質結構解析與承重強度展示。'},

  // ── nalexible-stone.html HERO BADGE CARD ──
  'stone-sb-name':  {en:'Flexible Stone + LumiSlate',        zh:'柔性石材 + 透光石材板'},
  'stone-sb-sub':   {en:'1–3mm Natural Stone · Taiwan Exclusive', zh:'1–3mm 天然石材 · 台灣獨家'},

  // ── COMPANY ADDRESS (all pages) ──
  'idx-addr':   {en:'No. 32, Aly. 18, Ln. 478, Ruiguang Rd.,<br>Neihu Dist., Taipei City 114063, Taiwan', zh:'114063 台北市內湖區瑞光路478巷18弄32號'},
  'plye-addr':  {en:'No. 32, Aly. 18, Ln. 478, Ruiguang Rd.,<br>Neihu Dist., Taipei City 114063, Taiwan', zh:'114063 台北市內湖區瑞光路478巷18弄32號'},
  'stone-addr': {en:'No. 32, Aly. 18, Ln. 478, Ruiguang Rd.,<br>Neihu Dist., Taipei City 114063, Taiwan', zh:'114063 台北市內湖區瑞光路478巷18弄32號'},
  'fb-addr':    {en:'No. 32, Aly. 18, Ln. 478, Ruiguang Rd.,<br>Neihu Dist., Taipei City 114063, Taiwan', zh:'114063 台北市內湖區瑞光路478巷18弄32號'},

  // ── plye.html CERT BAR ──
  'plye-cert1-title': {en:'FSC<sup style="font-size:0.6em;vertical-align:super;font-weight:400">®</sup> Certified', zh:'FSC<sup style="font-size:0.6em;vertical-align:super;font-weight:400">®</sup> 認證'},
  'plye-cert1-sub':   {en:'Responsible Forest Management', zh:'負責任的森林管理'},
  'plye-cert2-title': {en:'Formaldehyde Free', zh:'無甲醛'},
  'plye-cert2-sub':   {en:'CARB Phase 2 · EU E1', zh:'美國CARB二期 · 歐盟E1'},
  'plye-cert3-title': {en:'ISO 9001', zh:'ISO 9001'},
  'plye-cert3-sub':   {en:'Quality Management System', zh:'品質管理系統'},
  'plye-cert4-title': {en:'ISO 14001', zh:'ISO 14001'},
  'plye-cert4-sub':   {en:'Environmental Management', zh:'環境管理系統'},

  // ── plye.html APPLICATIONS ──
  'plye-apps-label': {en:'Applications', zh:'應用場景'},
  'plye-apps-title': {en:'Every <em>space,</em> perfectly floored', zh:'每個<em>空間</em>，完美地板'},
  'plye-app1-name':  {en:'Residential', zh:'住宅空間'},
  'plye-app2-name':  {en:'Open Plan Living', zh:'開放式客廳'},
  'plye-app3-name':  {en:'Family Spaces', zh:'兒童家庭空間'},
  'plye-app4-name':  {en:'Bedroom', zh:'臥室空間'},

  // ── plye.html PROJECTS ──
  'plye-proj-label':  {en:'Projects', zh:'案例作品'},
  'plye-proj-title':  {en:'Where plyē <em>lives</em>', zh:'plyē <em>落地</em>之處'},
  'plye-proj1-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj1-name':  {en:'Modern Open Living', zh:'現代開放式客廳'},
  'plye-proj1-loc':   {en:'Taipei · ORG-8811 Dawn White Oak', zh:'台北 · ORG-8811 Dawn White Oak'},
  'plye-proj2-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj2-name':  {en:'Minimalist Living Room', zh:'極簡風格客廳'},
  'plye-proj2-loc':   {en:'New Taipei · ORG-8812 Misty Sand Oak', zh:'新北市 · ORG-8812 Misty Sand Oak'},
  'plye-proj3-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj3-name':  {en:'Pet-Friendly Family Home', zh:'寵物友善家庭住宅'},
  'plye-proj3-loc':   {en:'Taoyuan · EU E1 Formaldehyde Certified', zh:'桃園 · 歐盟E1甲醛認證'},
  'plye-proj4-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj4-name':  {en:'Master Bedroom Retreat', zh:'主臥室空間'},
  'plye-proj4-loc':   {en:'Taichung · ORG-8823 Soft Sand Oak', zh:'台中 · ORG-8823 Soft Sand Oak'},
  'plye-proj5-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj5-name':  {en:'Scandinavian Open Plan', zh:'北歐開放式格局'},
  'plye-proj5-loc':   {en:'Taipei · ORG-8811 Dawn White Oak', zh:'台北 · ORG-8811 Dawn White Oak'},
  'plye-proj6-cat':   {en:'Residential · plyē', zh:'住宅 · plyē'},
  'plye-proj6-name':  {en:'Warm Contemporary', zh:'溫潤現代風格'},
  'plye-proj6-loc':   {en:'Taipei · ORG-8825 Soft Light Gray Oak', zh:'台北 · ORG-8825 Soft Light Gray Oak'},

  // ── plye.html DOWNLOADS ──
  'plye-dl-label':  {en:'Downloads', zh:'下載資料'},
  'plye-dl-title':  {en:'Everything you need to <em>specify</em>', zh:'規格採購所需的<em>一切資料</em>'},
  'plye-dl1-title': {en:'plyē Product Catalog', zh:'plyē 產品型錄'},
  'plye-dl1-desc':  {en:'Full product range, color options, specifications, and installation overview for the ORIGIN Series.', zh:'ORIGIN系列完整產品範圍、色彩選擇、規格及安裝概覽。'},
  'plye-dl1-meta':  {en:'PDF · 4.2 MB · Updated Mar 2025', zh:'PDF · 4.2 MB · 2025年3月更新'},
  'plye-dl2-title': {en:'CAD / BIM Files', zh:'CAD / BIM 檔案'},
  'plye-dl2-desc':  {en:'AutoCAD and Revit files for plyē flooring system — click-lock detail, cross-section, and room layout.', zh:'plyē地板系統的AutoCAD與Revit檔案——卡扣細節、剖面圖及房間佈局。'},
  'plye-dl2-meta':  {en:'DWG / RFA · On Request', zh:'DWG / RFA · 依需求提供'},
  'plye-dl3-title': {en:'Technical Data Sheet', zh:'技術規格表'},
  'plye-dl3-desc':  {en:'Full technical specifications: thickness, wear layer, sound reduction, formaldehyde rating, fire performance.', zh:'完整技術規格：厚度、耐磨層、隔音、甲醛等級、防火性能。'},
  'plye-dl3-meta':  {en:'PDF · Multiple Files', zh:'PDF · 多份文件'},
  'plye-dl4-title': {en:'Installation Guide', zh:'安裝指南'},
  'plye-dl4-desc':  {en:'Step-by-step plyē click-lock installation — subfloor prep, expansion gaps, layout, and finishing details.', zh:'plyē卡扣安裝步驟——底層準備、伸縮縫、佈局及收邊細節。'},
  'plye-dl4-meta':  {en:'PDF · 2.8 MB · Illustrated', zh:'PDF · 2.8 MB · 含圖解'},
  'plye-dl5-title': {en:'Certification Documents', zh:'認證文件'},
  'plye-dl5-desc':  {en:'SGS test reports for EU E1 formaldehyde, 19dB sound reduction, FSC chain-of-custody, and Patent M677196.', zh:'SGS歐盟E1甲醛、19dB隔音、FSC產銷監管鏈及專利M677196認證報告。'},
  'plye-dl5-meta':  {en:'PDF · Technical Data', zh:'PDF · 技術資料'},
  'plye-dl6-title': {en:'Color Swatches', zh:'色彩樣本'},
  'plye-dl6-desc':  {en:'Request physical color swatches of the full 12-shade ORIGIN Series range — delivered free of charge.', zh:'申請完整12色 ORIGIN 系列實體色卡——免費寄送。'},
  'plye-dl6-meta':  {en:'Physical Samples · Free of Charge', zh:'實體樣本 · 免費'},

  // ── nalexible-stone.html APPLICATIONS ──
  'stone-apps-label':  {en:'Applications', zh:'應用場景'},
  'stone-apps-title':  {en:'Every <em>surface,</em> naturally dressed', zh:'每一面<em>表面</em>，石材天成'},
  'stone-app1-cat':    {en:'Nalexible Stone · Hospitality', zh:'Nalexible 石材 · 旅館飯店'},
  'stone-app1-name':   {en:'Hotel Interior', zh:'飯店室內空間'},
  'stone-app2-cat':    {en:'Nalexible Stone · Commercial', zh:'Nalexible 石材 · 商業空間'},
  'stone-app2-name':   {en:'Stone-Clad Corridor', zh:'石材走廊'},
  'stone-app3-cat':    {en:'Nalexible Stone · Residential', zh:'Nalexible 石材 · 住宅'},
  'stone-app3-name':   {en:'Bathroom Cladding', zh:'浴室石材貼覆'},
  'stone-app4-cat':    {en:'Nalexible Stone · Curved Surface', zh:'Nalexible 石材 · 曲面應用'},
  'stone-app4-name':   {en:'Column Stone Wrap', zh:'柱體石材包覆'},

  // ── nalexible-stone.html PROJECTS ──
  'stone-proj-label':  {en:'Projects', zh:'案例作品'},
  'stone-proj-title':  {en:'Stone that <em>transforms</em> spaces', zh:'石材<em>改變</em>空間'},
  'stone-proj1-cat':   {en:'Hospitality · Nalexible Stone', zh:'旅館飯店 · Nalexible 石材'},
  'stone-proj1-name':  {en:'Boutique Hotel Corridor', zh:'精品飯店走廊'},
  'stone-proj1-loc':   {en:'Stone Veneer Cladding · Feature Wall', zh:'石材貼面 · 特色牆面'},
  'stone-proj2-cat':   {en:'Residential · Premium Stone', zh:'住宅 · 精品石材'},
  'stone-proj2-name':  {en:'Living Room Feature Wall', zh:'客廳特色牆面'},
  'stone-proj2-loc':   {en:'Flexible Stone Veneer · Warm Marble Finish', zh:'柔性石材貼面 · 溫暖大理石紋'},
  'stone-proj3-cat':   {en:'Residential · Nalexible Stone', zh:'住宅 · Nalexible 石材'},
  'stone-proj3-name':  {en:'Interior Stone Cladding', zh:'室內石材貼覆'},
  'stone-proj3-loc':   {en:'Natural Stone Veneer · Curved Surface Ready', zh:'天然石材貼面 · 適用曲面'},

  // ── nalexible-stone.html CATALOG LABEL ──
  'stone-catalog-label': {en:'Stone Catalog — All Finishes', zh:'石材型錄 — 所有表面'},

  // ── catalog.html — Page Header ──
  'cat-bc-home':   {en:'Home',               zh:'首頁'},
  'cat-bc-label':  {en:'Product Catalog',        zh:'產品型錄'},
  'cat-title':     {en:'Product Catalog<br><em>Stone, Fiberboard, and Flooring</em>', zh:'產品型錄<br><em>石材、纖維板與地板</em>'},
  'cat-desc':      {en:'Start here for the cross-system view: stone family map, fiberboard solutions, and flooring. Then open the deep stone page when you need pattern-level comparison.', zh:'先在此掌握跨系統總覽：石材家族地圖、纖維板方案與地板系統；需要花色層級比較時，再進入深度石材頁。'},
  'cat-tag-stone': {en:'Open Stone Family Map — 8 Series', zh:'開啟石材家族地圖 — 8 大系列'},
  'cat-tag-fiber': {en:'Open Fiberboard',       zh:'開啟纖維板頁'},
  'cat-tag-plye':  {en:'Open Flooring', zh:'開啟地板頁'},
  'qb-eyebrow':        {en:'Quick Browse', zh:'快速瀏覽'},
  'qb-title':          {en:'Quick picks — jump straight in', zh:'精選入口 — 直接進入對應系列'},
  'qb-helper':         {en:'Swipe to explore →', zh:'左右滑動瀏覽 →'},
  'qb-proof':          {en:'Representative cross-family picks based on current project discussions (not a sales ranking).', zh:'跨系列代表性入口，依目前專案討論整理（非銷售排行）。'},
  'qb-1-name':         {en:'Indian Autumn', zh:'印度秋'},
  'qb-1-series':       {en:'Ordinary →', zh:'一般系列 →'},
  'qb-2-name':         {en:'Copper New', zh:'銅色新款'},
  'qb-2-series':       {en:'LumiSlate →', zh:'LumiSlate 透光系列 →'},
  'qb-3-name':         {en:'Cement Grey', zh:'水泥灰'},
  'qb-3-series':       {en:'Cement →', zh:'水泥系列 →'},
  'qb-4-name':         {en:'Veined Marble', zh:'紋理大理石'},
  'qb-4-series':       {en:'Marble →', zh:'大理石系列 →'},
  'qb-5-name':         {en:'Warm Sandstone', zh:'暖調砂岩'},
  'qb-5-series':       {en:'Sandstone →', zh:'砂岩系列 →'},
  'qb-6-name':         {en:'Copper Rust', zh:'銅鏽'},
  'qb-6-series':       {en:'Copper / Rust →', zh:'銅鏽系列 →'},
  'cat-route-eyebrow': {en:'Stone Family Map', zh:'石材家族地圖'},
  'cat-route-title':   {en:'Eight series. One decision flow.', zh:'8 大系列，一條決策流程。'},
  'cat-route-desc':    {en:'Choose a stone family first, then open the deep library to compare exact SKU codes and send a focused sample request.', zh:'先選擇石材家族，再進入深度資料庫比對精確 SKU 代碼，最後送出聚焦的樣品需求。'},
  'cat-route-cta-1':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-2':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-3':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-4':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-5':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-6':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-7':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-route-cta-8':   {en:'Browse Patterns →', zh:'查看花色 →'},
  'cat-step-1-label':  {en:'Step 1', zh:'步驟 1'},
  'cat-step-2-label':  {en:'Step 2', zh:'步驟 2'},
  'cat-step-3-label':  {en:'Step 3', zh:'步驟 3'},
  'cat-step-1':        {en:'Choose a family by project mood and material role.', zh:'先依專案氛圍與材料角色選定家族。'},
  'cat-step-2':        {en:'Open the deep stone library and shortlist exact SKU codes.', zh:'進入深度石材庫，篩選並建立精確 SKU 代碼清單。'},
  'cat-step-3':        {en:'Send shortlisted codes to Ashley Kitchen for sample planning and project matching.', zh:'將 shortlist 代碼交給 Ashley Kitchen，進行樣品規劃與專案配對。'},
  'cat-route-main-btn':{en:'Open Stone Pattern Library →', zh:'開啟石材花色資料庫 →'},
  'cat-route-sub-btn': {en:'Send Stone Sample Request', zh:'送出石材樣品需求'},
  'cat-stone-bc-home':   {en:'Home', zh:'首頁'},
  'cat-stone-bc-parent': {en:'Catalog', zh:'型錄'},
  'cat-stone-bc-label':  {en:'Stone Catalog', zh:'石材型錄'},
  'cat-stone-title':     {en:'Ashley Kitchen Stone Systems<br><em>Deep family and pattern library</em>', zh:'Ashley Kitchen 石材系統<br><em>深度家族與花色庫</em>'},
  'cat-stone-desc':      {en:'You are now in the deep stone layer: compare families, shortlist exact SKU codes, then move directly into sample and technical follow-up.', zh:'你現在位於深度石材層：先比較家族、篩選精確 SKU 代碼，再直接進入樣品與技術跟進。'},
  'cat-tag-parent':      {en:'Back to Stone Family Map', zh:'返回石材家族地圖'},
  'cat-tag-lumi':        {en:'Jump to LumiSlate', zh:'跳至 LumiSlate'},
  'cat-tag-exterior':    {en:'Request Stone Samples', zh:'申請石材樣品'},
  'home.hero.kicker': {en:'Premium surfaces · Stone · Flooring · Fiberboard', zh:'高端表面系統 · 石材 · 地板 · 纖維板'},
  'home.hero.assurance': {en:'No commitment required. Share your project direction and we help you shortlist the right material path.', zh:'無需承諾。告訴我們你的專案方向，我們會協助你快速篩選合適的材料路徑。'},
  'home.hero.cta.primary': {en:'Request a Sample', zh:'申請樣品'},
  'home.hero.cta.secondary': {en:'Explore Catalog', zh:'瀏覽型錄'},
  'home.hero.cta.helper': {en:'Need technical evidence first →', zh:'先看技術證據再決定 →'},
  'home.a.hero.title': {en:'Three material families — one considered path from first look to sample.', zh:'三大材料家族，一條講究的路徑：從第一眼走到樣品。'},
  'home.a.hero.sub': {en:'Design-led surfaces for architects and project teams who want a premium material direction without losing days to spec cycles.', zh:'以設計為先的表面材料，為建築師與專案團隊保留品味感，也縮短從方向到規格的時間。'},
  'home.ab.hero.title': {en:'Three material families — one considered path from first look to sample.', zh:'三大材料家族，一條講究的路徑：從第一眼走到樣品。'},
  'home.ab.hero.sub': {en:'Design-led surfaces for architects and project teams who want a premium material direction without losing days to spec cycles.', zh:'以設計為先的表面材料，為建築師與專案團隊保留品味感，也縮短從方向到規格的時間。'},
  'home.ab.hero.step1': {en:'Choose family', zh:'選擇家族'},
  'home.ab.hero.step2': {en:'Compare patterns', zh:'比較花色'},
  'home.ab.hero.step3': {en:'Request a Sample', zh:'申請樣品'},
  'home.ab.proof.1.label': {en:'Catalog Clarity', zh:'型錄結構清晰'},
  'home.ab.proof.1.copy': {en:'Overview first, then deep pattern libraries, so users can shortlist faster without getting lost.', zh:'先看總覽，再進入深度花色庫，讓使用者能更快建立 shortlist。'},
  'home.ab.proof.2.label': {en:'Sample Support', zh:'樣品支持'},
  'home.ab.proof.2.copy': {en:'Move from inspiration to physical sample checks with structured support from Ashley Kitchen.', zh:'從靈感到實體樣品比對，Ashley Kitchen 提供結構化支持。'},
  'home.ab.proof.3.label': {en:'Install Guidance', zh:'安裝指引'},
  'home.ab.proof.3.copy': {en:'DIY and project teams both get practical next-step guidance before final specification.', zh:'不論 DIY 或專案團隊，都能在最終規格前取得實用下一步指引。'},
  'home.ab.proof.4.label': {en:'Bilingual Workflow', zh:'雙語流程'},
  'home.ab.proof.4.copy': {en:'English and Chinese content stay aligned so decisions remain clear across teams and stakeholders.', zh:'中英文內容保持一致，讓跨團隊與利害關係人決策更清楚。'},
  'home-next-label': {en:'Next Steps', zh:'下一步'},
  'home.next.title': {en:'What readers usually need <em>after the first click.</em>', zh:'讀者通常會在第一步後需要的<em>下一層資訊。</em>'},
  'home-next-copy': {en:'Make the funnel practical: compare patterns, verify technical evidence, then send the right support intent in one clear contact path.', zh:'讓轉換流程更實際：先比對花色、再核對技術證據，最後用一個清楚的聯絡路徑送出正確需求。'},
  'home-next-sample-label': {en:'Samples', zh:'樣品'},
  'home-next-sample-title': {en:'Compare the material in hand.', zh:'先把材料拿在手上比較。'},
  'home-next-sample-copy': {en:'Start with a sample request when the decision depends on texture, tone, finish depth, and project lighting.', zh:'當決策與肌理、色調、表面深度與現場光線有關時，先從樣品申請開始。'},
  'home-next-sample-cta': {en:'Request a Sample →', zh:'申請樣品 →'},
  'home-next-stone-label': {en:'Catalog deep dive', zh:'型錄深度比對'},
  'home-next-stone-title': {en:'Compare stone patterns by family.', zh:'依家族比對石材花色。'},
  'home-next-stone-copy': {en:'Use the stone catalog to shortlist exact patterns faster across all eight series before sample submission.', zh:'在送樣前先使用石材型錄，跨 8 大系列更快建立精確花色 shortlist。'},
  'home-next-stone-cta': {en:'Open stone library →', zh:'開啟石材花色庫 →'},
  'home-next-tech-label': {en:'Technical evidence', zh:'技術證據'},
  'home-next-tech-title': {en:'Review reports before final claim wording.', zh:'正式主張前先核對報告。'},
  'home-next-tech-copy': {en:'Check performance documents and scope notes to align specification language with project conditions.', zh:'先看性能文件與適用範圍說明，讓規格文案與專案條件一致。'},
  'home-next-tech-cta': {en:'Open technical evidence →', zh:'查看技術證據 →'},
  'home-next-support-label': {en:'Project support', zh:'專案支援'},
  'home-next-support-title': {en:'Bring the right intent into contact.', zh:'用正確需求進入聯絡流程。'},
  'home-next-support-copy': {en:'Use one form to route sample, technical, installation, compliance, or project support requests without back-and-forth.', zh:'一份表單即可分流樣品、技術、施工、合規與專案支援需求，減少來回溝通。'},
  'home-next-support-cta': {en:'Start a technical request →', zh:'開始技術需求 →'},
  'trust.reply': {en:'Responds as soon as possible', zh:'會盡快回覆'},
  'trust.sample': {en:'Sample support available', zh:'可提供樣品協助'},
  'trust.hours': {en:'Taipei support hours · Mon–Fri 09:00–18:00 (UTC+8)', zh:'台北服務時間 · 週一至週五 09:00–18:00（UTC+8）'},

  // ── catalog.html — Top Tabs ──
  'cattab-stone': {en:'Stone',      zh:'石材'},
  'cattab-fiber': {en:'Fiberboard', zh:'纖維板'},
  'cattab-plye':  {en:'Flooring',       zh:'地板'},

  // ── catalog.html — Stone Product Banner ──
  'stone-pb-label': {en:'Product Line 01 — Stone Systems', zh:'產品系列 01 — 石材系統'},
  'stone-pb-title': {en:'Stone Systems<br><em>by family &amp; use case</em>', zh:'石材系統<br><em>依家族與應用導向</em>'},
  'stone-pb-desc':  {en:'Ashley Kitchen now reads the stone range through eight clearer families: ordinary ultra-thin stone, LumiSlate translucent stone, cement, marble, sandstone, metal, rust-led finishes, and DIY adhesive formats.', zh:'Ashley Kitchen 以 8 大家族清楚重整石材範圍：一般超薄石材、LumiSlate 透光石材、水泥系、大理石系、砂岩系、金屬系、銅鏽系與 DIY 自黏系列。'},
  'stone-pb-b1':    {en:'8 Families',       zh:'8 大家族'},
  'stone-pb-b2':    {en:'101 Patterns',     zh:'101 組花色'},
  'stone-pb-b3':    {en:'100% Natural Stone',  zh:'100% 天然石材'},
  'stone-pb-b4':    {en:'LumiSlate Taiwan Exclusive',    zh:'LumiSlate 台灣獨家代理'},

  // ── catalog.html — Stone Sub-Nav ──
  'stab-flexible':  {en:'Flexible Stone', zh:'柔性石材'},
  'stab-lumislate': {en:'LumiSlate',      zh:'LumiSlate'},
  'stab-easystone': {en:'EasyStone',      zh:'EasyStone'},
  'stab-uv':        {en:'UV Series',      zh:'UV 系列'},
  'stab-3d':        {en:'3D Wall Panel',  zh:'3D 牆板'},

  // ── catalog-stone.html — LumiSlate v5 Pattern Study Module ──
  // Static labels bound by ID (setLang picks these up on language switch)
  'lumi-pattern-label': {en:'LumiSlate · Backlit flexible stone', zh:'LumiSlate · 背光透光石材'},
  'lumi-pattern-title': {en:'22 patterns. 4 lighting conditions. One view.', zh:'22 種花色 · 4 種光源 · 同時比較'},
  'lumi-pattern-cta':   {en:'Click any of the 22 patterns below to preview it in all four lighting conditions.', zh:'點擊下方 22 種花色，即可同時預覽四種光源情境下的效果。'},
  'lumi-selected-label':{en:'Showing', zh:'目前花色'},
  'lumi-selected-hint': {en:'in four lighting conditions ↓', zh:'四種光源情境 ↓'},
  'lumi-state-off':     {en:'Off',     zh:'關燈'},
  'lumi-state-cool':    {en:'Cool',    zh:'冷光'},
  'lumi-state-natural': {en:'Natural', zh:'自然光'},
  'lumi-state-warm':    {en:'Warm',    zh:'暖光'},
  'lumi-temp-off':      {en:'Unlit',   zh:'未亮燈'},
  'lumi-temp-cool':     {en:'6500 K',  zh:'6500 K'},
  'lumi-temp-natural':  {en:'4000 K',  zh:'4000 K'},
  'lumi-temp-warm':     {en:'2700 K',  zh:'2700 K'},
  // Dot-path keys read by the inline t() helper in catalog-stone.html
  // (also mirrors data-i18n attributes in the LumiSlate v5 markup)
  'catalogStone.lumi.eyebrow':        {en:'LumiSlate · Backlit flexible stone', zh:'LumiSlate · 背光透光石材'},
  'catalogStone.lumi.heading':        {en:'22 patterns. 4 lighting conditions. One view.', zh:'22 種花色 · 4 種光源 · 同時比較'},
  'catalogStone.lumi.cta':            {en:'Click any of the 22 patterns below to preview it in all four lighting conditions.', zh:'點擊下方 22 種花色，即可同時預覽四種光源情境下的效果。'},
  'catalogStone.lumi.selected.label': {en:'Showing', zh:'目前花色'},
  'catalogStone.lumi.selected.hint':  {en:'in four lighting conditions \u2193', zh:'四種光源情境 \u2193'},
  'catalogStone.lumi.tile.view':      {en:'View \u25B8', zh:'觀看 \u25B8'},
  'catalogStone.lumi.states.off':     {en:'Off',     zh:'關燈'},
  'catalogStone.lumi.states.cool':    {en:'Cool',    zh:'冷光'},
  'catalogStone.lumi.states.natural': {en:'Natural', zh:'自然光'},
  'catalogStone.lumi.states.warm':    {en:'Warm',    zh:'暖光'},
  'catalogStone.lumi.temp.unlit':     {en:'Unlit',   zh:'未亮燈'},
  'catalogStone.lumi.temp.6500k':     {en:'6500 K',  zh:'6500 K'},
  'catalogStone.lumi.temp.4000k':     {en:'4000 K',  zh:'4000 K'},
  'catalogStone.lumi.temp.2700k':     {en:'2700 K',  zh:'2700 K'},
  'catalogStone.seriesGrid.title':    {en:'Pattern Library', zh:'花色庫'},
  'catalogStone.seriesGrid.note':     {en:'Review SKU pattern cards here, then use the application references below to confirm project fit.', zh:'先在此檢視 SKU 花色卡，再以下方應用案例確認是否符合專案需求。'},
  'catalogStone.seriesGrid.pending':  {en:'Swatch Pending', zh:'花色圖待補'},
  'catalogStone.seriesGrid.showAll':  {en:'Show all patterns →', zh:'展開全部花色 →'},
  'catalogStone.seriesGrid.collapse': {en:'Collapse', zh:'收合'},
  'catalogStone.diy.badge1':          {en:'12 SKU-coded patterns', zh:'12 組 SKU 編碼花色'},
  'catalogStone.diy.specValue':       {en:'Temporary SKU coding', zh:'暫用 SKU 編碼'},
  'catalogStone.diy.specCopy':        {en:'DIY is currently shown as catalog codes (DIY-01 to DIY-12) so it can live in the same shortlist workflow as other series while source naming is normalized.', zh:'DIY 目前以目錄代碼（DIY-01 到 DIY-12）呈現，讓它在來源命名尚未統一前，也能先納入與其他系列一致的 shortlist 流程。'},
  'cat-stone-footer-note':            {en:'Finalize family and SKU choices here, then let Ashley Kitchen support sample review plus technical alignment for your project.', zh:'先在此完成家族與 SKU 選擇，再由 Ashley Kitchen 協助樣品審核與技術對齊。'},
  'cat-stone-next-label':             {en:'Next Step', zh:'下一步'},
  'cat-stone-next-title':             {en:'Move from family direction into sample review.', zh:'從家族方向，前進到樣品比對。'},
  'cat-stone-next-desc':              {en:'Use this page as the deep stone library. Once the family is clear, Ashley Kitchen can help compare patterns, review size options, narrow LumiSlate lighting behaviour, and prepare the next sample conversation without overwhelming the first decision.', zh:'把這一頁作為石材深層資料庫使用。當家族方向確立後，Ashley Kitchen 可協助比對花色、檢視尺寸選項、收斂 LumiSlate 光源行為，並準備下一步樣品溝通，避免在第一步就資訊過載。'},
  'cat-stone-next-card-1-label':      {en:'Pattern and finish guidance', zh:'花色與表面建議'},
  'cat-stone-next-card-1-copy':       {en:'Move from family-level understanding into exact pattern review, lighting study, and shortlist comparison.', zh:'從家族層級理解，進入精確花色比對、光源研究與 shortlist 評估。'},
  'cat-stone-next-card-2-label':      {en:'Technical follow-up', zh:'技術追蹤'},
  'cat-stone-next-card-2-copy':       {en:'Bring in size options, build-up references, and selected proof only after the material direction is already clear.', zh:'在材料方向已清楚後，再導入尺寸選項、構造參考與對應證明資料。'},
  'cat-stone-next-card-3-label':      {en:'Project support', zh:'專案支援'},
  'cat-stone-next-card-3-copy':       {en:'Ashley Kitchen can help compare series fit, review project context, and prepare sample requests without flooding the first conversation with too much data.', zh:'Ashley Kitchen 可協助比較系列適配、檢視專案情境，並準備樣品需求，避免首輪溝通被過多資料淹沒。'},
  'cat-stone-next-card-5-label':      {en:'Back to broader catalog', zh:'回到總覽型錄'},
  'cat-stone-next-card-5-link':       {en:'Return to the main catalog landing page', zh:'返回主型錄首頁'},
  'cat-stone-next-card-5-tail':       {en:' when you need to compare stone against fiberboard and flooring again.', zh:'，當你需要再次把石材與纖維板、地板做橫向比較時。'},
  'ctc-hero-sub':                     {en:'Request samples, technical specs, or project support in one place. Share your scope and timeline, and we will respond as soon as possible.', zh:'在同一頁完成樣品、技術規格與專案支援需求。提供你的專案範圍與時程，我們會盡快回覆。'},
  'cat-request-btn':                  {en:'Request a Sample', zh:'申請樣品'},
  'stone-select-step1-label':         {en:'Step 1', zh:'步驟 1'},
  'stone-select-step2-label':         {en:'Step 2', zh:'步驟 2'},
  'stone-select-step3-label':         {en:'Step 3', zh:'步驟 3'},
  'stone-select-step1':               {en:'Pick a family first based on project mood and application role.', zh:'先依專案氛圍與應用角色選定家族。'},
  'stone-select-step2':               {en:'Use each series pattern grid to shortlist exact pattern codes.', zh:'使用各系列花色庫先篩選出精確代碼。'},
  'stone-select-step3':               {en:'Send selected codes to Ashley Kitchen for sample and technical follow-up.', zh:'將選定代碼交給 Ashley Kitchen 進行樣品與技術跟進。'},
  'stone-guardrail-label':            {en:'Specification guardrail', zh:'規格判斷提醒'},
  'stone-guardrail-copy':             {en:'Report applicability depends on test method, substrate, and project conditions. Before final claim wording, review technical evidence and confirm market scope.', zh:'報告適用性取決於測試方法、基材與專案條件。正式使用性能主張前，請先核對技術證據與市場適用範圍。'},
  'stone-guardrail-link-1':           {en:'Open technical evidence', zh:'查看技術證據'},
  'stone-guardrail-link-2':           {en:'Request report mapping', zh:'索取報告對照'},

  'ctc-support-label':                {en:'Support Needed', zh:'需要支援項目'},
  'ctc-support-opt-default':          {en:'Select support type…', zh:'請選擇支援類型…'},
  'ctc-support-opt-sample':           {en:'Sample request', zh:'樣品申請'},
  'ctc-support-opt-tech':             {en:'Technical report request', zh:'技術報告申請'},
  'ctc-support-opt-install':          {en:'Installation review', zh:'施工審閱支援'},
  'ctc-support-opt-compliance':       {en:'Compliance package', zh:'合規文件包'},
  'ctc-support-opt-project':          {en:'Project support', zh:'專案支援'},
  'ctc-support-opt-general':          {en:'General enquiry', zh:'一般詢問'},
  'ctc-required-note':                {en:'Fields marked in this form are required unless noted as optional.', zh:'此表單欄位除特別標示 optional 外，皆為必填。'},
  'ctc-support-help':                 {en:'Choose one primary support type so we can route your request faster.', zh:'請先選擇一個主要支援類型，讓我們更快分流處理。'},
  'ctc-message-help':                 {en:'Include timeline, preferred product family, and sample destination for faster response.', zh:'建議填入時程、偏好產品家族與樣品寄送地點，以加速回覆。'},

  // ── catalog.html — Fiberboard Product Banner ──
  'fiber-pb-label': {en:'Product Line 02 — Fiberboard', zh:'產品系列 02 — 纖維板'},
  'fiber-pb-title': {en:'Natural Fiber Board<br><em>&amp; Quiet Door Series</em>', zh:'天然纖維板<br><em>與靜音門系列</em>'},
  'fiber-pb-desc':  {en:'Hemp fibers + bio-based resins. Steel-grade strength at 60% less weight — zero formaldehyde, mold-proof, and fully recyclable. Engineered for doors, partitions, furniture, and structural panels.', zh:'大麻纖維 + 生物基樹脂。鋼材級強度、減重 60%——零甲醛、防霉，且 100% 可回收。專為門板、隔間、家具及結構板材設計。'},
  'fiber-pb-b1':    {en:'Zero Formaldehyde',    zh:'零甲醛'},
  'fiber-pb-b2':    {en:'60% Lighter than Steel', zh:'比鋼材輕 60%'},
  'fiber-pb-b3':    {en:'Acoustic Performance',  zh:'隔音表現'},
  'fiber-pb-b4':    {en:'100% Recyclable',       zh:'100% 可回收'},
  'fb-flow-s1-label': {en:'Step 1', zh:'步驟 1'},
  'fb-flow-s1-title': {en:'Use Case', zh:'使用情境'},
  'fb-flow-s1': {en:'Start with use case: quiet door, room divider, wall/partition panel, or furniture/joinery.', zh:'先看使用情境：靜音門、空間分隔、牆面/隔間板，或家具/木作。'},
  'fb-flow-s1-link': {en:'Open use-case map →', zh:'開啟使用情境地圖 →'},
  'fb-flow-s2-label': {en:'Step 2', zh:'步驟 2'},
  'fb-flow-s2-title': {en:'Build-up', zh:'建構邏輯'},
  'fb-flow-s2': {en:'Pick the build-up logic: panel core type (2+1 / 2+2 / 3+2) and thickness range (17.5 / 25 / 35mm).', zh:'再選建構邏輯：板材芯層類型（2+1 / 2+2 / 3+2）與厚度範圍（17.5 / 25 / 35mm）。'},
  'fb-flow-s2-link': {en:'See panel builds →', zh:'查看板材構成 →'},
  'fb-flow-s3-label': {en:'Step 3', zh:'步驟 3'},
  'fb-flow-s3-title': {en:'Specs', zh:'規格確認'},
  'fb-flow-s3': {en:'Confirm technical data and send one focused request with project context.', zh:'確認技術規格後，帶著專案背景一次送出聚焦需求。'},
  'fb-flow-s3-link': {en:'Open specifications →', zh:'開啟規格表 →'},
  'fb-dm-uc-label': {en:'Decision Block 1', zh:'決策區塊 1'},
  'fb-dm-uc-title': {en:'Use Cases (All)', zh:'使用場景（完整）'},
  'fb-dm-uc-copy': {en:'Show every primary application first so users can route by project objective, not by material jargon.', zh:'先完整呈現主要應用，讓使用者依專案目標而不是材料術語來分流。'},
  'fb-dm-uc-1': {en:'Quiet Door Systems', zh:'靜音門系統'},
  'fb-dm-uc-1-tag': {en:'Acoustic', zh:'隔音'},
  'fb-dm-uc-2': {en:'Room Divider / Sliding Panels', zh:'空間分隔 / 滑動門片'},
  'fb-dm-uc-2-tag': {en:'Divider', zh:'分隔'},
  'fb-dm-uc-3': {en:'Wall &amp; Partition Panels', zh:'牆面與隔間板'},
  'fb-dm-uc-3-tag': {en:'Panel', zh:'板材'},
  'fb-dm-uc-4': {en:'Furniture / Joinery Substrate', zh:'家具 / 木作基材'},
  'fb-dm-uc-4-tag': {en:'Interior', zh:'室內'},
  'fb-uc-vis-1': {en:'Quiet Door', zh:'靜音門'},
  'fb-uc-vis-2': {en:'Room Divider', zh:'空間分隔'},
  'fb-uc-vis-3': {en:'Wall / Panel', zh:'牆面 / 板材'},
  'fb-uc-vis-4': {en:'Furniture / Joinery', zh:'家具 / 木作'},
  'fb-dm-core-label': {en:'Decision Block 2', zh:'決策區塊 2'},
  'fb-dm-core-title': {en:'Core Combinations (All)', zh:'芯層組合（完整）'},
  'fb-dm-core-copy': {en:'Expose all core structures directly from narrow to thick: 2+1, 2+2, and 3+2 (17.5mm / 25mm / 35mm).', zh:'依厚度由薄到厚呈現芯層結構：2+1、2+2、3+2（17.5mm / 25mm / 35mm）。'},
  'fb-dm-core-1': {en:'2+1 Core', zh:'2+1 芯層'},
  'fb-dm-core-1-tag': {en:'17.5mm', zh:'17.5mm'},
  'fb-dm-core-2': {en:'2+2 Core', zh:'2+2 芯層'},
  'fb-dm-core-2-tag': {en:'25mm', zh:'25mm'},
  'fb-dm-core-3': {en:'3+2 Core', zh:'3+2 芯層'},
  'fb-dm-core-3-tag': {en:'35mm', zh:'35mm'},
  'fb-dm-face-label': {en:'Decision Block 3', zh:'決策區塊 3'},
  'fb-core-vis-1-title': {en:'2+1 Core', zh:'2+1 芯層'},
  'fb-core-vis-1-sub': {en:'Nominal 17.5mm', zh:'名義厚度 17.5mm'},
  'fb-core-vis-2-title': {en:'2+2 Core', zh:'2+2 芯層'},
  'fb-core-vis-2-sub': {en:'Nominal 25mm', zh:'名義厚度 25mm'},
  'fb-core-vis-3-title': {en:'3+2 Core', zh:'3+2 芯層'},
  'fb-core-vis-3-sub': {en:'Nominal 35mm', zh:'名義厚度 35mm'},
  'fb-dm-face-title': {en:'Face Boards + Spec Path', zh:'面板選擇 + 規格路徑'},
  'fb-dm-face-copy': {en:'Let users choose preferred outer boards (MDF / OSB) first, then confirm structure and thickness scope before RFQ.', zh:'先讓使用者選擇外層板（MDF / OSB），再確認結構與厚度範圍後進入詢價。'},
  'fb-dm-face-1': {en:'MDF 3mm / 5mm / 9mm', zh:'MDF 3mm / 5mm / 9mm'},
  'fb-dm-face-1-tag': {en:'Face Board', zh:'外層板'},
  'fb-dm-face-2': {en:'OSB 3mm / 8mm', zh:'OSB 3mm / 8mm'},
  'fb-dm-face-2-tag': {en:'Face Board', zh:'外層板'},
  'fb-dm-face-3': {en:'Technical request with project context', zh:'附專案背景送出技術需求'},
  'fb-dm-face-3-tag': {en:'Support', zh:'技術支援'},

  // ── catalog.html — Fiberboard Sub-Nav ──
  'fbtab-natural': {en:'Natural Fiber Board', zh:'天然纖維板'},
  'fbtab-quiet':   {en:'Quiet Door Series',   zh:'靜音門系列'},
  'fbtab-specs':   {en:'Specifications',      zh:'規格表'},

  // ── catalog.html — Natural Fiber Board Section ──
  'fb-nat-label':    {en:'Category 01',               zh:'類別 01'},
  'fb-nat-title':    {en:'Natural Fiber Board Panels', zh:'天然纖維板板材'},
  'fb-nat-desc':     {en:'The structural core product — continuous topology hemp fibre panels available in 3 core configurations. Each board is self-supporting without external framing.', zh:'核心結構產品——連續拓撲大麻纖維板，提供 3 種芯層配置，每塊板材無需外部框架即可自撐。'},
  'fb-nat-b1':       {en:'2+1 / 2+2 / 3+2 Core', zh:'2+1 / 2+2 / 3+2 芯層'},
  'fb-nat-b2':       {en:'Up to 3000×1200mm',     zh:'最大 3000×1200mm'},
  'fb-nat-b3':       {en:'Custom Thickness',       zh:'客製厚度'},
  'fb-nat-c1-type':  {en:'Core Product',            zh:'核心產品'},
  'fb-nat-c1-name':  {en:'Natural Fiber Board',      zh:'天然纖維板'},
  'fb-nat-c1-desc':  {en:'Hemp fibers + bio-resin. Steel-grade rigidity, 60%+ lighter. Zero formaldehyde. Available in flat panel and curved-surface configurations.', zh:'大麻纖維 + 生物基樹脂。鋼材級剛性，輕 60% 以上。零甲醛。提供平面板及曲面板配置。'},
  'fb-nat-c2-type':  {en:'Panel Variant',            zh:'板材型號'},
  'fb-nat-c2-name':  {en:'Topology Core — Cross Section', zh:'拓撲芯層——橫截面'},
  'fb-nat-c2-desc':  {en:'Wave-form honeycomb topology distributes load in 3D — no steel reinforcement required. The board itself is the structure.', zh:'波浪形蜂巢拓撲三維分散荷載——無需鋼材強化，板材本身即為結構。'},
  'fb-variant-label': {en:'Panel Configurations', zh:'板材配置'},
  'fb-var-1':  {en:'Standard Panel',   zh:'標準板'},
  'fb-var-2':  {en:'Acoustic Panel',   zh:'隔音板'},
  'fb-var-3':  {en:'Structural Panel', zh:'結構板'},
  'fb-var-4':  {en:'Thin Partition',   zh:'輕薄隔間板'},
  'fb-var-5':  {en:'Curved Surface',   zh:'曲面板'},

  // ── catalog.html — Quiet Door Section ──
  'fb-door-label':   {en:'Category 02',        zh:'類別 02'},
  'fb-door-title':   {en:'Quiet Door Series',   zh:'靜音門系列'},
  'fb-door-desc':    {en:'Interior doors built on natural fiberboard substrate — available in Acoustic, Magnetic, and standard variants. The continuous hemp fibre topology absorbs sound across all frequency ranges.', zh:'以天然纖維板為基材的室內門板，提供隔音、磁力及標準款式。連續大麻纖維拓撲結構可吸收全頻段聲波。'},
  'fb-door-b1':      {en:'Full-Frequency Absorption', zh:'全頻段吸音'},
  'fb-door-b2':      {en:'Acoustic / Magnetic Variants', zh:'隔音 / 磁力款式'},
  'fb-door-b3':      {en:'Zero-Frame Option',         zh:'免框架選項'},
  'fb-door-c1-type': {en:'Interior Doors',            zh:'室內門板'},
  'fb-door-c1-name': {en:'Molded Panel &amp; Quiet Doors', zh:'模壓板門與靜音門'},
  'fb-door-c1-desc': {en:'Thermoformed surface panels over a natural fiberboard core. Acoustic, magnetic and standard door variants available.', zh:'天然纖維板芯材搭配熱壓成型表面板，提供隔音、磁力及標準門款。'},
  'fb-door-c2-type': {en:'Residential Application',  zh:'住宅應用'},
  'fb-door-c2-name': {en:'Sliding &amp; Pivot Doors', zh:'推拉門與轉軸門'},
  'fb-door-c2-desc': {en:'Slim sliding panels and pivot doors — natural texture finishes with the structural confidence of hemp fibre engineering.', zh:'輕薄推拉門板與轉軸門——天然質感表面，搭配大麻纖維工程的結構可靠性。'},

  // ── catalog.html — Fiberboard Specs ──
  'fb-spec-label': {en:'Technical Data',  zh:'技術資料'},
  'fb-spec-title': {en:'Specifications',  zh:'規格表'},
  'fb-spec-desc':  {en:'Key performance data for natural fiberboard versus traditional materials.', zh:'天然纖維板與傳統材料的主要性能數據比較。'},
  'fb-sp-col1':    {en:'Property',                   zh:'性能'},
  'fb-sp-col2':    {en:'Fiberboard System',      zh:'纖維板系統'},
  'fb-sp-col3':    {en:'Standard MDF',               zh:'一般 MDF'},
  'fb-sp-col4':    {en:'Plywood',                    zh:'夾板'},
  'fb-sp-r1a':     {en:'Formaldehyde',               zh:'甲醛'},
  'fb-sp-r1b':     {en:'Zero',                       zh:'零甲醛'},
  'fb-sp-r1c':     {en:'E1 / E2 rated',              zh:'E1 / E2 等級'},
  'fb-sp-r1d':     {en:'E1 rated',                   zh:'E1 等級'},
  'fb-sp-r2a':     {en:'Weight',                     zh:'重量'},
  'fb-sp-r2b':     {en:'60%+ lighter than steel equiv.', zh:'比同強度鋼材輕 60%+'},
  'fb-sp-r2c':     {en:'Heavy (720–850 kg/m³)',      zh:'重（720–850 kg/m³）'},
  'fb-sp-r2d':     {en:'Medium (450–650 kg/m³)',     zh:'中（450–650 kg/m³）'},
  'fb-sp-r3a':     {en:'Acoustic',                   zh:'隔音'},
  'fb-sp-r3b':     {en:'Full-frequency absorption',  zh:'全頻段吸音'},
  'fb-sp-r3c':     {en:'Minimal',                    zh:'極低'},
  'fb-sp-r3d':     {en:'Minimal',                    zh:'極低'},
  'fb-sp-r4a':     {en:'Recyclability',              zh:'可回收性'},
  'fb-sp-r4b':     {en:'100%',                       zh:'100%'},
  'fb-sp-r4c':     {en:'Difficult (adhesives)',      zh:'困難（含膠劑）'},
  'fb-sp-r4d':     {en:'Partial',                    zh:'部分'},
  'fb-sp-r5a':     {en:'Max Sheet Size',             zh:'最大板材尺寸'},
  'fb-sp-r5b':     {en:'3000 × 1200mm',             zh:'3000 × 1200mm'},
  'fb-sp-r5c':     {en:'2440 × 1220mm',             zh:'2440 × 1220mm'},
  'fb-sp-r5d':     {en:'2440 × 1220mm',             zh:'2440 × 1220mm'},
  'fb-sp-r6a':     {en:'Mold Resistance',            zh:'防霉性'},
  'fb-sp-r6b':     {en:'Naturally mold-proof',       zh:'天然防霉'},
  'fb-sp-r6c':     {en:'Treated (chemical)',         zh:'化學處理'},
  'fb-sp-r6d':     {en:'Treated (chemical)',         zh:'化學處理'},
  'fb-sp-r7a':     {en:'Core Structure &amp; Nominal Thickness', zh:'芯層結構與名義厚度'},
  'fb-sp-r7b':     {en:'3+2 = 35mm · 2+2 = 25mm · 2+1 = 17.5mm', zh:'3+2 = 35mm · 2+2 = 25mm · 2+1 = 17.5mm'},
  'fb-sp-r7c':     {en:'Not applicable',             zh:'不適用'},
  'fb-sp-r7d':     {en:'Not applicable',             zh:'不適用'},
  'fb-sp-r8a':     {en:'Outside Board Options',      zh:'外層板選項'},
  'fb-sp-r8b':     {en:'MDF 3/5/9mm · OSB 3/8mm',    zh:'MDF 3/5/9mm · OSB 3/8mm'},
  'fb-sp-r8c':     {en:'Project-dependent',          zh:'依專案配置'},
  'fb-sp-r8d':     {en:'Project-dependent',          zh:'依專案配置'},
  'fb-spec-note':  {en:'Data sourced from manufacturer specifications. Contact Ashley Kitchen for certified test reports.', zh:'數據來源：製造商規格書。如需認證測試報告，請聯絡 Ashley Kitchen。'},

  // ── catalog.html — Flooring Product Banner ──
  'plye-pb-label': {en:'Product Line 03 — Flooring', zh:'產品系列 03 — 地板'},
  'plye-pb-title': {en:'<em>Flooring</em> Signature Series<br>Engineered Flooring', zh:'<em>地板</em> 精選系列<br>工程地板'},
  'plye-pb-desc':  {en:'9mm eucalyptus engineered flooring with patent four-direction click-lock system (M677196). 12 oak shades, EU E1 certified, 19dB sound reduction. Factory-direct distribution from Taiwan.', zh:'9mm 桉木工程木地板，採專利四向卡扣系統（M677196）。12 款橡木色調，EU E1 認證，19dB 降噪。台灣工廠直供。'},
  'plye-pb-b1':    {en:'12 Colour Shades',    zh:'12 款色調'},
  'plye-pb-b2':    {en:'EU E1 Certified',     zh:'EU E1 認證'},
  'plye-pb-b3':    {en:'19dB Sound Reduction', zh:'19dB 降噪'},
  'plye-pb-b4':    {en:'Patent Click-Lock',   zh:'專利卡扣系統'},

  // ── catalog.html — Flooring Sub-Nav ──
  'plyetab-origin': {en:'Signature Series — All 12 Shades', zh:'精選系列 — 全 12 款色調'},

  // ── catalog.html — Flooring Swatches ──
  'plye-origin-label': {en:'Signature Series',      zh:'精選系列'},
  'plye-origin-title': {en:'All 12 Oak Shades',  zh:'全 12 款橡木色調'},
  'plye-origin-desc':  {en:'From warm honey and sunrise gold to deep black and quiet gray — 12 shades spanning the full natural oak spectrum, in two plank widths (standard and 23cm wide-plank).', zh:'從暖蜂蜜到日出金，從深黑到靜谧灰——12 款色調涵蓋天然橡木全色譜，提供標準與 23cm 寬板兩種規格。'},
  'plye-origin-b1':    {en:'9mm Total Thickness',   zh:'總厚度 9mm'},
  'plye-origin-b2':    {en:'4-Direction Click-Lock', zh:'四向卡扣系統'},
  'plye-origin-b3':    {en:'Eucalyptus Core',        zh:'桉木芯材'},
  'plye-origin-b4':    {en:'E1 · CARB2',             zh:'E1 · CARB2'},
  'plye-s1':    {en:'Dawn White Oak',    zh:'晨白橡木'},
  'plye-s2':    {en:'Misty Sand Oak',    zh:'薄霧沙橡木'},
  'plye-s3':    {en:'Sunrise Gold Oak',  zh:'日出金橡木'},
  'plye-s4':    {en:'Misty Oak',         zh:'薄霧橡木'},
  'plye-s5':    {en:'Warm Apricot Oak',  zh:'暖杏橡木'},
  'plye-s6':    {en:'Soft Sand Oak',     zh:'柔沙橡木'},
  'plye-s7':    {en:'Soft Light Gray Oak', zh:'柔亮灰橡木'},
  'plye-s8':    {en:'Warm Brown Oak',    zh:'暖棕橡木'},
  'plye-s9':    {en:'Misty Taupe Oak',   zh:'薄霧灰棕橡木'},
  'plye-s10':   {en:'Quiet Gray Oak',    zh:'靜谧灰橡木'},
  'plye-s11':   {en:'Classic Natural Oak', zh:'經典天然橡木'},
  'plye-s12':   {en:'Deep Black Oak',    zh:'深黑橡木'},
  'plye-note':  {en:'Swatch images represent actual plank colours. Screen rendering may vary. Contact Ashley Kitchen for physical sample boards.', zh:'色板圖像代表實際地板色調。螢幕顯示可能有所差異。如需實體樣板，請聯絡 Ashley Kitchen。'},

  // ── catalog.html — Footer ──
  'cat-footer-note':   {en:'Use this page to compare Stone, Fiberboard, and Flooring first, then continue into the relevant product library for specs and sample requests.', zh:'先在此頁比較石材、纖維板與地板，再前往對應產品庫查看規格與申請樣品。'},
  'cat-open-stone-btn':{en:'Open Stone Library →', zh:'開啟石材庫 →'},
  'cat-back-btn':      {en:'Back to Catalog Landing →', zh:'返回型錄首頁 →'},
  'cat-home-nav':    {en:'Home',            zh:'首頁'},
  'cat-app-nav':     {en:'Applications',   zh:'應用場景'},
  'cat-cta-nav':     {en:'Contact', zh:'聯絡我們'},

  // ── nalexible-stone.html DOWNLOADS ──
  'stone-dl-label':  {en:'Downloads', zh:'下載資料'},
  'stone-dl-title':  {en:'Specify with <em>confidence</em>', zh:'精確<em>規格採購</em>'},
  'stone-dl1-title': {en:'Nalexible Stone Catalog', zh:'Nalexible 石材型錄'},
  'stone-dl1-desc':  {en:'Full Flexible Stone Veneer and LumiSlate product range with specifications, finishes, and applications.', zh:'完整柔性石材貼面與LumiSlate產品系列，含規格、表面及應用資訊。'},
  'stone-dl1-meta':  {en:'PDF · Available on Request', zh:'PDF · 依需求提供'},
  'stone-dl2-title': {en:'Technical Data Sheet', zh:'技術規格表'},
  'stone-dl2-desc':  {en:'Full specifications: thickness, weight, flexibility radius, fire rating, moisture resistance, and installation method.', zh:'完整規格：厚度、重量、彎曲半徑、防火等級、防潮性及安裝方式。'},
  'stone-dl2-meta':  {en:'PDF · Multiple Files', zh:'PDF · 多份文件'},
  'stone-dl3-title': {en:'LumiSlate Specification', zh:'LumiSlate 規格書'},
  'stone-dl3-desc':  {en:'LumiSlate translucent stone panel specs — backlight requirements, panel sizes, and design guidelines.', zh:'LumiSlate 透光石材板規格——背光需求、面板尺寸及設計指南。'},
  'stone-dl3-meta':  {en:'PDF · On Request', zh:'PDF · 依需求提供'},
  'stone-dl4-title': {en:'Installation Guide', zh:'安裝指南'},
  'stone-dl4-desc':  {en:'Step-by-step installation instructions for flexible stone veneer — flat, curved, and vertical surfaces.', zh:'柔性石材貼面逐步安裝說明——平面、曲面及垂直表面。'},
  'stone-dl4-meta':  {en:'PDF · Illustrated', zh:'PDF · 含圖解'},
  'stone-dl5-title': {en:'Fire &amp; Safety Certifications', zh:'防火安全認證'},
  'stone-dl5-desc':  {en:'Flame retardant test reports and fire rating documentation for architectural specifications.', zh:'阻燃測試報告及防火等級文件，適用於建築規格採購。'},
  'stone-dl5-meta':  {en:'PDF · Technical Data', zh:'PDF · 技術資料'},
  'stone-dl6-title': {en:'Stone Finish Samples', zh:'石材表面樣本'},
  'stone-dl6-desc':  {en:'Request physical stone veneer samples delivered to your office or project site — free of charge.', zh:'申請實體石材貼面樣本，免費寄送至您的辦公室或工地現場。'},
  'stone-dl6-meta':  {en:'Physical Samples · Free', zh:'實體樣本 · 免費'},

  // ── nalexible-stone.html LEAD CTA STRIP ──
  'stone-lcc1-title': {en:'Request Stone Samples', zh:'申請石材樣品'},
  'stone-lcc1-desc':  {en:'Receive physical Nalexible flexible stone veneer samples — delivered free to your project site.', zh:'免費取得 Nalexible 柔性石材貼面實體樣品，直送您的工地現場。'},
  'stone-lcc1-btn':   {en:'Request a Sample →', zh:'申請樣品 →'},
  'stone-lcc2-title': {en:'LumiSlate Inquiry', zh:'LumiSlate 詢價'},
  'stone-lcc2-desc':  {en:'LumiSlate translucent stone for feature walls, hotel lobbies, and luxury applications. Discuss your project.', zh:'LumiSlate 透光石材適用於特色牆面、飯店大廳及豪華空間，歡迎洽談您的專案。'},
  'stone-lcc2-btn':   {en:'Inquire Now →', zh:'立即詢問 →'},
  'stone-lcc3-title': {en:'Taiwan Exclusive', zh:'台灣獨家代理'},
  'stone-lcc3-desc':  {en:'Ashley Kitchen is the exclusive Taiwan distributor for Nalexible stone products. Contact us to get started.', zh:'Ashley Kitchen 為 Nalexible 石材產品的台灣獨家總代理，歡迎洽詢。'},
  'stone-lcc3-btn':   {en:'Contact Us →', zh:'聯絡我們 →'},

  // ── nalexible-fiberboard.html STAT ──
  'fb-stat4-lbl': {en:'Exclusive Distributor', zh:'獨家總代理'},

  // ── nalexible-fiberboard.html DOWNLOADS ──
  'fb-dl-label':  {en:'Downloads', zh:'下載資料'},
  'fb-dl-title':  {en:'Specify with <em>confidence</em>', zh:'精確<em>規格採購</em>'},
  'fb-dl1-title': {en:'Nalexible Fiberboard Catalog', zh:'Nalexible 纖維門板型錄'},
  'fb-dl1-desc':  {en:'Full Natural Fiber Board and Quiet Door Series product range, specifications, and applications overview.', zh:'天然纖維門板與靜音門系列完整產品範圍、規格及應用概覽。'},
  'fb-dl1-meta':  {en:'PDF · Available on Request', zh:'PDF · 依需求提供'},
  'fb-dl2-title': {en:'Technical Data Sheet', zh:'技術規格表'},
  'fb-dl2-desc':  {en:'Full specifications: compressive strength, weight, fire rating, formaldehyde test, and moisture resistance.', zh:'完整規格：抗壓強度、重量、防火等級、甲醛測試及防潮性。'},
  'fb-dl2-meta':  {en:'PDF · Multiple Files', zh:'PDF · 多份文件'},
  'fb-dl3-title': {en:'Quiet Door Series Guide', zh:'靜音門系列指南'},
  'fb-dl3-desc':  {en:'Acoustic, magnetic, and quiet door variant specifications — including sound reduction ratings and installation details.', zh:'隔音、磁力及靜音門系列規格——含隔音等級及安裝細節。'},
  'fb-dl3-meta':  {en:'PDF · On Request', zh:'PDF · 依需求提供'},
  'fb-dl4-title': {en:'Installation Guide', zh:'安裝指南'},
  'fb-dl4-desc':  {en:'Step-by-step installation instructions for Nalexible fiberboard panels and door systems.', zh:'Nalexible 纖維門板系統的逐步安裝說明。'},
  'fb-dl4-meta':  {en:'PDF · Illustrated', zh:'PDF · 含圖解'},
  'fb-dl5-title': {en:'Environmental Certifications', zh:'環保認證文件'},
  'fb-dl5-desc':  {en:'Zero formaldehyde test reports, fire rating documentation, and recyclability certification for architectural specifications.', zh:'零甲醛測試報告、防火等級文件及可回收認證，適用於建築規格採購。'},
  'fb-dl5-meta':  {en:'PDF · Technical Data', zh:'PDF · 技術資料'},
  'fb-dl6-title': {en:'Fiberboard Samples', zh:'纖維門板樣本'},
  'fb-dl6-desc':  {en:'Request physical Natural Fiber Board and Quiet Door samples — delivered free to your project site.', zh:'申請天然纖維門板與靜音門實體樣本，免費寄送至您的工地現場。'},
  'fb-dl6-meta':  {en:'Physical Samples · Free', zh:'實體樣本 · 免費'},

  // ── nalexible-fiberboard.html LEAD CTA STRIP ──
  'fb-lcc1-title': {en:'Request Fiberboard Samples', zh:'申請纖維門板樣品'},
  'fb-lcc1-desc':  {en:'Receive physical Nalexible Natural Fiber Board samples delivered free to your project site.', zh:'免費取得 Nalexible 天然纖維門板實體樣品，直送您的工地現場。'},
  'fb-lcc1-btn':   {en:'Request a Sample →', zh:'申請樣品 →'},
  'fb-lcc2-title': {en:'Quiet Door Inquiry', zh:'靜音門詢價'},
  'fb-lcc2-desc':  {en:'Acoustic, magnetic, and quiet door systems for residential and commercial interiors. Discuss your project.', zh:'住宅與商業室內隔音、磁力及靜音門系統，歡迎洽談您的專案。'},
  'fb-lcc2-btn':   {en:'Inquire Now →', zh:'立即詢問 →'},
  'fb-lcc3-title': {en:'Taiwan Exclusive', zh:'台灣獨家代理'},
  'fb-lcc3-desc':  {en:'Ashley Kitchen is the exclusive Taiwan distributor for Nalexible fiberboard products. Contact us to get started.', zh:'Ashley Kitchen 為 Nalexible 纖維門板產品的台灣獨家總代理，歡迎洽詢。'},
  'fb-lcc3-btn':   {en:'Contact Us →', zh:'聯絡我們 →'},

  // ── index.html hero slide stat NUMBERS (untranslated English) ──
  's1-stat2-num': {en:'Flex',    zh:'柔性'},
  's1-stat3-num': {en:'Backlit', zh:'透光'},
  's2-stat2-num': {en:'Steel',   zh:'鋼鐵'},
  's2-stat4-num': {en:'Quiet',   zh:'靜音'},

  // ── nalexible-stone.html hero stat NUMBERS ──
  'stone-stat3-num': {en:'Flexible', zh:'柔性'},
  'stone-stat4-num': {en:'Taiwan',   zh:'台灣'},

  // ── nalexible-fiberboard.html hero stat NUMBERS ──
  'fb-stat2-num': {en:'Zero',   zh:'零'},
  'fb-stat4-num': {en:'Taiwan', zh:'台灣'},

  // ── index.html downloads CAD note ──
  'idx-cad-note': {en:'To access CAD files or certified documents, contact us at <a href="#contact" style="color:rgba(229,57,53,.6);text-decoration:none;">adam@ashleykitchen.co</a>', zh:'如需 CAD 圖檔或認證文件，請聯絡 <a href="#contact" style="color:rgba(229,57,53,.6);text-decoration:none;">adam@ashleykitchen.co</a>'},

  // ── plye.html image caption (3rd feat image) ──
  'plye-fcap3': {en:'plyē ORIGIN — 5-layer engineered construction · Patent Click-Lock System', zh:'plyē ORIGIN — 5層工程結構 · 專利卡扣系統'},
};

// ══════════════════════════════════════════
// LANG SWITCH — replaces ALL text at once
// ══════════════════════════════════════════
let currentLang = (function(){
  try {
    var stored = localStorage.getItem('ashleyLang');
    return stored || null; // null = first visit, GeoIP will decide
  } catch(e){ return 'en'; }
})();

function setLang(lang) {
  currentLang = lang;
  try { localStorage.setItem('ashleyLang', lang); } catch(e) {}
  var enBtn = document.getElementById('btn-en') || document.getElementById('lb-en');
  var zhBtn = document.getElementById('btn-zh') || document.getElementById('lb-zh');
  if (enBtn) {
    enBtn.classList.toggle('active', lang === 'en');
    enBtn.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  }
  if (zhBtn) {
    zhBtn.classList.toggle('active', lang === 'zh');
    zhBtn.setAttribute('aria-pressed', lang === 'zh' ? 'true' : 'false');
  }
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

  // Apply font swap for Chinese
  if (lang === 'zh') {
    document.body.style.fontFamily = "'Noto Sans TC', sans-serif";
  } else {
    document.body.style.fontFamily = "'DM Sans', sans-serif";
  }

  // Update every element that has a translation (key = element ID)
  Object.keys(T).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const val = T[id][lang];
    if (val !== undefined) el.innerHTML = val;
  });

  // Also update any element using a data-i18n attribute (key = dot-path or flat key)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!key || !T[key]) return;
    const val = T[key][lang];
    if (val !== undefined) el.innerHTML = val;
  });

  // Update contact form select options — page-aware
  const page = document.body.dataset.page || 'home';
  const sel = document.getElementById('inq-select');
  if (sel) {
    const opts = {
      home: {
        en: `<option>plyē Flooring — Sample Request</option>
        <option>plyē Flooring — Distributor Inquiry</option>
        <option>Nalexible Stone — Taiwan Project</option>
        <option>Nalexible Fiberboard — Taiwan Project</option>
        <option>OEM / Custom Color Program</option>
        <option>E-Commerce / Shopee Partnership</option>
        <option>General Inquiry</option>`,
        zh: `<option>Nalexible 石材 — 台灣工程</option>
        <option>Nalexible 纖維門板 — 台灣工程</option>
        <option>plyē 地板 — 樣品申請</option>
        <option>plyē 地板 — 代理商詢問</option>
        <option>OEM / 客製色計劃</option>
        <option>電商 / 蝦皮合作</option>
        <option>一般詢問</option>`
      },
      plye: {
        en: `<option>plyē Flooring — Sample Request</option>
        <option>plyē Flooring — Distributor Inquiry</option>
        <option>plyē Flooring — Architect Specification</option>
        <option>OEM / Custom Color Program</option>
        <option>General Inquiry</option>`,
        zh: `<option>plyē 地板 — 樣品申請</option>
        <option>plyē 地板 — 代理商詢問</option>
        <option>plyē 地板 — 建築師規格詢問</option>
        <option>OEM / 客製色計劃</option>
        <option>一般詢問</option>`
      },
      stone: {
        en: `<option>Nalexible Stone — Sample Request</option>
        <option>Nalexible Stone — LumiSlate Inquiry</option>
        <option>Nalexible Stone — Project Specification</option>
        <option>Nalexible Stone — Distributor Inquiry</option>
        <option>General Inquiry</option>`,
        zh: `<option>Nalexible 石材 — 樣品申請</option>
        <option>Nalexible 石材 — LumiSlate 詢問</option>
        <option>Nalexible 石材 — 工程規格詢問</option>
        <option>Nalexible 石材 — 代理商詢問</option>
        <option>一般詢問</option>`
      },
      fiberboard: {
        en: `<option>Nalexible Fiberboard — Sample Request</option>
        <option>Nalexible Fiberboard — Quiet Door Inquiry</option>
        <option>Nalexible Fiberboard — Project Specification</option>
        <option>Nalexible Fiberboard — Distributor Inquiry</option>
        <option>General Inquiry</option>`,
        zh: `<option>Nalexible 纖維門板 — 樣品申請</option>
        <option>Nalexible 纖維門板 — 靜音門詢問</option>
        <option>Nalexible 纖維門板 — 工程規格詢問</option>
        <option>Nalexible 纖維門板 — 代理商詢問</option>
        <option>一般詢問</option>`
      }
    };
    const pageOpts = opts[page] || opts.home;
    sel.innerHTML = pageOpts[lang] || pageOpts.en;
  }
  if (lang === 'zh') {
    const ta = document.querySelector('.fta');
    if (ta) ta.placeholder = '請描述您的專案或詢問…';
    document.querySelectorAll('.fi').forEach((inp,i) => {
      const ph = ['您的姓名','公司名稱','email@company.com','國家/地區'];
      if (ph[i]) inp.placeholder = ph[i];
    });
  } else {
    const ta = document.querySelector('.fta');
    if (ta) ta.placeholder = 'Tell us about your project…';
    const inpPh = ['Your name','Company name','email@company.com','Country'];
    document.querySelectorAll('.fi').forEach((inp,i) => { if (inpPh[i]) inp.placeholder = inpPh[i]; });
  }

  // Spec table (thead + tbody)
  const specThead = document.getElementById('spec-thead');
  const specTbody = document.getElementById('spec-tbody');
  const fbSpecThead = document.getElementById('fb-spec-thead');
  const fbSpecTbody = document.getElementById('fb-spec-tbody');
  if (lang === 'zh') {
    if (specThead) specThead.innerHTML = '<tr><th>規格</th><th>plyē ORIGIN 系列</th><th>業界標準</th></tr>';
    if (specTbody) specTbody.innerHTML = `
      <tr><td>總厚度</td><td class="spec-win">9mm</td><td class="spec-lose">業界：7–8mm</td></tr>
      <tr><td>芯板材料</td><td class="spec-win">交叉壓合桉木夾板</td><td class="spec-lose">HDF / MDF</td></tr>
      <tr><td>板材寬度</td><td class="spec-win">23cm（9"）</td><td class="spec-lose">標準：19cm（7.5"）</td></tr>
      <tr><td>耐磨層</td><td class="spec-win">Al₂O₃ · 莫氏9 · 12,000轉Taber</td><td class="spec-lose">AC3–AC4（6,000轉）</td></tr>
      <tr><td>隔音效果</td><td class="spec-win">ΔLw ≥ 19dB（SGS認證）</td><td class="spec-lose">要求：ΔLw ≥ 17dB</td></tr>
      <tr><td>甲醛</td><td class="spec-win">歐盟E1 超低甲醛</td><td class="spec-lose">E1 標準</td></tr>
      <tr><td>伸縮縫</td><td class="spec-win">2–3mm</td><td class="spec-lose">HDF：8–12mm</td></tr>
      <tr><td>安裝方式</td><td class="spec-win">專利卡扣M677196 · 免膠</td><td class="spec-lose">膠水／釘槍固定</td></tr>
      <tr><td>產地</td><td class="spec-win">台灣製造 🇹🇼</td><td class="spec-lose">各國</td></tr>`;
    if (fbSpecThead) fbSpecThead.innerHTML = '<tr><th>規格</th><th>Nalexible 天然纖維門板</th><th>一般纖維板</th></tr>';
    if (fbSpecTbody) fbSpecTbody.innerHTML = `
      <tr><td>基材</td><td class="spec-win">天然麻纖維</td><td class="spec-lose">木質纖維／礦物纖維</td></tr>
      <tr><td>黏合劑</td><td class="spec-win">生物基樹脂</td><td class="spec-lose">含甲醛樹脂</td></tr>
      <tr><td>甲醛</td><td class="spec-win">零甲醛（0 ppm）</td><td class="spec-lose">E1：≤0.1 ppm</td></tr>
      <tr><td>抗壓強度</td><td class="spec-win">接近鋼材強度</td><td class="spec-lose">一般</td></tr>
      <tr><td>重量對比鋼材</td><td class="spec-win">輕60%</td><td class="spec-lose">—</td></tr>
      <tr><td>防火等級</td><td class="spec-win">阻燃</td><td class="spec-lose">需另外處理</td></tr>
      <tr><td>可回收性</td><td class="spec-win">100%可回收</td><td class="spec-lose">一般不可回收</td></tr>
      <tr><td>應用</td><td class="spec-win">隔音門 · 曲面板 · 預製工法</td><td class="spec-lose">僅限平面板材</td></tr>`;
  } else {
    if (specThead) specThead.innerHTML = '<tr><th>Specification</th><th><span style="text-transform:none">plyē</span> ORIGIN Series</th><th>Standard</th></tr>';
    if (specTbody) specTbody.innerHTML = `
      <tr><td>Total Thickness</td><td class="spec-win">9mm</td><td class="spec-lose">Industry: 7–8mm</td></tr>
      <tr><td>Core Material</td><td class="spec-win">Cross-laminated Eucalyptus Plywood</td><td class="spec-lose">HDF / MDF</td></tr>
      <tr><td>Board Width</td><td class="spec-win">23cm (9")</td><td class="spec-lose">Standard: 19cm (7.5")</td></tr>
      <tr><td>Wear Layer</td><td class="spec-win">Al₂O₃ · Mohs 9 · 12,000 Rev Taber</td><td class="spec-lose">AC3–AC4 (6,000 Rev)</td></tr>
      <tr><td>Sound Reduction</td><td class="spec-win">ΔLw ≥ 19dB (SGS Certified)</td><td class="spec-lose">Required: ΔLw ≥ 17dB</td></tr>
      <tr><td>Formaldehyde</td><td class="spec-win">EU E1 Ultra-Low</td><td class="spec-lose">E1 Standard</td></tr>
      <tr><td>Expansion Gap</td><td class="spec-win">2–3mm</td><td class="spec-lose">HDF: 8–12mm</td></tr>
      <tr><td>Installation</td><td class="spec-win">Patent Click-Lock M677196 · Glue-Free</td><td class="spec-lose">Glue / Staple required</td></tr>
      <tr><td>Origin</td><td class="spec-win">Made in Taiwan 🇹🇼</td><td class="spec-lose">Various</td></tr>`;
    if (fbSpecThead) fbSpecThead.innerHTML = '<tr><th>Specification</th><th>Nalexible Fiberboard</th><th>Standard Fiberboard</th></tr>';
    if (fbSpecTbody) fbSpecTbody.innerHTML = `
      <tr><td>Base Material</td><td class="spec-win">Natural Hemp Fiber</td><td class="spec-lose">Wood Fiber / Mineral Fiber</td></tr>
      <tr><td>Binder</td><td class="spec-win">Bio-based Resin</td><td class="spec-lose">Formaldehyde-based Resin</td></tr>
      <tr><td>Formaldehyde</td><td class="spec-win">Zero Emission (0 ppm)</td><td class="spec-lose">E1: ≤0.1 ppm</td></tr>
      <tr><td>Compressive Strength</td><td class="spec-win">Steel-grade</td><td class="spec-lose">Standard</td></tr>
      <tr><td>Weight vs Steel</td><td class="spec-win">60% Lighter</td><td class="spec-lose">—</td></tr>
      <tr><td>Fire Rating</td><td class="spec-win">Flame Retardant</td><td class="spec-lose">Additional Treatment Required</td></tr>
      <tr><td>Recyclability</td><td class="spec-win">100% Recyclable</td><td class="spec-lose">Non-recyclable</td></tr>
      <tr><td>Application</td><td class="spec-win">Acoustic Doors · Curved Panels · Prefab</td><td class="spec-lose">Flat Panels Only</td></tr>`;
  }
}


// ══════════════════════════════════════════
// NAV: transparent → white on scroll
// ══════════════════════════════════════════
(function(){
  var nav = document.getElementById('main-nav');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 80){ nav.classList.add('nav-scrolled'); }
    else { nav.classList.remove('nav-scrolled'); }
  }, {passive:true});

  // Hamburger toggle
  var burger  = document.getElementById('nav-burger');
  var overlay = document.getElementById('nav-overlay');
  if(burger && overlay){
    burger.addEventListener('click', function(){
      burger.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
    });
  }
})();

function closeNavOverlay(){
  var burger  = document.getElementById('nav-burger');
  var overlay = document.getElementById('nav-overlay');
  if(burger)  burger.classList.remove('open');
  if(overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ══════════════════════════════════════════
// HERO SLIDESHOW — auto 5s with progress bar
// ══════════════════════════════════════════
let currentSlide = 0;
const totalSlides = 3;
let slideTimer = null;
let progressTimer = null;
const DURATION = 5000; // 5 seconds

function goToSlide(n) {
  // Remove active
  document.getElementById('slide-' + currentSlide).classList.remove('active');
  document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
  // Set new
  currentSlide = n;
  document.getElementById('slide-' + currentSlide).classList.add('active');
  document.querySelectorAll('.dot')[currentSlide].classList.add('active');
  // Counter
  document.getElementById('slide-counter').textContent =
    String(currentSlide + 1).padStart(2,'0') + ' / ' + String(totalSlides).padStart(2,'0');
  // Restart timers
  resetTimers();
  clearTimeout(fbPanelTimer);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

function resetTimers() {
  clearInterval(slideTimer);
  clearInterval(progressTimer);
  const dur = DURATION;
  // Progress bar (only exists on index.html)
  const bar = document.getElementById('progress-bar');
  if (bar) {
    bar.style.transition = 'none';
    bar.style.width = '0%';
    bar.offsetWidth; // Force reflow
    bar.style.transition = 'width ' + dur + 'ms linear';
    bar.style.width = '100%';
  }
  // Auto advance
  slideTimer = setTimeout(nextSlide, dur);
}

// Script is at bottom of body — DOM is already ready, call directly
resetTimers();

// ══════════════════════════════════════════
// DOT CLICKS
// ══════════════════════════════════════════
// ── Set inquiry select by product key (language-aware) ──
function setInquiry(productKey) {
  var sel = document.getElementById('inq-select');
  if (!sel) return;
  var map = {
    'plye-sample':  { en: 'plyē Flooring — Sample Request',        zh: 'plyē 地板 — 樣品申請' },
    'stone':        { en: 'Nalexible Stone — Taiwan Project',        zh: 'Nalexible 石材 — 台灣工程' },
    'fiberboard':   { en: 'Nalexible Fiberboard — Taiwan Project',   zh: 'Nalexible 纖維門板 — 台灣工程' },
  };
  var entry = map[productKey];
  if (!entry) return;
  var target = entry[currentLang] || entry.en;
  for (var i = 0; i < sel.options.length; i++) {
    if (sel.options[i].text === target) { sel.selectedIndex = i; return; }
  }
}

// ── Touch swipe support for hero slideshow ──
(function(){
  var el = document.querySelector('.slides-track') || document.querySelector('.hero-slides') || document.querySelector('.slide');
  if (!el) return;
  var startX = 0;
  el.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
  el.addEventListener('touchend', function(e){
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) nextSlide(); else prevSlide();
  }, {passive:true});
})();

document.querySelectorAll('.dot').forEach(function(dot, i) {
  dot.addEventListener('click', function() { goToSlide(i); });
});

// ══════════════════════════════════════════
// FIBERBOARD DUAL-PANEL ROTATION
// ══════════════════════════════════════════
let currentFbPanel = 0;
const totalFbPanels = 2;
let fbPanelTimer = null;

function goToFbPanel(n) {
  // deactivate current
  document.getElementById('fb-panel-' + currentFbPanel).classList.remove('fp-active');
  // update all sets of fb-dots
  document.querySelectorAll('.fb-dots').forEach(function(dotGroup) {
    dotGroup.querySelectorAll('.fb-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === n);
    });
  });
  currentFbPanel = n;
  document.getElementById('fb-panel-' + currentFbPanel).classList.add('fp-active');
  // restart timer
  clearTimeout(fbPanelTimer);
  fbPanelTimer = setTimeout(function() {
    goToFbPanel((currentFbPanel + 1) % totalFbPanels);
  }, DURATION);
}


// ══════════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════════
(function(){
  var revealEls = document.querySelectorAll('.reveal');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e){ if(e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  revealEls.forEach(function(el){ obs.observe(el); });
})();

// ══════════════════════════════════════════
// NAV SHADOW
// ══════════════════════════════════════════
window.addEventListener('scroll', function() {
  var nav = document.getElementById('main-nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 24px rgba(0,0,0,.08)' : 'none';
});

// ══════════════════════════════════════════
// LANGUAGE INIT — GeoIP on first visit, stored preference on return visits
// ══════════════════════════════════════════
(function() {
  var ZH_COUNTRIES = ['TW', 'HK', 'CN'];

  function applyLang(lang) {
    currentLang = lang;
    setLang(lang);
    // Re-run after full DOM parse to catch elements placed after this script tag
    document.addEventListener('DOMContentLoaded', function(){ setLang(lang); });
  }

  if (currentLang) {
    // Returning visitor — use stored preference immediately
    applyLang(currentLang);
  } else {
    // First visit — apply EN instantly so page isn't blank, then detect via GeoIP
    applyLang('en');
    fetch('https://ipapi.co/json/', { cache: 'force-cache' })
      .then(function(r){ return r.json(); })
      .then(function(data) {
        var lang = ZH_COUNTRIES.indexOf(data.country_code) !== -1 ? 'zh' : 'en';
        applyLang(lang);
      })
      .catch(function() {
        // GeoIP failed — fallback: try second provider
        fetch('https://api.country.is/')
          .then(function(r){ return r.json(); })
          .then(function(data) {
            var lang = ZH_COUNTRIES.indexOf(data.country) !== -1 ? 'zh' : 'en';
            applyLang(lang);
          })
          .catch(function() {
            // Both failed — keep EN, save it so we don't re-detect next visit
            applyLang('en');
          });
      });
  }
})();

// Form handlers moved to inline scripts per page

// ══════════════════════════════════════════
// NAV DROPDOWN ACCESSIBILITY (Products)
// ══════════════════════════════════════════
(function(){
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  if (!dropdowns.length) return;

  dropdowns.forEach(function(drop){
    var trigger = drop.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    function setOpen(open) {
      drop.classList.toggle('open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    trigger.addEventListener('click', function(e){
      e.preventDefault();
      var willOpen = !drop.classList.contains('open');
      dropdowns.forEach(function(other){
        var t = other.querySelector('.nav-dropdown-trigger');
        other.classList.remove('open');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      setOpen(willOpen);
    });

    trigger.addEventListener('keydown', function(e){
      if (e.key === 'Escape') setOpen(false);
    });

    drop.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        setOpen(false);
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', function(e){
    if (e.target.closest('.nav-dropdown')) return;
    dropdowns.forEach(function(drop){
      var trigger = drop.querySelector('.nav-dropdown-trigger');
      drop.classList.remove('open');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  });
})();
