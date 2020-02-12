export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    // {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              title: 'Push Published Content to live site.',
              description:
                'NOTE: to make newly-published content appear in the front-end of the live website, you need to manally trigger a deploy by clicking the button below that says "Deploy"!',
              sites: [
                // {
                //   buildHookId: '5deb9176f80a08d42b13d0e2',
                //   title: 'Sanity Studio',
                //   name: 'lrw-app-studio',
                //   apiId: '1e783139-c816-42c5-a6cf-95d7f294ccaf'
                // },
                {
                  buildHookId: '5deb9176ab47340c10c2c537',
                  title: 'Laurelwood Website Front-End',
                  name: 'lrw-app',
                  apiId: '7a92d99f-c682-4d28-8f1e-509655d40020'
                }
              ]
            }
          },
          {
            name: 'gatsby',
            options: {
              instances: [
                {
                  instanceUrl: '<previewInstanceUrl>'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/lrw-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lrw-app.netlify.com', category: 'apps'}
        ]
      }
    },
    // {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
