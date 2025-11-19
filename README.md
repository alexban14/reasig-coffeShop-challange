# Emergency API for coffee addicts :)

## Description

* this is a RESTful API for coffee addicts to find the nearest coffee shops around their exact location (X - longitude, Y - latitude coordinates)

## Run this server

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

* the endpoint for sending the location coordinates can be reached at *<http://localhost:3131/api/v1/coffee-shops/nearest>*

## Implementation plan

* parse request body
* read CSV
* loop thru each shop
* compute *"Euclidean distance"*, shortest distance between 2 points on a plane (on a sphere we would use the *"Haversine distance"*)
* keep closest 3 entries
* time complexity: *O(n)* per-request
