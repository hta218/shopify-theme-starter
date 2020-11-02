## Self's notes

#### General

- Theme files may not be stored in subfolders
- Use `{% section '[section-name]' %}` to require a section (`[section-name]` is the file name of `[section-name].liquid`)
- Use `{% include '[snippet-name]' %}` to require a snippet

#### Sections

- Section are accessible only for homepage

- Each Section will have an auto-generated wrapper (a `div` tag with `id="shopify-section-[section-name]"` - where `[section-name]` is the file name of `[section-name].liquid` file)

- To add new **section**, create a **folder** with exactly name `sections` (then add `your-section.liquid`)

- Sections can be dynamically added to the theme's home page if they have [presets](https://shopify.dev/tutorials/develop-theme-use-sections#presets) defined in their respective `{% schema %}` tags

- `presets` must contains `name` and `category`

- To add a section to home page:
  - add `content_for_index` in `index.liquid`
  - Define the data in `config/settings_data.json`

#### Settings

- Config `settings_schema.json` for general settings of your theme (those settings can be access on all your website via `settings.[property]`)

#### Templates

- Template show in your **admin/product**, each type of page will have multiple templates in the theme template area

- To create a new template the file name must be `[page-name].[your-template-name].liquid` (ex: `product.featured.liquid`, `page.contact.liquid`)

#### Data

- add `.json` extension to any URL, you will get the data of that page as **JSON**
