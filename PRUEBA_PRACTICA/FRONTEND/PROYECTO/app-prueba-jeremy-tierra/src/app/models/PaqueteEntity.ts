export interface PaqueteEntity {
    id?: number;
    peso: number;
    destino: string;
    informacionEmisor: string;
    informacionReceptor: string;
    etiqueta?: string;
    estado: String;
    repartidor?: any;
  }
  
  export enum Estado {
    EN_TRANSITO = "EN_TRANSITO",
    ENTREGADO = "ENTREGADO",
    PENDIENTE = "PENDIENTE"
  }
  