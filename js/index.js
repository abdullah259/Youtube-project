$(document).ready(function () {
  $(".first-list-element").addClass("active");
  //لحذف الصنف النشط، ووضعه عندما يُضغط على أحد أزرار القائمة العلوية
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });

  //عند الضغط على الأيقونة الخاصة بالقائمة الجانبية
  // هنا نقوم بتحديد زر القائمة الجانبية باستخدام المعرف الخاص به
  //  click و نستمع لحدث النقر على هذا الرز باستخدام التابع
  $("#toggler").click(function (event) {
    // wrap في حال تم النقر على هذه الأيقونة نقوم بتحديد القائمة الجانبية باستخدام المعرف
    // إلى هذه القائمة إذا لم يكن موجودو حذفه إذا كن موجودًا toggled و نقوم بتبديل/تناوب إضافة الصنف
    $("#wrap").toggleClass("toggled");

    //إضافة طبقة سوداء
    var right = $(".sidebar").css("right"); //أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
    if (right == "0px") {
      //القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
      $(".sidebar").css({ right: "-17rem" });
      $(".layer").fadeOut(); /*أخفي الطبقة السوداء*/
    } else {
      //القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
      $(".sidebar").css({ right: "0" });
      $(".layer").fadeIn(); /*أظهر الطبقة السوداء*/
    }
  });

  //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
  $(".layer").click(function () {
    $(".sidebar").css({ right: "-17rem" });
    $(".layer").fadeOut();
  });

  $(".search-icon").click(function () {
    $(".search-input").slideToggle("slow");
  });
});
