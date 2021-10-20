export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Push Published Content to live site.',
        description:
          'NOTE: to make newly-published content appear in the front-end of the live website, you need to manally trigger a deploy by clicking the button below that says "Deploy"!',
        sites: [
          {
            title: 'CampLaurelwood.org Website',
            apiId: 'cb21f6f2-55e1-4281-bd36-8487d1540f2b',
            buildHookId: '5e44430ef2181835149ff124',
            name: 'lrw-app',
            url: 'https://camplaurelwood.org'
          }
        ]
      }
    },
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
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ovsw/lrw-app',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://lrw-app.netlify.com', category: 'apps' }
        ]
      }
    }
    // {name: 'project-users', layout: {height: 'auto'}},
    // {
    //   name: 'document-list',
    //   options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
    //   layout: {width: 'medium'}
    // }
  ]
}
