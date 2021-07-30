export class AccountsTypeDto {
  id: number;
  userType: string;
  isActive: string;
  created!: Date;
  updated!: Date;
  deletedAt?: Date;
}
