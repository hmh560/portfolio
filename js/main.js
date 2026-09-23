/* ============================================================
   交互逻辑：主题切换 / 项目渲染 / 分类筛选 / 滚动高亮 / 移动菜单
   ============================================================ */

(function () {
  "use strict";

  /* ---------- 主题切换 ---------- */
  var themeBtn = document.getElementById("themeToggle");

  function syncThemeIcon() {
    var t = document.documentElement.getAttribute("data-theme");
    themeBtn.textContent = t === "dark" ? "☀" : "☾";
    themeBtn.setAttribute("aria-label", t === "dark" ? "切换到浅色模式" : "切换到深色模式");
  }

  themeBtn.addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncThemeIcon();
  });
  syncThemeIcon();

  /* ---------- 滚动渐显 ---------- */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- 项目渲染与筛选 ---------- */
  var listEl = document.getElementById("worksList");
  var filtersEl = document.getElementById("filters");
  var countEl = document.getElementById("worksCount");

  function workHTML(p, i) {
    var num = ("0" + (i + 1)).slice(-2);
    // 版式节奏：第 1 个全宽大图，其后左图右文 / 左文右图交替
    var variant = i === 0 ? "work--full" : (i % 2 === 1 ? "work--a" : "work--b");
    var tech = p.tech.map(function (t) { return "<li>" + t + "</li>"; }).join("");

    return '' +
      '<article class="work ' + variant + ' reveal">' +
        '<div class="work__media">' +
          '<img src="' + p.image + '" alt="' + p.title + ' · ' + p.subtitle + '" loading="lazy">' +
        '</div>' +
        '<div class="work__body">' +
          '<div class="work__head">' +
            '<span class="work__index">' + num + '</span>' +
            '<div class="work__meta">' +
              '<span class="work__cat">' + p.category + '</span>' +
              '<span class="work__date">' + p.date + '</span>' +
            '</div>' +
            '<h3 class="work__title">' + p.title + '</h3>' +
            '<p class="work__subtitle">' + p.subtitle + '</p>' +
          '</div>' +
          '<div class="work__main">' +
            '<p class="work__desc">' + p.desc + '</p>' +
            '<ul class="work__tech">' + tech + '</ul>' +
          '</div>' +
        '</div>' +
      '</article>';
  }

  function renderProjects(category) {
    var items = category === "全部"
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.category === category; });

    listEl.innerHTML = items.map(workHTML).join("");
    countEl.textContent = "— 共 " + items.length + " 件作品 —";

    listEl.querySelectorAll(".reveal").forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  function renderFilters() {
    var cats = ["全部"].concat(
      PROJECTS.map(function (p) { return p.category; })
        .filter(function (c, i, arr) { return arr.indexOf(c) === i; })
    );

    filtersEl.innerHTML = cats.map(function (c, i) {
      var n = c === "全部"
        ? PROJECTS.length
        : PROJECTS.filter(function (p) { return p.category === c; }).length;
      return '<button class="filter-btn' + (i === 0 ? " is-active" : "") + '" data-cat="' + c + '">' +
        c + '<sup>' + n + "</sup></button>";
    }).join("");

    filtersEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filtersEl.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      renderProjects(btn.getAttribute("data-cat"));
    });
  }

  renderFilters();
  renderProjects("全部");

  /* ---------- 导航：滚动样式 + 当前区块高亮 ---------- */
  var nav = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
  }, { passive: true });

  var navLinks = document.querySelectorAll(".nav__link");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        navLinks.forEach(function (l) {
          l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("main section[id]").forEach(function (s) {
    spy.observe(s);
  });

  /* ---------- 移动端菜单 ---------- */
  var burger = document.getElementById("navBurger");
  var linksEl = document.getElementById("navLinks");

  burger.addEventListener("click", function () {
    linksEl.classList.toggle("is-open");
  });
  linksEl.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav__link")) {
      linksEl.classList.remove("is-open");
    }
  });

  /* ---------- 页脚年份 ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
