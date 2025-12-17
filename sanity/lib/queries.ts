import { groq } from "next-sanity";

// Get all projects with localized fields
export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    slug,
    category,
    year,
    color,
    heroImage,
    title,
    description,
    client,
    services
  }
`;

// Get single project by slug with all content blocks
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    slug,
    category,
    year,
    color,
    heroImage,
    title,
    description,
    client,
    services,
    contentBlocks[] {
      _key,
      _type,
      // Text block
      _type == "textBlock" => {
        heading,
        content,
        align
      },
      // Image gallery
      _type == "imageGalleryBlock" => {
        title,
        images[] {
          "src": asset->url,
          alt,
          caption
        }
      },
      // Video player
      _type == "videoPlayerBlock" => {
        title,
        videoUrl,
        "poster": poster.asset->url,
        aspectRatio
      },
      // Image grid
      _type == "imageGridBlock" => {
        columns,
        gap,
        images[] {
          "src": asset->url,
          alt
        }
      },
      // Quote
      _type == "quoteBlock" => {
        text,
        author,
        role
      },
      // Stats
      _type == "statsBlock" => {
        items[] {
          value,
          label
        }
      },
      // Full width image
      _type == "fullWidthImageBlock" => {
        "src": image.asset->url,
        alt,
        caption
      },
      // Two column text
      _type == "twoColumnTextBlock" => {
        leftHeading,
        leftContent,
        rightHeading,
        rightContent
      },
      // Before/after
      _type == "beforeAfterBlock" => {
        "beforeImage": beforeImage.asset->url,
        "afterImage": afterImage.asset->url,
        beforeLabel,
        afterLabel
      },
      // Code block
      _type == "codeBlock" => {
        title,
        language,
        code
      }
    }
  }
`;

// Get project slugs for static generation
export const projectSlugsQuery = groq`
  *[_type == "project"] {
    "slug": slug.current
  }
`;
