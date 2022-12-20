import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);
library.add(faClose);

export default {
  install: (app: any, options: any) => {
    app.component('FontAwesomeIcon', FontAwesomeIcon);

    app.provide('fa', options);
  },
};
