export class Solicitud {
    constructor(
        public id_Solicitud: number,
        public id_Solicitante: number,
        public Nombre: string,
        public Email: string,
        public Telefono: string,
        public Fecha_Nacimiento: string,
        public DPI: string,
        public Experiencia: string,
        public id_Trabajo: number,
        public Trabajo: string,
        public Requisitos: string,
        public Conocimientos: string,
        public Beneficios: string,
        public Fecha_Publicacion: string
    ){}
}