import React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {SlideTitle} from "./common/SlideTitle";
import {BulletList} from "./common/BulletList";
import {BulletListItem} from "./common/BulletListItem";
import {slideWithTitleStyle} from "./common/slide-style";
// @ts-ignore
import functionsImage from '../../../../assets/azure-functions.png';

interface Props extends WithStyles<typeof styles> {

}

function WhatIsAzureFunctionsSlideComponent({classes}: Props) {
    return (
      <div className={classes.root}>
          <SlideTitle title={'What is Azure Functions?'} />
          <div className={classes.content}>
              <div>
                  <BulletList>
                      <BulletListItem text={'Serverless (Buzzword)'} />
                      <BulletListItem text={'Many Triggers available'}>
                          <BulletList>
                              <BulletListItem text={'Service Bus'} />
                              <BulletListItem text={'HTTP / Webhook'} />
                              <BulletListItem text={'Event Hub'} />
                              <BulletListItem text={'SignalR'} />
                              <BulletListItem text={'19 total triggers'} />
                          </BulletList>
                      </BulletListItem>
                  </BulletList>
              </div>
              <div className={classes.images}>
                <img src={functionsImage} className={classes.image}/>
              </div>
          </div>
      </div>
    );
}

const styles = createStyles({
    ...slideWithTitleStyle,
    images: {
        justifyItems: 'center',
        alignItems: 'center',
    },
    image: {
        maxHeight: '50%',
        maxWidth: '50%',
    }
});

export const WhatIsAzureFunctionsSlide = withStyles(styles)(WhatIsAzureFunctionsSlideComponent);
