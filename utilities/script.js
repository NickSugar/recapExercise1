var mov2016 = {
  "movies": {
    "deadPool": {
      "cast": [
        "Ryan Reynolds as Wade_Deadpool",
        "Morena Baccarin as Vanessa",
        "Stan Lee as Strip Club DJ"
      ],
      "boxOffice": {
        "budget": "$58,000,000",
        "openingWeekend": "$135,050,000",
        "gross": "$362,517,095"
      }
    },
    "X-Men: Apocalypse": {
      "cast": [
        "James McAvoy as Professor Charles Xavier",
        "Michael Fassbender as Erik Lehnsherr_Magneto",
        "Jennifer Lawrence as Raven_Mystique"
      ],
      "boxOffice": {
        "budget": "N/A",
        "openingWeekend": "N/A",
        "gross": "N/A"
      }
    }
    
  }
};

function cast() {
	alert(mov2016.movies.deadPool.cast);
};

function printJson() {
	var x = mov2016.movies.deadPool.boxOffice.budget;
	document.getElementById('print').innerHTML = x;
};


