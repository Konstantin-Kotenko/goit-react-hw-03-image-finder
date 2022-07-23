import { Component } from 'react';
import { Overlay, ModalWrapper } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Overlay>
        <ModalWrapper>{this.props.children}</ModalWrapper>
      </Overlay>
    );
  }
}
