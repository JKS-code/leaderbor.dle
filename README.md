# leaderbor.dle
an app to aggregate daily nerd games

## Features
* Create a user
* Post scores everyday
* Track history and stats 
* Leaderboard with your friends
* Does taxes (for a price)

## Developer Setup

This repository is a mono-repo, containing all leaderbor.dle services. To begin, run the following command to clone the repo, in it's entirety

```
git clone git@github.com:JKS-code/leaderbor.dle.git
```

### Client Setup

Run the following command to change to the correct directory

```
cd leaderbordle-client
```

Run the following command to install all dependencies

```
npm install
```

Update your `.env` file to include the following environment variables. Reach out to an owner for the values.

```
VITE_AUTH0_CLIENTID=
VITE_AUTH0_DOMAIN=
```

To run the client on port 3000, run the following command:

```
npm run dev
```

### Database Setup

If this is your first time setting up the local database, there will be a few extra steps. To begin, make sure you have [Docker](https://docs.docker.com/get-docker/) installed.

To spin up the local database, run the following command

```
docker-compose up -d
```

This will create the database, but it won't have any data yet. To seed the database, download the following [SQL file](https://drive.google.com/file/d/1gPg5bT80t6uOBpr2adLp7EZrBqNuQVxh/view?usp=sharing). 

From there we'll need to copy this file into the docker container using the following command, replacing <path-to-sql-file> with the file path to the downloaded SQL file.

```
docker cp <path-to-sql-file> leaderbordle-db:/init.sql
```

Next, run the following command to create an interactive connection with the database container:

```
docker exec -it leaderbordle-db mysql -uroot -p
```

After typing in the root password (configurable in the docker compose file), use the following command to run the sql file and seed the database.

```
use leaderbordle;
source init.sql;
```

From here, you'll be able to access the database on port 3310. To stop the database container run the following command:

```
docker-compose down
```


After completing this initial db setup, the data will be persisted to the container via Docker volumes, and simply running `docker-compose up -d` will start the database from there on out.

### API Setup

