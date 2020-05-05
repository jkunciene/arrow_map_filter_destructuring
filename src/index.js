import "./styles.css";

const manoMasyvas = ["pirmas", "antras", "trecias"];

const pervadintas = manoMasyvas.map((manoElementas, joIndex) => {
  return manoElementas + "numeris" + joIndex;
});
console.log(pervadintas);

const atrinktas = manoMasyvas.filter((manoElementas, joIndex) => {
  return manoElementas === "antras";
});
console.log(atrinktas);

const zmogus = {
  darbas: "gydytojas",
  vardas: "Sandra"
};
const { darbas } = zmogus;
console.log(darbas);
