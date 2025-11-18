# Emergency API for coffee addicts :)

### Description:
* this is a RESTful API for find the nearest coffee shops around you based on your exact location (X - longitude, Y - latitude coordinates)

### Implementation plan
- read CSV
- loop thru each shop
- compute *"Haversine distance"* (shortest distance between 2 points)
- keep closest 2 entries
- time complexity: *O(n)* per-request