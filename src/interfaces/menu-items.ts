export interface MenuItem {
    order: number;
    text: string;
    route: string;
    fragment: string;
    hasSubmenu: boolean;
    submenu: MenuItem[];
}