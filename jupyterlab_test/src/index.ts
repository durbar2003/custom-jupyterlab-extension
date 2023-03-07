import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_test extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_test:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_test is activated!');
  }
};

export default plugin;
