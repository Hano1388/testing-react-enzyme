import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

describe('<App />', () => {

  let wrapped;
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/todos', {
      status: 200,
      response: [{ title: 'Fetched Todo #1' }, { title: 'Fetched Todo #2'}]
    });
     wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  });

  afterEach(() => {
    moxios.uninstall();
  })

  it('fetches a list of todos and generate (li)s for them', (done) => {

    wrapped.find('.fetch-todos').simulate('click');
    setTimeout(() => {
      wrapped.update();
      expect(wrapped.find('li').length).toEqual(2);

      done();
      wrapped.unmount();
    }, 100);
  })
});
