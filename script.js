// NAV TOGGLE
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// BIKE MATCHER
document.getElementById('bikeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const age = +document.getElementById('age').value;
  const height = +document.getElementById('height').value;
  const weight = +document.getElementById('weight').value;
  const experience = document.getElementById('experience').value;
  const style = document.getElementById('style').value;

  document.getElementById('debug').innerText =
    `Form submitted → Age ${age}, Height ${height}, Weight ${weight}, Experience ${experience}`;

  fetch('bikes.json')
    .then(res => {
      if (!res.ok) throw new Error('Could not load bikes.json');
      return res.json();
    })
    .then(bikes => {
      const matches = bikes.filter(b =>
        b.style === style &&
        b.experience === experience &&
        weight >= b.minWeight &&
        weight <= b.maxWeight
      );
      if (matches.length) {
        document.getElementById('result').innerHTML = 
          '<ul>' + matches.map(b => `<li>${b.brand} ${b.model} (${b.engine}, ${b.year})</li>`).join('') + '</ul>';
      } else {
        document.getElementById('result').innerHTML = '<p>No bikes match your criteria.</p>';
      }
    })
    .catch(err => {
      document.getElementById('debug').innerText += `\nError: ${err.message}`;
    });
});