// client side code
// const myData = require('./private/data/rapperData');

document.querySelector("button").addEventListener("click", getRapName);

// Search bar -----------
// async function getRapName() {
//   const rapName = document.querySelector("input").value;
//   try {
//     const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`);
//     console.log(res);
//     const data = await res.json();

//     console.log(data);
//     document.querySelector("h2").innerText = data.birthName;
//   } catch (err) {
//     console.log(err);
//   }
// }

// Fill in a drop down list.

let rappers = {
  "21 savage": {
    age: 28,
    birthName: "Shéyaa Bin Abraham-Joseph",
    birthLocation: "London, England",
    netWorth: "12m",
    bestSong: "X",
  },
  "chance the rapper": {
    age: 27,
    birthName: "Chancelor Johnathan Bennett",
    birthLocation: "Chicago, USA",
    netWorth: "25m",
    bestSong: "Cocoa Butter Kisses",
  },
  unknown: {
    age: "unknown",
    birthName: "unknown",
    birthLocation: "unknown",
    netWorth: "unknown",
    bestSong: "unknown",
  },
  "tupac shakur": {
    age: 25,
    birthName: "Tupac Amaru Shakur",
    birthLocation: "East Harlem, USA",
    netWorth: "200k",
    bestSong: "Hit Em Up",
  },
  "ice cube": {
    age: 51,
    birthName: "O'Shea Jackson",
    birthLocation: "Crenshaw, USA",
    netWorth: "160m",
    bestSong: "No Vaseline",
  },
  "method man": {
    age: 50,
    birthName: "Clifford Smith Jr.",
    birthLocation: "Hempstead, USA",
    netWorth: "14m",
    bestSong: "7th Chamber",
  },
  drake: {
    age: 34,
    birthName: "Aubrey Drake Graham",
    birthLocation: "Toronto, CAD",
    netWorth: "180m",
    bestSong: "God's Plan",
  },
  "Kendrick Lamar": {
    age: 33,
    birthName: "Kendrick Lamar Duckworth",
    birthLocation: "Compton, USA",
    netWorth: "75m",
    bestSong: "Money Trees",
  },
  nosewall: {
    age: 99,
    birthName: "Nolan Nordwall",
    birthLocation: "unknown",
    netWorth: "unknown",
    bestSong: "Kool Aid Kid Remix",
  },
  "the notorious b.i.g.": {
    age: 24,
    birthName: "Christopher George Latore Wallace",
    birthLocation: "Brooklyn, USA",
    netWorth: "10m",
    bestSong: "Big Poppa",
  },
};

var select = document.getElementById("selectRapper");

console.log(rappers);

for (x in rappers) {
  console.log(x);
  var el = document.createElement("option");
  el.text = x;
  el.value = x;
  select.appendChild(el);
}

async function getRapName() {
  const rapName = document.querySelector("select").value;
  try {
    const res = await fetch(`http://localhost:8000/api/rappers/${rapName}`);
    console.log(res);
    const data = await res.json();

    console.log(data);
    document.querySelector("h2").innerText = data.birthName;
  } catch (err) {
    console.log(err);
  }
}

$(document).ready(function () {
  $("#interBtn").click(function (e) {
    // don't allow the anchor to visit the link
    e.preventDefault();

    $.ajax({
      url: "/api/tableHTML",
      dataType: "html",
      type: "GET",
      data: { format: "html-list" },
      success: function (data) {
        console.log("SUCCESS HTML:", data);
        $("#content").html(data);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        $("#p1").text(jqXHR.statusText);
        console.log("ERROR:", jqXHR, textStatus, errorThrown);
      },
    });
  });
});
