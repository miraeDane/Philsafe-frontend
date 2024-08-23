// export interface Officer {
//     id: number;
//     name: string;
//     rank: string;
//     status: string; // e.g., 'active', 'retired', 'archived'
//   }

export class Officer {
    constructor(
      public id: number,
      public name: string,
      public rank: string,
      public status: string // e.g., 'active', 'retired', 'archived'
    ) {}
  
    // Example method
    isActive(): boolean {
      return this.status === 'active';
    }
  }