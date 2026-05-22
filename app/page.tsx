"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Home() {
  const [size, setSize] = useState(10);

  const [form, setForm] = useState({
    from_name: "",
    phone: "",
    service: "",
    message: "",
  });

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
  },
  "gz8eA8pb1vpUT62y3"
);

      alert("詢價已送出！");
    } catch (error) {
      alert("送出失敗");
      console.log(error);
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-700">
              佳禹實業有限公司
            </h1>

            <p className="text-sm text-gray-500">
              專業防水・隔熱工程
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">
              首頁
            </a>

            <a href="#about" className="hover:text-blue-600">
              關於我們
            </a>

            <a href="#services" className="hover:text-blue-600">
              服務項目
            </a>

            <a href="#contact" className="hover:text-blue-600">
              聯絡我們
            </a>
          </nav>

          <div className="text-right">
            <p className="font-bold text-slate-700">
              0968-305-061
            </p>

            <p className="text-xs text-gray-500">
              免費諮詢專線
            </p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-100 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-slate-800">
            專業防水工程
          </h2>

          <p className="text-xl text-gray-600 mb-10">
            屋頂防水・外牆防水・地下室止水・抓漏工程
          </p>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg"
          >
            免費估價
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-slate-800">
          關於我們
        </h2>

        <p className="text-gray-600 leading-8 text-lg">
          佳禹實業有限公司專營各式防水工程、
          抓漏工程與隔熱施工，
          擁有多年施工經驗，
          提供專業評估與現場施工服務。
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            服務項目
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                屋頂防水
              </h3>

              <p className="text-gray-600">
                PU防水、彈泥防水、隔熱工程
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                外牆防水
              </h3>

              <p className="text-gray-600">
                外牆滲水修復、高壓灌注
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                地下室止水
              </h3>

              <p className="text-gray-600">
                依現場現況專業評估施工
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                抓漏工程
              </h3>

              <p className="text-gray-600">
                精準檢測漏水來源
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 價格試算 */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-slate-800">
          防水工程價格試算
        </h2>

        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <label className="block mb-4 font-bold">
            施工坪數
          </label>

          <input
            type="range"
            min="1"
            max="100"
            value={size}
            onChange={(e) =>
              setSize(Number(e.target.value))
            }
            className="w-full mb-6"
          />

          <div className="text-xl mb-4">
            目前坪數：
            <span className="font-bold text-blue-600">
              {size} 坪
            </span>
          </div>

          <div className="text-3xl font-bold text-green-600">
            預估價格：
            NT$ {size * 3500}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * 實際價格依現場狀況報價
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gray-50 py-20 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
            免費線上估價
          </h2>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold">
                  姓名
                </label>

                <input
                  type="text"
                  placeholder="請輸入姓名"
                  className="w-full border rounded-xl px-4 py-3"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      from_name: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold">
                  聯絡電話
                </label>

                <input
                  type="text"
                  placeholder="0912-345-678"
                  className="w-full border rounded-xl px-4 py-3"
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-semibold">
                工程項目
              </label>

              <select
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    service: e.target.value,
                  })
                }
              >
                <option>屋頂防水</option>
                <option>外牆防水</option>
                <option>地下室止水</option>
                <option>抓漏工程</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block mb-2 font-semibold">
                需求內容
              </label>

              <textarea
                rows={5}
                placeholder="請輸入需求"
                className="w-full border rounded-xl px-4 py-3"
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />
            </div>

            <button
              onClick={sendEmail}
              className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-bold"
            >
              送出詢價
            </button>
          </div>
        </div>
      </section>

      {/* LINE */}
      <a
        href="https://line.me/ti/p/@637zdsjd"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg"
      >
        LINE 免費詢價
      </a>
      <a
  href="https://www.facebook.com/share/18hEyVqFkS/?mibextid=wwXIfr"
  target="_blank"
  className="fixed bottom-24 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg"
>
  FB 施工案例
</a>
    </main>
  );
}
