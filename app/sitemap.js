
export default function sitemap() {
  const baseUrl = "https://ajaysthportfolio.netlify.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
