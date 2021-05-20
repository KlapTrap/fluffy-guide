<p style="text-align: center;"><img src="./apps/pokedex/src/assets/logo.png" width="450"></p>

This is a simple Pokedex, pokemon list and tracker.

## Improvement "Roadmap"

You could say that app is currently in its "Pallet Town" release, here are the things I'd do for a "Viridian City" release.

1. Add more unit tests!
2. Add some e2e tests!
3. Tidy up the summary page code, it's got a little bloated and some of that logic is worth abstracting into separate components.
4. Add an error state and loading indicator to the list page.
5. Use the graphql api - saves me doing client side pagination!
6. Expose more information about a pokemon on the summary page.
7. Create a docker image and helm chart to make it deployable.
