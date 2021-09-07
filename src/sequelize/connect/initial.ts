import { Options, Sequelize } from 'sequelize';
import { mysqlConfig } from '../../shared/configs';

export const setUpSequelize = (options: Options = {}) => {
  const sequelize = new Sequelize({
    host: mysqlConfig.hostMysql,
    port: Number(mysqlConfig.portMysql),
    username: mysqlConfig.userMysql,
    password: mysqlConfig.passMysql,
    dialect: 'mysql',
    logging: false,
    ...options,
  });

  return sequelize;
};
