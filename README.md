# Hugo Theme Hermit

A minimal single-page Hugo theme with GitHub Markdown styling.

## Features

- Clean, minimal design inspired by GitHub Markdown
- Single-page documentation theme
- Roboto font family
- Syntax highlighting with GitHub style
- Mermaid diagrams support (lazy loaded)
- Responsive design
- SEO optimized with Open Graph and Twitter Cards

## Installation

### Using Hugo Modules (Recommended)

Initialize a new Hugo site:

```bash
hugo new site my-site
cd my-site
hugo mod init github.com/username/my-site
```

Add the theme to your `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/dogitect/hugo-theme-hermit"
```

### Using Git Submodule

```bash
git submodule add https://github.com/dogitect/hugo-theme-hermit.git themes/hugo-theme-hermit
```

Add to your `hugo.toml`:

```toml
theme = "hugo-theme-hermit"
```

## Usage

Create your content in `content/_index.md`:

```markdown
---
title: 'My Project'
---

# My Project

Your content here...
```

Run the development server:

```bash
hugo server
```

Build for production:

```bash
hugo --minify
```

## Configuration

Example `hugo.toml`:

```toml
baseURL = "https://example.com/"
languageCode = "en"
title = "My Project"

[params]
  description = "A brief description of your project"
  author = "Your Name"

[markup]
  [markup.highlight]
    style = "github"
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

## Contributing

PRs accepted.

## License

MIT &copy; Leon Xia
