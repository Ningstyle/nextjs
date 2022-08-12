import { Form, Button, Cascader, Col, Row, TreeSelect, Select, DatePicker, InputNumber } from 'antd';
import { useState } from 'react';
import styles from './index.module.less';
import SelectTag from '../../components/ui/SelectTag';

const { Option } = Select;

const { RangePicker } = DatePicker;
export default function EnterPriseSearchForm(props) {
  const [form] = Form.useForm();
  const { finish, regionOptions, industryOptions, comStatusOptions, tagList } = props;
  // 表单默认数据
  const [formData, setFormData] = useState(
    {
      region: [],
      industry: [],
      status: [],
      capital: '',
      tag: tagList.filter(item => item.select),
      time: [],
      onlyme: false,
    },
  );
  // 是否有注册资本数值
  const [isMoney, setIsMoney] = useState(true);
  const [startMoney, setStartMoney] = useState();
  const [endMoney, setEndMoney] = useState();
  // 表单完成数据
  const onFinish = (values) => {
    finish(values);
  };
  // 标签选择数据
  const changeTag = (values) => {
    // 循环values，把select为true的数据放入arr中
    const arr = [];
    values.forEach((item) => {
      if (item.select) {
        arr.push(item);
      }
    });
    form.setFieldsValue({
      tag: arr,
    });
  };
  // 金额选择---初始
  const changeStart = (value) => {
    if (value > 0) {
      setIsMoney(false);
    }
    form.setFieldsValue({
      capital: `${value}-${endMoney}`,
    });
    setStartMoney(value);
  };
  // 金额选择---结束
  const changeEnd = (value) => {
    if (value > 0) {
      setIsMoney(false);
      form.setFieldsValue({
        capital: `${startMoney}-${value}`,
      });
      setEndMoney(value);
    }
  };
  // 不限事件
  const unlimited = () => {
    setIsMoney(true);
    form.setFieldsValue({
      capital: '',
    });
    setEndMoney(0);
    setStartMoney(0);
  };
  // 区域选择事件
  const ragionChange = (values) => {
    form.setFieldsValue({
      region: values,
      onlyme: false,
    });
  };
  // 只看自己
  const onlyMyData = () => {
    form.setFieldsValue({
      region: [],
      onlyme: true,
    });
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
        <div className={styles.customFormItem}>
          <Form.Item
            label="特色标签："
            name="tag"
          >
            <SelectTag tagList={tagList} changeTag={changeTag} />
          </Form.Item>
        </div>
        <Row>
          <Col span={9}>
            <Form.Item
              label="区域："
              name="region"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 19 }}
            >
              <Cascader options={regionOptions} placeholder="请选择区域" onChange={ragionChange} />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item
              name="onlyme"
            >
              <span className={styles.onlyMy} onClick={onlyMyData}>只看自己</span>
            </Form.Item>

          </Col>
          <Col span={12}>
            <Form.Item
              label="产业："
              name="industry"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 18 }}
            >
              <TreeSelect
                style={{ width: '100%' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={industryOptions}
                multiple
                placeholder="请选择产业"
                treeDefaultExpandAll
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="企业状态："
              name="status"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
            >
              <Select mode="multiple" placeholder="请选择产业">
                {
                  comStatusOptions.map((item) => <Option key={item.value} value={item.value}>{item.label}</Option>)
                }
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="成立日期："
              name="time"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
            >
              <RangePicker placement="topLeft" />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="注册资本："
              name="capital"
            >
              <div className={styles.capitalBox}>
                <span className={isMoney ? styles.spanStyleActive : styles.spanStyle} onClick={unlimited}>不限</span>
                <div>
                  <InputNumber min={0} onChange={changeStart} value={startMoney} />
                  <span className={styles.spanLine}>至</span>
                  <InputNumber min={0} onChange={changeEnd} value={endMoney} />
                  <span className={styles.spanLine}>万人民币</span>
                </div>
              </div>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
          <Button type="primary" htmlType="submit">
            查 询
          </Button>
          <Button htmlType="submit" style={{ marginLeft: '10px' }} onClick={() => form.resetFields()}>
            重置
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
}
