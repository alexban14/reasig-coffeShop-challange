# Emergency API for coffee addicts :)

## Description

* this is a RESTful API for coffee addicts to find the nearest coffee shops around their exact location (X - longitude, Y - latitude coordinates)

## Run the server

### Option 1 (Docker)

* Unix system (Linux or MacOS)
* Docker v26 or greater
* Docker compose v2.20 or greater
* command to start the server:

```bash
docker compose up -d --build
```

### Option 2

* `pnpm` install globally on the system
* Node.js v22 or greater
* commands to start the server:

```bash
pnpm i
pnpm run start
```

### Access the API

* the endpoint for sending the location coordinates can be reached at *<http://localhost:3131/api/v1/coffee-shops/nearest>* via a post request with the following JSON payload structure:

```json
{
    "latitude": 47.6,
    "longitude": -122.4
}
```

* or you can make a simple `curl` call from the terminal:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"latitude": 47.6, "longitude": -122.4}' http://0.0.0.0:3131/api/v1/coffee-shops/nearest
```


## Implementation plan

* parse request body
* read CSV
* loop thru each shop
* compute *"Euclidean distance"*, shortest distance between 2 points on a plane (on a sphere we would use the *"Haversine distance"*)
* keep closest 3 entries
* time complexity: *O(n)* per-request

### Improvement plan for multiple request, many CSV records and a 3D space

* Convert lat & long to *"Web Mercator"*
* build *KD-tree* data structure from the CSV data and use the *nearest neighbor* to find the closest shops from the projected data
