import React, { useEffect } from "react";

export default function Blogs() {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  const blogs = [
    {
      id: 1,
      title: "Top 10 Hiking Trails in Pakistan (Full Guide)",
      banner:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=60",
      date: "20 November 2024",
      author: "NatureHike Team",
      intro:
        "Pakistan duniya ke sab se khoobsurat aur adventurous hiking trails ka ghar hai. Chahe aap beginner ho ya expert trekker, yahan har level ke liye perfect routes milte hain.",
      content: [
        "1. Margalla Hills – Islamabad ka most accessible beginner trail.",
        "2. Mushkpuri Top – Nathia Gali ka scenic snow trail.",
        "3. Miranjani Track – Tough climb with 360° panoramic view.",
        "4. Pipeline Track – Family-friendly and relaxing valley walk.",
        "5. Fairy Meadows Trek – Nanga Parbat ka royal view.",
        "6. Skardu Local Trails – Lakes, valleys, and rich landscapes.",
        "7. Passu Glacier Trek – Adventure-packed glacier route.",
        "8. Rakaposhi Base Camp – Perfect beginner base camp trek.",
        "9. Khaplu & Hushe Valley Trails – Pure untouched beauty.",
        "10. Patundas Trek – One of Pakistan’s most photogenic trails.",
      ],
    },
    {
      id: 2,
      title: "Camping Tent Buying Guide (Pakistan Weather Edition)",
      banner:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1200&q=60",
      date: "10 November 2024",
      author: "NatureHike Experts",
      intro:
        "Tent Pakistan ke weather ke hisaab se choose karna bohot zaroori hota hai. Mausam rapidly change hota hai, isliye waterproofing, fabric aur ventilation important hote hain.",
      content: [
        "✔ Tent Size – Solo, 2-person, 3-person, 4-person tents.",
        "✔ Waterproof Rating – 2000mm se 4000mm recommended.",
        "✔ Double Layer System – Rainfly + breathable inner tent.",
        "✔ Ventilation – Mesh windows to prevent condensation.",
        "✔ Weight – 1kg – 2.5kg ideal for backpacking.",
        "✔ Material – Anti-tear polyester fabric.",
        "✔ Best Picks – NatureHike Cloud Up / Star River / Vik tents.",
      ],
    },
    {
      id: 3,
      title: "Winter Trekking Full Gear Checklist (2024 Updated)",
      banner:
        "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=60",
      date: "05 December 2024",
      author: "NH Winter Team",
      intro:
        "Winter trekking adventure-filled hoti hai lekin proper winter gear ke baghair extremely dangerous bhi ho sakti hai. Isliye full checklist yahan hai.",
      content: [
        "🧥 Clothing Layers – Thermal + Fleece + Waterproof Shell.",
        "🥾 Shoes – High ankle waterproof trekking boots.",
        "🧤 Gloves – Waterproof + insulated winter gloves.",
        "❄ Sleeping Bag – -10°C to -20°C temperature rated.",
        "⛺ Mat – Insulated foam or inflatable sleeping mat.",
        "🎒 Backpack – 40L – 60L with chest+waist support.",
        "🔦 Headlamp – 200+ lumens night trekking light.",
        "🔥 Emergency Kit – Firestarter, survival blanket, whistle.",
      ],
    },
    {
      id: 4,
      title: "Best Camping Spots in Pakistan (Must Visit)",
      banner:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60",
      date: "18 October 2024",
      author: "NatureHike Pakistan",
      intro:
        "Pakistan ke camping spots duniya bhar mein mashhoor hain. Yahan ki natural beauty aur peaceful environment campers ko attract karta hai.",
      content: [
        "🌲 Fairy Meadows – Most iconic camping spot.",
        "🏞 Shogran – Forest camping heaven.",
        "❄ Deosai Plains – Land of Giants.",
        "🏕 Kumrat Valley – Waterfalls + forests.",        
        "🌄 Skardu – Desert + lakes combo camping.",
      ],
    },
    {
      id: 5,
      title: "Top 7 Backpacking Tips for Pakistan Travelers",
      banner:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=60",
      date: "02 September 2024",
      author: "Travel Tips Team",
      intro:
        "Pakistan mein backpacking sahi planning se easy aur budget-friendly ho sakti hai. Yeh tips aapko safe aur smooth travel ensure karte hain.",
      content: [
        "🎒 Light packing – Only essentials.",
        "💧 Hydration – Always keep water.",
        "🗺 Maps – Offline maps must.",
        "🍲 Local food – Cheap + delicious.",
        "🚕 Transport – Learn local routes.",
        "🏨 Guesthouses – Affordable stay.",
      ],
    },
    {
      id: 6,
      title: "Essential Photography Tips for Mountain Travelers",
      banner:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=60",
      date: "12 August 2024",
      author: "NH Media Team",
      intro:
        "Mountains photography ka best subject hote hain. Lekin perfect shots lene ke liye lighting, angles aur gear ka sahi use zaroori hai.",
      content: [
        "📸 Golden hour – Best lighting.",
        "🏔 Wide lens – Landscape depth.",
        "📍 Stable tripod – Sharp shots.",
        "🎒 Carry extra batteries.",
        "🌫 Weather check before shooting.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-14 px-4 md:px-12">
      <h1 className="text-5xl font-bold text-center mb-14 text-gray-900 tracking-tight">
        NatureHike Traveling – Travel Blogs
      </h1>

      <div className="max-w-5xl mx-auto space-y-16">
        {blogs.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition duration-500 border border-gray-200"
          >
            <img
              src={item.banner}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-8">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {item.date} • {item.author}
              </p>

              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                {item.intro}
              </p>

              <div className="bg-gray-100 p-5 rounded-xl">
                <ul className="list-disc pl-6 space-y-2 text-gray-700 text-base">
                  {item.content.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
