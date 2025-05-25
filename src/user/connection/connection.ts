import { Injectable } from '@nestjs/common';

@Injectable()
export class Connection {
  getName(): string {
    return `null`;
  }
}

@Injectable()
export class MysqlConnection extends Connection {
  getName(): string {
    return 'MySQL';
  }
}

@Injectable()
export class PostgreSQLConnection extends Connection {
  getName(): string {
    return 'PostgreSQL';
  }
}
