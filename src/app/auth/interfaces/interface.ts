export interface AuthResponse {
    ok          : boolean;
    usuario     : Usuario;
    token       : string;
}

export interface Usuario {
    verify      ?: boolean;
    nombre      ?: string;
    correo      ?: string;
    telefono    ?: string;
    edad        ?: number;
    admin       ?: boolean;
    estado      ?: boolean;
    googleAuth  ?: boolean;
    created_at  ?: Date;
    uid         ?: string;
}