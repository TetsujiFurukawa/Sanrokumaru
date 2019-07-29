export class CompanyDto {

  public companySeq: bigint;
  public companyName: String;
  public companyKana: String;
  public companyPostalCode: String;
  public companyAddress1: String;
  public companyAddress2: String;
  public companyAddress3: String;
  public companyPhoneNumber: String;
  public personInChargeLastName: String;
  public personInChargeFirstName: String;
  public departmentInCharge1: String;
  public departmentInCharge2: String;
  public departmentInCharge3: String;
  public personInChargeEmailAddress: String;
  public deleted: boolean;
  public createUser: String;
  public createTime: Date;
  public updateUser: String;
  public updateTime: Date;

}
