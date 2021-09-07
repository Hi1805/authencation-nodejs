import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface accountsAttributes {
  id: number;
  username?: string;
  password?: string;
}

export type accountsPk = 'id';
export type accountsId = accounts[accountsPk];
export type accountsOptionalAttributes = 'id' | 'username' | 'password';
export type accountsCreationAttributes = Optional<
  accountsAttributes,
  accountsOptionalAttributes
>;

export class accounts
  extends Model<accountsAttributes, accountsCreationAttributes>
  implements accountsAttributes
{
  id!: number;
  username?: string;
  password?: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof accounts {
    accounts.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING(45),
          allowNull: true,
        },
        password: {
          type: DataTypes.STRING(45),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'accounts',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'id' }],
          },
        ],
      }
    );
    return accounts;
  }
}
