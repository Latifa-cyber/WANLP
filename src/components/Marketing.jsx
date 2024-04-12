import React from "react";
import Card from "./Card";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

function Marketing() {
  return (
    <div className="px-10">
      <div className="flex justify-center my-10">
        <h1 className="text-5xl font-bold max-w-[500px] text-center leading-tight">
          <span className="text-blue-600"> الميزات </span> الرئيسية لمدقق السرقة
          العلمية
        </h1>
      </div>
      <p className="text-3xl font-semibold text-gray-500 mr-14 my-6">
        تساعدك هذه الميزات المدروسة على القضاء على السرقة العلمية وتقديم عملك
        بثقة.
      </p>
      <div className="md:grid grid-cols-3 lg:p-10">
        <Card
          icon={icon1}
          title="التحقق من السرقة العلمية مجانا"
          text="احصل على درجة السرقة العلمية ونظرة عامة على المصادر مجانًا، واحصل على المصادر فقط عندما تحتاج إليها"
        />
        <Card
          icon={icon2}
          title="تقارير سهلة الفهم"
          text="التقرير المقدم سهل الفهم، مع روابط لمصادر مختلفة."
        />
        <Card
          icon={icon3}
          title="تكنولوجيا الكشف المتفوقة"
          text="يكتشف نظامنا المتقدم السرقة العلمية بسرعة ودقة باستخدام أحدث الأساليب."
        />
        <Card
          icon={icon4}
          title="تحديثات قاعدة البيانات بانتظام"
          text="يتم تحديث قاعدة بياناتنا الشاملة بانتظام لتشمل مصادر وتغييرات جديدة لتمنحك أفضل النتائج."
        />
        <Card
          icon={icon5}
          title="كشف السرقة العلمية باللغة العربية"
          text="تم تصميم خاصيتنا المتميزة خصيصًا للكشف عن السرقة العلمية في النص العربي، مما يوفر نتائج دقيقة وموثوقة."
        />
      </div>
    </div>
  );
}

export default Marketing;
