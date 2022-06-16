// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
	const greetings = [
		'The great myth of our times is that technology is communication. - Libby Larsen',
		'Stay Hungry, Stay Foolish. - Steve Jobs',
		'你好，世界！',
		'Never memorize something that you can look up. ― Albert Einstein'
	];

	// Pick a random greeting.
	const greeting = greetings[Math.floor(Math.random() * greetings.length)];

	// Add it to the page.
	const greetingContainer = document.getElementById('greeting-container');
	greetingContainer.innerText = greeting;
}

/** Fetches the current date from the server and adds it to the page. */
async function showServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();
  
    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
}
  
async function getServerStats() {
    const responseFromServer = await fetch('/server-stats');
    // The json() function returns an object that contains fields that we can
    // reference to create HTML.
    const stats = await responseFromServer.json();
  
    const statsListElement = document.getElementById('server-stats-container');
    statsListElement.innerHTML = '';
  
    const index = Math.floor(Math.random() * stats.length);
    statsListElement.appendChild(
        createListElement(stats[index]));
  }
  
/** Creates an <li> element containing text. */
function createListElement(text) {
    const liElement = document.createElement('li');
    liElement.innerText = text;
    return liElement;
}

function createMap() {
    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 37.422, lng: -122.084}, zoom: 16});
}
