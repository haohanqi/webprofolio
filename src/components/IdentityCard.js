import React from 'react';
import {Card, Icon, Avatar} from 'antd'
const IdentityCard = ({imgSrc,avatarSrc,title,description})=> {
    const {Meta} = Card
        return (
            <Card
            style={{margin:'5% auto 15% auto'}}
            hoverable='true'
            cover={
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
                <Icon type="facebook" style={{fontSize:'20px'}} />,             
                <Icon type="github" style={{fontSize:'20px'}}/>,
              <Icon type="twitter"  style={{fontSize:'20px'}}/>,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={title}
              description={description}
            />
          </Card>
        );
    }


export default IdentityCard;