This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel 

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Advice:
Make. A. Plan. 👈👈👈 (after each step, write down "Now check it works")

Here's a solid high level plan:

Check everyone understands the basics of using useReducer. ✅

Move your code over to useReducer. Do not add a single new feature to begin with. It's not easy moving to reducer, don't make it harder.

Once the form does exactly what it did before but using useReducer - move on to add some of the new functionality like a loading indicator into your state. You can make the handle submit dispatch an action to say the form is submitting, then simulate waiting for 2 seconds (useTimeout maybe), then dispatch another action to say form submitted successfully.

Now continue to add more features ... like disabling the form while it's submitting, or more granular errors.