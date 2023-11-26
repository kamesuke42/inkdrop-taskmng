'use babel';

import TaskmngMessageDialog from './taskmng-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(TaskmngMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'TaskmngMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'TaskmngMessageDialog'
    )
    inkdrop.components.deleteClass(TaskmngMessageDialog);
  }

};
