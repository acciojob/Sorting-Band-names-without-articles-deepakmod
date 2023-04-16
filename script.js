// Sample input array of band names
const bandNames = ["The Beatles", "Radiohead", "a-ha", "Nirvana", "Queen", "Anthrax"];

// Function to remove articles from the beginning of a string
function removeArticles(str) {
  const articles = ["a", "an", "the"];
  const words = str.split(" ");
  if (articles.includes(words[0].toLowerCase())) {
    words.shift();
  }
  return words.join(" ");
}

// Sort the band names in lexicographic order
const sortedBandNames = bandNames.sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Create a new <ul> element with id='band'
const ul = document.createElement("ul");
ul.setAttribute("id", "band");

// Add <li> elements for each band name
sortedBandNames.forEach(function(band) {
  const li = document.createElement("li");
  li.textContent = band;
  ul.appendChild(li);
});

// Add the <ul> element to the document body
document.body.appendChild(ul);
