function collect_ratings() {
  var ratings = {
    count: 0,
    sum: 0,
    average: 0,
  };
  let rating = 0;
  const elements = document.querySelectorAll(".rating");

  elements.forEach((element) => {
    rating = replace(element.id);
  });
}
