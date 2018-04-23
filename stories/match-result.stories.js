import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createReduxStore from '../frontend/src/app/createStore';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
import MatchResultDialog from '../frontend/src/components/matchResultDialog/MatchResultDialog'
import { openMatchResultDialog } from '../frontend/src/components/matchResultDialog/matchResultDialogActions'
import Carousel from '../frontend/src/components/matchResultDialog/carousel';

const store = createReduxStore();
store.dispatch(openMatchResultDialog())
store.dispatch({
  type: 'LOGIN_SUCCESSFUL',
  user: {
    isAuthenticated: true
  }
})


const teams = [
  {
    name: 'Team A'
  },
  {
    name: 'Team  very veery long name'
  },
  {
    name: 'Team B'
  },
  {
    name: 'Team long name'
  }
]

store.dispatch({
  type: 'TEAMS_LOADED',
  teams
})

storiesOf('Match Result Modal', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('with teams', () => (
    <div>
      <Button onClick={action('clicked')}>
        Open dialog
      </Button>
      <MatchResultDialog sportEventId='any' teams={teams} />
    </div>
  ));

  storiesOf('Carousel', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('carousel', () => (
    <div>
      <Carousel />
    </div>
  ));