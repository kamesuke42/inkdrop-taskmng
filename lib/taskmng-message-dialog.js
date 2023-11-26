'use babel';

import React, { useEffect, useCallback } from 'react';
import { logger, useModal } from 'inkdrop';

const TaskmngMessageDialog = (props) => {
  const modal = useModal();
  const { Dialog } = inkdrop.components.classes;

  const toggle = useCallback(() => {
    modal.show();
    logger.debug('Taskmng was toggled!');
  }, []);

  useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      'taskmng:toggle': toggle,
    });
    return () => sub.dispose();
  }, [toggle]);

  return (
    <Dialog {...modal.state} onBackdropClick={modal.close}>
      <Dialog.Title>Taskmng</Dialog.Title>
      <Dialog.Content>Taskmng was toggled!</Dialog.Content>
      <Dialog.Actions>
        <button className="ui button" onClick={modal.close}>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default TaskmngMessageDialog;
