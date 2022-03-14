import React from "react";

export default function deprem(props) {
  const { depremler, data } = props;
  return (
    <>
      <div className="py-10 mr-8 items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="p-[6px] rounded-lg space-y-2">
            <div className="bg-[#080808] hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px]  transition-all duration-200 bg-brand-black rounded-lg">
              <div className="">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-300 sm:text-xl md:text-2xl">
                  Son büyük deprem
                </h1>
              </div>
              <div className="text-white text-center pt-2 text-xl">
                <p>
                  {data.enbuyukdeprem.lokasyon.split("(")[1]
                    ? data.enbuyukdeprem.lokasyon.split("(")[1].split(")")
                    : data.enbuyukdeprem.lokasyon}{" "}
                  - {data.enbuyukdeprem.mag}
                </p>
                <a href="#">
                  <span className="hover:text-blue-400">More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-[6px] rounded-lg space-y-2">
            <div className="bg-[#080808] hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px]  transition-all duration-200 bg-brand-black rounded-lg">
              <div className="">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-300 sm:text-xl md:text-2xl">
                  Son deprem
                </h1>
              </div>
              <div className="text-white text-center pt-2 text-xl">
                <p>
                  {data.sondeprem.sehir} - {data.sondeprem.kandilli}
                </p>
                <a href="#">
                  <span className="hover:text-blue-400">More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="p-[6px] rounded-lg space-y-2">
            <div className="bg-[#080808] hover:bg-[#101010] py-4 px-6 hover:-translate-y-[8px]  transition-all duration-200 bg-brand-black rounded-lg">
              <div className="">
                <h1 className="text-center text-xl font-bold tracking-tight text-gray-300 sm:text-xl md:text-2xl">
                  En derin deprem
                </h1>
              </div>
              <div className="text-white text-center pt-2 text-xl">
                <p>
                  {data.enderindeprem.lokasyon.split("(")[1]
                    ? data.enderindeprem.lokasyon.split("(")[1].split(")")
                    : data.enderindeprem.lokasyon}{" "}
                  - {data.enderindeprem.depth}
                  km
                </p>
                <a href="#">
                  <span className="hover:text-blue-400">More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-20">
          <h1 className="py-4 ml-6 mr-2 text-2xl font-bold text-gray-300">
            Depremler
          </h1>
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="p-8 ml-6 mr-2">
              <div class="shadow-md sm:rounded-lg">
                <table class="min-w-full">
                  <thead class="bg-black">
                    <tr className="w-full">
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Tarih
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Saat
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Enlem
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Boylam
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Derinlik
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Büyüklük (KRDAE)
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Büyüklük (AFAD)
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Bölge
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left  uppercase text-gray-400"
                      >
                        Şehir
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {depremler.map((d) => (
                      <tr key={d.date} class="bg-[#101010] border-gray-700">
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-200">
                          {d.date.substring(0, 10)}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-200">
                          {d.time}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                          {d.enlem}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                          {d.boylam}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                          {d.derinlik}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-200">
                          {d.kandilli}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-200">
                          {d.afad}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-200">
                          {d.bolge}
                        </td>
                        <td class="py-4 px-6 text-sm  whitespace-nowrap text-gray-400">
                          {d.sehir}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
