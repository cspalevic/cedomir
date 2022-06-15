## Database
This folder houses all of the data. Internally, Prisma is writing to a SQLLite DB.

The sqlite database lives at `/data/sqlite.db` in your deployed application. You can connect to the live database by running `fly ssh console -C database-cli`.

## Studio
We can use Prisma Studio as a visual editor for our database.

```
npx prisma studio
```

https://www.prisma.io/docs/concepts/components/prisma-studio