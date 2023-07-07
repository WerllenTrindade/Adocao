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
    route: 'PetHomeList', //Rota na qual ele vai ser enviada ao clicar
    subcategory: [], //SubMenus
  },
  {
    isExpanded: false,
    itemCount: 0,
    categoryName: 'PERFIL',
    route: 'Profile',
    subcategory: [],
  },
  // {
  //   isExpanded: false,
  //   itemCount: 1,
  //   categoryName: 'RELATORIOS',
  //   route: '',
  //   subcategory: [
  //     { id: 1, val: 'Fechamento de caixa', subRoute: 'ListCategory'}, 
  //     { id: 2, val: 'Resumo do mês' },
  //     { id: 3, val: 'Sub Cat 3' }
  //   ],
  // }
];