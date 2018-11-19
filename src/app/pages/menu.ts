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
    path: 'admin',
    title: 'Admin',
    icon: 'edit',
    children: [
      {
        path: 'rewards',
        title: 'Beheer shop'
      },
      {
        path: 'activities',
        title: 'Beheer activiteiten'
      },
      {
        path: 'allowrewards',
        title: 'Beloningen'
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
];
