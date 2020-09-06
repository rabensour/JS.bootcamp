import React, { useState } from 'react';
import { Alert } from 'reactstrap';

const Alert2 = (props) => {
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  return (
    <Alert color="danger" isOpen={visible} toggle={onDismiss}>
      This is a danger alert — check it out!
    </Alert>
  );
}


export default Alert2;
