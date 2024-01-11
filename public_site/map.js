mapboxgl.accessToken =
  "pk.eyJ1IjoiamFheWNhbGkiLCJhIjoiY2t4ZG9tZ3M4MWt0MDJvb2M3N3lwZjlhayJ9.AvxPrq85qPfHhXwOc33Oaw";


let zoomInterval = null
if (document.documentElement.clientWidth > 1200) {
  zoomInterval = 3.75
} else if (document.documentElement.clientWidth > 1025 && document.documentElement.clientWidth < 1199) {
  zoomInterval = 3.3
} else if (document.documentElement.clientWidth > 769 && document.documentElement.clientWidth < 1024) {
  zoomInterval = 3
} else if (document.documentElement.clientWidth > 481 && document.documentElement.clientWidth < 768) {
  zoomInterval = 2.6
}




const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-96, 37.9],
  zoom: zoomInterval,
});
//holds CG Units
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-74.883, 38.945],
      },
      properties: {
        dates: "April 2016 - June 2020",
        title: "USCG TRACEN Cape May (Boot Camp)",
        description:
          "A demanding 8-week program where recruits looking to join the United States Coast Guard are tested physically and mentally. During the extensive 8 weeks recruits are expected to perform in physical and classroom challenges in constant stressful situations. This is where recruits will adapt and learn the necessary team building and problem solving needed to survive in the Coast Guard fleet alongside the other USCG personnel. ",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-123.41, 48.139],
      },
      properties: {
        dates: "June 2016 - Feburary 2017",
        title: "USCG Cutter Active",
        description:
          "Nicknamed “Little Tough Guy” this unit's missions involved search and rescue, law enforcement and drug interdiction. I served on the deck team which involved standing watch and maintenance around the boat. While preforming these duties, in my free time I went on to obtain a qualification normally held by people two ranks above me. I knew this qualification would help me in my future career and was the only E-2 at the unit that held this qualification.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-76.484, 37.22],
      },
      properties: {
        dates: "Feburary 2017 - July 2017",
        title: "USCG TRACEN Yorktown",
        description:
          "Training for Boatswain's Mate is accomplished through 14 weeks of intensive training at BM “A” School. During those 14 weeks students are exposed to many facets of the Boatswain’s Mate rating. Boatswain's Mates are most versatile member of the Coast Guard's operational team, they are capable of performing almost any task, including supervising all personnel assigned to a ship's work force or small boat station.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-69.949, 41.671],
      },
      properties: {
        dates: "July 2017 - April 2020",
        title: "USCG Station Chatham",
        description:
          "A USCG surf station made famous in the Disney Film “The Finest Hours.” While stationed at this unit, I held various leadership and mission critical positions including Officer of the Day, Boarding Officer and Coxswain. These positions were responsible to lead, and direct designated teams or crews needed for the situation. These teams included, boat crews led by the Coxswain, law enforcement teams led by the Boarding Officer, or directing the whole unit which is done by the Officer of the Day.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-79.937, 32.846],
      },
      properties: {
        dates: "July 2017 - April 2020",
        title: "Federal Law Enforcement Training Center (FLETC)",
        description:
          "For 6 rigorous weeks, members learn and carry out the duties of a USCG Boarding Officer. During these 6 weeks members are trained in international laws and treaties, different jurisdictions and critical stress management and decision making in deadly force situations. After graduation, boarding officers are responsible for the training, supervising, and directing Coast Guard Maritime Law Enforcement teams in a multitude of law enforcement events. ",
      },
    },
  ],
};

// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3>
           <h4>${feature.properties.dates}</h4>
           <p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
}
//Green Coast Addition
const el = document.createElement("div");
el.className = "GC-marker";

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
  .setLngLat([-118.146, 33.801])
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>GreenCoast Hydroponics</h3>
         <h4>August 2020 - Jun 2021</h4>
         <p>While working here, I was part of a two-person team serving <strong>11 store locations, a headquarters and a work from home fleet.</strong> During my time I worked on major projects involving point of sales deployment, building out documentation for new systems and training oncoming personnel. While working on these projects, I was the sole technician working the helpdesk for the company. After we added one more person to our team, I stepped into the training role to bring this person up to speed on the systems. In less than 2 months I was able to train the newly hired personnel to confidently solve tickets submitted to the helpdesk.</p>`
      )
  )
  .addTo(map);
