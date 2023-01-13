# exchange-rates

## Cors workaround

The daily exchange rates from Czech National Bank don't have cors headers. As such browsers aren't happy just downloading it, and I don't have access to the server.

To workaround this I added (cors-anywhere)[https://github.com/Rob--W/cors-anywhere] as a dev dependency, and created a script that has to be run in a separate terminal:

`yarn cors`

This is a light weight proxy to work around the cors issue in a simple way.
