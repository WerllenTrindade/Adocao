import { propsStack } from "../routes/Models";

export interface RouterDrawerItem {
  isExpanded: boolean;
  itemCount: boolean | number;
  categoryName: string;
  route: string;
  subcategory: RouterDrawerSubcategoryItem[];
}

interface RouterDrawerSubcategoryItem {
  id: number;
  value: string;
  subRoute?: string;
}

export const tabHiddenRoutes: propsStack | any = [
];

export const RouterDrawer = [
  {
    isExpanded: false, //Se ele já vem expandido(Clicado) 
    itemCount: 0, //Se existe item
    categoryName: 'DASHBOARD', //titlo
    route: 'ListPetStack', //Rota na qual ele vai ser enviada ao clicar
    subcategory: [], //SubMenus
  },
  {
    isExpanded: false,
    itemCount: 0,
    categoryName: 'PERFIL',
    route: 'Profile',
    subcategory: [],
  },
  {
    isExpanded: false,
    itemCount: 0,
    categoryName: 'FAQ',
    route: 'CommonQuestions',
    subcategory: [],
  }
];