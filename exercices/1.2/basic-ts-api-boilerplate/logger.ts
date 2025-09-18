import { Request, Response, NextFunction } from "express";

let getCounter = 0;

export const logger = (req: Request, _: Response, next: NextFunction) => {
    
    if(req.method === "GET" && req.path !== "/favicon.ico") //retirer la requête que fait le navigateur pour obtenir l'icône de l'onglet
    {
        getCounter++;
        console.log(`GET counter: ${getCounter}`);
    }

    next();

}