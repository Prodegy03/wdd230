const requestURL = 'wdd230\Chamber\data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
  
  const buisness = jsonObject['buisness'];
  buisness.forEach(displaybuisness);
});

  function displaybuisness(buisness) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let membership = document.createElement('p');
    let website = document.createElement('p');
    let email = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = buisness.name + ' ' + buisness.membership;
    buisnessname.innerHTML = `Buisness Name: ${buisness.name}`;
    membership.innerHTML = `Membership: ${buisness.membership}`;
    website.innerHTML =`Website: ${buisness.website}`;
    email.innerHTML =`Email: ${buisness.email}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', buisness.imageurl);
    portrait.setAttribute('alt', `Portrait of ${buisness.name} ${buisness.membership}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(buisnessname);
    card.appendChild(membership);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
  