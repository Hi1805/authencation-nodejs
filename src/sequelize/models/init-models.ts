import type { Sequelize, Model } from "sequelize";
import { accounts } from "./accounts";
import type { accountsAttributes, accountsCreationAttributes } from "./accounts";

export {
  accounts,
};

export type {
  accountsAttributes,
  accountsCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  accounts.initModel(sequelize);


  return {
    accounts: accounts,
  };
}
