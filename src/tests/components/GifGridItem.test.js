import React from 'react';
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en el Gif Grid Item', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar el componente', () => {

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe de tener un parrafo con el title', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    })

    test('Debe de tener una imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img');
        //console.log(img.prop('src'));
        //console.log(img.props().src);
        //console.log(img.html());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('Debe de tener animate__fadeIn', () => {

        const div = wrapper.find('div');
        //console.log(div.prop('className'));
        const className = div.prop('className');

        //expect(div.hasClass('animate__fadeIn')).toBe(true)
        expect(className.includes('animate__fadeIn')).toBe(true)
    })

})


