/* eslint-disable no-param-reassign */
import { Form, Button, Col, Row, DatePicker, Checkbox, Input } from 'antd';
import { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styles from './index.module.less';

const { RangePicker } = DatePicker;
export default function PolicyForm(props) {
  const [form] = Form.useForm();
  const { finish, options } = props;
  const [isOpen, setIsOpen] = useState(false);
  // 表单默认数据
  const [formData, setFormData] = useState(
    {
      title: '', // 政策辩题
      level: [], // 政策级别
      level1: true,
      type: [], // 政策类型
      type1: true,
      agrobj: [], // 支持对象
      agrobj1: true,
      mode: [], // 支持方式
      mode1: true,
      industryType: [], // 产业类型
      industryType1: true,
      branch: [], // 发文部门
      branch1: true,
      declareTime: [], // 申报日期
      publishTime: [], // 发布日期
    },
  );

  // 表单完成数据
  const onFinish = (values) => {
    finish(values);
  };
  return (
    <div>
      <Form
        name="basic"
        initialValues={formData}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <div className={isOpen ? styles.openBox1 : styles.openBox}>
          <Row>
            <Col span={19}>
              <Form.Item
                label="政策标题："
                name="title"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 10 }}
              >
                <Input placeholder="请输入政策标题关键字" />
              </Form.Item>

            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="政策级别："
                name="level1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    level: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      level: [],
                    });
                    form.setFieldsValue({
                      level: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="level"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.levelData}
                  onChange={(checkedValue) => {
                    setFormData({
                      level: checkedValue,
                    });
                    form.setFieldsValue({
                      level: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        level1: false,
                      });
                      form.setFieldsValue({
                        level1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="政策类型："
                name="type1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                className="custonFormItem"
                style={{ marginBottom: '24px' }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    type: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      type: [],
                    });
                    form.setFieldsValue({
                      type: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="type"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.typeData}
                  onChange={(checkedValue) => {
                    setFormData({
                      type: checkedValue,
                    });
                    form.setFieldsValue({
                      type: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        type1: false,
                      });
                      form.setFieldsValue({
                        type1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="支持对象："
                name="agrobj1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                className="custonFormItem"
                style={{ marginBottom: '24px' }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    agrobj: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      agrobj: [],
                    });
                    form.setFieldsValue({
                      agrobj: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="agrobj"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.objData}
                  onChange={(checkedValue) => {
                    setFormData({
                      agrobj: checkedValue,
                    });
                    form.setFieldsValue({
                      agrobj: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        agrobj1: false,
                      });
                      form.setFieldsValue({
                        agrobj1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="支持方式："
                name="mode1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                className="custonFormItem"
                style={{ marginBottom: '24px' }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    mode: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      mode: [],
                    });
                    form.setFieldsValue({
                      mode: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="mode"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.modeData}
                  onChange={(checkedValue) => {
                    setFormData({
                      mode: checkedValue,
                    });
                    form.setFieldsValue({
                      mode: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        mode1: false,
                      });
                      form.setFieldsValue({
                        mode1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="产业类型："
                name="industryType1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                className="custonFormItem"
                style={{ marginBottom: '24px' }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    industryType: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      industryType: [],
                    });
                    form.setFieldsValue({
                      industryType: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="industryType"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.industryTypeData}
                  onChange={(checkedValue) => {
                    setFormData({
                      industryType: checkedValue,
                    });
                    form.setFieldsValue({
                      industryType: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        industryType1: false,
                      });
                      form.setFieldsValue({
                        industryType1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={19}>
              <Form.Item
                label="申报日期："
                name="declareTime"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                <RangePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={19}>
              <Form.Item
                label="发布日期："
                name="publishTime"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                <RangePicker />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={4}>
              <Form.Item
                label="发文部门："
                name="branch1"
                valuePropName="checked"
                labelCol={{ span: 14 }}
                wrapperCol={{ span: 10 }}
                className="custonFormItem"
                style={{ marginBottom: '24px' }}
              >
                <Checkbox onChange={(checkedValue) => {
                  setFormData({
                    branch: checkedValue,
                  });
                  if (!formData.level1) {
                    setFormData({
                      branch: [],
                    });
                    form.setFieldsValue({
                      branch: [],
                    });
                  }
                }}
                >
                  不限

                </Checkbox>

              </Form.Item>
            </Col>
            <Col span={20}>
              <Form.Item
                name="branch"
                wrapperCol={{ span: 24 }}
              >
                <Checkbox.Group
                  options={options.branchData}
                  onChange={(checkedValue) => {
                    setFormData({
                      branch: checkedValue,
                    });
                    form.setFieldsValue({
                      branch: checkedValue,
                    });
                    if (checkedValue.length > 0) {
                      setFormData({
                        branch1: false,
                      });
                      form.setFieldsValue({
                        branch1: false,
                      });
                    }
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
        </div>
        <div className={styles.isopenArea} onClick={() => setIsOpen(!isOpen)}>
          <div>
            {isOpen ? <UpOutlined /> : <DownOutlined />}

            <span>{isOpen ? '收起' : '展开全部'}</span>
          </div>
        </div>
        <Form.Item wrapperCol={{ offset: 10, span: 14 }} style={{ marginTop: '20px' }}>
          <Button type="primary" htmlType="submit" className={styles.customButtonClass}>
            查询
          </Button>
          <Button
            htmlType="submit"
            style={{ marginLeft: '10px' }}
            onClick={() => {
              form.resetFields(); form.setFieldsValue({
                level1: true,
                type1: true,
                agrobj1: true,
                mode1: true,
                industryType1: true,
                branch1: true,
              });
            }}
          >
            重置
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
}
