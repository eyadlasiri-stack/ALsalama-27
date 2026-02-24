// =========================================
//            لوحة التحكم السريعة            
// =========================================

// ⚽ قائمة الهدافين (تم تفريغها لتكون جاهزة للتحديث لاحقاً)
var scorer1_name = "في انتظار تسجيل الأهداف...";
var scorer1_goals = "-";

var scorer2_name = "---";
var scorer2_goals = "-";

var scorer3_name = "---";
var scorer3_goals = "-";

// =========================================


// كود تحديث الهدافين بناءً على بيانات لوحة التحكم
window.onload = function() {
    document.getElementById('display_s1_name').innerText = scorer1_name;
    document.getElementById('display_s1_goals').innerText = scorer1_goals;
    document.getElementById('display_s2_name').innerText = scorer2_name;
    document.getElementById('display_s2_goals').innerText = scorer2_goals;
    document.getElementById('display_s3_name').innerText = scorer3_name;
    document.getElementById('display_s3_goals').innerText = scorer3_goals;
};

// نظام التبويبات (الأزرار العلوية)
function openTab(evt, tabId) {
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    var tabBtns = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");
}