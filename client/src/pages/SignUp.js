import React  from "react";
import {
  Layout,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";

import { Link } from "react-router-dom";
import HtmlHead from "../components/layout/Helmet";
import {toastError, toastSuccess, toastWarning} from "../components/toastComponent";

import { registerSync } from "../utils/validate";
import {registerService} from "../service/authService";
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { Content } = Layout;

export const  SignUp = () => {
  const {t, i18n } = useTranslation();

  const onFinishFailed = (errorInfo) => {
    toastError(t("login.comment"))
  };

  const onFinish = async (values) => {
     try{
      const response = await registerService(values)
       console.log(response)
       toastSuccess(t('login.signupSuccess'))
     }catch (e) {
       console.log(e)
       toastWarning(e.response.data.message)
     }
  };
  return (
      <>
        <HtmlHead title={t('login.signup')} description={t('login.signup')} />
        <div className="layout-default ant-layout layout-sign-up">

          <Content className="p-0">
            <div className="sign-up-header">
              <div className="content">
                <Title>{t('login.signup')}</Title>
              </div>
            </div>

            <Card
                className="card-signup header-solid h-full ant-card pt-0"
                bordered="false"
            >
              <div className="sign-up-gateways my-25">
                 <Button
                     onClick={() => {
                        i18n.changeLanguage('en');
                    }}
                 >
                   <ReactCountryFlag
                       countryCode="us"
                       style={{
                         fontSize: '2em',
                         cursor: 'pointer',
                       }}
                   />
                 </Button>
                <Button
                    onClick={() => {
                        i18n.changeLanguage('tr');
                    }}>
                  <ReactCountryFlag
                      countryCode="tr"
                      style={{
                        fontSize: '2em',
                        cursor: 'pointer',
                      }}
                      className="mr-1"

                  />
                </Button>
              </div>
              <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  className="row-col"

              >
                <Form.Item
                    name="fullName"
                    rules={[registerSync]}
                >
                  <Input placeholder={t('login.username')} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[registerSync]}
                >
                  <Input placeholder={t('login.email')} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[registerSync]}
                >
                  <Input placeholder={t('login.password')} type="password" />
                </Form.Item>

                <Form.Item name="kvkk" valuePropName="checked" rules={[registerSync]}
                >
                  {i18n.language === "en" ? <Checkbox>
                    {t('login.agree')}{" "}
                    <Link to="#" className="font-bold text-dark">
                      {t('login.privacypolicyandtersm')}
                    </Link>
                  </Checkbox> : <Checkbox>
                    <Link to="#" className="font-bold text-dark">
                    {t('login.privacypolicyandtersm')}{" "}
                    </Link>
                    {t('login.agree')}{" "}
                  </Checkbox>}
                </Form.Item>

                <Form.Item>
                  <Button
                      style={{ width: "100%" }}
                      type="primary"
                      htmlType="submit"
                  >
                    {t('login.signup')}
                  </Button>
                </Form.Item>
              </Form>
              <p className="font-semibold text-muted text-center">
                <Link to="/sign-in" className="font-bold text-dark">
                  {t('login.signininstead')}
                </Link>
              </p>
            </Card>
          </Content>
        </div>
      </>
  )
}
