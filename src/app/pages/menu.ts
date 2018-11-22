import {AuthService} from '../shared/services/auth.service';
import construct = Reflect.construct;

let defaultMenu = [
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
];

let adminLevel1 = [
    {
        path: 'admin',
        title: 'Admin',
        icon: 'edit',
        children: []
    }
];

let adminLevel2Rewards = [
    {
        path: 'allowrewards',
        title: 'Punten toekennen'
    }

];


let adminLevel2Shop = [
    {
        path: 'rewards',
        title: 'Beheer shop'
    },
];


let adminLevel2Assignments = [
    {
        path: 'activities',
        title: 'Beheer activiteiten'
    },
];


let menu = defaultMenu;

let admin = false;
if (true) {
    if (!admin) {
        admin = true;
    }
    adminLevel1[0].children.push(adminLevel2Rewards[0]);
}

if (true) {
    if (!admin) {
        admin = true;
    }
    adminLevel1[0].children.push(adminLevel2Shop[0]);
}

if (true) {
    if (!admin) {
        admin = true;
    }
    adminLevel1[0].children.push(adminLevel2Assignments[0]);
}

if (admin) {
    menu.push(adminLevel1[0]);
}

export let MENU_ITEM = menu;
