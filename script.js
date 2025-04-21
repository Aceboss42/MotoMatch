// Wait until the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bikeForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // 1. Read user input
    const experience = document.getElementById("experience").value;
    const style      = document.getElementById("style").value;

    // 2. Sample bike database (expand later)
    const bikes = [
      { brand: "Yamaha",     model: "YZ125",  year: 2000, cc: 125, type: "motocross", experience: "beginner" },
      { brand: "Yamaha",     model: "YZ250",  year: 2020, cc: 250, type: "motocross", experience: "intermediate" },
      { brand: "Yamaha",     model: "YZ450F", year: 2022, cc: 450, type: "motocross", experience: "expert" },

      { brand: "Kawasaki",   model: "KX100",  year: 2005, cc: 100, type: "motocross", experience: "beginner" },
      { brand: "Kawasaki",   model: "KX250",  year: 2019, cc: 250, type: "motocross", experience: "intermediate" },
      { brand: "Kawasaki",   model: "KX450",  year: 2021, cc: 450, type: "motocross", experience: "expert" },

      { brand: "Honda",      model: "CRF150R",year: 2007, cc: 150, type: "motocross", experience: "beginner" },
      { brand: "Honda",      model: "CRF250R",year: 2018, cc: 250, type: "motocross", experience: "intermediate" },
      { brand: "Honda",      model: "CRF450R",year: 2022, cc: 450, type: "motocross", experience: "expert" }
    ];

    // 3. Filter by user’s experience & riding style
    const recommended = bikes.filter(bike =>
      bike.experience === experience && bike.type === style
    );

    // 4. Build the display string
    let output;
    if (recommended.length) {
      output = "We recommend:\n";
      recommended.forEach(bike => {
        output += `• ${bike.brand} ${bike.model} (${bike.year}, ${bike.cc}cc)\n`;
      });
    } else {
      output = "Sorry, we don’t have a match for that combination yet.";
    }

    // 5. Show it on the page
    const resultEl = document.getElementById("result");
    resultEl.innerText = output.replace(/\n/g, "\n");
  });
});