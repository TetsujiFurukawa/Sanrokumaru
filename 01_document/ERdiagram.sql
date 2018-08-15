
/* Drop Tables */

DROP TABLE IF EXISTS sanrokumaru.mst_company;
DROP TABLE IF EXISTS sanrokumaru.mst_employee;
DROP TABLE IF EXISTS sanrokumaru.mst_evaluation_method;
DROP TABLE IF EXISTS sanrokumaru.mst_evaluator_inside;
DROP TABLE IF EXISTS sanrokumaru.mst_evaluator_outside;
DROP TABLE IF EXISTS sanrokumaru.mst_mail;
DROP TABLE IF EXISTS sanrokumaru.mst_password;
DROP TABLE IF EXISTS sanrokumaru.mst_question;
DROP TABLE IF EXISTS sanrokumaru.mst_question_group;
DROP TABLE IF EXISTS sanrokumaru.mst_question_group_sub;
DROP TABLE IF EXISTS sanrokumaru.trn_evaluate_result;
DROP TABLE IF EXISTS sanrokumaru.trn_mail_send;




/* Create Tables */

-- 企業マスタ
CREATE TABLE sanrokumaru.mst_company
(
	-- 企業ID
	company_id serial NOT NULL,
	-- 企業コード
	company_code varchar(25) NOT NULL UNIQUE,
	-- 企業名
	company_nane varchar(50) NOT NULL,
	-- 企業名かな
	company_kana varchar(50) NOT NULL,
	-- 郵便番号
	company_postal_code varchar(20) NOT NULL,
	-- 住所
	company_address varchar(125) NOT NULL,
	-- 電話番号
	company_phone_number varchar(20) NOT NULL,
	-- 担当者氏名
	person_in_charge varchar(100) NOT NULL,
	-- 担当者かな
	person_in_charge_kana varchar(100) NOT NULL,
	-- 担当者部署1
	department_in_charge1 varchar(100) NOT NULL,
	-- 担当者部署2
	department_in_charge2 varchar(100),
	-- 担当者部署3
	department_in_charge3 varchar(50),
	-- 担当者メールアドレス
	person_in_charge_email_address varchar(255) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (company_id)
) WITHOUT OIDS;


-- 従業員マスタ
CREATE TABLE sanrokumaru.mst_employee
(
	-- 従業員ID
	employee_id serial NOT NULL,
	-- ログインアカウント
	employee_login_account varchar(50) NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 従業員コード
	employee_code varchar(50) NOT NULL,
	-- 従業員姓
	employee_last_name varchar(50) NOT NULL,
	-- 従業員名
	employee_first_name varchar(50) NOT NULL,
	-- 従業員部署1
	employee_department1 varchar(100) NOT NULL,
	-- 従業員部署2
	employee_department2 varchar(100),
	-- 従業員部署3
	employee_department3 varchar(50),
	-- 従業員ランク
	employee_rank smallint NOT NULL,
	-- 従業員メールアドレス
	employee_email_address varchar(255) NOT NULL,
	-- ユーザー権限
	user_role varchar(30) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (employee_id)
) WITHOUT OIDS;


-- 評価方式マスタ
CREATE TABLE sanrokumaru.mst_evaluation_method
(
	-- 評価方式ID
	evaluation_method_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 公開範囲
	scope_of_disclosure smallint DEFAULT 1 NOT NULL,
	-- 評価1月
	evaluation_month1 smallint DEFAULT 1 NOT NULL,
	-- 評価2月
	evaluation_month2 smallint DEFAULT 1 NOT NULL,
	-- 評価3月
	evaluation_month3 smallint DEFAULT 1 NOT NULL,
	-- 評価4月
	evaluation_month4 serial DEFAULT 1 NOT NULL,
	-- 評価5月
	evaluation_month5 smallint DEFAULT 1 NOT NULL,
	-- 評価6月
	evaluation_month6 smallint DEFAULT 1 NOT NULL,
	-- 評価7月
	evaluation_month7 smallint DEFAULT 1 NOT NULL,
	-- 評価8月
	evaluation_month8 smallint DEFAULT 1 NOT NULL,
	-- 評価9月
	evaluation_month9 smallint DEFAULT 1 NOT NULL,
	-- 評価10月
	evaluation_month10 smallint DEFAULT 1 NOT NULL,
	-- 評価11月
	evaluation_month11 smallint DEFAULT 1 NOT NULL,
	-- 評価12月
	evaluation_month12 smallint DEFAULT 1 NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (evaluation_method_id)
) WITHOUT OIDS;


-- 評価者(社内)マスタ
CREATE TABLE sanrokumaru.mst_evaluator_inside
(
	-- 評価者マスタID
	evaluator_inside_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 被評価者ID
	evaluated_id serial NOT NULL,
	-- 評価者ID
	evaluator_employee_id serial NOT NULL,
	-- 被評価者との関係
	relationship_with_evaluated smallint NOT NULL,
	-- 評価期間(開始)
	evaluation_start timestamp NOT NULL,
	-- 評価期間(終了)
	evaluation_end timestamp NOT NULL,
	-- 質問グループID
	question_group_id serial NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (evaluator_inside_id)
) WITHOUT OIDS;


-- 評価者(社外)マスタ
CREATE TABLE sanrokumaru.mst_evaluator_outside
(
	-- 評価者マスタID
	evaluator_outside_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 被評価者ID
	evaluated_id serial NOT NULL,
	-- 評価者姓
	evaluator_last_name varchar(50) NOT NULL,
	-- 評価者名
	evaluator_first_name varchar(50) NOT NULL,
	-- 評価者部署1
	evaluator_department1 varchar(100) NOT NULL,
	-- 評価者部署2
	evaluator_department2 varchar(100),
	-- 評価者部署3
	evaluator_department3 varchar(50),
	-- 評価者メールアドレス
	evaluator_email_address varchar(255) NOT NULL,
	-- 被評価者との関係
	relationship_with_evaluated smallint NOT NULL,
	-- 評価期間(開始)
	evaluation_start timestamp NOT NULL,
	-- 評価期間(終了)
	evaluation_end timestamp NOT NULL,
	-- 質問グループID
	question_group_id serial NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (evaluator_outside_id)
) WITHOUT OIDS;


-- メールマスタ
CREATE TABLE sanrokumaru.mst_mail
(
	-- メールマスタID
	mail_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- メール区分
	mail_classification smallint NOT NULL,
	-- メール送信時期
	time_to_send_mail smallint NOT NULL,
	-- メール件名
	mail_subject varchar(50) NOT NULL,
	-- メール本文
	mail_content varchar(500) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (mail_id)
) WITHOUT OIDS;


-- パスワードマスタ
CREATE TABLE sanrokumaru.mst_password
(
	-- パスワードマスタID
	password_id serial NOT NULL,
	-- 従業員ID
	employee_id serial NOT NULL,
	-- パスワード
	password varchar(250) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (password_id)
) WITHOUT OIDS;


-- 質問データ
CREATE TABLE sanrokumaru.mst_question
(
	-- 質問ID
	question_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 質問カテゴリ
	question_category varchar(50) NOT NULL,
	-- 質問内容
	question_text varchar(100) NOT NULL,
	-- 選択肢文言1
	choice_wording1 varchar(20) NOT NULL,
	-- 選択肢文言2
	choice_wording2 varchar(20) NOT NULL,
	-- 選択肢文言3
	choice_wording3 varchar(20) NOT NULL,
	-- 選択肢文言4
	choice_wording4 varchar(20) NOT NULL,
	-- 選択肢文言5
	choice_wording5 varchar(20) NOT NULL,
	-- 選択肢文言不明
	choice_wording_unknown varchar(20) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (question_id)
) WITHOUT OIDS;


-- 質問グループマスタ
CREATE TABLE sanrokumaru.mst_question_group
(
	-- 質問グループID
	question_group_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 質問グループ名称1
	question_group_name1 varchar(100) NOT NULL,
	-- 質問グループ名称2
	question_group_name2 varchar(100),
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (question_group_id)
) WITHOUT OIDS;


-- 質問グループサブマスタ
CREATE TABLE sanrokumaru.mst_question_group_sub
(
	-- 質問グループサブID
	question_group_sub_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 質問グループID
	question_group_id serial NOT NULL,
	-- 連番
	question_serial_number smallint NOT NULL,
	-- 質問ID
	question_id serial NOT NULL,
	-- 重み
	weight decimal(1,2),
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (question_group_sub_id)
) WITHOUT OIDS;


-- 評価結果データ
CREATE TABLE sanrokumaru.trn_evaluate_result
(
	-- 評価結果データID
	evaluate_result_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- 被評価者ID
	evaluated_id int NOT NULL,
	-- 評価者マスタID
	evaluator_id serial NOT NULL,
	-- 評価者区分
	evaluator_division smallint NOT NULL,
	-- 被評価者との関係
	relationship_with_evaluated smallint NOT NULL,
	-- 評価年月
	evaluate_result_month timestamp NOT NULL,
	-- 質問グループID
	question_group_id int NOT NULL,
	-- 連番
	serial_number smallint NOT NULL,
	-- 質問ID
	question_id int NOT NULL,
	-- 質問カテゴリ
	question_category varchar(50) NOT NULL,
	-- 質問内容
	question_text varchar(100) NOT NULL,
	-- 点数
	score smallint NOT NULL,
	-- 重み付き点数
	weighted_score decimal(2,2) NOT NULL,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (evaluate_result_id)
) WITHOUT OIDS;


-- メール送信データ
CREATE TABLE sanrokumaru.trn_mail_send
(
	-- メール送信データID
	mail_send_id serial NOT NULL,
	-- 企業ID
	company_id serial NOT NULL,
	-- メール宛先
	mail_to varchar(255) NOT NULL,
	-- メール件名
	mail_subject varchar(50) NOT NULL,
	-- メール本文
	mail_content varchar(500) NOT NULL,
	-- 送信結果
	mail_send_result smallint DEFAULT 0 NOT NULL,
	-- 送信回数
	mail_send_number smallint DEFAULT 0 NOT NULL,
	-- 送信日時
	mail_send_time timestamp,
	-- 削除フラグ
	is_deleted smallint DEFAULT 0 NOT NULL,
	-- 登録者
	create_user varchar(125),
	-- 登録日時
	create_time timestamp,
	-- 更新者
	update_user varchar(125),
	-- 更新日時
	update_time timestamp,
	PRIMARY KEY (mail_send_id)
) WITHOUT OIDS;



/* Comments */

COMMENT ON TABLE sanrokumaru.mst_company IS '企業マスタ';
COMMENT ON COLUMN sanrokumaru.mst_company.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_company.company_code IS '企業コード';
COMMENT ON COLUMN sanrokumaru.mst_company.company_nane IS '企業名';
COMMENT ON COLUMN sanrokumaru.mst_company.company_kana IS '企業名かな';
COMMENT ON COLUMN sanrokumaru.mst_company.company_postal_code IS '郵便番号';
COMMENT ON COLUMN sanrokumaru.mst_company.company_address IS '住所';
COMMENT ON COLUMN sanrokumaru.mst_company.company_phone_number IS '電話番号';
COMMENT ON COLUMN sanrokumaru.mst_company.person_in_charge IS '担当者氏名';
COMMENT ON COLUMN sanrokumaru.mst_company.person_in_charge_kana IS '担当者かな';
COMMENT ON COLUMN sanrokumaru.mst_company.department_in_charge1 IS '担当者部署1';
COMMENT ON COLUMN sanrokumaru.mst_company.department_in_charge2 IS '担当者部署2';
COMMENT ON COLUMN sanrokumaru.mst_company.department_in_charge3 IS '担当者部署3';
COMMENT ON COLUMN sanrokumaru.mst_company.person_in_charge_email_address IS '担当者メールアドレス';
COMMENT ON COLUMN sanrokumaru.mst_company.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_company.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_company.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_company.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_company.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_employee IS '従業員マスタ';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_id IS '従業員ID';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_login_account IS 'ログインアカウント';
COMMENT ON COLUMN sanrokumaru.mst_employee.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_code IS '従業員コード';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_last_name IS '従業員姓';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_first_name IS '従業員名';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_department1 IS '従業員部署1';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_department2 IS '従業員部署2';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_department3 IS '従業員部署3';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_rank IS '従業員ランク';
COMMENT ON COLUMN sanrokumaru.mst_employee.employee_email_address IS '従業員メールアドレス';
COMMENT ON COLUMN sanrokumaru.mst_employee.user_role IS 'ユーザー権限';
COMMENT ON COLUMN sanrokumaru.mst_employee.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_employee.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_employee.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_employee.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_employee.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_evaluation_method IS '評価方式マスタ';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_method_id IS '評価方式ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.scope_of_disclosure IS '公開範囲';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month1 IS '評価1月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month2 IS '評価2月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month3 IS '評価3月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month4 IS '評価4月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month5 IS '評価5月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month6 IS '評価6月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month7 IS '評価7月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month8 IS '評価8月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month9 IS '評価9月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month10 IS '評価10月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month11 IS '評価11月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.evaluation_month12 IS '評価12月';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_evaluation_method.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_evaluator_inside IS '評価者(社内)マスタ';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.evaluator_inside_id IS '評価者マスタID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.evaluated_id IS '被評価者ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.evaluator_employee_id IS '評価者ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.relationship_with_evaluated IS '被評価者との関係';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.evaluation_start IS '評価期間(開始)';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.evaluation_end IS '評価期間(終了)';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.question_group_id IS '質問グループID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_inside.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_evaluator_outside IS '評価者(社外)マスタ';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_outside_id IS '評価者マスタID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluated_id IS '被評価者ID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_last_name IS '評価者姓';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_first_name IS '評価者名';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_department1 IS '評価者部署1';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_department2 IS '評価者部署2';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_department3 IS '評価者部署3';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluator_email_address IS '評価者メールアドレス';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.relationship_with_evaluated IS '被評価者との関係';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluation_start IS '評価期間(開始)';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.evaluation_end IS '評価期間(終了)';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.question_group_id IS '質問グループID';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_evaluator_outside.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_mail IS 'メールマスタ';
COMMENT ON COLUMN sanrokumaru.mst_mail.mail_id IS 'メールマスタID';
COMMENT ON COLUMN sanrokumaru.mst_mail.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_mail.mail_classification IS 'メール区分';
COMMENT ON COLUMN sanrokumaru.mst_mail.time_to_send_mail IS 'メール送信時期';
COMMENT ON COLUMN sanrokumaru.mst_mail.mail_subject IS 'メール件名';
COMMENT ON COLUMN sanrokumaru.mst_mail.mail_content IS 'メール本文';
COMMENT ON COLUMN sanrokumaru.mst_mail.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_mail.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_mail.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_mail.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_mail.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_password IS 'パスワードマスタ';
COMMENT ON COLUMN sanrokumaru.mst_password.password_id IS 'パスワードマスタID';
COMMENT ON COLUMN sanrokumaru.mst_password.employee_id IS '従業員ID';
COMMENT ON COLUMN sanrokumaru.mst_password.password IS 'パスワード';
COMMENT ON COLUMN sanrokumaru.mst_password.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_password.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_password.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_password.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_password.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_question IS '質問データ';
COMMENT ON COLUMN sanrokumaru.mst_question.question_id IS '質問ID';
COMMENT ON COLUMN sanrokumaru.mst_question.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_question.question_category IS '質問カテゴリ';
COMMENT ON COLUMN sanrokumaru.mst_question.question_text IS '質問内容';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording1 IS '選択肢文言1';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording2 IS '選択肢文言2';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording3 IS '選択肢文言3';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording4 IS '選択肢文言4';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording5 IS '選択肢文言5';
COMMENT ON COLUMN sanrokumaru.mst_question.choice_wording_unknown IS '選択肢文言不明';
COMMENT ON COLUMN sanrokumaru.mst_question.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_question.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_question.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_question.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_question.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_question_group IS '質問グループマスタ';
COMMENT ON COLUMN sanrokumaru.mst_question_group.question_group_id IS '質問グループID';
COMMENT ON COLUMN sanrokumaru.mst_question_group.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_question_group.question_group_name1 IS '質問グループ名称1';
COMMENT ON COLUMN sanrokumaru.mst_question_group.question_group_name2 IS '質問グループ名称2';
COMMENT ON COLUMN sanrokumaru.mst_question_group.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_question_group.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_question_group.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_question_group.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_question_group.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.mst_question_group_sub IS '質問グループサブマスタ';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.question_group_sub_id IS '質問グループサブID';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.question_group_id IS '質問グループID';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.question_serial_number IS '連番';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.question_id IS '質問ID';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.weight IS '重み';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.mst_question_group_sub.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.trn_evaluate_result IS '評価結果データ';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.evaluate_result_id IS '評価結果データID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.evaluated_id IS '被評価者ID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.evaluator_id IS '評価者マスタID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.evaluator_division IS '評価者区分';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.relationship_with_evaluated IS '被評価者との関係';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.evaluate_result_month IS '評価年月';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.question_group_id IS '質問グループID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.serial_number IS '連番';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.question_id IS '質問ID';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.question_category IS '質問カテゴリ';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.question_text IS '質問内容';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.score IS '点数';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.weighted_score IS '重み付き点数';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.trn_evaluate_result.update_time IS '更新日時';
COMMENT ON TABLE sanrokumaru.trn_mail_send IS 'メール送信データ';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_send_id IS 'メール送信データID';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.company_id IS '企業ID';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_to IS 'メール宛先';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_subject IS 'メール件名';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_content IS 'メール本文';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_send_result IS '送信結果';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_send_number IS '送信回数';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.mail_send_time IS '送信日時';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.is_deleted IS '削除フラグ';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.create_user IS '登録者';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.create_time IS '登録日時';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.update_user IS '更新者';
COMMENT ON COLUMN sanrokumaru.trn_mail_send.update_time IS '更新日時';



