module.exports.config = {
  name: "check",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "DungUwU && Nghĩa",
  description: "Check tương tác ngày/tuần/toàn bộ",
  commandCategory: "Tiện ích",
  usages: "< all/week/day >",
  usePrefix: false,
  cooldowns: 5,
  dependencies: {
    fs: " ",
    "moment-timezone": " "
  }
};
const g = "https://api-0703.0703-opa.repl.co";
const u = __dirname + "/-checktt/";
const p = require("moment-timezone");
module.exports.onLoad = () => {
  const c = require("fs");
  if (!c.existsSync(u) || !c.statSync(u).isDirectory()) {
    c.mkdirSync(u, {
      recursive: true
    });
  }
  setInterval(() => {
    const d = p.tz("Asia/Ho_Chi_Minh").day();
    const e = c.readdirSync(u);
    e.forEach(e => {
      let f = JSON.parse(c.readFileSync(u + e));
      if (f.time != d) {
        setTimeout(() => {
          f = JSON.parse(c.readFileSync(u + e));
          if (f.time != d) {
            f.time = d;
            c.writeFileSync(u + e, JSON.stringify(f, null, 4));
          }
        }, 60000);
      }
    });
  }, 60000);
};
module.exports.handleEvent = async function ({
  api: r,
  args: b,
  Users: f,
  event: g,
  Threads: c
}) {
  if (g.isGroup != true) {
    return;
  }
  const h = await r.getThreadInfo(g.threadID);
  if (global.client.sending_top == true) {
    return;
  }
  const i = global.nodemodule.fs;
  const {
    threadID: j,
    senderID: k
  } = g;
  const d = p.tz("Asia/Ho_Chi_Minh").day();
  if (!i.existsSync(u + j + ".json")) {
    const c = {
      total: [],
      week: [],
      day: [],
      time: d
    };
    i.writeFileSync(u + j + ".json", JSON.stringify(c, null, 4));
    const e = (await r.getThreadInfo(g.threadID)) || {};
    if (e.hasOwnProperty("isGroup") && e.isGroup) {
      const b = e.participantIDs;
      for (user of b) {
        if (!c.total.find(c => c.id == user)) {
          c.total.push({
            id: user,
            count: 0
          });
        }
        if (!c.week.find(c => c.id == user)) {
          c.week.push({
            id: user,
            count: 0
          });
        }
        if (!c.day.find(c => c.id == user)) {
          c.day.push({
            id: user,
            count: 0
          });
        }
      }
    }
    i.writeFileSync(u + j + ".json", JSON.stringify(c, null, 4));
  }
  const l = JSON.parse(i.readFileSync(u + j + ".json"));
  if (l.time != d) {
    global.client.sending_top = true;
    setTimeout(() => global.client.sending_top = false, 300000);
  }
  const m = l.week.findIndex(b => b.id == k);
  const e = l.day.findIndex(b => b.id == k);
  const n = l.total.findIndex(b => b.id == k);
  if (n == -1) {
    l.total.push({
      id: k,
      count: 1
    });
  } else {
    l.total[n].count++;
  }
  if (m == -1) {
    l.week.push({
      id: k,
      count: 1
    });
  } else {
    l.week[m].count++;
  }
  if (e == -1) {
    l.day.push({
      id: k,
      count: 1
    });
  } else {
    l.day[e].count++;
  }
  i.writeFileSync(u + j + ".json", JSON.stringify(l, null, 4));
};
module.exports.run = async function ({
  api: v,
  event: p,
  args: b,
  Users: w,
  Threads: c,
  permssion: d
}) {
  let x = await v.getThreadInfo(p.threadID);
  await new Promise(c => setTimeout(c, 500));
  const i = global.nodemodule.fs;
  const {
    threadID: y,
    messageID: j,
    senderID: q,
    mentions: k
  } = p;
  if (!i.existsSync(u + y + ".json")) {
    return v.sendMessage("Chưa có thống kê dữ liệu", y);
  }
  const n = JSON.parse(i.readFileSync(u + y + ".json"));
  const f = b[0] ? b[0].toLowerCase() : "";
  if (f == "locmem") {
    let d = await v.getThreadInfo(y);
    var l = c => v.sendMessage(c, p.threadID, p.messageID);
    let e = await c.getData(p.threadID);
    let f = d => (((e || {}).threadInfo || {}).adminIDs || []).some(b => b.id == d);
    if (!f(v.getCurrentUserID())) {
      return l("Bot không phải là Quản Trị Viên, vui lòng cấp QTV cho bot trước khi sử dụng!");
    }
    if (!f(p.senderID)) {
      return l("Bạn không phải Quản Trị Viên nhóm!");
    }
    if (!b[1] || isNaN(b[1])) {
      return v.sendMessage("Error", y);
    }
    let g = b[1];
    let h = d.participantIDs;
    for (let c of h) {
      if (c == v.getCurrentUserID()) {
        continue;
      }
      if (!n.total.some(d => d.id == c) || n.total.find(d => d.id == c).count < g) {
        setTimeout(async () => {
          await v.removeUserFromGroup(c, y);
          for (let d in n) {
            if (d == "time") {
              continue;
            }
            if (n[d].some(d => d.id == c)) {
              n[d].splice(n[d].findIndex(d => d.id == c), 1);
            }
          }
        }, 1000);
      }
    }
    return v.sendMessage("Đã xóa " + (h.length - n.total.filter(b => b.count >= g).length) + " thành viên không đủ " + g + " tin nhắn!", y);
  }
  if (f == "reset") {
    var l = c => v.sendMessage(c, p.threadID, p.messageID);
    let d = await c.getData(p.threadID);
    let f = e => (((d || {}).threadInfo || {}).adminIDs || []).some(b => b.id == e);
    if (!f(p.senderID)) {
      return l("Bạn không phải Quản Trị Viên nhóm!");
    }
    const e = __dirname + "/check/" + y + ".json";
    i.unlinkSync(e);
    return v.sendMessage("Đã reset lại toàn bộ tin nhắn nhóm", y, j);
  }
  var e = "";
  var r = "";
  var A = "";
  var C = "";
  var F = 1;
  var H = [];
  var I = 0;
  if (f == "all" || f == "-a") {
    e = "[ Kiểm Tra Tin nhắn Tổng ]\n────────────────";
    I = n.total;
  } else if (f == "week" || f == "-w") {
    e = "[ Kiểm Tra Tin nhắn Tuần ]\n────────────────";
    I = n.week;
  } else if (f == "day" || f == "-d") {
    e = "[ Kiểm Tra Tin nhắn Ngày ]\n────────────────";
    I = n.day;
  } else {
    I = n.total;
  }
  for (const e of I) {
    const b = (await w.getNameUser(e.id)) || "Tên không tồn tại";
    const c = e;
    c.name = b;
    H.push(c);
  }
  ;
  let J = ["all", "-a", "week", "-w", "day", "-d"].some(c => c == f);
  if (!J && Object.keys(k).length > 0) {
    H = H.filter(c => k.hasOwnProperty(c.id));
  }
  H.sort((b, c) => {
    if (b.count > c.count) {
      return -1;
    } else if (b.count < c.count) {
      return 1;
    } else {
      return b.name.localeCompare(c.name);
    }
  });
  if (!J && Object.keys(k).length == 0 || !J && Object.keys(k).length == 1 || !J && p.type == "message_reply") {
    const h = p.messageReply ? p.messageReply.senderID : Object.keys(k)[0] ? Object.keys(k)[0] : q;
    const i = H.findIndex(c => c.id == h);
    const j = n.total.find(c => c.id == h) ? n.total.find(c => c.id == h).count : 0;
    const m = n.week.find(c => c.id == h) ? n.week.find(c => c.id == h).count : 0;
    const e = n.day.find(c => c.id == h) ? n.day.find(c => c.id == h).count : 0;
    const f = H[i].name || "Tên không tồn tại";
    const g = h == q ? "Bạn" : f;
    const l = require("moment-timezone");
    const b = l.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    var K;
    if (global.config.ADMINBOT.includes(h)) {
      K = "Admin Bot";
    } else if (global.config.NDH.includes(h)) {
      K = "Người Hỗ Trợ";
    } else if (x.adminIDs.some(c => c.id == h)) {
      K = "Quản Trị Viên";
    } else {
      K = "Thành Viên";
    }
    var O = l.tz("Asia/Ho_Chi_Minh").format("dddd");
    if (O == "Sunday") {
      O = "Chủ Nhật";
    }
    if (O == "Monday") {
      O = "Thứ Hai";
    }
    if (O == "Tuesday") {
      O = "Thứ Ba";
    }
    if (O == "Wednesday") {
      O = "Thứ Tư";
    }
    if (O == "Thursday") {
      O = "Thứ Năm";
    }
    if (O == "Friday") {
      O = "Thứ Sáu";
    }
    if (O == "Saturday") {
      O = "Thứ Bảy";
    }
    let c = x.threadName || "Tên không tồn tại";
    var R = [];
    var N = [];
    var Q = [];
    for (const c of n.day) {
      R.push(c);
    }
    for (const c of n.week) {
      N.push(c);
    }
    for (const c of n.total) {
      Q.push(c);
    }
    A = "" + R.reduce((b, c) => b + c.count, 0);
    footer1 = "" + N.reduce((b, c) => b + c.count, 0);
    footer2 = "" + Q.reduce((b, c) => b + c.count, 0);
    if (i == -1) {
      return v.sendMessage("→ " + g + " chưa có thống kê dữ liệu", y);
    }
    r += "==== [ " + c + " ] =====\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Tên: " + f + "\n→ Chức Vụ: " + K + "\n━━━━━━━━━━━━━━━━━━━━━━━\n→ 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐓𝐫𝐨𝐧𝐠 𝐍𝐠𝐚̀𝐲: " + e + "\n→ 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐓𝐫𝐨𝐧𝐠 𝐓𝐮𝐚̂̀𝐧: " + m + "\n\n→ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧: " + j + "\n→ [ 🏆 ] • 𝐓𝐨𝐩: " + (i + 1) + "\n→ Tỉ Lệ Tương Tác: " + (j / footer2 * 100).toFixed(2) + "%\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Hôm Nay Là: " + O + "\n→ Time: " + l.tz("Asia/Ho_Chi_minh").format("HH:mm:ss || DD/MM/YYYY") + "\n→ Thả \"❤\" Để Xem All";
  } else {
    r = H.map(c => {
      return F++ + ". " + c.name + " (" + c.count + ")";
    }).join("\n");
    A = "→ Tổng Tin Nhắn: " + H.reduce((b, c) => b + c.count, 0) + "\n━━━━━━━━━━━━━━━━━━\n📌 Hướng dẫn sử dụng\n→ Reply (phản hồi tin nhắn này) theo số thứ tự để xóa thành viên\n→ " + this.config.name + " locmem (số tin nhắn) → Bot sẽ xóa những người dưới (số tin nhắn) tin nhắn ra khỏi box\n→ " + this.config.name + " reset → Reset lại tin nhắn nhóm";
  }
  C = e + "\n" + r + "\n" + A + "\n";
  v.sendMessage({
    body: C,
    attachment: [await m(x.imageSrc), await m("\nhttps://graph.facebook.com/" + p.senderID + "/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662")]
  }, y, (b, c) => {
    global.client.handleReply.push({
      name: exports.config.name,
      messageID: c.messageID,
      event: p,
      storage: H
    });
    global.client.handleReaction.push({
      name: this.config.name,
      messageID: c.messageID,
      data: Q,
      abc: H,
      author: p.senderID
    });
  }, p.messageID);
};
module.exports.handleReaction = async ({
  event: n,
  api: f,
  handleReaction: j,
  args: h,
  Users: k,
  Threads: l
}) => {
  const {
    author: i,
    data: m,
    abc: d,
    messageID: e
  } = j;
  if (n.userID != i) {
    return;
  }
  if (n.reaction != "❤") {
    return;
  }
  f.unsendMessage(e);
  var o = 1;
  m.sort((b, c) => {
    if (b.count > c.count) {
      return -1;
    } else if (b.count < c.count) {
      return 1;
    } else {
      return b.name.localeCompare(c.name);
    }
  });
  var q = m.map(b => {
    return o++ + ". " + b.name + " (" + b.count + ")";
  }).join("\n");
  var b = "↠ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧: " + m.reduce((b, c) => b + c.count, 0);
  var c = "====[ 𝐓𝐨̂̉𝐧𝐠 𝐓𝐮̛𝐨̛𝐧𝐠 𝐓𝐚́𝐜 𝐓𝐚̂́𝐭 𝐂𝐚̉ ]====\n";
  ab = "\n━━━━━━━━━━━━━━━━━━\n📌 Hướng dẫn sử dụng\n→ Reply (phản hồi tin nhắn này) theo số thứ tự để xóa thành viên\n→ " + this.config.name + " locmem (số tin nhắn) → Bot sẽ xóa những người dưới (số tin nhắn) tin nhắn ra khỏi box\n→ " + this.config.name + " reset → Reset lại tin nhắn nhóm";
  msg = c + "\n" + q + "\n" + b;
  f.sendMessage(msg, n.threadID, (e, b) => global.client.handleReply.push({
    name: exports.config.name,
    messageID: b.messageID,
    event: n,
    storage: d
  }));
};
module.exports.handleReply = async function ({
  api: h,
  args: b,
  event: j,
  handleReply: k,
  Users: f,
  Threads: e
}) {
  try {
    var g = b => h.sendMessage(b, j.threadID, j.messageID);
    if (k.event.senderID != j.senderID) {
      return;
    }
    let l = await e.getData(j.threadID);
    let b = c => (((l || {}).threadInfo || {}).adminIDs || []).some(d => d.id == c);
    if (!b(h.getCurrentUserID())) {
      return g("Bot không phải là Quản Trị Viên, vui lòng cấp QTV cho bot trước khi sử dụng!");
    }
    if (!b(j.senderID)) {
      return g("Bạn không phải Quản Trị Viên nhóm!");
    }
    let d = j.args.map(c => +(c - 1)).filter(isFinite);
    count = 0;
    a = [];
    for (let b of d) {
      try {
        await h.removeUserFromGroup(k.storage[b].id, j.threadID);
        count++;
        const c = (await f.getData(k.storage[b].id)).name;
        a.push(count + " - " + c);
      } catch (c) {
        g(c);
        console.log(c);
      }
    }
    ;
    for (let b of d) {
      try {
        await h.removeUserFromGroup(k.abc[b].id, j.threadID);
        count++;
        const c = (await f.getData(k.abc[b].id)).name;
        a.push(count + " - " + c);
      } catch (c) {
        g(c);
        console.log(c);
      }
    }
    ;
    g("Thực thi xóa thành công " + count + " người:\n\n" + a.join("\n") + "\n\nDùng check reset để rest lại data nhóm!");
  } catch (c) {
    g(c.toString());
    console.log(c);
  }
};
async function m(f, g = "jpg") {
  const b = __dirname + "/cache/" + Date.now() + "." + g;
  const c = require("image-downloader");
  const d = require("fs-extra");
  await c.image({
    url: f,
    dest: b
  });
  setTimeout(b => d.unlinkSync(b), 60000, b);
  return d.createReadStream(b);
}
;