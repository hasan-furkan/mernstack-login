import {Card, Col, Row} from "antd";
import Title from "antd/es/typography/Title";


export const VerificationEmail = () => {
    return (
        <>
            <Card bordered={false} className="criclebox ">
                <div className="number">
                    <Row align="middle" gutter={[24, 0]}>
                        <Col xs={18}>
                            <span>{"Email Onaylama"}</span>
                            <Title level={3}>
                                {"Mail Onaylandi Lutfen Giris Sayfasina Gidin"}
                            </Title>
                        </Col>
                        <Col xs={6}>
                            <div className="icon-box">{"onay"}</div>
                        </Col>
                    </Row>
                </div>
            </Card>
        </>
    )
}
