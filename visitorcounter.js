// Credit to https://devppratik.hashnode.dev/website-visitor-counter-using-vanilla-javascript; edited to make it work on my website.

const KEY = `5a6ecbe4-da54-11ec-9d64-0242ac120002`;
const NAMESPACE = "webclass.uaschools.org/xie.3/Project4/";
const COUNT_URL = `https://api.countapi.xyz`;

const getCount = async () => {
  const response = await fetch(`${COUNT_URL}/get/${NAMESPACE}/${KEY}`);
  const data = await response.json();
};

const incrementCount = async () => {
  const response = await fetch(`${COUNT_URL}/hit/${NAMESPACE}/${KEY}`);
  const data = await response.json();
};

function populateVisitorCounter() {
  document.getElementById("visitors").innerText = data.value;
}

if (localStorage.getItem("hasVisited") == null) {
  incrementCount()
    .then(() => {
      localStorage.setItem("hasVisited", "true");
    })
    .catch((err) => console.log(err));
} else {
  getCount()
    .catch((err) => console.log(err));
}
