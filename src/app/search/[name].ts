async function fetchFoodData() {
    try {
      const response = await fetch('/api/food');
      const data = await response.json();
      // Process the received data
    } catch (error) {
      console.error(error);
      // Handle error
    }
  }

