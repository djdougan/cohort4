import React from 'react';
import App from '../App';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';



test('renders learn react link', async () => {
      
  
  const { getByText } = render(<App />);

      const linkElement = getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();

  
        await act(async ()=>{
            
             await fireEvent.click(screen.getByText('Home'));

        });

        await act(async ()=>{
            screen.getByText(/learn React/i);

        });
        await act(async ()=>{
             await fireEvent.click(screen.getByText('Tic Tac Toe'));

        });
        await act(async ()=>{
            screen.getByText(/Game/i);

        });

        await act(async ()=>{
             await fireEvent.click(screen.getByText('Accounts'));

        });
        await act(async ()=>{
            screen.getByText(/Create Account/i);

        });
});
