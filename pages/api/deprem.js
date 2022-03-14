import axios from "axios";
export default async function handler(req, res) {
  const veri = await axios.get("https://api.roxza.me/api/deprem");
  const data = veri.data;
  const veriler = [];
  data.kandilli.result.forEach((element) => {
    const date = `${element.date.substring(8, 10)}.${element.date.substring(
      5,
      7
    )}.${element.date.substring(0, 4)}${element.date.substring(10, 16)}`;
    const afad = data.afad.data.find((d) => d.time.substring(0, 16) == date);
    veriler.push({
      date: date,
      time: element.date.substring(10),
      enlem: element.lat,
      boylam: element.lat,
      derinlik: element.depth,
      kandilli: `${element.mag}`,
      afad: afad ? afad.m : "n/a",
      bolge: element.lokasyon.replace("-", " ").split("(")[0].split(")"),
      sehir: element.lokasyon.split("(")[1]
        ? element.lokasyon.split("(")[1].split(")")
        : element.lokasyon,
    });
  });
  res.json({
    data: veriler,
    sondeprem: veriler[0],
    enderindeprem: data.kandilli.result.sort((a, b) => {
      return b.depth - a.depth;
    })[0],
    enbuyukdeprem: data.kandilli.result.sort((a, b) => {
      return b.mag - a.mag;
    })[0],
  });
}
