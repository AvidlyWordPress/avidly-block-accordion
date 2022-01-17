# Avidly Accordion Block
A WordPress plugin to add accordion content page/post with block editor.

## Installation
1. Upload the plugin files to the `/wp-content/plugins/` directory, or download the ZIP and install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress

## Usage
Add Accordion content to your page or post by adding Avidly Accordion Gutenberg block where ever you want to.

## Requirements
* Requires at least WordPress 5.8

## Development
- Get packages with `npm install`
- Run development with `npm run start` (does not compress the code so it is easier to read)
- Run production build with `npm run build` (compresses the code down so it downloads faster)

VERY IMPORTANT: Always run production build to compile compressed, production-ready CSS and JS.

### block.json
- Canonical way to register block types. Read details from <a href="https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/">Block Editor Handbook</a>.

### Translating
- Go to plugin folder with Shell: `cd wp-content/plugins/avidly-block-accordion`
- Create or update POT file: `npm run make-pot`
- Open your PO file(s) with PoEdit & update the content from POT file and make your translations changes.
- Create or update JSON translations file: `npm run make-json`
- Test that your translations works
