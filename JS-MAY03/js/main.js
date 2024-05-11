// class Tour {
//   tourpackage = 10000;
//   #place = "manali";
// }

// const mytour = new Tour();
// console.log(mytour.#place);

function tour() {
  const tourpackage = 100000;
  const place = "manali";
  return {
    getready: () =>
      console.log(`get ready for tour with ${tourpackage} to ${place}`),
  };
}
const mtour = tour();
mtour.getready();
console.log(mtour.tourpackage);
