
  // Interface para dados de uma categoria.
 
  export interface Itens {
    id: number;
    name: string;
  }
  
  
    // Interface para listagem de categorias.
  
  export interface Itens {
    items: Array<Itens>;
    hasNext: boolean;
  }
  