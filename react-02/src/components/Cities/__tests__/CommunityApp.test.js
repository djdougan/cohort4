import React from 'react'
import ReactDOM, {render, unmountComponentAtNode } from "react-dom";
import {act} from 'react-dom/test-utils';

import CommunityApp from '../CommunityApp';
import CityCard from '../CityCard';


describe('CommunityApp', () => {
    let container = null;
    beforeAll(()=>{
        // setup DOM element as render target
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterAll(()=>{
        unmountComponentAtNode(container);
        container.remove();
        // container = null;
    });

    it('render properly', ()=>{
        act(()=>{
            render(
                <CommunityApp
                />, container
            )
        });
        expect(container.textContent).toBe("Communities Application");
    });
    
    it('renders city data', async ()=>{
        const fakeCity = {
            key : 1,
            name : "A",
            latitude : 1,
            longitude : 1,
            population : 10
        };
        jest.spyOn(global, 'fetch').mockImplementation(()=>{
            Promise.resolve({
                json: ()=> Promise.resolve(fakeCity)
            })
        });

        await act(async()=>{
            render(
                <CityCard City={fakeCity}/>, container 
            )
        });
        expect(container.querySelector('.city-card').data-key).toBe(fakeCity.key.toString());
        expect(container.querySelector('.city-name').textContent).toBe(fakeCity.name);
        expect(container.querySelector('.city-latitude').textContent).toBe(fakeCity.latitude.toString());
        expect(container.querySelector('.city-longitude').textContent).toBe(fakeCity.longitude.toString());
        expect(container.querySelector('.city-population').textContent).toBe(fakeCity.population.toString());
        globalThis.fetch.mockRestore();
    });

    


});