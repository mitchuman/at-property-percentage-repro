# `@property` percentage issue reproduction

> [Reported GitHub issue](https://github.com/tailwindlabs/tailwindcss/issues/19200) | [Tailwind Play repro](https://play.tailwindcss.com/pHMIv6qP8i)

This is a reproduction of the issue where the `initial-value` of a `@property` is not rendered correctly in the Webpack build output (works fine for Turbopack).

- Webpack build fails: https://at-property-percentage-repro-webpack.vercel.app
- Turbopack build works: https://at-property-percentage-repro-turbopack.vercel.app
