import { HttpException } from "../exceptions/HttpException";
import { NextFunction, Request, Response } from "express";
import { getConnection } from "typeorm";

class IndexController {
  public index(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send('OK');
  }

  public healthCheck = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const connection = getConnection("postgresdb-recruitment");

      if (!connection.isConnected) {
        throw new HttpException(500, 'There is a problem');
      }
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;


