exports.createPages = async ({ graphql, actions }) => {
  // fetch redirect data
  const result = await graphql(`
    {
      wp {
        redirects {
          url
          action_data
          match_type
          flag_regex
        }
      }
    }
  `);

  const redirects = result.data.wp.redirects;
  
  // filter out non-url and regex redirects
  const filteredRedirects = redirects.filter(redirect => {
    return redirect.match_type === "url" && !redirect.flag_regex
  })

  // create redirects one by one
  const { createRedirect } = actions
  filteredRedirects.forEach(redirect => {
    createRedirect({
      fromPath: redirect.url,
      toPath: redirect.action_data,
      isPermanent: true,
    })
  })
}