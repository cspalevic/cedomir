## Database
This folder houses all of the data. Internally, Prisma is writing to a SQLLite DB.

The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`.