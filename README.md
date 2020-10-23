# Shopify Theme Starter

A ready to use boilerplate for getting started with building a Shopify Theme from scratch

## Get started

Create **Shopify Private App** and configure app's permission correctly by following the [Shopify Themekit Instruction](https://shopify.github.io/themekit/#get-api-access):

1. In the store’s **Shopify admin**, click **Apps**.
2. Near the bottom of the page, click on **Manage private apps**.
3. If you see a notice that ***“Private app development is disabled”***, then click **“Enable private app development”**. (Note: Only the store owner can enable private app development)
4. Click **Create new private app**.
5. In the **App details** section, fill out the app name and your email address.
6. In the **Admin API** section, click **Show inactive Admin API permissions**.
7. Scroll to the **“Themes”** section and select **Read and write** from the dropdown.
8. Click **Save**.
9. Read the private app confirmation dialog, then click **Create app**.

![Imgur](https://i.imgur.com/PuVV84z.png)

You’ll return to the app detail page. Your new, unique access credentials are visible in the **Admin API** section. Copy the password. You’ll use it in the next step.

## Install `theme-kit`
- MacOS (use [homebrew](https://brew.sh/)):
  ```
  brew tap shopify/shopify
  brew install themekit
  ```
- Window (use [chocolatey](https://chocolatey.org/)):
  ```
  choco install themekit
  ```

## Use starter code

- Clone this repo
  ```
  git clone https://github.com/hta218/shopify-theme-starter.git && cd shopify-theme-starter
  ```

## Upload theme to Shopify

- **Duplicate** an existing theme from your store **theme admin** (rename it if you want)

![Imgur](https://i.imgur.com/2fSgk0R.png?1)

- Get the **theme's id** by click `Actions/Edit Code`, the last number in the **URL** now is your **theme's id**. Copy it!

- In the `shopify-theme-starter` directory, rename `config.example.yml` to `config.yml`

- Update all configs with your **store**, **theme_id** (should stay in double qoute like this `"123123123"`) and **password** is the **Shopify Private App**'s password that you've created in the first step

- Upload your local theme to **Shopify**
  ```
  theme deploy
  ```

- Publish it
  ```
  theme publish
  ```

- Open live theme (store's preview)
	```
	theme open
	```

Now you should see content from this starter.

## Start the developement server

- Install dependencies by running `npm install`

Now keep in mind that you will need **2 seperated terminal**

- The first one run the following command to watch directory for changes and update remote theme
  ```
  npm run theme-watch
  ```

- The second one run the following command to watch your dev process in `/src` directory, compile your code and put them into `/assets`
  ```
  npm run watch
  ```

You're ready to build your own **Shopify's theme** from here.

## More References

- [Liquid Cheat Sheet](http://cheat.markdunkley.com/)
- [Shopify Liquid Documentations](https://shopify.github.io/liquid/)
- [Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [My notes when learning to develop Shopify's theme](/recaps.md)

## License

Copyright © 2020 - Made by Leo @ [https://leohuynh.dev](https://leohuynh.dev)


