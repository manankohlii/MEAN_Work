export interface Item {
    title: string;
    description: string;
    buttonColor: string;
    isSelected?: boolean;
  }
  
  export const ITEMS: Item[] = [
    {
      title: 'Faclon 9',
      description: 'SpaceX',
      buttonColor: 'red',
      isSelected: false
    },
    {
      title: 'PSLV Mk3',
      description: 'ISRO',
      buttonColor: 'yellow',
      isSelected: false
    },
    {
      title: 'Saturn 5',
      description: 'NASA',
      buttonColor: 'green',
      isSelected: false
    },
    {
      title: 'New Glenn',
      description: 'Blue Origin',
      buttonColor: 'blue',
      isSelected: false
    }
  ];
  