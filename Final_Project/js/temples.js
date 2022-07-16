const requestURL = 'https://prodegy03.github.io/wdd230/Final_Project/temples.json';
const cards = document.querySelector('div.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  
  const Temples = jsonObject['Temples'];
  Temples.forEach(displayTemples);
});

  function displayTemples(Temples) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let Name = document.createElement('p');
    let Dedication = document.createElement('p');
    let Location = document.createElement('p');
    let Appointment = document.createElement('p');
    let Email = document.createElement('p');
    let Phone = document.createElement('p');
    let Address = document.createElement('p');
    let Services = document.createElement('p');
    let Closures = document.createElement('p');
    let History = document.createElement('p');
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = Temples.Name;
    Name.innerHTML = `Name: ${Temples.Name}`;
    Dedication.innerHTML = `Dedication: ${Temples.Dedication}`;
    Location.innerHTML = `Location: ${Temples.Location}`;
    Appointment.innerHTML = `Appointment: ${Temples.Appointment}`;
    Email.innerHTML = `Email: ${Temples.Email}`;
    Phone.innerHTML = `Phone: ${Temples.Phone}`;
    Address.innerHTML = `Address: ${Temples.Address}`;
    Services.innerHTML = `Services: ${Temples.Services}`;
    Closures.innerHTML = `Closures: ${Temples.Closures}`;
    History.innerHTML = `History: ${Temples.History}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', Temples.Image);
    portrait.setAttribute('alt', `Portrait of ${Temples.Name}  - ${Temples.Dedication}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(Name);
    card.appendChild(Dedication);
    card.appendChild(Location);
    card.appendChild(Appointment);
    card.appendChild(Email);
    card.appendChild(Phone);
    card.appendChild(Address);
    card.appendChild(Services);
    card.appendChild(Closures);
    card.appendChild(History);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }