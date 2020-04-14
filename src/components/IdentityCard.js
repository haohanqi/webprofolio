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
                src={imgSrc}
                alt='cover'
              />
            }
            actions={[
                <Icon type="facebook" style={{fontSize:'20px'}} />,             
                <Icon type="github" style={{fontSize:'20px'}}/>,
                <Icon type="twitter"  style={{fontSize:'20px'}}/>,
            ]}
          >
            <Meta
              avatar={<Avatar src={avatarSrc} />}
              title={title}
              description={description}
            />
          </Card>
        );
    }


export default IdentityCard;