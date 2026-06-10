/* ============================================================
   KALIPER — site interactions (vanilla, no framework)
   Recreated from the Claude Design React prototype.
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     DEMO FORM → EMAIL  (Web3Forms)
     ------------------------------------------------------------
     1. Go to https://web3forms.com  → enter the email address
        where you want demo requests delivered → copy the
        "Access Key" they email/show you.
     2. Paste it between the quotes below, replacing the
        placeholder. That's the only change needed.
     ============================================================ */
  var WEB3FORMS_ACCESS_KEY = "b64482d6-4527-4802-91c9-93dbad5b2deb";

  /* ---------- Agent data (cards + drawer detail) ---------- */
  var AGENTS = [
    { key: "kai", name: "David", role: "Customer Service", icon: "clipboard-list",
      desc: "Owns customer orders from receipt through confirmation, then keeps customers informed through delivery while managing changing priorities with production.",
      mission: "Owns the customer order from the moment it's received through confirmation and delivery - validating terms, aligning the ERP, and keeping customers informed while managing changing priorities with production.",
      pillars: [
        { h: "Order Validation & ERP Alignment", t: "Receive sales orders and verify payment terms, Incoterms, lead times, revisions, and regulations, then update the ERP and remove forecasts so what was sold always matches the system." },
        { h: "Approval & Confirmation", t: "Run the approval process with the insights decision-makers need - price history, lead times, yields - and send accurate order confirmations the moment orders are approved." },
        { h: "Delivery Communication", t: "Obtain promise dates from the planner, track production against them, and keep customers updated on delivery within policy while facilitating priority changes and escalations." }
      ],
      value: [
        { h: "Aligned Systems", t: "Every order, forecast removal, and confirmation lands in the ERP automatically." },
        { h: "Immediate Timing", t: "Order validation and confirmations happen the moment the order arrives." },
        { h: "Data Democratization", t: "Price history, lead times, and yields surface to decision-makers instantly." },
        { h: "Customer Experience", t: "Fast, accurate confirmations and proactive delivery updates within policy." },
        { h: "Team Loads", t: "Reps freed from manual entry and status-chasing to focus on escalations." }
      ] },
    { key: "kade", name: "Aaron", role: "Off-the-Shelf Parts RFQ Management", icon: "file-search",
      desc: "Sources standard parts and runs the RFQ-to-PO process from a purchase requisition.",
      mission: "Turns a purchase requisition into a sourced, negotiated, and approved PO line - issuing RFQs, comparing quotes, and feeding decision-makers the data to approve fast.",
      pillars: [
        { h: "RFQ Issuance", t: "Source parts and issue RFQs derived from purchase requisitions the second they're raised." },
        { h: "Supplier Negotiation", t: "Negotiate with suppliers and present quote comparisons and supplier data to buyers and approvers instead of burying them in email threads." },
        { h: "PO Execution", t: "Secure buyer approval, issue the PO line within the ERP, and facilitate the PO approval process while enriching data for decision-makers." }
      ],
      value: [
        { h: "Aligned Systems", t: "RFQs and PO lines flow straight into the ERP from the requisition." },
        { h: "Immediate Timing", t: "Sourcing and RFQ issuance start the second a requisition is raised." },
        { h: "Data Democratization", t: "Quote comparisons and supplier data presented to buyers and approvers." },
        { h: "Customer Experience", t: "Internal requesters get faster turnaround on the parts they need." },
        { h: "Team Loads", t: "Buyers stop manually chasing quotes and approvals." }
      ] },
    { key: "knox", name: "Simon", role: "Vendor Scheduler", icon: "calendar-clock",
      desc: "Releases approved POs to vendors and tracks delivery against their commitments.",
      mission: "Owns the purchase-order lifecycle with vendors - dispatching approved POs, locking in confirmations and promise dates, tracking performance against those commitments, and bridging internal teams with external suppliers.",
      pillars: [
        { h: "PO Release & Confirmation", t: "Send approved POs to vendors and secure formal confirmation and promised dates, updating the ERP in real time instead of batching at day's end." },
        { h: "Commitment Tracking", t: "Monitor delivery against vendor promise dates, flagging slips early before they impact downstream delivery promises." },
        { h: "Stakeholder Liaison", t: "Facilitate issues and questions between internal stakeholders — engineering, finance, logistics, operations — and external suppliers to keep orders on track." }
      ],
      value: [
        { h: "Aligned Systems", t: "PO confirmations and promised dates update the ERP in real time." },
        { h: "Immediate Timing", t: "POs go out and confirmations are chased instantly, not batched." },
        { h: "Data Democratization", t: "Commitment-vs-actual status visible to every stakeholder." },
        { h: "Customer Experience", t: "Internal stakeholders get fast answers; downstream promises stay reliable." },
        { h: "Team Loads", t: "No more manual follow-up calls and emails to vendors." }
      ] },
    { key: "kira", name: "Maya", role: "Import", icon: "ship",
      desc: "Manages the legal, documented, on-time import of goods into the company at the correct landed cost.",
      mission: "From supplier readiness to warehouse receiving, owns the legal, documented, on-time import of goods at the correct landed cost - freight, customs, duties, and reconciliation.",
      pillars: [
        { h: "Freight Coordination", t: "Confirm Incoterms, coordinate supplier readiness, lead time, and packaging, and arrange freight via forwarder by sea, air, or land." },
        { h: "Customs & Compliance", t: "Gather and verify all shipping documents, handle customs clearance, HS codes, duties, and compliance, then pay duties and fees and release the goods." },
        { h: "Tracking & Reconciliation", t: "Track shipments and resolve delays, coordinate warehouse receiving and quality inspection, and reconcile landed cost back into the ERP and records." }
      ],
      value: [
        { h: "Aligned Systems", t: "Landed cost, shipment status, and import records all sync to the ERP." },
        { h: "Immediate Timing", t: "Document checks and clearance progress without waiting on a person." },
        { h: "Data Democratization", t: "True landed cost and shipment status visible to procurement, finance, and ops." },
        { h: "Customer Experience", t: "Goods arrive predictably and on time, so downstream promises hold." },
        { h: "Team Loads", t: "No manual document gathering, customs coordination, or reconciliation." }
      ] },
    { key: "kora", name: "Talia", role: "RTV Management", icon: "package-x",
      desc: "Returns defective, wrong, or excess material to vendors and secures the credit owed.",
      mission: "Returns defective, wrong, damaged, or excess material to vendors and drives each return to closure - securing the RMA, the logistics, and the credit owed.",
      pillars: [
        { h: "Return Authorization", t: "Identify and verify material that needs returning and secure RMA authorization from the vendor, negotiating repair, replacement, credit, or refund." },
        { h: "Reverse Logistics", t: "Prepare return documentation, coordinate freight, and work with the warehouse to pull, pack, and ship returned goods correctly while updating inventory and the ERP." },
        { h: "Credit Recovery & CAPA", t: "Issue or match the debit memo, confirm the credit is received, and flag recurring defects to supplier quality (CAPA) and vendor performance reviews." }
      ],
      value: [
        { h: "Aligned Systems", t: "Inventory, in-transit status, and credits always reflected in the ERP." },
        { h: "Immediate Timing", t: "RMA requests and returns initiated the moment a defect is flagged." },
        { h: "Data Democratization", t: "Return rates by vendor and part visible for performance reviews." },
        { h: "Customer Experience", t: "Operations and quality get cleaner inventory and faster credit recovery." },
        { h: "Team Loads", t: "No manual paperwork, credit chasing, or return tracking." }
      ] },
    { key: "kian", name: "Daniel", role: "Accounts Payable (AP)", icon: "wallet",
      desc: "Verifies and pays supplier invoices accurately, on terms, and in compliance.",
      mission: "Verifies and pays supplier invoices accurately, on terms, and in compliance - matching, coding, and posting every invoice while optimizing cash timing.",
      pillars: [
        { h: "Three-Way Match", t: "Receive and verify supplier invoices, match PO, goods receipt, and invoice, and code them to the correct accounts and cost centers automatically." },
        { h: "Payment & Cash Timing", t: "Route invoices for approval, schedule and process payments per agreed terms, capture early-payment discounts, and manage cash timing." },
        { h: "Reconciliation & Compliance", t: "Reconcile vendor statements, maintain vendor master data, support month-end close with accruals and AP aging, and ensure VAT and withholding compliance." }
      ],
      value: [
        { h: "Aligned Systems", t: "Invoices matched, coded, and posted in the ERP automatically." },
        { h: "Immediate Timing", t: "Three-way matching and approval routing happen instantly." },
        { h: "Data Democratization", t: "Cash timing and AP aging visible to finance decision-makers." },
        { h: "Customer Experience", t: "Suppliers paid accurately and on time, strengthening relationships." },
        { h: "Team Loads", t: "No manual matching, coding, or discrepancy chasing." }
      ] },
    { key: "gabriel", name: "Gabriel", role: "Outbound Logistics (Export)", icon: "truck",
      desc: "Ships customer orders out with compliant export documentation and freight.",
      mission: "Ships customer orders out with compliant export documentation and freight - coordinating picking, carriers, customs, and delivery tracking the moment an order is released.",
      pillars: [
        { h: "Pick, Pack & Book", t: "Process released sales orders, coordinate warehouse picking, packing, and labeling, set Incoterms and shipping method, and book carriers and freight." },
        { h: "Export Compliance", t: "Prepare export documents - invoice, packing list, BOL/AWB, certificate of origin - and ensure compliance with HS codes, sanctions, and denied-party screening." },
        { h: "Shipment & Cost Tracking", t: "Arrange customs clearance at origin, track shipments and update customers, manage freight costs and carrier invoices, and handle damage or loss claims." }
      ],
      value: [
        { h: "Aligned Systems", t: "Shipment and export records sync to the ERP automatically." },
        { h: "Immediate Timing", t: "Documents prepared and freight booked the moment an order is released." },
        { h: "Data Democratization", t: "Shipment status and freight costs visible across teams." },
        { h: "Customer Experience", t: "Customers receive compliant shipments and accurate delivery updates." },
        { h: "Team Loads", t: "No manual document prep or compliance screening." }
      ] },
    { key: "kayla", name: "Naomi", role: "Accounts Receivable (AR)", icon: "receipt",
      desc: "Bills customers and collects payment, managing credit and overdue balances.",
      mission: "Bills customers and collects payment - issuing accurate invoices, applying cash, and managing credit and overdue balances to keep working capital flowing.",
      pillars: [
        { h: "Invoicing & Cash Application", t: "Generate and send customer invoices with correct pricing, terms, and taxes, then post incoming payments and match them to invoices in real time." },
        { h: "Collections & Credit", t: "Monitor aging and overdue balances, run collections on late payments, and manage credit limits and creditworthiness." },
        { h: "Dispute Resolution & Reporting", t: "Resolve billing disputes, issue credit memos, reconcile customer accounts, and report on DSO and AR aging for month-end close." }
      ],
      value: [
        { h: "Aligned Systems", t: "Payments matched and customer accounts reconciled in the ERP automatically." },
        { h: "Immediate Timing", t: "Invoices issued and incoming payments applied in real time." },
        { h: "Data Democratization", t: "DSO and AR aging visible to finance leadership." },
        { h: "Customer Experience", t: "Customers get accurate invoices and clear, professional collections." },
        { h: "Team Loads", t: "No manual invoicing, payment matching, or collections chasing." }
      ] },
    { key: "hannah", name: "Hannah", role: "RMA Management", icon: "rotate-ccw",
      desc: "Processes customer returns from request through inspection, disposition, and resolution.",
      mission: "Processes customer returns end to end - validating eligibility, authorizing the return and resolving with repair, replacement, or credit while feeding failure data back to engineering.",
      pillars: [
        { h: "Authorization & Intake", t: "Validate warranty, eligibility, and return policy on each request, issue the RMA number, and send return instructions and a shipping label instantly." },
        { h: "Inspection & Disposition", t: "Receive, log, and decide disposition - repair, replace, refund, or scrap." },
        { h: "Resolution & Feedback", t: "Process the resolution and issue credit or replacement, close the RMA in the ERP, and feed failure data back to quality and engineering." }
      ],
      value: [
        { h: "Aligned Systems", t: "Returns, dispositions, and credits all logged in the ERP." },
        { h: "Immediate Timing", t: "RMA numbers and return instructions issued instantly on request." },
        { h: "Data Democratization", t: "Failure data flows to quality and engineering automatically." },
        { h: "Customer Experience", t: "Customers get fast authorizations and quick resolution." },
        { h: "Team Loads", t: "No manual logging, triage routing, or status updates." }
      ] }
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function refreshIcons() { if (window.lucide && window.lucide.createIcons) window.lucide.createIcons(); }

  /* ---------- Header scroll states ---------- */
  function initHeader() {
    var header = $("#siteHeader");
    if (!header) return;
    function onScroll() {
      var y = window.scrollY || 0;
      header.classList.toggle("scrolled", y > 12);
      header.classList.toggle("on-hero", y < window.innerHeight * 0.82);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------- Hero background rotation ---------- */
  function initHero() {
    var bgs = $$("#heroBgs .hero-bg");
    if (bgs.length < 2) return;
    var active = 0;
    setInterval(function () {
      bgs[active].classList.remove("active");
      active = (active + 1) % bgs.length;
      bgs[active].classList.add("active");
    }, 4000);
  }

  /* ---------- Agents carousel + drawer ---------- */
  function initAgents() {
    var track = $("#caroTrack");
    if (!track) return;
    var progress = $("#caroProgress");
    var prevBtn = $("#caroPrev");
    var nextBtn = $("#caroNext");

    // Build cards
    AGENTS.forEach(function (a) {
      var card = el("article", "agent-card");
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-haspopup", "dialog");
      card.dataset.key = a.key;
      card.innerHTML =
        '<div class="topline"></div>' +
        '<div class="agent-top">' +
          '<div class="agent-av">' +
            '<span class="agent-photo-wrap"><img class="agent-photo" src="assets/faces/' + a.key + '.jpg" alt="' + a.name + ', ' + a.role + '" loading="lazy" /></span>' +
            '<span class="ring2"></span>' +
          '</div>' +
          '<div class="agent-id">' +
            '<div class="nm">' + a.name + '</div>' +
            '<div class="role">' + a.role + '</div>' +
          '</div>' +
        '</div>' +
        '<p class="desc">' + a.desc + '</p>' +
        '<span class="agent-more">View responsibilities<i data-lucide="arrow-right"></i></span>';
      card.addEventListener("click", function () { if (!track.dataset.moved) openDrawer(a.key); });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openDrawer(a.key); }
      });
      track.appendChild(card);
    });

    function step() {
      var card = track.querySelector(".agent-card");
      return card ? card.getBoundingClientRect().width + 24 : 380;
    }

    var idx = 0, pageCount = AGENTS.length;
    function buildDots(n) {
      progress.innerHTML = "";
      for (var i = 0; i < n; i++) {
        (function (i) {
          var d = el("button", "caro-dot" + (i === idx ? " on" : ""));
          d.type = "button"; d.setAttribute("role", "tab");
          d.setAttribute("aria-label", "Go to position " + (i + 1));
          d.addEventListener("click", function () { track.scrollTo({ left: i * step(), behavior: "smooth" }); });
          progress.appendChild(d);
        })(i);
      }
    }
    function syncDots() {
      $$(".caro-dot", progress).forEach(function (d, i) { d.classList.toggle("on", i === idx); });
    }
    function onScroll() {
      var s = step();
      var max = track.scrollWidth - track.clientWidth;
      var pages = max > 4 ? Math.round(max / s) + 1 : 1;
      if (pages !== pageCount) { pageCount = pages; buildDots(pages); }
      var i = Math.round(track.scrollLeft / s);
      if (max > 0 && track.scrollLeft >= max - 2) i = pages - 1;
      idx = Math.min(Math.max(i, 0), pages - 1);
      syncDots();
      prevBtn.disabled = track.scrollLeft < 8;
      nextBtn.disabled = track.scrollLeft > max - 8;
    }
    buildDots(pageCount);
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    prevBtn.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    nextBtn.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });

    // drag-to-scroll (suppress click that would open a drawer after a drag)
    var down = false, sx = 0, sl = 0;
    track.addEventListener("pointerdown", function (e) {
      down = true; delete track.dataset.moved; sx = e.clientX; sl = track.scrollLeft; track.classList.add("dragging");
    });
    window.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - sx;
      if (Math.abs(dx) > 4) track.dataset.moved = "1";
      track.scrollLeft = sl - dx;
    });
    window.addEventListener("pointerup", function () {
      down = false; track.classList.remove("dragging");
      setTimeout(function () { delete track.dataset.moved; }, 0);
    });

    refreshIcons();
  }

  /* ---------- Agent drawer ---------- */
  var agentScrim = $("#agentScrim");
  function openDrawer(key) {
    var a = AGENTS.filter(function (x) { return x.key === key; })[0];
    if (!a) return;
    $("#drawerAv").src = "assets/faces/" + a.key + ".jpg";
    $("#drawerAv").alt = a.name + ", " + a.role;
    $("#drawerName").textContent = a.name;
    $("#drawerRole").textContent = a.role;
    var ri = $("#drawerRoleIcon");
    ri.setAttribute("data-lucide", a.icon);
    $("#drawerMission").textContent = a.mission;
    var pl = $("#drawerPillars"); pl.innerHTML = "";
    a.pillars.forEach(function (p) {
      var li = el("li");
      li.innerHTML = '<span class="pnode"></span><div><span class="ph">' + p.h + '</span><span class="pt">' + p.t + '</span></div>';
      pl.appendChild(li);
    });
    var vsec = $("#drawerValueSec"), vl = $("#drawerValue");
    if (a.value && a.value.length) {
      vsec.hidden = false; vl.innerHTML = "";
      a.value.forEach(function (k) {
        var li = el("li");
        li.innerHTML = '<span class="kh">' + k.h + '</span><span class="kt">' + k.t + '</span>';
        vl.appendChild(li);
      });
    } else { vsec.hidden = true; }
    agentScrim.hidden = false;
    document.body.style.overflow = "hidden";
    refreshIcons();
  }
  function closeDrawer() { agentScrim.hidden = true; document.body.style.overflow = ""; }
  if (agentScrim) {
    agentScrim.addEventListener("mousedown", function (e) { if (e.target === agentScrim) closeDrawer(); });
    $$("[data-close-agent]").forEach(function (b) { b.addEventListener("click", closeDrawer); });
  }

  /* ---------- Demo modal ---------- */
  var scrim = $("#demoScrim");
  var formView = $("#demoFormView");
  var successView = $("#demoSuccessView");
  var form = $("#demoForm");
  function openDemo() {
    if (form) form.reset();
    $$(".err", form).forEach(function (e) { e.hidden = true; });
    $$("input", form).forEach(function (i) { i.classList.remove("invalid"); });
    formView.hidden = false; successView.hidden = true;
    scrim.hidden = false;
    document.body.style.overflow = "hidden";
    refreshIcons();
  }
  function closeDemo() { scrim.hidden = true; document.body.style.overflow = ""; }
  $$("[data-open-demo]").forEach(function (b) { b.addEventListener("click", openDemo); });
  if (scrim) {
    scrim.addEventListener("mousedown", function (e) { if (e.target === scrim) closeDemo(); });
    $$("[data-close-demo]").forEach(function (b) { b.addEventListener("click", closeDemo); });
  }
  function setErr(name, msg) {
    var box = $('[data-err="' + name + '"]', form);
    var input = form.elements[name];
    if (msg) { box.textContent = msg; box.hidden = false; input.classList.add("invalid"); }
    else { box.hidden = true; input.classList.remove("invalid"); }
  }
  function setFormErr(msg) {
    var box = $('[data-err="form"]', form);
    if (!box) return;
    if (msg) { box.textContent = msg; box.hidden = false; } else { box.hidden = true; }
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim(), company: form.elements.company.value.trim() };
      var ok = true;
      if (!v.name) { setErr("name", "Required"); ok = false; } else setErr("name");
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) { setErr("email", "Enter a valid work email"); ok = false; } else setErr("email");
      if (!v.company) { setErr("company", "Required"); ok = false; } else setErr("company");
      if (!ok) return;
      setFormErr(null);

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalHTML = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      function fail(msg) {
        setFormErr(msg || "Something went wrong. Please try again or email us directly.");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
        refreshIcons();
      }

      // Guard: key not configured yet
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.indexOf("PASTE-") === 0) {
        fail("Demo form isn't connected yet (missing access key).");
        return;
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New demo request — " + v.company,
          from_name: "Kaliper website",
          name: v.name,
          email: v.email,
          company: v.company,
          message: "Demo request from " + v.name + " (" + v.company + "). Reply to: " + v.email,
          botcheck: form.elements.botcheck ? form.elements.botcheck.checked : false
        })
      })
        .then(function (r) { return r.json().catch(function () { return { success: r.ok }; }); })
        .then(function (data) {
          if (data && data.success) {
            formView.hidden = true;
            successView.hidden = false;
            refreshIcons();
          } else {
            fail(data && data.message ? data.message : null);
          }
        })
        .catch(function () { fail("Network error. Please check your connection and try again."); });
    });
  }

  /* ---------- Global Escape to close overlays ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (scrim && !scrim.hidden) closeDemo();
    if (agentScrim && !agentScrim.hidden) closeDrawer();
  });

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var sel = ".sec-head,.agents-head,.agent-card,.bcard,.finalcta .wrap,.prob-card,.prob-bottom,.val-lead,.metric";
    var els = $$(sel);
    els.forEach(function (e) { e.setAttribute("data-reveal", ""); });
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initHeader();
    initHero();
    initAgents();
    initReveal();
    refreshIcons();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
