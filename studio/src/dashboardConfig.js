export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606cb1ed492f972c9fff80fe",
                  title: "Sanity Studio",
                  name: "sanitygatsbyblog-studio",
                  apiId: "81e14405-989e-4cf4-85c8-fa376bf4aa38",
                },
                {
                  buildHookId: "606cb1edb4a9271bff3e4e79",
                  title: "Blog Website",
                  name: "sanitygatsbyblog",
                  apiId: "bc65dc1f-55cb-4622-97bc-44a05bd4876d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ericganderson/sanitygatsbyblog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanitygatsbyblog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
