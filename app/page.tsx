export default function Home() {
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
            <a href="#" className="hover:text-blue-600">首頁</a>
            <a href="#" className="hover:text-blue-600">關於我們</a>
            <a href="#" className="hover:text-blue-600">服務項目</a>
            <a href="#" className="hover:text-blue-600">施工案例</a>
            <a href="#" className="hover:text-blue-600">聯絡我們</a>
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

      {/* Hero Section */}
      <section className="bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-28">
          
          <p className="text-lg mb-4 text-slate-300">
            高雄・台南・屏東
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            專業防水隔熱工程
          </h2>

          <p className="text-xl text-slate-200 mb-8 leading-relaxed">
            屋頂防水｜浴室防水｜地下室止水｜隔熱工程
            <br />
            免費估價・專業施工・品質保固5年
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold">
              立即估價
            </button>

            <button className="bg-white text-slate-700 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold">
              聯絡我們
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-4xl font-bold text-slate-700 mb-8">
            關於佳禹
          </h3>

          <p className="text-lg leading-9 text-gray-700">
            佳禹實業有限公司成立於1998年，
            專營防水施工、隔熱工程、地下室止水、
            耐磨地坪與抗UV壓克力工程。
            <br /><br />
            防水，是所有工程中最重要的一環，
            做對了你不會有感覺，
            做錯了會讓你痛苦很多年。
            <br /><br />
            我們提供完整的防水工法評估與施工服務，
            從漏水源頭檢測、工法規劃、
            專業施工到完工保固，
            致力讓每一棟建築真正滴水不漏。
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-4xl font-bold text-slate-700 mb-12">
            服務項目
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "屋頂防水",
              "屋頂隔熱",
              "浴室防水",
              "地下室止水",
              "耐磨地坪",
              "抗UV壓克力",
            ].map((service) => (
              <div
                key={service}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition"
              >
                <h4 className="text-2xl font-bold text-slate-700 mb-4">
                  {service}
                </h4>

                <p className="text-gray-600 leading-7">
                  提供專業施工與完整工法評估，
                  依現場狀況規劃最適合的施工方案。
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="bg-slate-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-4xl font-bold mb-6">
            品質保固 5 年
          </h3>

          <p className="text-xl text-slate-300 leading-9">
            專業施工流程｜
            嚴選防水材料｜
            完整售後服務
          </p>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <h3 className="text-4xl font-bold text-slate-700 mb-10">
            聯絡我們
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-6 text-lg">

              <div>
                <p className="font-bold text-slate-700">電話 / LINE</p>
                <p>0968-305-061</p>
              </div>

              <div>
                <p className="font-bold text-slate-700">地址</p>
                <p>高雄市鳥松區松埔路37巷49號</p>
              </div>

              <div>
                <p className="font-bold text-slate-700">服務地區</p>
                <p>高雄・台南・屏東</p>
              </div>

            </div>

            <div className="bg-gray-100 rounded-2xl p-8">

              <h4 className="text-2xl font-bold mb-6 text-slate-700">
                免費預約現場勘查
              </h4>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="您的姓名"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="聯絡電話"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <textarea
                  placeholder="需求內容"
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
                  送出預約
                </button>

              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}