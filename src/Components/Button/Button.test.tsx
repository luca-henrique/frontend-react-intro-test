import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './index';

describe('Button component', () => {
  test('should be able to render a button', () => {
    render(<Button>Hello World</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should be able to render span after click button', async () => {
    render(<Button>Hello World</Button>);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(screen.getByText('Eu cliquei')).toBeInTheDocument();
  });
});
