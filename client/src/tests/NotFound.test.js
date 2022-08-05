import { render } from '@testing-library/react';
import NotFound from '../components/NotFound';

test('renders the landing page', async () => {
    render(<NotFound />);
    
    expect(screen.getByRole("heading")).toHaveTextContent(/404 Page Not Found/);
 });