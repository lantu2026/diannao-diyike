/* ============================================================
   《蓝兔巴迪·电脑第一课》站点脚本
   功能：学段切换 / 深浅色 / 目录抽屉 / 阅读进度 / 自评卡 / 小测验 / 侧栏导航
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- 站点数据 ---------------- */
  var SITE = {
    juans: [
      { id: 1, name: '认识我的电脑伙伴', count: 5, live: true, href: 'juan1.html', stage: 'low',
        desc: '电脑家族有哪些成员、怎么开关机、鼠标怎么点、键盘怎么按、第一行字怎么打。' },
      { id: 2, name: '我的文件我当家', count: 5, live: true, href: 'juan2.html', stage: 'low',
        desc: '桌面、窗口、文件和文件夹，复制剪切删除与回收站，U 盘和网盘搬家。' },
      { id: 3, name: '用电脑画出我的世界', count: 4, live: true, href: 'juan3.html', stage: 'low',
        desc: '打开画图工具，认画布工具箱颜色盒，用形状拼图、橡皮撤销配色，把画存好分享。' },
      { id: 4, name: '用电脑写文章做海报', count: 5, live: true, href: 'juan4.html', stage: 'low',
        desc: '从记事本到文字处理，编辑三件套与排版四兄弟，图片表格与导出。' },
      { id: 5, name: '上网冲浪有规矩', count: 6, live: true, href: 'juan5.html', stage: 'high',
        desc: '网址怎么读、关键词怎么搜、收发邮件、安全三件套与网络文明。' },
      { id: 6, name: '做一份会动的作品', count: 4, live: true, href: 'juan6.html', stage: 'high',
        desc: '演示文稿、素材准备、切换与动画，把自己的作品讲给别人听。' },
      { id: 7, name: '图形化编程初体验', count: 7, live: true, href: 'juan7.html', stage: 'high',
        desc: '舞台角色与积木、顺序与循环、条件与变量、事件交互与调试。' },
      { id: 8, name: '小创客进阶地图', count: 3, live: true, href: 'juan8.html', stage: 'high',
        desc: '数据与编码、什么是人工智能、我的第一个跨学科作品。' }
    ],
    lessons: [
      { id: '01', juan: 1, file: '01-diannao-jiazu.html',    title: '电脑家族点名啦',     sub: '主机、显示器、鼠标、键盘、音箱、U 盘，各管哪一摊' },
      { id: '02', juan: 1, file: '02-kaiji-guanji.html',     title: '开机、睡眠、关机',   sub: '为什么不能直接拔插头' },
      { id: '03', juan: 1, file: '03-shubiao-wu-mofa.html',  title: '鼠标的五个魔法',     sub: '单击、双击、右击、拖动、滚轮' },
      { id: '04', juan: 1, file: '04-jianpan-damaoxian.html',title: '键盘大冒险',         sub: '键盘分区、坐姿与手指归位' },
      { id: '05', juan: 1, file: '05-dazi-diyihang.html',    title: '打出第一行字',       sub: '拼音输入、中英切换、标点符号' },
      { id: '06', juan: 2, file: '06-desktop-renwu.html',        title: '桌面、任务栏、窗口',      sub: '认出桌面、任务栏和窗口，会开、会缩、会关' },
      { id: '07', juan: 2, file: '07-wenjian-wenjianjia.html',  title: '文件与文件夹',            sub: '给文件起好名字，用文件夹分门别类' },
      { id: '08', juan: 2, file: '08-fuzhi-jiantie.html',       title: '复制、剪切、粘贴、重命名', sub: 'Ctrl+C/V 整理文件，F2 改名' },
      { id: '09', juan: 2, file: '09-huishouzhan.html',         title: '删除与回收站',            sub: '删错能找回，清空要三思' },
      { id: '10', juan: 2, file: '10-uwangpan-wangpan.html',    title: 'U 盘和网盘',              sub: 'U 盘搬家、网盘同步云抽屉' },
      { id: '11', juan: 3, file: '11-huatu-chu-jianmian.html',   title: '画图软件初见面',          sub: '认画布、工具箱、颜色盒，铅笔画线、橡皮擦' },
      { id: '12', juan: 3, file: '12-xingzhuang-bianbian.html',  title: '形状变变变',              sub: '矩形椭圆直线拼图，填充桶上色' },
      { id: '13', juan: 3, file: '13-xiangpi-chexiao.html',       title: '橡皮、撤销与配色',        sub: '橡皮擦、Ctrl+Z 撤销、取色器吸色' },
      { id: '14', juan: 3, file: '14-baocun-fenxiang.html',       title: '保存与分享我的画',        sub: 'Ctrl+S 保存、起好名、插入文档打印' },
      { id: '15', juan: 4, file: '15-wenzi-chuli-chujianmian.html', title: '文字处理初见面',        sub: '认标题栏、功能区、编辑区，从记事本到文字处理' },
      { id: '16', juan: 4, file: '16-bianji-sanjianxian.html',   title: '编辑三件套',            sub: '选中、复制、粘贴与剪切，整理文字' },
      { id: '17', juan: 4, file: '17-paiban-sige.html',          title: '排版四兄弟',            sub: '字体、字号、颜色、对齐，文章变好看' },
      { id: '18', juan: 4, file: '18-tuwen-hunpai.html',         title: '图文混排',              sub: '插入图片与表格，做班级小报' },
      { id: '19', juan: 4, file: '19-daochu-dayin.html',         title: '导出与打印',            sub: '存 PDF、打印设置，作品能上交' },
      { id: '20', juan: 5, file: '20-liulanqi-wangzhi.html',     title: '浏览器与网址',          sub: '地址栏、https 小锁，网址怎么读' },
      { id: '21', juan: 5, file: '21-sousuo-xiaonengshou.html',  title: '搜索小能手',            sub: '关键词怎么选，结果怎么挑' },
      { id: '22', juan: 5, file: '22-shoucang-sucai.html',       title: '收藏与素材',            sub: '收藏网址、存图、注意版权' },
      { id: '23', juan: 5, file: '23-shoufa-youjian.html',       title: '收发电子邮件',          sub: '收件人、主题、正文、附件与回复' },
      { id: '24', juan: 5, file: '24-anquan-sanjianxian.html',   title: '安全三件套',            sub: '密码、隐私、防钓鱼，上网不踩坑' },
      { id: '25', juan: 5, file: '25-wangluo-wenming.html',      title: '网络文明小公民',        sub: '礼貌、不传谣、注出处、控时间' },
      { id: '26', juan: 6, file: '26-yanjiang-chujianmian.html', title: '演示文稿初见面',        sub: '认幻灯片、缩略图、占位符' },
      { id: '27', juan: 6, file: '27-huamian-jia-neirong.html',  title: '给幻灯片加内容',        sub: '文本框、图片、形状，画面丰满' },
      { id: '28', juan: 6, file: '28-qiehuan-donghua.html',      title: '切换与动画',            sub: '页间切换、元素动画，告别死板' },
      { id: '29', juan: 6, file: '29-fangying-jiangshu.html',    title: '放映与讲述',            sub: 'F5 放映、演讲者视图，讲给别人听' },
      { id: '30', juan: 7, file: '30-biancheng-chujianmian.html',title: '编程软件初见面',        sub: '舞台、角色、积木区，认识编程界面' },
      { id: '31', juan: 7, file: '31-rang-juese-dong.html',      title: '让角色动起来',          sub: '绿旗、移动、面向，小猫走起来' },
      { id: '32', juan: 7, file: '32-xunhuan-chongfu.html',      title: '循环与重复',            sub: '重复执行、重复 N 次，省积木不累' },
      { id: '33', juan: 7, file: '33-tiaojian-panduan.html',     title: '条件判断',              sub: '如果…那么、否则，程序会看情况' },
      { id: '34', juan: 7, file: '34-bianliang-jishuqi.html',    title: '变量与计数器',          sub: '建盒子装数字，分数会自己长' },
      { id: '35', juan: 7, file: '35-shijian-jiaohu.html',       title: '事件与交互',            sub: '当绿旗、按键、点击，程序听你话' },
      { id: '36', juan: 7, file: '36-tiaoshi-xiaoyisheng.html',  title: '调试小医生',            sub: '单步看、看变量、拆开试，找 bug' },
      { id: '37', juan: 8, file: '37-shuju-bianma.html',         title: '数据与编码',            sub: '图歌字底层都是 0/1，编码是翻译' },
      { id: '38', juan: 8, file: '38-shenme-shi-rengongzhineng.html', title: '什么是人工智能',   sub: 'AI 从例子里学，是工具不是老师' },
      { id: '39', juan: 8, file: '39-wode-diyi-kechengzuozuo.html', title: '我的第一个跨学科作品', sub: '画图+文字+编程，拼出大作品' }
    ]
  };
  window.SITE = SITE;

  var CN = ['一', '二', '三', '四', '五', '六', '七', '八'];

  var root = document.body.getAttribute('data-root') || '';
  var inLesson = document.body.hasAttribute('data-lesson');
  var curLesson = document.body.getAttribute('data-lesson') || '';

  /* ---------------- 存储工具 ---------------- */
  var LS = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : v; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    getJSON: function (k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    setJSON: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------------- 1. 学段切换 ---------------- */
  function initStage() {
    var st = LS.get('dn-stage', 'low');
    applyStage(st);

    document.querySelectorAll('[data-set-stage]').forEach(function (b) {
      b.addEventListener('click', function () {
        applyStage(b.getAttribute('data-set-stage'));
      });
    });
  }
  function applyStage(st) {
    if (st !== 'low' && st !== 'high') st = 'low';
    document.documentElement.setAttribute('data-stage', st);
    document.body.setAttribute('data-stage', st);
    LS.set('dn-stage', st);
    document.querySelectorAll('[data-set-stage]').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-set-stage') === st);
    });
    document.querySelectorAll('[data-stage-card]').forEach(function (c) {
      c.classList.toggle('on', c.getAttribute('data-stage-card') === st);
    });
    // 首页课程地图跟着学段走：三四年级看前四辑，五六年级看后四辑
    renderStageScope();
  }

  /* ---------------- 2. 深浅色 ---------------- */
  function initTheme() {
    var th = LS.get('dn-theme', 'light');
    setTheme(th);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    });
  }
  function setTheme(th) {
    document.documentElement.setAttribute('data-theme', th);
    LS.set('dn-theme', th);
    document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
      b.innerHTML = th === 'dark'
        ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>'
        : '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
      b.setAttribute('title', th === 'dark' ? '切换到浅色' : '切换到深色');
    });
  }

  /* ---------------- 3. 目录抽屉 ---------------- */
  function initDrawer() {
    var sb = document.querySelector('.sidebar'), mask = document.querySelector('.mask');
    document.querySelectorAll('[data-menu-toggle]').forEach(function (b) {
      b.addEventListener('click', function () {
        var on = sb.classList.toggle('on');
        if (mask) mask.classList.toggle('on', on);
      });
    });
    if (mask) mask.addEventListener('click', function () {
      sb.classList.remove('on'); mask.classList.remove('on');
    });
    document.querySelectorAll('.sidebar a').forEach(function (a) {
      a.addEventListener('click', function () {
        sb.classList.remove('on'); if (mask) mask.classList.remove('on');
      });
    });
  }

  /* ---------------- 4. 阅读进度条 ---------------- */
  function initReadBar() {
    var bar = document.querySelector('.readbar');
    if (!bar) return;
    function upd() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
      bar.style.width = (p * 100) + '%';
    }
    window.addEventListener('scroll', upd, { passive: true });
    window.addEventListener('resize', upd);
    upd();
  }

  /* ---------------- 5. 进度记录 ---------------- */
  function getDone() { return LS.getJSON('dn-done', {}); }
  function isDone(id) { return !!getDone()[id]; }
  function setDone(id, v) {
    var d = getDone();
    if (v) d[id] = 1; else delete d[id];
    LS.setJSON('dn-done', d);
    refreshDoneUI();
  }
  window.dnIsDone = isDone;

  function refreshDoneUI() {
    var d = getDone();
    // 侧栏
    document.querySelectorAll('.side-link[data-lesson-id]').forEach(function (a) {
      var n = a.querySelector('.n');
      if (n) n.classList.toggle('done', !!d[a.getAttribute('data-lesson-id')]);
    });
    // 课末按钮
    var btn = document.querySelector('[data-done-btn]');
    if (btn) {
      var on = !!d[curLesson];
      btn.classList.toggle('on', on);
      btn.innerHTML = on
        ? '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> 这一课我学过啦'
        : '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg> 标记这一课为已学完';
    }
    // 首页进度 / 继续上次 / 课程地图
    renderStageScope();
  }

  function initDoneBtn() {
    var btn = document.querySelector('[data-done-btn]');
    if (!btn) return;
    btn.addEventListener('click', function () { setDone(curLesson, !isDone(curLesson)); });
  }

  function renderHomeProgress() {
    var box = document.querySelector('[data-progress-box]');
    if (!box) return;
    var d = getDone();
    var ls = scopeLessons(), tot = ls.length, got = 0;
    ls.forEach(function (l) { if (d[l.id]) got++; });
    var pct = tot ? Math.round(got / tot * 100) : 0;
    var C = 2 * Math.PI * 32;
    var off = (C * (1 - pct / 100)).toFixed(1);
    box.innerHTML =
      '<svg class="ring" viewBox="0 0 80 80" role="img" aria-label="已完成 ' + pct + '%">' +
        '<circle cx="40" cy="40" r="32" fill="none" stroke-width="9" style="stroke:var(--g100)"/>' +
        '<circle cx="40" cy="40" r="32" fill="none" stroke-width="9" stroke-linecap="round" ' +
          'stroke-dasharray="' + C.toFixed(1) + '" stroke-dashoffset="' + off + '" ' +
          'transform="rotate(-90 40 40)" style="stroke:var(--g500)"/>' +
        '<text x="40" y="45" text-anchor="middle" font-size="17" font-weight="800" ' +
          'style="fill:var(--g600)">' + pct + '%</text>' +
      '</svg>' +
      '<div class="pg-bd"><b>已学 ' + got + ' / ' + tot + ' 课</b><span>' + scopeLabel() + '</span></div>';
  }

  /* ---------------- 6. 自评卡 ---------------- */
  function initChecks() {
    var pageId = document.body.getAttribute('data-page') || 'site';
    var boxes = document.querySelectorAll('.check input');
    if (!boxes.length) return;
    var saved = LS.getJSON('dn-ck-' + pageId, {});
    boxes.forEach(function (inp, i) {
      inp.checked = !!saved[i];
      inp.addEventListener('change', function () {
        var s = LS.getJSON('dn-ck-' + pageId, {});
        s[i] = inp.checked;
        LS.setJSON('dn-ck-' + pageId, s);
      });
    });
  }

  /* ---------------- 7. 小测验 ---------------- */
  function initQuiz() {
    document.querySelectorAll('.q').forEach(function (q) {
      var opts = q.querySelectorAll('.qopt');
      var fb = q.querySelector('.qfb');
      var solved = false;
      opts.forEach(function (o) {
        o.addEventListener('click', function () {
          if (solved) return;
          if (o.getAttribute('data-ok') === '1') {
            o.classList.add('ok');
            solved = true;
            opts.forEach(function (x) { if (x !== o) x.style.opacity = '.45'; });
            if (fb) {
              fb.innerHTML = '<b style="color:var(--g600)">✔ 答对啦！</b> ' + (o.getAttribute('data-fb') || '');
              fb.classList.add('show');
            }
          } else {
            o.classList.add('no');
            o.style.pointerEvents = 'none';
            if (fb) {
              fb.innerHTML = '<b style="color:var(--orange)">再想想～</b> ' + (q.getAttribute('data-hint') || '换个答案试试。');
              fb.classList.add('show');
            }
          }
        });
      });
    });
  }

  /* ---------------- 8. 侧栏导航 ---------------- */
  function initSidebar() {
    var sb = document.querySelector('[data-render="sidebar"]');
    if (!sb) return;
    var h = '';
    SITE.juans.forEach(function (j) {
      var ls = SITE.lessons.filter(function (l) { return l.juan === j.id; });
      if (!ls.length) return;
      h += '<div class="side-title">第 ' + CN[j.id - 1] + ' 辑 · ' + j.name + '</div>';
      ls.forEach(function (l) {
        var on = (l.id === curLesson) ? ' on' : '';
        h += '<a class="side-link' + on + '" data-lesson-id="' + l.id + '" href="' + root + 'lesson/' + l.file + '">' +
               '<span class="n">' + l.id + '</span><span>' + l.title + '</span></a>';
      });
    });
    h += '<div class="side-title">全站目录</div>';
    h += '<a class="side-link" href="' + root + 'index.html"><span class="n">⌂</span><span>回到首页</span></a>';
    SITE.juans.forEach(function (j) {
      if (!j.live) return;
      h += '<a class="side-link" href="' + root + j.href + '"><span class="n">辑</span><span>第 ' + CN[j.id - 1] + ' 辑导读</span></a>';
    });
    h += '<div class="side-title">打印与讲义</div>';
    h += '<a class="side-link" href="' + root + 'jianyi/index.html"><span class="n">印</span><span>讲义版目录（投屏/打印）</span></a>';
    if (curLesson) {
      var cl = null;
      SITE.lessons.forEach(function (l) { if (l.id === curLesson) cl = l; });
      if (cl) h += '<a class="side-link" href="' + root + 'jianyi/' + cl.file + '"><span class="n">讲</span><span>本课讲义版 · 单页</span></a>';
    }
    h += '<div class="side-title">给老师和家长</div>';
    h += '<a class="side-link" href="' + root + 'teacher.html"><span class="n">师</span><span>使用说明与课时建议</span></a>';
    h += '<a class="side-link" href="' + root + 'about.html"><span class="n">?</span><span>关于本课</span></a>';
    sb.innerHTML = h;
  }

  /* ---------------- 9. 上一课 / 下一课 ---------------- */
  function initLessonNav() {
    var box = document.querySelector('[data-nav="auto"]');
    if (!box || !curLesson) return;
    var i = -1;
    SITE.lessons.forEach(function (l, k) { if (l.id === curLesson) i = k; });
    if (i < 0) return;
    var h = '';
    if (i > 0) {
      var p = SITE.lessons[i - 1];
      h += '<a href="' + p.file + '"><div class="d">← 上一课</div><div class="t">' + p.title + '</div></a>';
    } else {
      h += '<a class="dis"><div class="d">← 上一课</div><div class="t">已经是第一课啦</div></a>';
    }
    if (i < SITE.lessons.length - 1) {
      var n = SITE.lessons[i + 1];
      h += '<a class="next" href="' + n.file + '"><div class="d">下一课 →</div><div class="t">' + n.title + '</div></a>';
    } else {
      var lastL = SITE.lessons[SITE.lessons.length - 1];
      var jn = lastL ? CN[(lastL.juan || 1) - 1] : '';
      h += '<a class="next dis"><div class="d">下一课 →</div><div class="t">第 ' + jn + ' 辑学完啦，下一辑见～</div></a>';
    }
    box.innerHTML = h;
  }

  /* ---------------- 10. 首页辑目录 ---------------- */
  function initJuanGrid() {
    var box = document.querySelector('[data-render="juans"]');
    if (!box) return;
    var h = '';
    SITE.juans.forEach(function (j) {
      var cn = ['一', '二', '三', '四', '五', '六', '七', '八'][j.id - 1];
      if (j.live) {
        h += '<a class="juan-card live" href="' + j.href + '">' +
               '<div class="top"><span class="no">第 ' + cn + ' 辑</span><span class="cnt">' + j.count + ' 课</span></div>' +
               '<h3>' + j.name + '</h3><p>' + j.desc + '</p>' +
               '<span class="badge badge-live">已上线 · 点这里开始</span></a>';
      } else {
        h += '<div class="juan-card soon">' +
               '<div class="top"><span class="no">第 ' + cn + ' 辑</span><span class="cnt">' + j.count + ' 课</span></div>' +
               '<h3>' + j.name + '</h3><p>' + j.desc + '</p>' +
               '<span class="badge badge-soon">即将上线</span></div>';
      }
    });
    box.innerHTML = h;
  }

  /* ---------------- 11. 首页第一辑课卡 ---------------- */
  function initCourseCards() {
    var box = document.querySelector('[data-render="course-cards"]');
    if (!box) return;
    var scope = box.getAttribute('data-scope');
    var group = box.getAttribute('data-group');
    var sc = scope ? parseInt(scope.replace(/\D/g, ''), 10) : null;
    var d = getDone();
    function card(l) {
      var on = d[l.id];
      return '<a class="juan-card" href="' + root + 'lesson/' + l.file + '" style="' + (on ? 'border-left:5px solid var(--g500)' : '') + '">' +
             '<div class="top"><span class="no">第 ' + l.id + ' 课</span>' +
             (on ? '<span class="cnt" style="background:var(--g500);color:#fff">已学</span>' : '<span class="cnt">5 分钟</span>') +
             '</div><h3>' + l.title + '</h3><p>' + l.sub + '</p></a>';
    }
    var h = '';
    if (sc) {
      SITE.lessons.filter(function (l) { return l.juan === sc; }).forEach(function (l) { h += card(l); });
    } else if (group === 'juan') {
      SITE.juans.forEach(function (j) {
        var ls = SITE.lessons.filter(function (l) { return l.juan === j.id; });
        if (!ls.length) return;
        h += '<div class="cards-sub"><span class="em">📦</span> 第 ' + CN[j.id - 1] + ' 辑 · ' + j.name + '</div>';
        ls.forEach(function (l) { h += card(l); });
      });
    } else {
      SITE.lessons.forEach(function (l) { h += card(l); });
    }
    box.innerHTML = h;
  }

  /* ---------------- 12. 首页课程地图（按学段过滤） ---------------- */
  var MAP_ALL_KEY = 'dn-map-all';
  function mapIsAll() { return LS.get(MAP_ALL_KEY, '0') === '1'; }
  function curStage() { return document.documentElement.getAttribute('data-stage') || 'low'; }
  function juanById(id) { var r = null; SITE.juans.forEach(function (j) { if (j.id === id) r = j; }); return r; }

  /* 当前视野内的课：按学段看 = 前四辑 / 后四辑；显示全部 = 39 课 */
  function scopeLessons() {
    var all = mapIsAll(), st = curStage();
    return SITE.lessons.filter(function (l) {
      if (all) return true;
      var j = juanById(l.juan);
      return j ? j.stage === st : false;
    });
  }
  function scopeLabel() {
    if (mapIsAll()) return '全部八辑 · 39 课';
    return curStage() === 'high' ? '五六年级 · 后四辑' : '三四年级 · 前四辑';
  }
  /* 学段/范围变了，三张卡 + 地图一起刷 */
  function renderStageScope() {
    renderHomeMap();
    renderResume();
    renderHomeProgress();
    renderRoadmap();
  }

  /* 八辑路线图：每辑可点击直达，标出已学课数与「你在哪一辑」 */
  function renderRoadmap() {
    var box = document.querySelector('[data-render="roadmap"]');
    if (!box) return;
    var d = getDone();
    // 第一个还有没学完的课 -> 就是当前所在辑
    var nowJuan = null;
    SITE.juans.forEach(function (j) {
      if (nowJuan !== null) return;
      var un = SITE.lessons.filter(function (l) { return l.juan === j.id; })
                           .some(function (l) { return !d[l.id]; });
      if (un) nowJuan = j.id;
    });
    var h = '<div class="rm-line"></div>';
    SITE.juans.forEach(function (j) {
      var ls = SITE.lessons.filter(function (l) { return l.juan === j.id; });
      var dn = 0;
      ls.forEach(function (l) { if (d[l.id]) dn++; });
      var done = ls.length > 0 && dn === ls.length;
      var now = (j.id === nowJuan);
      if (j.id === 5) h += '<div class="rm-sep">🚀 往上走到五六年级</div>';
      h += '<a class="rm-item' + (j.stage === 'high' ? ' high' : '') +
             (done ? ' done' : '') + (now ? ' now' : '') + '" href="' + root + j.href + '">' +
             '<span class="rm-dot">' + j.id + '</span>' +
             '<span class="rm-txt"><b>' + j.name + '</b>' +
               '<em>' + j.count + ' 课' + (dn ? ' · 已学 ' + dn : '') + '</em></span>' +
             '<span class="rm-st">' + (done ? '✓ 学完' : (now ? '在学' : '')) + '</span>' +
           '</a>';
    });
    box.innerHTML = h;
  }

  function initHomeMap() {
    document.querySelectorAll('[data-map-all]').forEach(function (b) {
      b.addEventListener('click', function () {
        LS.set(MAP_ALL_KEY, b.getAttribute('data-map-all'));
        renderStageScope();
        if (b.hasAttribute('data-map-scroll')) {
          var t = document.getElementById('map');
          if (t && t.scrollIntoView) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    renderStageScope();
  }

  /* 继续上次：当前范围里第一门没学完的课 */
  function renderResume() {
    var box = document.querySelector('[data-render="resume"]');
    if (!box) return;
    var d = getDone(), ls = scopeLessons();
    var next = null, got = 0;
    ls.forEach(function (l) { if (d[l.id]) got++; else if (!next) next = l; });
    var tot = ls.length;
    var h = '<div class="qk-h">' + (got === 0 ? '从哪一课开始' : '继续上次') + '</div>';
    if (next) {
      h += '<span class="rs-k">' + (got === 0 ? '还没开始，先来第一课' : '已学 ' + got + ' / ' + tot + ' 课') + '</span>' +
           '<b class="rs-b">第 ' + next.id + ' 课 · ' + next.title + '</b>' +
           '<span class="rs-s">' + next.sub + '</span>' +
           '<a class="btn btn-primary rs-go" href="' + root + 'lesson/' + next.file + '">' +
             (got === 0 ? '开始第一课 →' : '接着学 →') + '</a>';
    } else {
      h += '<span class="rs-k">🎉 这一程走完啦</span>' +
           '<b class="rs-b">' + scopeLabel() + ' · ' + tot + ' 课全学完</b>' +
           '<span class="rs-s">回头把自评卡再勾一遍，或者挑战另一学段的四辑。</span>' +
           '<a class="btn btn-primary rs-go" href="' + root + 'lesson/' + ls[0].file + '">从第一课复习 →</a>';
    }
    box.innerHTML = h;
  }

  function updateMapBar(all, st) {
    var t = document.querySelector('[data-map-title]');
    var s = document.querySelector('[data-map-sub]');
    var i = document.querySelector('[data-map-ico]');
    if (!t || !s) return;
    if (all) {
      if (i) i.textContent = '🗺️';
      t.textContent = '全部八辑 · 39 课';
      s.textContent = '不分学段，八辑全展开';
    } else if (st === 'high') {
      if (i) i.textContent = '🚀';
      t.textContent = '五六年级 · 后四辑';
      s.textContent = '第 5—8 辑共 20 课，上网、演示、编程、创客';
    } else {
      if (i) i.textContent = '🌱';
      t.textContent = '三四年级 · 前四辑';
      s.textContent = '第 1—4 辑共 19 课，认电脑、管文件、画图、写文章';
    }
    document.querySelectorAll('[data-map-all]').forEach(function (b) {
      b.classList.toggle('on', mapIsAll() === (b.getAttribute('data-map-all') === '1'));
    });
  }

  function renderHomeMap() {
    var box = document.querySelector('[data-render="home-map"]');
    if (!box) return;
    var all = mapIsAll();
    var st = document.documentElement.getAttribute('data-stage') || 'low';
    var list = all ? SITE.juans : SITE.juans.filter(function (j) { return j.stage === st; });
    var d = getDone();
    var h = '';
    list.forEach(function (j) {
      var ls = SITE.lessons.filter(function (l) { return l.juan === j.id; });
      var dn = 0;
      ls.forEach(function (l) { if (d[l.id]) dn++; });
      h += '<div class="map-juan' + (j.stage === 'high' ? ' high' : '') + '">' +
             '<div class="mj-hd"><div class="mj-l">' +
               '<span class="mj-no">第 ' + CN[j.id - 1] + ' 辑' +
                 (j.stage === 'high' ? ' · 🚀' : ' · 🌱') + '</span><h3>' + j.name + '</h3>' +
             '</div><a class="mj-go" href="' + root + j.href + '">辑导读 →</a></div>' +
             '<p class="mj-desc">' + j.desc + '</p><div class="mj-lessons">';
      ls.forEach(function (l) {
        var on = d[l.id];
        h += '<a class="lesson-mini' + (on ? ' done' : '') + '" href="' + root + 'lesson/' + l.file + '" title="' + l.sub + '">' +
               '<span class="lm-n">' + l.id + '</span><span class="lm-t">' + l.title + '</span>' +
               (on ? '<span class="lm-ok">✓</span>' : '') + '</a>';
      });
      h += '</div><div class="mj-foot"><span class="mj-cnt">' + j.count + ' 课</span>' +
           (dn ? '<span class="mj-done">已学 ' + dn + ' 课</span>' : '') + '</div></div>';
    });
    box.innerHTML = h;
    updateMapBar(all, st);
  }

  /* ---------------- 启动 ---------------- */
  function boot() {
    initStage();
    initTheme();
    initDrawer();
    initReadBar();
    initSidebar();
    initLessonNav();
    initJuanGrid();
    initCourseCards();
    initHomeMap();
    initChecks();
    initQuiz();
    initDoneBtn();
    refreshDoneUI();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
