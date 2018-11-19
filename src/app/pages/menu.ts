export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },
    {
        path: 'profile',
        title: 'Profiel',
        icon: 'user'
    },
    {
        path: 'shop',
        title: 'Shop',
        icon: 'diamond'
    },
    {
        path: 'menu-levels',
        title: 'Menu levels',
        icon: 'check-square-o',
      children: [
        {
          path: 'levels1',
          title: 'Level 1'
        },
        {
          path: 'levels2',
          title: 'Level 2'
        }
      ]
    },
  {
    path: 'activiteit',
    title: 'Activiteit',
    icon: 'check-square-o',
    children: [
      {
        path: 'historiek',
        title: 'Historiek'
      },
      {
        path: 'toevoegen',
        title: 'Toevoegen'
      }
    ]
  },
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },
            /*  {
                 path: 'loading',
                 title: 'Loading'
             }, */
        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },
];
