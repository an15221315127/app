import React from 'react';

import Photo from '@/Screen/Photo';
import Play from '@/Screen/Play';
export default class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      page: 'Play',
    };
    // console.log(this.props, '当前main');
  }
  componentDidUpdate(): void {
    console.log(this.props.route.params);
    this.setState({z})
  }

  render(): any {
    const {page} = this.state;
    switch (page) {
      case 'Play':
        return <Play {...this.props} />;
      case 'Photo':
        return <Photo {...this.props} />;
      default:
        return <Photo {...this.props} />;
    }
  }
}
