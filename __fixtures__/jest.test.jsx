import { render } from '#client/testing';

import LoadingButton from '..';

jest.mock('@mui/material/CircularProgress', () => () => <span data-testid="circular-progress" />);

const buttonText = 'Purchase - $100';

describe('Loading Button Component', () => {
  it('should show CircularProgress when loading', () => {
    const { getByTestId, getByRole } = render(<LoadingButton displayText={buttonText} loading />);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByTestId('circular-progress')).toBeInTheDocument();
  });

  it('should show correct button text when loading is set to false', () => {
    const { getByText, getByRole } = render(<LoadingButton displayText={buttonText} loading={false} />);
    expect(getByRole('button')).toBeInTheDocument();
    expect(getByText(buttonText)).toBeInTheDocument();
  });
});
