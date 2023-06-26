import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { describe, test } from "vitest";
import GalleryCard from '../../components/GalleryCard.vue'
import { setActivePinia, createPinia } from "pinia"

describe('Router', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });
    test('renders router link', () => {
        const id = 123
        const wrapper = shallowMount(GalleryCard, {
            propsData: {
                id
            },
            global: {
                components: {
                    'RouterLink': RouterLinkStub
                }
            }
        })
        console.log(wrapper.html())
        wrapper.findComponent(RouterLinkStub)
        console.log(wrapper.findComponent(RouterLinkStub))
        // expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({ name: 'carDetail', params: { id: id } })
    })
})