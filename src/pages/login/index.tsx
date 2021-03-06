/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 宋益强
 * @Date: 2019-08-14 20:50:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-28 17:39:58
 */
import React, { Component } from 'react';
import styles from './index.scss';
import { Form, Input, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import { PublicService } from '@/services/public.service';
import router, { RouteData } from 'umi/router';
import lscache from 'lscache';
import { FILTER_FORM_LAYOUT } from '@/constant';
import { withState, compose } from 'recompose';

interface LoginProps extends FormComponentProps {
  location: RouteData;
  publicService: PublicService;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

@inject('publicService')
@observer
class LoginPage extends Component<LoginProps> {
  public state = {
    savePassword: false,
  };

  public componentDidMount() {
    this.getLoginFormValues();
  }

  public render() {
    const { form, loading } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles['card-left']}>
            <div className={styles['left-col-1']}>
              <h1 className={styles['title-auto']}>比赛项目管理系统</h1>
            </div>
            <div className={styles['left-col-2']}>
              <img
                className={styles.illustrated}
                src={require('@/assets/login/warehouse.png')}
                alt="illustrated"
              />
            </div>
          </div>
          <div className={styles['card-right']}>
            <h2 className={styles['title-right']}>欢迎登录！</h2>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Item label="手机号" {...FILTER_FORM_LAYOUT}>
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '手机号必填' }],
                })(<Input placeholder="请输入手机号" />)}
              </Form.Item>
              <Form.Item label="密码" {...FILTER_FORM_LAYOUT}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '密码必填' }],
                })(<Input type="password" placeholder="请输入密码" />)}
              </Form.Item>
              <Form.Item className={styles['form-btn']}>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles['btn-submit']}
                  loading={loading}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }

  private getLoginFormValues = () => {
    const loginFormValues = lscache.get('loginFormValues');
    if (loginFormValues) {
      if (loginFormValues.inPassword) {
        this.setState({ savePassword: true });
      }
      this.props.form.setFieldsValue(loginFormValues);
    }
  };

  private saveLoginFormValues = (savePassword: boolean, values: { [key: string]: string }) => {
    if (!savePassword) {
      delete values.password;
    }
    lscache.set('loginFormValues', values);
  };

  private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { form, publicService } = this.props;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const { phone, password, companyCode } = values;
      const res = await publicService.login(phone, password);
      if (res) {
        this.submitCallback();
        this.saveLoginFormValues(this.state.savePassword, {
          phone,
          password,
          companyCode,
        });
      }
    });
  };

  private submitCallback = () => {
    const { redirectUrl } = this.props.location.query;
    if (redirectUrl) {
      router.replace(`${redirectUrl}`);
    } else {
      router.replace('/');
    }
  };
}

export default compose(withState('loading', 'setLoading', false))(Form.create()(LoginPage));
