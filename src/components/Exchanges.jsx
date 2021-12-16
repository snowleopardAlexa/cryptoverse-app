import React from 'react';

function Exchanges() {
    return (
        <>
          <Row>
              <Col span={6}>Exchanges</Col>
              <Col span={6}>24th Trade Volume</Col>
              <Col span={6}>Markets</Col>
              <Col span={6}>Change</Col>
          </Row>
          <Row>
              <Col span={24}>
                  <Collapse>
                    <Panel
                      key={exchange.id}
                      showArrow={false}
                      header={(
                          <Row key={exchange.id}>
                              <Col span={6}>
                                  <Text><strong></strong></Text>
                                  <Avatar className="exchange-image" />
                                  <Text><strong></strong></Text>
                              </Col>
                              <Col span={6}></Col>
                              <Col span={6}></Col>
                              <Col span={6}></Col>
                            </Row>  
                          )}
                       >
                       </Panel>    
                  </Collapse>
              </Col>
          </Row>
        </>
    );
}

export default Exchanges;
