export interface Cliente {
  id: number;
  nome: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Produto {
  id: number;
  nome: string;
  descricao?: string | null;
  preco: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ItemPedido {
  id: number;
  pedidoId: number;
  produtoId: number;
  quantidade: number;
  precoUnit: number;
  produto?: Produto; // Populated by Prisma's include
}

export interface Pedido {
  id: number;
  clienteId: number;
  cliente?: Cliente;   // Populated by Prisma's include
  itens?: ItemPedido[]; // Populated by Prisma's include
  total: number;
  createdAt?: string;
  updatedAt?: string;
}

// Form state tracking interfaces
export interface FormItemPedido {
  produtoId: string;
  quantidade: number;
}