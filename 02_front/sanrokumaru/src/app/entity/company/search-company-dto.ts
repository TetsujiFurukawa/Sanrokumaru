export class SearchCompanyDto {

  public companySeq: bigint;
  public companyName: String;
  public companyKana: String;
  public companyAddress1: String;
  public deleted: boolean;
  public createUser: String;
  // TODO timestampを使用したい。
  public createTime: Date;
  public updateUser: String;
  public updateTime: Date;

}
