import { Tabs } from 'antd';
import './First.css';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, Space } from 'antd';
const First = () => {
    const menu = (
        <Menu
            items={[
                {
                    label:'ADA',
                    key: '0',
                },
                {
                    label:'ALGO',
                    key: '1',
                },
                {
                    label: 'UNI',
                    key: '3',
                },
                {
                    label: 'ENJ',
                    key: '4',
                },
                {
                    label: 'ETH',
                    key: '5',
                },
            ]}
        />
    );
    return (
        <>
            <div class='flex justify-center text-grey text-3xl mb-3 mt-12'>Crypto Exchange</div>
            <div class='flex justify-center text-grey'>Free from sign-up, limits, complications</div>
            <div class='mx-[550px] border border-grey border-opacity-20 rounded px-5 py-3 mt-7 text-grey'>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Swap" key="1">
                        <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-16 mt-6' />
                        <span class='inline-flex ml-4 text-grey'>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Button>
                                    <Space>
                                        BTC
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </span>
                        <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-28 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                           0.00184853</div>

                        <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-16 my-6 ' />
                        <span class='inline-flex ml-4'>
                            <Dropdown overlay={menu} trigger={['click']}>
                                <Button>
                                    <Space>
                                        ETH
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </span>
                        <a href='/ExchangeSwap'><div class='bg-blue hover:bg-hblue  flex justify-center text-white rounded-sm py-2 mb-6'>Exchange</div></a>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Buy/ Sell Crypto" key="2">
                        <input placeholder='You send' class='py-1 border border-opacity-20 border-grey px-3 pr-16 mt-6' />
                        <span class='inline-flex ml-3 text-grey'>
                            <Dropdown overlay={menu}>
                                <Button>
                                    <Space>
                                        USD
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </span>
                        <div class='text-blue text-[10px] bg-blue bg-opacity-20 ml-7 mt-0.5 mr-24 rounded-sm py-[1px] px-2 whitespace-pre'>Min amount:                                           50</div>
                        <input placeholder='You get' class='py-1 border border-opacity-20 border-grey px-3 pr-16 my-6 ' />
                        <span class='inline-flex ml-3'>
                            <Dropdown overlay={menu}>
                                <Button>
                                    <Space>
                                        BTC
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </span>
                        <a href='/Exchange'><div class='bg-blue hover:bg-hblue flex justify-center text-white rounded-sm py-2 mb-6'>Exchange</div></a>
                    </Tabs.TabPane>
                </Tabs>



            </div>

        </>
    );
}

export default First;
