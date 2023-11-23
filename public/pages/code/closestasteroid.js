fetch('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key=CASZq2zBQc1vBOIOfMxhpsUpCyoT4vTRmImnqPVO')
		.then(response => response.json())
		.then(data => {
			// Get the closest asteroid at the moment
			const closestAsteroid = getClosestAsteroid(data);

			// Generate HTML code to display the asteroid information
			const asteroidInfoHTML = `
				<p>Name: ${closestAsteroid.name}</p>
				<p>Miss Distance: ${closestAsteroid.close_approach_data[0].miss_distance.kilometers} km</p>
				<p>Relative Velocity: ${closestAsteroid.close_approach_data[0].relative_velocity.kilometers_per_second} km/s</p>
				<p>Time of Closest Approach: ${closestAsteroid.close_approach_data[0].close_approach_date_full}</p>
				<p>Estimated Diameter: ${closestAsteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(2)} - ${closestAsteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(2)} meters</p>
				<p>Potentially Hazardous: ${closestAsteroid.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
			`;

			// Display the asteroid information on the page
			document.getElementById('asteroid-info').innerHTML = asteroidInfoHTML;
		})
		.catch(error => console.error(error));

		// Helper function to get the closest asteroid
		function getClosestAsteroid(data) {
			let closestAsteroid = null;
			let minMissDistance = Infinity;

			for (const date in data.near_earth_objects) {
				data.near_earth_objects[date].forEach(asteroid => {
					const missDistance = asteroid.close_approach_data[0].miss_distance.kilometers;

					if (missDistance < minMissDistance) {
						closestAsteroid = asteroid;
						minMissDistance = missDistance;
					}
				});
			}

			return closestAsteroid;
		}