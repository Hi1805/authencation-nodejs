import { mysqlConfig } from '../../shared/configs';
import { authenProd } from '../models';
import { setUpSequelize } from './initial';

export const authenSequelize = setUpSequelize({
  database: mysqlConfig.my_authencation,
});

export const authencationModel = authenProd.initModels(authenSequelize);

(async () => {
  try {
    await authenSequelize.authenticate();
    console.log('Connection has been established successfully. - accounts');
  } catch (error) {
    console.error(
      'Unable to connect to the database - peatio_production:',
      error
    );
  }
})();
