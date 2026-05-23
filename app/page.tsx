"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    service: "",
    message: "",
    size: 20,
  });

  const calculatePrice = () => {
    if (form.service === "防水") {
      return form.size * 2500;
    }

    if (form.service === "隔熱") {
      return form.size * 2000;
    }

    if (form.service === "防水+隔熱") {
      return form.size * 3500;
    }

    if (form.service === "浴室漏水") {
      return "5000 / 間";
    }

    return 0;
  };

  const sendEmail = async () => {
    try {
      await emailjs.send(
        "service_r3qcsr8",
        "template_eq0m5kt",
        {
          from_name: form.from_name,
          phone: form.phone,
          service: form.service,
          message: form.message,
          size: form.size,
        },
        "gz8eA8pb1vpUT62y3"
      );

      alert("詢價已成功送出！");
    } catch (error) {
      console.log(error);
      alert("送出失敗");
    }
  };

  return (
    <main
  id="top"
  className="bg-[#0B0B0B] text-white overflow-hidden"
>

      {/* NAVBAR */}
      {/* NAVBAR */}
<nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">

  <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

    {/* 左側 Logo */}
    <div>
      <a href="#top">
        <h1 className="text-2xl font-bold tracking-widest cursor-pointer transition duration-300 hover:text-[#D4B06A]">
          佳禹實業有限公司
        </h1>
      </a>

      <p className="text-sm text-gray-400 mt-1">
        專業防水・隔熱工程
      </p>
    </div>

    {/* 電腦版導覽列 */}
    <div className="hidden md:flex gap-8 text-sm font-medium">

      <a
        href="#about"
        className="text-gray-300 transition duration-300 hover:text-[#D4B06A] hover:scale-110"
      >
        關於我們
      </a>

      <a
        href="#services"
        className="text-gray-300 transition duration-300 hover:text-[#D4B06A] hover:scale-110"
      >
        服務項目
      </a>

      <a
        href="#cases"
        className="text-gray-300 transition duration-300 hover:text-[#D4B06A] hover:scale-110"
      >
        施工案例
      </a>

      <a
        href="#contact"
        className="text-gray-300 transition duration-300 hover:text-[#D4B06A] hover:scale-110"
      >
        聯絡我們
      </a>

    </div>

    {/* 右側電話 + 手機漢堡 */}
    <div className="flex items-center gap-4">

      {/* 手機版 ☰ */}
      <button
        onClick={() => {
          const menu = document.getElementById("mobile-menu")
          menu?.classList.toggle("hidden")
        }}
        className="md:hidden text-3xl"
      >
        ☰
      </button>

      {/* 電話按鈕 */}
      <div className="flex flex-col gap-2">

        <a
          href="tel:0968305061"
          className="border border-[#D4B06A] text-[#D4B06A] backdrop-blur-md bg-black/30 px-4 py-2 rounded-[12px] text-sm md:text-base font-semibold transition duration-300 hover:bg-[#D4B06A] hover:text-black"
        >
          📞 0968-305-061
        </a>

        <a
          href="tel:0930804172"
          className="border border-[#D4B06A] text-[#D4B06A] backdrop-blur-md bg-black/30 px-4 py-2 rounded-[12px] text-sm md:text-base font-semibold transition duration-300 hover:bg-[#D4B06A] hover:text-black"
        >
          📞 0930-804-172
        </a>

      </div>

    </div>

  </div>

</nav>

{/* 手機版選單 */}
<div
  id="mobile-menu"
  className="hidden md:hidden fixed top-[110px] left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-white/10"
>

  <div className="flex flex-col px-6 py-6 gap-5 text-lg font-medium">

    <a
  href="#about"
  className="hover:text-[#D4B06A]"
  onClick={() => {
    const menu = document.getElementById("mobile-menu")
    menu?.classList.add("hidden")
  }}
>
  關於我們
</a>

    <a
      href="#services"
      className="hover:text-[#D4B06A]"
      onClick={() => {
        const menu = document.getElementById("mobile-menu")
        menu?.classList.add("hidden")
      }}
    >
      服務項目
    </a>

    <a
  href="#cases"
  className="hover:text-[#D4B06A]"
  onClick={() => {
    const menu = document.getElementById("mobile-menu")
    menu?.classList.add("hidden")
  }}
>
  施工案例
</a>

    <a
      href="#contact"
      className="hover:text-[#D4B06A]"
      onClick={() => {
        const menu = document.getElementById("mobile-menu")
        menu?.classList.add("hidden")
      }}
    >
      聯絡我們
    </a>

  </div>

</div>
      {/* HERO */}
      <section id="top" className="relative h-screen flex items-center justify-center pt-32 md:pt-0">

        <div className="absolute inset-0">
          <Image
            src="/images/villa.jpg"
            alt="villa"
            fill
            className="object-cover brightness-[0.35]"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl">

          <p className="tracking-[6px] text-[#D4B06A] mb-5">
            WATERPROOF ENGINEERING
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
  <span className="text-cyan-300">防水</span>
  ・
  <span className="text-rose-300">隔熱</span>
  專業施工
  <br />
  細緻工法・長效防護
</h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            專營屋頂防水、外牆防水、浴室漏水、
            隔熱工程與抓漏施工，
            以精品級工法打造高品質住宅防護。
          </p>

          <div className="flex flex-wrap justify-center gap-5">
<a
  href="https://line.me/ti/p/~ruoruo075"
  target="_blank"
  className="px-10 py-4 rounded-full bg-[#D4B06A] text-black font-bold hover:scale-105 duration-300"
>
  免費詢價
</a>
  
            <a
              href="#cases"
              className="px-10 py-4 rounded-full border border-white/20 hover:bg-white/10 duration-300"
            >
              施工案例
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
  id="about"
  className="scroll-mt-32"
>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <div>
            <p className="text-[#D4B06A] tracking-[4px] mb-4">
              ABOUT US
            </p>

            <h2 className="text-5xl font-bold mb-8">
              關於我們
            </h2>

            <p className="text-gray-300 leading-loose text-lg">
              佳禹實業有限公司專營各式防水、
              隔熱、抓漏與屋頂工程，
              擁有多年施工經驗與專業團隊，
              以高規格材料與精緻工法，
              提供住宅、透天別墅與商業空間
              最完善的工程品質。
            </p>
          </div>

          <div className="relative h-[500px] rounded-[40px] overflow-hidden border border-[#D4B06A]/20">
            <Image
              src="/images/villa.jpg"
              alt="work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
  id="services"
  className="scroll-mt-32"
>

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            SERVICES
          </p>

          <h2 className="text-5xl font-bold mb-16">
            服務項目
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

  {[
    {
      title: "屋頂防水",
      desc: "採用玻璃纖維毯切骨氈施作，具有超強抗拉強度、耐候性極佳、防腐抗裂、抗植物根系穿透四大核心優勢。它能與防水塗料緊密結合，形成一體化的高強度屏障，是現代屋頂、地下室、水池等工程的理想防水材料，防止龜裂滲水，延長建築壽命。"
    },

    {
      title: "外牆防水",
      desc: "專業外牆裂縫防水施工，有效阻隔雨水滲透與室內壁癌問題。"
    },

    {
      title: "浴室漏水",
      desc: "免敲磚處理浴室滲漏問題，正常情況下施工完畢後48小時可以正常使用浴室。"
    },

    {
      title: "隔熱工程",
      desc: "大幅降低室內溫度與日曬熱能，提高居住舒適度，大樓或透天甚至是屋頂鐵皮皆有明顯效果。"
    }

  ].map((item, index) => (

    <div
      key={index}
      className="bg-[#111111] border border-white/10 rounded-[30px] p-10 hover:border-[#D4B06A]/40 duration-500"
    >

      <h3 className="text-2xl font-bold mb-5">
        {item.title}
      </h3>

      <p className="text-gray-400 leading-loose">
        {item.desc}
      </p>

    </div>

  ))}

</div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-[#111111]">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            PROCESS
          </p>

          <h2 className="text-5xl font-bold mb-16">
            施工流程
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "現場勘查",
              "問題分析",
              "專業施工",
              "完工驗收",
            ].map((step, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[20px] p-5 md:p-10 min-h-[160px] md:min-h-[300px]"
              >
                <p className="text-[#D4B06A] text-3xl md:text-5xl font-black mb-4">
                  0{index + 1}
                </p>

                <h3 className="text-lg md:text-2xl font-bold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      

      {/* PRICE */}
      <section className="py-28 bg-[#111111]">

        <div className="max-w-5xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            PRICE ESTIMATE
          </p>

          <h2 className="text-5xl font-bold mb-16">
            工程價格試算
          </h2>

          <div className="bg-[#1A1A1A] border border-[#D4B06A]/20 rounded-[40px] p-10">

            <select
              value={form.service}
              onChange={(e) =>
                setForm({
                  ...form,
                  service: e.target.value,
                })
              }
              className="w-full bg-black border border-white/10 rounded-2xl p-5 mb-10"
            >
              <option value="">
                請選擇施工項目
              </option>

              <option value="防水">
                防水工程
              </option>

              <option value="隔熱">
                隔熱工程
              </option>

              <option value="防水+隔熱">
                防水＋隔熱
              </option>

              <option value="浴室漏水">
                浴室漏水
              </option>
            </select>

            {form.service !== "浴室漏水" &&
              form.service !== "" && (
                <>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={form.size}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        size: Number(e.target.value),
                      })
                    }
                    className="w-full"
                  />

                  <p className="text-2xl mt-8">
                    施工坪數：
                    <span className="text-[#D4B06A] font-bold">
                      {form.size} 坪
                    </span>
                  </p>
                </>
              )}

            <div className="mt-12 bg-black rounded-[30px] p-10 border border-white/10">

              <h3 className="text-5xl font-black text-[#D4B06A]">
                NT$ {calculatePrice()}
              </h3>

              <p className="text-gray-400 mt-5">
                * 實際價格依現場狀況報價
              </p>
            </div>
          </div>
        </div>
      </section>

            {/* REVIEWS */}
      <section className="py-28 bg-black">

        <div className="max-w-7xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            REVIEWS
          </p>

          <h2 className="text-5xl font-bold mb-16">
            客戶評價
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "施工非常細心，品質很好。",
              "老闆專業度高，價格透明。",
              "完工後效果非常滿意。",
            ].map((review, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-white/10 rounded-[30px] p-10"
              >
                <p className="text-gray-300 leading-loose">
                  {review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/*施工案例*/}
<section
  id="cases"
  className="py-28 bg-black"
>
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-[#D4B06A] tracking-[4px] mb-4">
      PROJECTS
    </p>

    <h2 className="text-4xl md:text-5xl font-black mb-16">
      施工案例
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="overflow-hidden rounded-[30px]">
        <Image
          src="/images/roof1.jpg"
          alt="roof1"
          width={800}
          height={600}
          className="w-full h-[320px] object-cover hover:scale-105 duration-500"
        />
      </div>

      <div className="overflow-hidden rounded-[30px]">
        <Image
          src="/images/roof2.jpg"
          alt="roof2"
          width={800}
          height={600}
          className="w-full h-[320px] object-cover hover:scale-105 duration-500"
        />
      </div>

      <div className="overflow-hidden rounded-[30px]">
        <Image
          src="/images/roof3.jpg"
          alt="roof3"
          width={800}
          height={600}
          className="w-full h-[320px] object-cover hover:scale-105 duration-500"
        />
      </div>

      <div className="overflow-hidden rounded-[30px]">
        <Image
          src="/images/roof4.jpg"
          alt="roof4"
          width={800}
          height={600}
          className="w-full h-[320px] object-cover hover:scale-105 duration-500"
        />
      </div>

    </div>
  </div>
</section>
      {/* FAQ */}
      <section className="py-28 bg-[#111111]">

        <div className="max-w-5xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mb-16">
            常見問題
          </h2>

          <div className="space-y-6">

            {[
  {
    q: "防水工程可以維持多久？",
    a: "依施工位置與材料不同，一般可維持 5～10 年以上。"
  },

  {
    q: "施工需要多久時間？",
    a: "依坪數與工程內容不同，通常約 1～3 天完成。"
  },

  {
    q: "是否提供保固？",
    a: "我們提供完整施工保固，詳細年限依工程內容說明。"
  },

  {
    q: "哪些地區在服務範圍內？",
    a: "目前主要服務範圍為屏東、高雄及台南，其他地區可先 LINE 詢問。"
  }
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[25px] p-8"
              >
                <h3 className="text-xl font-bold mb-4">
  {faq.q}
</h3>

<p className="text-gray-400 leading-loose">
  {faq.a}
</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-28 bg-black"
      >

        <div className="max-w-4xl mx-auto px-6">

          <p className="text-[#D4B06A] tracking-[4px] mb-4">
            CONTACT
          </p>

          <h2 className="text-5xl font-bold mb-16">
            免費線上估價
          </h2>

          <div className="bg-[#111111] border border-white/10 rounded-[40px] p-10">

            <div className="grid md:grid-cols-2 gap-6 mb-6">

              <input
                type="text"
                placeholder="姓名"
                className="bg-black border border-white/10 rounded-2xl p-5"
                onChange={(e) =>
                  setForm({
                    ...form,
                    from_name: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="聯絡電話"
                className="bg-black border border-white/10 rounded-2xl p-5"
                onChange={(e) =>
                  setForm({
                    ...form,
                    phone: e.target.value,
                  })
                }
              />
            </div>

            <textarea
              placeholder="需求內容"
              rows={6}
              className="w-full bg-black border border-white/10 rounded-2xl p-5 mb-8"
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
            ></textarea>

            <button
              onClick={sendEmail}
              className="w-full py-5 rounded-full bg-[#D4B06A] text-black font-bold text-lg hover:scale-[1.02] duration-300"
            >
              立即送出詢價
            </button>
          </div>
        </div>
      </section>

      {/* FLOAT BUTTONS */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

        <a
          href="https://facebook.com/share/1cMmG1FaAL/?mibextid=wwXIfr"
          target="_blank"
          className="px-5 py-3 md:px-8 md:py-4 rounded-full bg-[#1877F2]/70 backdrop-blur-md text-white text-sm md:text-lg font-bold shadow-2xl"
        >
          FB 施工案例
        </a>

        <a
          href="https://line.me/ti/p/@637zdsjd"
          target="_blank"
          className="px-5 py-3 md:px-8 md:py-4 rounded-full bg-[#06C755]/70 backdrop-blur-md text-white text-sm md:text-lg font-bold shadow-2xl"
        >
          LINE 免費詢價
        </a>
      </div>

    </main>
  );
}
