export declare class Bcrypt {
    criptografarSenha(senha: string): Promise<string>;
    compararSenha(senhaBanco: string, senhaDigitada: string): Promise<boolean>;
}
