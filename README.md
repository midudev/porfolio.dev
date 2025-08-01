# 👨🏻‍💻 Porfolio para programadores y desarrolladores

<div align="center">
<a href="https://porfolio.dev/">
<img src="./public/porfolio.webp">
</a>
<p></p>
</div>

<div align="center">

![Astro Badge](https://img.shields.io/badge/Astro-FF3E00?logo=astro&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![GitHub stars](https://img.shields.io/github/stars/midudev/porfolio.dev)
![GitHub PRs](https://img.shields.io/github/issues-pr/midudev/porfolio.dev)
![GitHub forks](https://img.shields.io/github/forks/midudev/porfolio.dev)
![GitHub issues](https://img.shields.io/github/issues/midudev/porfolio.dev)

</div>

## 🫂 Contribuidores

<a href="https://github.com/midudev/porfolio.dev/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=midudev/porfolio.dev" />
</a>

<p></p>

## Updating Portfolio Content

The content of this portfolio (About Me, Experience, Projects) is managed through a central JSON file located at `src/data/content.json`.

To update your portfolio information:

1.  **Open `src/data/content.json`**.
2.  **Modify the data**:
    *   **`aboutMe`**:
        *   `personalImageAlt`: Alt text for your main image.
        *   `paragraphs`: An array of strings. Each string is a paragraph in the "About Me" section. You can use HTML tags like `<strong>` or `<em>` for emphasis.
    *   **`experience`**: An array of experience objects. Each object has:
        *   `date`: Date or period of the experience.
        *   `title`: Your job title.
        *   `company`: Company name.
        *   `description`: Description of your role and achievements.
        *   `link` (optional): A URL for more details.
    *   **`projects`**:
        *   `tags`: An object defining available tags for projects. Each key (e.g., "NEXT") is a tag identifier used in `project.items`. It contains:
            *   `name`: Display name of the tag (e.g., "Next.js").
            *   `class`: Tailwind CSS classes for styling the tag badge.
            *   `icon`: A string key (e.g., "NextJS") that maps to an icon component in `src/components/Projects.astro`. Ensure the corresponding icon component (e.g., `NextJS.astro`) exists in `src/components/icons/` and is mapped in the `ICONS` object within `src/components/Projects.astro`.
        *   `items`: An array of project objects. Each object has:
            *   `title`: Project title.
            *   `description`: Project description.
            *   `link` (optional): Live preview URL.
            *   `github` (optional): GitHub repository URL.
            *   `image`: Path to the project image (usually in `public/projects/`).
            *   `tags`: An array of string keys (e.g., `["NEXT", "TAILWIND"]`) that correspond to keys in `projects.tags`.
3.  **Save the file**. The website will automatically reflect the changes when you rebuild or if your development server is running with HMR (Hot Module Replacement).

Make sure the JSON structure remains valid after your changes.
