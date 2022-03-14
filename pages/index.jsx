import swr from "../lib/swr";
import Deprem from "../components/deprem";

import ReactLoading from "react-loading";

export default function Home() {
  const { data: _data } = swr("api/deprem");
  const data = _data ? _data : null;
  let veri;
  return (
    <>
      {data ? (
        <center>
          {" "}
          <div className="w-[1100px] py-10 transition-all duration-300">
            <div className="text-center">
              <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-300">
                Türkiye Bölgesel Deprem İstatisliği
              </h1>
              <h1 className="text-center font-bold leading-9 tracking-tight text-gray-300">
                Değerli ziyaretciler, sitemizde bulunan tüm veriler{" "}
                <a
                  href="http://www.koeri.boun.edu.tr/scripts/lst7.asp"
                  className="text-blue-400 hover:text-green-400"
                >
                  Boğaziçi Üniversitesi Kandilli Rasathanesi ve Deprem Araştırma
                  Enstitüsü Bölgesel Deprem-Tsunami İzleme Ve Değerlendirme
                  Merkezi
                </a>{" "}
                ve{" "}
                <a
                  href="https://deprem.afad.gov.tr/"
                  className="text-blue-400 hover:text-green-400"
                >
                  Afad
                </a>{" "}
                alınmıştır resmi verilerdir.
              </h1>
              <h1 className="hover:text-green-400 text-blue-400 text-xl font-bold leading-9 tracking-tight">
                <a href="https://twitter.com/search?q=deprem">#deprem</a>
              </h1>
            </div>
            <Deprem depremler={data.data} data={data} />
            <div className="container w-[1000px">
              <center>
                <p className="text-center text-gray-200 float-left">
                  © 2021, Roxza
                </p>
                <p className="text-center text-white float-right">
                  Developed with ❤️ by{" "}
                  <a className="hover:text-blue-400" href="https://roxza.me">
                    Roxza
                  </a>
                </p>
              </center>
              <br />
            </div>
          </div>
        </center>
      ) : (
        <div className="flex flex-wrap content-center mt-[350px] justify-center w-200 h-200">
          <ReactLoading type="spin" color="#fff" />
        </div>
      )}
    </>
  );
}
